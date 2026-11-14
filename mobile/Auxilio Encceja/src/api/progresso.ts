import { API_BASE } from "@/api/apiconfig";
import { getCurrentUser } from "@/api/apiauth";

export type ProgressEvent = {
  evento: "VISITA" | "CONCLUSAO" | string;
  pagina?: string;
  titulo?: string;
  materia?: string;
  tipo?: "VIDEO" | "PDF" | "EXERCICIO" | "QUIZ" | string;
  percentual?: number;
  nota?: number | null;
  tempoSegundos?: number;
};

export type ProgressSummary = {
  progressoGeral: number;
  mediaGeral: number;
  totalAtividades: number;
  totalConcluidas: number;
  totalPendentes: number;
  diasAtivos: number;
};

export type AcompanhamentoResponse = {
  usuario: any;
  resumo: ProgressSummary;
  materias: Array<{
    id_materia: number;
    nome_materia: string;
    descricao?: string;
    icone?: string;
    percentual: number;
    media: number;
    atividades_concluidas: number;
    atividades_pendentes: number;
  }>;
  atividades: Array<{
    id_atividade: number;
    id_materia: number;
    titulo: string;
    descricao?: string;
    tipo: string;
    xp_recompensa: number;
    status: "PENDENTE" | "CONCLUIDA";
    nota?: number | null;
    concluido_em?: string | null;
  }>;
};

async function request(path: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Erro ao comunicar com a API de progresso.");
  }

  return data;
}

export async function trackProgress(event: ProgressEvent) {
  const user = await getCurrentUser();
  const userId = user?.id_usuario || user?.id;

  if (!userId) {
    console.warn("Progresso não registrado: nenhum usuário autenticado.");
    return null;
  }

  try {
    const result = await request(`/progresso/${userId}/evento`, {
      method: "POST",
      body: JSON.stringify(event),
    });
    return result?.data || result;
  } catch (error) {
    console.warn(
      "Não foi possível registrar o progresso:",
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

export async function getProgress() {
  const user = await getCurrentUser();
  const userId = user?.id_usuario || user?.id;

  if (!userId) return null;

  const result = await request(`/progresso/${userId}`);
  return result?.data || result;
}

export async function getAcompanhamento(): Promise<AcompanhamentoResponse | null> {
  const user = await getCurrentUser();
  const userId = user?.id_usuario || user?.id;

  if (!userId) return null;

  const result = await request(`/acompanhamento/${userId}`);
  return result?.data || result;
}

export async function updateActivity(
  activityId: number,
  payload: { status: "PENDENTE" | "CONCLUIDA"; nota?: number | null },
) {
  const user = await getCurrentUser();
  const userId = user?.id_usuario || user?.id;

  if (!userId) return null;

  const result = await request(
    `/acompanhamento/${userId}/atividades/${activityId}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  );

  return result?.data || result;
}
