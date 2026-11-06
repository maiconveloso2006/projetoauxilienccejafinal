import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Álgebra",
    "description": "Fundamentos de álgebra para o ensino médio, incluindo equações, inequações e funções.",
    "topics": [
      "Equações lineares e quadráticas",
      "Sistemas de equações",
      "Funções e gráficos",
      "Progressões aritméticas e geométricas"
    ]
  },
  {
    "title": "Geometria",
    "description": "Princípios da geometria plana e espacial, com foco em teoremas e demonstrações.",
    "topics": [
      "Triângulos e seus teoremas",
      "Geometria analítica",
      "Círculos e suas propriedades",
      "Geometria espacial: volumes e áreas"
    ]
  },
  {
    "title": "Trigonometria",
    "description": "Fundamentos da trigonometria e suas aplicações em problemas geométricos e físicos.",
    "topics": [
      "Funções trigonométricas",
      "Identidades trigonométricas",
      "Triângulos e trigonometria",
      "Aplicações da trigonometria"
    ]
  },
  {
    "title": "Gramática Básica",
    "description": "Conceitos fundamentais de gramática para o ensino médio, incluindo fonética, morfologia e sintaxe.",
    "topics": [
      "Fonética e fonologia",
      "Classes de palavras",
      "Concordância verbal e nominal",
      "Regência verbal e nominal"
    ]
  },
  {
    "title": "Literatura Brasileira",
    "description": "Principais movimentos literários e autores brasileiros para o ensino médio.",
    "topics": [
      "Período colonial",
      "Romantismo",
      "Realismo e Naturalismo",
      "Modernismo"
    ]
  },
  {
    "title": "Redação e Texto Argumentativo",
    "description": "Técnicas e estratégias para elaborar textos argumentativos para o ensino médio.",
    "topics": [
      "Tipos de texto",
      "Estrutura do texto argumentativo",
      "Argumentação e persuasão",
      "Revisão e correção"
    ]
  },
  {
    "title": "Mecânica",
    "description": "Fundamentos da mecânica clássica, incluindo movimento, forças e energia.",
    "topics": [
      "Movimento e vetores",
      "Leis de Newton",
      "Trabalho e energia",
      "Dinâmica e conservação de energia"
    ]
  },
  {
    "title": "Eletricidade",
    "description": "Princípios da eletricidade estática e dinâmica, com foco em circuitos elétricos.",
    "topics": [
      "Eletricidade estática",
      "Campo elétrico",
      "Eletricidade dinâmica",
      "Circuitos elétricos e Ohm"
    ]
  },
  {
    "title": "Óptica",
    "description": "Estudo da luz, suas propriedades e aplicações em sistemas ópticos.",
    "topics": [
      "Propriedades da luz",
      "Reflexão e refração",
      "Lentes e espelhos",
      "Instrumentos ópticos"
    ]
  },
  {
    "title": "Química Orgânica",
    "description": "Fundamentos da química orgânica, com foco em compostos orgânicos e reações.",
    "topics": [
      "Estrutura da matéria orgânica",
      "Hidrocarbonetos",
      "Funções orgânicas",
      "Reações orgânicas"
    ]
  },
  {
    "title": "Química Inorgânica",
    "description": "Estudo dos elementos químicos, suas propriedades e compostos inorgânicos.",
    "topics": [
      "Tabela periódica",
      "Reações químicas",
      "Ácidos e bases",
      "Sais e oxidação-redução"
    ]
  },
  {
    "title": "Química Analítica",
    "description": "Métodos e técnicas para análise química de substâncias e compostos.",
    "topics": [
      "Métodos de análise química",
      "Técnicas de titulação",
      "Análise espectrométrica",
      "Análise de água e solo"
    ]
  },
  {
    "title": "História Antiga",
    "description": "Civilizações antigas e seus legados para a humanidade.",
    "topics": [
      "Civilizações mesopotâmicas",
      "Egito antigo",
      "Grécia antiga",
      "Império Romano"
    ]
  },
  {
    "title": "História Medieval",
    "description": "Período medieval e suas transformações sociais, políticas e culturais.",
    "topics": [
      "Feudalismo",
      "Impérios islâmicos",
      "Cruzadas",
      "Renascimento"
    ]
  },
  {
    "title": "História Moderna e Contemporânea",
    "description": "Transformações do mundo moderno e contemporâneo, com foco em movimentos sociais e políticos.",
    "topics": [
      "Revoluções burguesas",
      "Imperialismo e colonialismo",
      "Guerras mundiais",
      "Guerra Fria e globalização"
    ]
  }
];

export default function MedioApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Nossas Apostilas" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
