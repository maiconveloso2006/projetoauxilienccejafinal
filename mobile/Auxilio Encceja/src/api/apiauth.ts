import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE } from "@/api/apiconfig";

export const USER_STORAGE_KEY = "@auxilio_encceja_user";

export interface MobileUser {
  id: number;
  id_usuario?: number;
  nome: string;
  email?: string | null;
  nivel?: string | null;
  pontos_xp?: number;
  dias_ativos?: number;
  progresso_geral?: number;
  matricula?: string | null;
  foto_perfil?: string | null;
}

export interface LoginResponse {
  message: string;
  token: string | null;
  user: MobileUser | null;
}

export async function saveCurrentUser(user: MobileUser) {
  await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export async function getCurrentUser(): Promise<MobileUser | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MobileUser) : null;
  } catch {
    return null;
  }
}

export async function clearCurrentUser() {
  await AsyncStorage.removeItem(USER_STORAGE_KEY);
}

async function readJson(response: Response) {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.message || "Erro ao comunicar com a API.");
  }
  return data;
}

export async function authLogin(
  login: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE}/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: login.trim(), senha: password }),
    });

    const data = await readJson(response);
    const found = data?.data;

    if (!found?.id_usuario) {
      return { message: data?.message || "E-mail ou senha inválidos.", token: null, user: null };
    }

    const user: MobileUser = {
      id: Number(found.id_usuario),
      id_usuario: Number(found.id_usuario),
      nome: found.nome,
      email: found.email,
      nivel: found.nivel,
      pontos_xp: Number(found.pontos_xp || 0),
      dias_ativos: Number(found.dias_ativos || 0),
      progresso_geral: Number(found.progresso_geral || 0),
      matricula: found.matricula,
      foto_perfil: found.foto_perfil,
    };

    await saveCurrentUser(user);

    return { message: data.message || "Success", token: null, user };
  } catch (error) {
    console.error("Erro ao acessar API:", error);
    return {
      message: error instanceof Error ? error.message : "Falha ao logar.",
      token: null,
      user: null,
    };
  }
}

export async function authRegister({
  login,
  password,
  name,
}: {
  login: string;
  password: string;
  name: string;
}): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: name.trim(),
        email: login.trim().toLowerCase(),
        senha: password,
      }),
    });

    await readJson(response);
    const loginResponse = await authLogin(login, password);
    return Boolean(loginResponse.user);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return false;
  }
}
