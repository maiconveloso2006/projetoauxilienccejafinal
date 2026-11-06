import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Questão 1",
    "prompt": "Qual é a função principal dos cloroplastos nas células vegetais?",
    "options": [
      {
        "label": "A) Realizar a respiração celular",
        "value": "A"
      },
      {
        "label": "B) Produzir energia através da fotosíntese",
        "value": "B"
      },
      {
        "label": "C) Armazenar água e nutrientes",
        "value": "C"
      },
      {
        "label": "D) Controlar a entrada e saída de substâncias",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 2",
    "prompt": "Qual é a unidade de medida da força no Sistema Internacional de Unidades (SI)?",
    "options": [
      {
        "label": "A) Joule (J)",
        "value": "A"
      },
      {
        "label": "B) Newton (N)",
        "value": "B"
      },
      {
        "label": "C) Pascal (Pa)",
        "value": "C"
      },
      {
        "label": "D) Watt (W)",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 3",
    "prompt": "Qual é a composição química da água?",
    "options": [
      {
        "label": "A) H₂O₂",
        "value": "A"
      },
      {
        "label": "B) H₂O",
        "value": "B"
      },
      {
        "label": "C) CO₂",
        "value": "C"
      },
      {
        "label": "D) O₂",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 4",
    "prompt": "Qual é o tipo de nutriente que fornece a maior quantidade de energia por grama?",
    "options": [
      {
        "label": "A) Carboidratos",
        "value": "A"
      },
      {
        "label": "B) Proteínas",
        "value": "B"
      },
      {
        "label": "C) Gorduras",
        "value": "C"
      },
      {
        "label": "D) Vitaminas",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 5",
    "prompt": "Qual é a principal função do fígado no corpo humano?",
    "options": [
      {
        "label": "A) Filtrar o sangue e eliminar toxinas",
        "value": "A"
      },
      {
        "label": "B) Produzir hormônios sexuais",
        "value": "B"
      },
      {
        "label": "C) Controlar a temperatura corporal",
        "value": "C"
      },
      {
        "label": "D) Absorver nutrientes do intestino",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 6",
    "prompt": "Qual é a lei que descreve a atração gravitacional entre dois corpos?",
    "options": [
      {
        "label": "A) Lei da Conservação da Energia",
        "value": "A"
      },
      {
        "label": "B) Lei da Inércia",
        "value": "B"
      },
      {
        "label": "C) Lei da Atração Universal",
        "value": "C"
      },
      {
        "label": "D) Lei da Ação e Reação",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 7",
    "prompt": "Qual é o elemento químico mais abundante na atmosfera terrestre?",
    "options": [
      {
        "label": "A) Oxigênio (O)",
        "value": "A"
      },
      {
        "label": "B) Nitrogênio (N)",
        "value": "B"
      },
      {
        "label": "C) Dióxido de carbono (CO₂)",
        "value": "C"
      },
      {
        "label": "D) Argônio (Ar)",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 8",
    "prompt": "Qual é o processo pelo qual as plantas absorvem água das raízes?",
    "options": [
      {
        "label": "A) Transpiração",
        "value": "A"
      },
      {
        "label": "B) Osmose",
        "value": "B"
      },
      {
        "label": "C) Fotosíntese",
        "value": "C"
      },
      {
        "label": "D) Respiração celular",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 9",
    "prompt": "Qual é a função principal dos glóbulos vermelhos no sangue?",
    "options": [
      {
        "label": "A) Defender o corpo contra infecções",
        "value": "A"
      },
      {
        "label": "B) Transportar oxigênio para os tecidos",
        "value": "B"
      },
      {
        "label": "C) Formar coágulos para parar sangramentos",
        "value": "C"
      },
      {
        "label": "D) Regular a temperatura corporal",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 10",
    "prompt": "Qual é a principal fonte de energia renovável no mundo?",
    "options": [
      {
        "label": "A) Petróleo",
        "value": "A"
      },
      {
        "label": "B) Energia hidrelétrica",
        "value": "B"
      },
      {
        "label": "C) Carvão mineral",
        "value": "C"
      },
      {
        "label": "D) Gás natural",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  }
];

export default function CienciasSimuladoScreen() {
  return <StudyContentScreen kind="simulado" title="Simulado de Ciências ENCCEJA" subtitle="Prepare-se para o Encceja com nosso simulado completo que abrange todas as áreas do conhecimento. Este teste contém 30 questões. Boa sorte!" duration="60 minutos" questions={questions} />;
}
