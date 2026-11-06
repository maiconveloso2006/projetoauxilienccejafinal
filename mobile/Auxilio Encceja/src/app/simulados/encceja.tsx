import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Questão 1",
    "prompt": "Matemática Uma loja oferece um desconto de 15% sobre o preço de um produto que custa R$ 120,00. Qual será o valor do desconto?",
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
    "prompt": "Matemática Qual é o valor de x na equação: 3x + 7 = 22?",
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
    "prompt": "Matemática Um retângulo tem lados de 8 cm e 12 cm. Qual é a área desse retângulo?",
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
    "prompt": "Matemática Qual é o valor de √(16 + 9)?",
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
    "prompt": "Matemática Em uma urna há 5 bolas vermelhas, 3 bolas azuis e 2 bolas amarelas. Qual é a probabilidade de sacar uma bola azul?",
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
    "prompt": "Matemática Qual é o valor de 23 × 5 + 12 ÷ 3?",
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
    "prompt": "Matemática Um carro percorre 300 km em 4 horas. Qual é a velocidade média do carro?",
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
    "prompt": "Matemática Qual é o valor de x no sistema de equações: 2x + y = 8 e x - y = 1?",
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
    "prompt": "Matemática Qual é a soma dos ângulos internos de um triângulo?",
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
    "prompt": "Matemática Qual é o valor de 2³ + 4²?",
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
  },
  {
    "title": "Questão 11",
    "prompt": "Português Qual das seguintes opções apresenta a forma verbal correta: \"Nós ________ (ir) ao cinema amanhã.\"",
    "options": [
      {
        "label": "A) vai",
        "value": "A"
      },
      {
        "label": "B) vão",
        "value": "B"
      },
      {
        "label": "C) vamos",
        "value": "C"
      },
      {
        "label": "D) veio",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 12",
    "prompt": "Português Qual das seguintes palavras NÃO é sinônimo de \"importante\"?",
    "options": [
      {
        "label": "A) Significativo",
        "value": "A"
      },
      {
        "label": "B) Relevante",
        "value": "B"
      },
      {
        "label": "C) Insignificante",
        "value": "C"
      },
      {
        "label": "D) Essencial",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 13",
    "prompt": "Português Marque a opção com a grafia correta de todas as palavras:",
    "options": [
      {
        "label": "A) Acolhimento, aterrissagem, aprimoramento",
        "value": "A"
      },
      {
        "label": "B) Acolhimento, aterrisagem, aperfeiçoamento",
        "value": "B"
      },
      {
        "label": "C) Acolhimento, aterrissagem, aperfeiçoamento",
        "value": "C"
      },
      {
        "label": "D) Acolhimento, aterrisagem, aprimoramento",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 14",
    "prompt": "Português Qual das seguintes frases está gramaticalmente incorreta?",
    "options": [
      {
        "label": "A) Ele não sabe como fazer.",
        "value": "A"
      },
      {
        "label": "B) Ela não sabe como fazer.",
        "value": "B"
      },
      {
        "label": "C) Nós não sabemos como fazer.",
        "value": "C"
      },
      {
        "label": "D) Vocês não sabe como fazer.",
        "value": "D"
      }
    ],
    "correct": "D",
    "explanation": ""
  },
  {
    "title": "Questão 15",
    "prompt": "Português Qual a forma verbal correta: \"Se ele ________ (estar) aqui, teria ajudado.\"",
    "options": [
      {
        "label": "A) estiver",
        "value": "A"
      },
      {
        "label": "B) estaria",
        "value": "B"
      },
      {
        "label": "C) estava",
        "value": "C"
      },
      {
        "label": "D) estivesse",
        "value": "D"
      }
    ],
    "correct": "D",
    "explanation": ""
  },
  {
    "title": "Questão 16",
    "prompt": "Ciências Qual dos seguintes órgãos é responsável por filtrar o sangue e eliminar resíduos do corpo?",
    "options": [
      {
        "label": "A) Fígado",
        "value": "A"
      },
      {
        "label": "B) Pulmão",
        "value": "B"
      },
      {
        "label": "C) Rim",
        "value": "C"
      },
      {
        "label": "D) Coração",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 17",
    "prompt": "Ciências Qual é o gás que os vegetais utilizam na fotossíntese?",
    "options": [
      {
        "label": "A) Oxigênio",
        "value": "A"
      },
      {
        "label": "B) Dióxido de carbono",
        "value": "B"
      },
      {
        "label": "C) Nitrogênio",
        "value": "C"
      },
      {
        "label": "D) Hidrogênio",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 18",
    "prompt": "Ciências Qual das seguintes opções NÃO é um estado físico da matéria?",
    "options": [
      {
        "label": "A) Sólido",
        "value": "A"
      },
      {
        "label": "B) Líquido",
        "value": "B"
      },
      {
        "label": "C) Gasoso",
        "value": "C"
      },
      {
        "label": "D) Energético",
        "value": "D"
      }
    ],
    "correct": "D",
    "explanation": ""
  },
  {
    "title": "Questão 19",
    "prompt": "Ciências Qual das seguintes doenças é causada pelo vírus da rubéola?",
    "options": [
      {
        "label": "A) Sarampo",
        "value": "A"
      },
      {
        "label": "B) Catapora",
        "value": "B"
      },
      {
        "label": "C) Rubéola",
        "value": "C"
      },
      {
        "label": "D) Caxumba",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 20",
    "prompt": "Ciências Qual das seguintes vitaminas é conhecida como vitamina C?",
    "options": [
      {
        "label": "A) Tiamina",
        "value": "A"
      },
      {
        "label": "B) Riboflavina",
        "value": "B"
      },
      {
        "label": "C) Ácido ascórbico",
        "value": "C"
      },
      {
        "label": "D) Niacina",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 21",
    "prompt": "História Em que ano a Independência do Brasil foi proclamada?",
    "options": [
      {
        "label": "A) 1808",
        "value": "A"
      },
      {
        "label": "B) 1815",
        "value": "B"
      },
      {
        "label": "C) 1822",
        "value": "C"
      },
      {
        "label": "D) 1824",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 22",
    "prompt": "História Qual das seguintes personalidades foi o primeiro presidente do Brasil?",
    "options": [
      {
        "label": "A) Deodoro da Fonseca",
        "value": "A"
      },
      {
        "label": "B) Floriano Peixoto",
        "value": "B"
      },
      {
        "label": "C) Prudente de Morais",
        "value": "C"
      },
      {
        "label": "D) Campos Sales",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 23",
    "prompt": "História Qual das seguintes opções NÃO foi uma das causas da Segunda Guerra Mundial?",
    "options": [
      {
        "label": "A) A ascensão do fascismo",
        "value": "A"
      },
      {
        "label": "B) A Primeira Guerra Mundial",
        "value": "B"
      },
      {
        "label": "C) A crise econômica de 1929",
        "value": "C"
      },
      {
        "label": "D) A Revolução Russa",
        "value": "D"
      }
    ],
    "correct": "D",
    "explanation": ""
  },
  {
    "title": "Questão 24",
    "prompt": "História Qual das seguintes civilizações construiu as pirâmides de Gizé?",
    "options": [
      {
        "label": "A) Gregos",
        "value": "A"
      },
      {
        "label": "B) Romanos",
        "value": "B"
      },
      {
        "label": "C) Egípcios",
        "value": "C"
      },
      {
        "label": "D) Maias",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 25",
    "prompt": "Geografia Qual é a capital do Brasil?",
    "options": [
      {
        "label": "A) São Paulo",
        "value": "A"
      },
      {
        "label": "B) Rio de Janeiro",
        "value": "B"
      },
      {
        "label": "C) Brasília",
        "value": "C"
      },
      {
        "label": "D) Belo Horizonte",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 26",
    "prompt": "Geografia Qual é o maior oceano da Terra?",
    "options": [
      {
        "label": "A) Oceano Atlântico",
        "value": "A"
      },
      {
        "label": "B) Oceano Índico",
        "value": "B"
      },
      {
        "label": "C) Oceano Pacífico",
        "value": "C"
      },
      {
        "label": "D) Oceano Ártico",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 27",
    "prompt": "Geografia Qual é o país com a maior população do mundo?",
    "options": [
      {
        "label": "A) Estados Unidos",
        "value": "A"
      },
      {
        "label": "B) Índia",
        "value": "B"
      },
      {
        "label": "C) China",
        "value": "C"
      },
      {
        "label": "D) Brasil",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 28",
    "prompt": "Geografia Qual é a maior montanha do mundo?",
    "options": [
      {
        "label": "A) Monte Everest",
        "value": "A"
      },
      {
        "label": "B) Monte Kilimanjaro",
        "value": "B"
      },
      {
        "label": "C) Monte Fuji",
        "value": "C"
      },
      {
        "label": "D) Monte Whitney",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 29",
    "prompt": "Geografia Qual é o rio mais longo da América do Sul?",
    "options": [
      {
        "label": "A) Rio Amazonas",
        "value": "A"
      },
      {
        "label": "B) Rio Paraná",
        "value": "B"
      },
      {
        "label": "C) Rio São Francisco",
        "value": "C"
      },
      {
        "label": "D) Rio Paraguai",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 30",
    "prompt": "Sociologia Qual das seguintes opções define a democracia?",
    "options": [
      {
        "label": "A) Forma de governo onde o poder está concentrado em mãos de um único indivíduo",
        "value": "A"
      },
      {
        "label": "B) Sistema político onde o poder é exercido pelos cidadãos, diretamente ou por representantes",
        "value": "B"
      },
      {
        "label": "C) Governo baseado na lei divina",
        "value": "C"
      },
      {
        "label": "D) Sistema onde o poder é herdado por linhagem familiar",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  }
];

export default function EnccejaSimuladoScreen() {
  return <StudyContentScreen kind="simulado" title="Simulado Completo ENCCEJA" subtitle="Simulado interativo convertido do projeto original." duration="120 minutos" questions={questions} />;
}
