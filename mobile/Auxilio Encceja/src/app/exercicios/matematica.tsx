import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Equações Lineares",
    "prompt": "Resolva a equação: 3x + 7 = 22",
    "options": [
      {
        "label": "A) x = 5",
        "value": "x=5"
      },
      {
        "label": "B) x = 3",
        "value": "x=3"
      },
      {
        "label": "C) x = 7",
        "value": "x=7"
      },
      {
        "label": "D) x = 9",
        "value": "x=9"
      }
    ],
    "correct": "x=5",
    "explanation": "Resolução: 3x + 7 = 22 3x = 22 - 7 3x = 15 x = 15/3 x = 5"
  },
  {
    "title": "Exercício 2: Equações do Segundo Grau",
    "prompt": "Resolva a equação: x² - 5x + 6 = 0",
    "options": [
      {
        "label": "A) x = 2, x = 3",
        "value": "x=2,x=3"
      },
      {
        "label": "B) x = 1, x = 6",
        "value": "x=1,x=6"
      },
      {
        "label": "C) x = 4, x = 5",
        "value": "x=4,x=5"
      },
      {
        "label": "D) x = 2, x = 6",
        "value": "x=2,x=6"
      }
    ],
    "correct": "x=2,x=3",
    "explanation": "Resolução: x² - 5x + 6 = 0 Fatorando: (x - 2)(x - 3) = 0 x - 2 = 0 → x = 2 x - 3 = 0 → x = 3"
  },
  {
    "title": "Exercício 3: Sistemas Lineares",
    "prompt": "Resolva o sistema: 2x + y = 8 x - y = 1",
    "options": [
      {
        "label": "A) x = 3, y = 2",
        "value": "x=3,y=2"
      },
      {
        "label": "B) x = 2, y = 4",
        "value": "x=2,y=4"
      },
      {
        "label": "C) x = 4, y = 0",
        "value": "x=4,y=0"
      },
      {
        "label": "D) x = 5, y = -3",
        "value": "x=5,y=-3"
      }
    ],
    "correct": "x=3,y=2",
    "explanation": "Resolução: 2x + y = 8 (1) x - y = 1 (2) Adicionando (1) e (2): 3x = 9 → x = 3 Substituindo x em (2): 3 - y = 1 → y = 2"
  },
  {
    "title": "Exercício 4: Funções Lineares",
    "prompt": "Se f(x) = 2x - 3, calcule f(4).",
    "options": [
      {
        "label": "A) f(4) = 5",
        "value": "f(4)=5"
      },
      {
        "label": "B) f(4) = 3",
        "value": "f(4)=3"
      },
      {
        "label": "C) f(4) = 7",
        "value": "f(4)=7"
      },
      {
        "label": "D) f(4) = 9",
        "value": "f(4)=9"
      }
    ],
    "correct": "f(4)=5",
    "explanation": "Resolução: f(x) = 2x - 3 f(4) = 2(4) - 3 f(4) = 8 - 3 f(4) = 5"
  },
  {
    "title": "Exercício 5: Polinômios",
    "prompt": "Simplifique: (3x² - 2x + 1) + (2x² + 5x - 3)",
    "options": [
      {
        "label": "A) 5x² + 3x - 2",
        "value": "5x²+3x-2"
      },
      {
        "label": "B) 5x² - 7x + 4",
        "value": "5x²-7x+4"
      },
      {
        "label": "C) x² + 3x - 2",
        "value": "x²+3x-2"
      },
      {
        "label": "D) 5x² + 7x - 4",
        "value": "5x²+7x-4"
      }
    ],
    "correct": "5x²+3x-2",
    "explanation": "Resolução: (3x² - 2x + 1) + (2x² + 5x - 3) = 3x² + 2x² - 2x + 5x + 1 - 3 = 5x² + 3x - 2"
  },
  {
    "title": "Exercício 6: Razões e Proporções",
    "prompt": "Se 3/5 = x/15, qual é o valor de x?",
    "options": [
      {
        "label": "A) x = 9",
        "value": "x=9"
      },
      {
        "label": "B) x = 5",
        "value": "x=5"
      },
      {
        "label": "C) x = 10",
        "value": "x=10"
      },
      {
        "label": "D) x = 7",
        "value": "x=7"
      }
    ],
    "correct": "x=9",
    "explanation": "Resolução: 3/5 = x/15 3 * 15 = 5 * x 45 = 5x x = 45/5 x = 9"
  },
  {
    "title": "Exercício 7: Potências",
    "prompt": "Calcule: (2³ × 2²) ÷ 2⁴",
    "options": [
      {
        "label": "A) 2",
        "value": "2"
      },
      {
        "label": "B) 1",
        "value": "1"
      },
      {
        "label": "C) 3",
        "value": "3"
      },
      {
        "label": "D) 4",
        "value": "4"
      }
    ],
    "correct": "2",
    "explanation": "Resolução: (2³ × 2²) ÷ 2⁴ = 2^(3+2) ÷ 2⁴ = 2⁵ ÷ 2⁴ = 2^(5-4) = 2¹ = 2"
  },
  {
    "title": "Exercício 8: Radiciais",
    "prompt": "Calcule: √(49x²)",
    "options": [
      {
        "label": "A) 7x",
        "value": "7x"
      },
      {
        "label": "B) 7 + x",
        "value": "7+x"
      },
      {
        "label": "C) 49x",
        "value": "49x"
      },
      {
        "label": "D) 7 - x",
        "value": "7-x"
      }
    ],
    "correct": "7x",
    "explanation": "Resolução: √(49x²) = √49 × √x² = 7 × x = 7x"
  },
  {
    "title": "Exercício 9: Área do Triângulo",
    "prompt": "Calcule a área de um triângulo com base 8 cm e altura 5 cm.",
    "options": [
      {
        "label": "A) 20 cm²",
        "value": "20cm²"
      },
      {
        "label": "B) 40 cm²",
        "value": "40cm²"
      },
      {
        "label": "C) 30 cm²",
        "value": "30cm²"
      },
      {
        "label": "D) 25 cm²",
        "value": "25cm²"
      }
    ],
    "correct": "20cm²",
    "explanation": "Resolução: A área de um triângulo é dada por A = (base × altura) / 2 A = (8 cm × 5 cm) / 2 A = 40 cm² / 2 A = 20 cm²"
  },
  {
    "title": "Exercício 10: Área do Círculo",
    "prompt": "Calcule a área de um círculo com raio 7 cm (use π = 3,14).",
    "options": [
      {
        "label": "A) 153,86 cm²",
        "value": "153.86cm²"
      },
      {
        "label": "B) 43,96 cm²",
        "value": "43.96cm²"
      },
      {
        "label": "C) 38,48 cm²",
        "value": "38.48cm²"
      },
      {
        "label": "D) 98 cm²",
        "value": "98cm²"
      }
    ],
    "correct": "153.86cm²",
    "explanation": "Resolução: A área de um círculo é dada por A = πr² A = 3,14 × (7 cm)² A = 3,14 × 49 cm² A = 153,86 cm²"
  },
  {
    "title": "Exercício 11: Perímetro do Retângulo",
    "prompt": "Calcule o perímetro de um retângulo com comprimento 10 cm e largura 4 cm.",
    "options": [
      {
        "label": "A) 28 cm",
        "value": "28cm"
      },
      {
        "label": "B) 40 cm",
        "value": "40cm"
      },
      {
        "label": "C) 14 cm",
        "value": "14cm"
      },
      {
        "label": "D) 24 cm",
        "value": "24cm"
      }
    ],
    "correct": "28cm",
    "explanation": "Resolução: O perímetro de um retângulo é dado por P = 2 × (comprimento + largura) P = 2 × (10 cm + 4 cm) P = 2 × 14 cm P = 28 cm"
  },
  {
    "title": "Exercício 12: Teorema de Pitágoras",
    "prompt": "Em um triângulo retângulo, um cateto mede 6 cm e o outro mede 8 cm. Qual é a medida da hipotenusa?",
    "options": [
      {
        "label": "A) 10 cm",
        "value": "10cm"
      },
      {
        "label": "B) 14 cm",
        "value": "14cm"
      },
      {
        "label": "C) 12 cm",
        "value": "12cm"
      },
      {
        "label": "D) 16 cm",
        "value": "16cm"
      }
    ],
    "correct": "10cm",
    "explanation": "Resolução: Pela teoria de Pitágoras, c² = a² + b² onde c é a hipotenusa e a, b são os catetos. c² = 6² + 8² c² = 36 + 64 c² = 100 c = √100 c = 10 cm"
  },
  {
    "title": "Exercício 13: Volume da Cilindro",
    "prompt": "Calcule o volume de um cilindro com raio 3 cm e altura 10 cm (use π = 3,14).",
    "options": [
      {
        "label": "A) 282,6 cm³",
        "value": "282.6cm³"
      },
      {
        "label": "B) 188,4 cm³",
        "value": "188.4cm³"
      },
      {
        "label": "C) 942 cm³",
        "value": "942cm³"
      },
      {
        "label": "D) 28,26 cm³",
        "value": "28.26cm³"
      }
    ],
    "correct": "282.6cm³",
    "explanation": "Resolução: O volume de um cilindro é dado por V = πr²h V = 3,14 × (3 cm)² × 10 cm V = 3,14 × 9 cm² × 10 cm V = 3,14 × 90 cm³ V = 282,6 cm³"
  },
  {
    "title": "Exercício 14: Ângulos do Triângulo",
    "prompt": "Em um triângulo, um dos ângulos mede 45° e o outro mede 75°. Qual é a medida do terceiro ângulo?",
    "options": [
      {
        "label": "A) 60°",
        "value": "60°"
      },
      {
        "label": "B) 75°",
        "value": "75°"
      },
      {
        "label": "C) 50°",
        "value": "50°"
      },
      {
        "label": "D) 45°",
        "value": "45°"
      }
    ],
    "correct": "60°",
    "explanation": "Resolução: A soma dos ângulos internos de um triângulo é sempre 180°. Ângulo 3 = 180° - 45° - 75° Ângulo 3 = 180° - 120° Ângulo 3 = 60°"
  },
  {
    "title": "Exercício 15: Área do Trapézio",
    "prompt": "Calcule a área de um trapézio com bases 10 cm e 6 cm, e altura 5 cm.",
    "options": [
      {
        "label": "A) 40 cm²",
        "value": "40cm²"
      },
      {
        "label": "B) 50 cm²",
        "value": "50cm²"
      },
      {
        "label": "C) 45 cm²",
        "value": "45cm²"
      },
      {
        "label": "D) 60 cm²",
        "value": "60cm²"
      }
    ],
    "correct": "40cm²",
    "explanation": "Resolução: A área de um trapézio é dada por A = (base maior + base menor) × altura / 2 A = (10 cm + 6 cm) × 5 cm / 2 A = 16 cm × 5 cm / 2 A = 80 cm² / 2 A = 40 cm²"
  },
  {
    "title": "Exercício 16: Diagonal do Quadrado",
    "prompt": "Calcule a diagonal de um quadrado com lado 5 cm.",
    "options": [
      {
        "label": "A) 7,07 cm",
        "value": "7.07cm"
      },
      {
        "label": "B) 10 cm",
        "value": "10cm"
      },
      {
        "label": "C) 5 cm",
        "value": "5cm"
      },
      {
        "label": "D) 12,07 cm",
        "value": "12.07cm"
      }
    ],
    "correct": "7.07cm",
    "explanation": "Resolução: Em um quadrado, a diagonal divide-o em dois triângulos retângulos iguais. Pela teoria de Pitágoras, d² = l² + l² d² = 5² + 5² d² = 25 + 25 d² = 50 d = √50 d = 5√2 d ≈ 7,07 cm"
  },
  {
    "title": "Exercício 17: Média Aritmética",
    "prompt": "Calcule a média aritmética dos números 4, 7, 10, 13 e 16.",
    "options": [
      {
        "label": "A) 10",
        "value": "10"
      },
      {
        "label": "B) 9",
        "value": "9"
      },
      {
        "label": "C) 11",
        "value": "11"
      },
      {
        "label": "D) 12",
        "value": "12"
      }
    ],
    "correct": "10",
    "explanation": "Resolução: A média aritmética é dada pela soma dos valores dividida pela quantidade de valores. Média = (4 + 7 + 10 + 13 + 16) / 5 Média = 50 / 5 Média = 10"
  },
  {
    "title": "Exercício 18: Mediana",
    "prompt": "Calcule a mediana dos números 3, 8, 5, 2, 7, 4 e 6.",
    "options": [
      {
        "label": "A) 5",
        "value": "5"
      },
      {
        "label": "B) 6",
        "value": "6"
      },
      {
        "label": "C) 4",
        "value": "4"
      },
      {
        "label": "D) 7",
        "value": "7"
      }
    ],
    "correct": "5",
    "explanation": "Resolução: A mediana é o valor central de um conjunto de dados ordenado. Primeiro, ordenamos os números: 2, 3, 4, 5, 6, 7, 8 A mediana é o valor central: 5"
  },
  {
    "title": "Exercício 19: Moda",
    "prompt": "Calcule a moda dos números 2, 3, 4, 4, 5, 5, 5, 6, 7.",
    "options": [
      {
        "label": "A) 5",
        "value": "5"
      },
      {
        "label": "B) 4",
        "value": "4"
      },
      {
        "label": "C) 6",
        "value": "6"
      },
      {
        "label": "D) 7",
        "value": "7"
      }
    ],
    "correct": "5",
    "explanation": "Resolução: A moda é o valor que aparece com maior frequência. 2 (1 vez), 3 (1 vez), 4 (2 vezes), 5 (3 vezes), 6 (1 vez), 7 (1 vez) A moda é 5, pois aparece 3 vezes."
  },
  {
    "title": "Exercício 20: Desvio Padrão",
    "prompt": "Qual das seguintes opções descreve o desvio padrão?",
    "options": [
      {
        "label": "A) Medida da dispersão dos dados",
        "value": "Medida da dispersão dos dados"
      },
      {
        "label": "B) Medida da centralidade dos dados",
        "value": "Medida da centralidade dos dados"
      },
      {
        "label": "C) Medida da moda dos dados",
        "value": "Medida da moda dos dados"
      },
      {
        "label": "D) Medida da mediana dos dados",
        "value": "Medida da mediana dos dados"
      }
    ],
    "correct": "Medida da dispersão dos dados",
    "explanation": "Resolução: O desvio padrão é uma medida de dispersão que indica o grau de variabilidade dos dados em torno da média. É usado para avaliar a consistência ou variabilidade dos dados."
  },
  {
    "title": "Exercício 21: Probabilidade",
    "prompt": "Em um baralho com 52 cartas, qual é a probabilidade de tirar uma carta vermelha?",
    "options": [
      {
        "label": "A) 1/2",
        "value": "1/2"
      },
      {
        "label": "B) 1/4",
        "value": "1/4"
      },
      {
        "label": "C) 3/4",
        "value": "3/4"
      },
      {
        "label": "D) 2/3",
        "value": "2/3"
      }
    ],
    "correct": "1/2",
    "explanation": "Resolução: Em um baralho com 52 cartas, há 26 cartas vermelhas (copas e ouros). Probabilidade = Número de cartas vermelhas / Número total de cartas Probabilidade = 26 / 52 Probabilidade = 1/2"
  },
  {
    "title": "Exercício 22: Permutação",
    "prompt": "Calcule o número de permutações de 3 elementos tomados de 2 a cada vez.",
    "options": [
      {
        "label": "A) 6",
        "value": "6"
      },
      {
        "label": "B) 3",
        "value": "3"
      },
      {
        "label": "C) 9",
        "value": "9"
      },
      {
        "label": "D) 12",
        "value": "12"
      }
    ],
    "correct": "6",
    "explanation": "Resolução: O número de permutações é dado por P(n, k) = n! / (n - k)! onde n = 3 (total de elementos) e k = 2 (elementos a serem tomados). P(3, 2) = 3! / (3 - 2)! P(3, 2) = 6 / 1 P(3, 2) = 6"
  },
  {
    "title": "Exercício 23: Combinação",
    "prompt": "Calcule o número de combinações de 4 elementos tomados de 2 a cada vez.",
    "options": [
      {
        "label": "A) 6",
        "value": "6"
      },
      {
        "label": "B) 12",
        "value": "12"
      },
      {
        "label": "C) 4",
        "value": "4"
      },
      {
        "label": "D) 8",
        "value": "8"
      }
    ],
    "correct": "6",
    "explanation": "Resolução: O número de combinações é dado por C(n, k) = n! / (k! × (n - k)!) onde n = 4 (total de elementos) e k = 2 (elementos a serem tomados). C(4, 2) = 4! / (2! × (4 - 2)!) C(4, 2) = 24 / (2 × 2) C(4, 2) = 24 / 4 C(4, 2) = 6"
  },
  {
    "title": "Exercício 24: Distribuição de Frequência",
    "prompt": "Considerando a seguinte distribuição de frequência:",
    "options": [
      {
        "label": "A) 0,30",
        "value": "0.30"
      },
      {
        "label": "B) 0,20",
        "value": "0.20"
      },
      {
        "label": "C) 0,25",
        "value": "0.25"
      },
      {
        "label": "D) 0,33",
        "value": "0.33"
      }
    ],
    "correct": "0.30",
    "explanation": "Resolução: Primeiro, calculamos o número total de observações. Total = 5 + 8 + 7 + 3 = 23 Então, a frequência relativa da classe 21-30 é: FR = 7 / 23 ≈ 0,304 Arredondando para duas casas decimais: 0,30"
  }
];

export default function MatematicaExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de Matemática para ENCCEJA" subtitle="Prepare-se para o exame com exercícios práticos e feedback imediato." questions={questions} />;
}
