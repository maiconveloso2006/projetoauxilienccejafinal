import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Álgebra Básica",
    "description": "Conceitos fundamentais de álgebra para o ENCCEJA, incluindo equações, inequações e sistemas.",
    "topics": [
      "Operações algébricas",
      "Equações e inequações",
      "Sistemas de equações",
      "Polinômios"
    ]
  },
  {
    "title": "Geometria",
    "description": "Principais conceitos de geometria para o ENCCEJA, com foco em figuras planas e espaciais.",
    "topics": [
      "Figuras planas",
      "Geometria espacial",
      "Trigonometria",
      "Geometria analítica"
    ]
  },
  {
    "title": "Funções e Derivadas",
    "description": "Estudo de funções e conceitos básicos de derivadas para o ENCCEJA.",
    "topics": [
      "Tipos de funções",
      "Gráficos de funções",
      "Limites",
      "Derivadas e suas aplicações"
    ]
  },
  {
    "title": "Probabilidades",
    "description": "Conceitos de probabilidade e estatística para o ENCCEJA, com exemplos práticos.",
    "topics": [
      "Espaço amostral",
      "Probabilidade condicional",
      "Variáveis aleatórias",
      "Distribuições de probabilidade"
    ]
  },
  {
    "title": "Estatística",
    "description": "Fundamentos de estatística para o ENCCEJA, incluindo análise de dados e medidas estatísticas.",
    "topics": [
      "Representação de dados",
      "Medidas de tendência central",
      "Medidas de dispersão",
      "Análise de dados"
    ]
  },
  {
    "title": "Cálculo Integral",
    "description": "Introdução ao cálculo integral para o ENCCEJA, com foco em integrais definidas e indefinidas.",
    "topics": [
      "Integrais indefinidas",
      "Integrais definidas",
      "Aplicações do cálculo integral",
      "Métodos de integração"
    ]
  }
];

export default function MatematicaApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de Matemática" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
