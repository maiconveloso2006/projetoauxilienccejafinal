import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Questão 1",
    "prompt": "Uma loja oferece um desconto de 15% sobre o preço de um produto que custa R$ 120,00. Qual será o valor do desconto?",
    "options": [
      {
        "label": "A) R$ 12,00",
        "value": "A"
      },
      {
        "label": "B) R$ 18,00",
        "value": "B"
      },
      {
        "label": "C) R$ 20,00",
        "value": "C"
      },
      {
        "label": "D) R$ 22,50",
        "value": "D"
      }
    ],
    "correct": "D",
    "explanation": ""
  },
  {
    "title": "Questão 2",
    "prompt": "Qual é o valor de x na equação: 3x + 7 = 22?",
    "options": [
      {
        "label": "A) 5",
        "value": "A"
      },
      {
        "label": "B) 3",
        "value": "B"
      },
      {
        "label": "C) 7",
        "value": "C"
      },
      {
        "label": "D) 9",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 3",
    "prompt": "Um retângulo tem lados de 8 cm e 12 cm. Qual é a área desse retângulo?",
    "options": [
      {
        "label": "A) 20 cm²",
        "value": "A"
      },
      {
        "label": "B) 32 cm²",
        "value": "B"
      },
      {
        "label": "C) 96 cm²",
        "value": "C"
      },
      {
        "label": "D) 100 cm²",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 4",
    "prompt": "Qual é o valor de √(16 + 9)?",
    "options": [
      {
        "label": "A) 5",
        "value": "A"
      },
      {
        "label": "B) 7",
        "value": "B"
      },
      {
        "label": "C) 25",
        "value": "C"
      },
      {
        "label": "D) 5,5",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 5",
    "prompt": "Em uma urna há 5 bolas vermelhas, 3 bolas azuis e 2 bolas amarelas. Qual é a probabilidade de sacar uma bola azul?",
    "options": [
      {
        "label": "A) 3/10",
        "value": "A"
      },
      {
        "label": "B) 1/3",
        "value": "B"
      },
      {
        "label": "C) 2/5",
        "value": "C"
      },
      {
        "label": "D) 3/5",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 6",
    "prompt": "Qual é o valor de 23 × 5 + 12 ÷ 3?",
    "options": [
      {
        "label": "A) 120",
        "value": "A"
      },
      {
        "label": "B) 115",
        "value": "B"
      },
      {
        "label": "C) 125",
        "value": "C"
      },
      {
        "label": "D) 130",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 7",
    "prompt": "Um carro percorre 300 km em 4 horas. Qual é a velocidade média do carro?",
    "options": [
      {
        "label": "A) 75 km/h",
        "value": "A"
      },
      {
        "label": "B) 80 km/h",
        "value": "B"
      },
      {
        "label": "C) 85 km/h",
        "value": "C"
      },
      {
        "label": "D) 90 km/h",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 8",
    "prompt": "Qual é o valor de x no sistema de equações: 2x + y = 8 e x - y = 1?",
    "options": [
      {
        "label": "A) 1",
        "value": "A"
      },
      {
        "label": "B) 2",
        "value": "B"
      },
      {
        "label": "C) 3",
        "value": "C"
      },
      {
        "label": "D) 4",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 9",
    "prompt": "Qual é a soma dos ângulos internos de um triângulo?",
    "options": [
      {
        "label": "A) 90°",
        "value": "A"
      },
      {
        "label": "B) 180°",
        "value": "B"
      },
      {
        "label": "C) 270°",
        "value": "C"
      },
      {
        "label": "D) 360°",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 10",
    "prompt": "Qual é o valor de 2³ + 4²?",
    "options": [
      {
        "label": "A) 12",
        "value": "A"
      },
      {
        "label": "B) 20",
        "value": "B"
      },
      {
        "label": "C) 24",
        "value": "C"
      },
      {
        "label": "D) 32",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  }
];

export default function MatematicaSimuladoScreen() {
  return <StudyContentScreen kind="simulado" title="Simulado Matemática ENCCEJA" subtitle="Prepare-se para o Encceja com nosso simulado de matemática. Este teste contém 10 questões que cobrem os principais tópicos do exame. Boa sorte!" duration="60 minutos" questions={questions} />;
}
