import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Questão 1",
    "prompt": "Qual das seguintes frases está gramaticalmente correta?",
    "options": [
      {
        "label": "A) Ele e ela foi ao cinema.",
        "value": "A"
      },
      {
        "label": "B) Ele e ela foiem ao cinema.",
        "value": "B"
      },
      {
        "label": "C) Ele e ela foram ao cinema.",
        "value": "C"
      },
      {
        "label": "D) Ele e ela vai ao cinema.",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 2",
    "prompt": "Qual o sinônimo de \"indiferença\"?",
    "options": [
      {
        "label": "A) Afeição",
        "value": "A"
      },
      {
        "label": "B) Desinteresse",
        "value": "B"
      },
      {
        "label": "C) Apego",
        "value": "C"
      },
      {
        "label": "D) Empatia",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 3",
    "prompt": "Em qual palavra a letra \"c\" tem som de \"ss\"?",
    "options": [
      {
        "label": "A) Cadeira",
        "value": "A"
      },
      {
        "label": "B) Canto",
        "value": "B"
      },
      {
        "label": "C) Cemitério",
        "value": "C"
      },
      {
        "label": "D) Cisne",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 4",
    "prompt": "Qual o antônimo de \"abundante\"?",
    "options": [
      {
        "label": "A) Farto",
        "value": "A"
      },
      {
        "label": "B) Rico",
        "value": "B"
      },
      {
        "label": "C) Escasso",
        "value": "C"
      },
      {
        "label": "D) Pleno",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 5",
    "prompt": "Qual das seguintes frases utiliza corretamente a crase?",
    "options": [
      {
        "label": "A) Fui à escola de manhã.",
        "value": "A"
      },
      {
        "label": "B) Vamos a praia amanhã.",
        "value": "B"
      },
      {
        "label": "C) Ele foi ao shopping.",
        "value": "C"
      },
      {
        "label": "D) Ela foi a farmácia.",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 6",
    "prompt": "Qual o gênero literário de \"Dom Quixote\" de Miguel de Cervantes?",
    "options": [
      {
        "label": "A) Romance",
        "value": "A"
      },
      {
        "label": "B) Poesia",
        "value": "B"
      },
      {
        "label": "C) Teatro",
        "value": "C"
      },
      {
        "label": "D) Crônica",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 7",
    "prompt": "Qual das seguintes palavras tem a consoante \"s\" com som de \"z\"?",
    "options": [
      {
        "label": "A) Sapo",
        "value": "A"
      },
      {
        "label": "B) Sino",
        "value": "B"
      },
      {
        "label": "C) Mesa",
        "value": "C"
      },
      {
        "label": "D) Sombra",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 8",
    "prompt": "Qual o autor do livro \"Memórias Póstumas de Brás Cubas\"?",
    "options": [
      {
        "label": "A) Machado de Assis",
        "value": "A"
      },
      {
        "label": "B) José de Alencar",
        "value": "B"
      },
      {
        "label": "C) Clarice Lispector",
        "value": "C"
      },
      {
        "label": "D) Graciliano Ramos",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 9",
    "prompt": "Qual das seguintes palavras está no plural?",
    "options": [
      {
        "label": "A) Criança",
        "value": "A"
      },
      {
        "label": "B) Peixe",
        "value": "B"
      },
      {
        "label": "C) Crianças",
        "value": "C"
      },
      {
        "label": "D) Paisagem",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 10",
    "prompt": "Qual o tempo verbal da frase: \"Eles irão ao cinema amanhã\"?",
    "options": [
      {
        "label": "A) Presente",
        "value": "A"
      },
      {
        "label": "B) Pretérito Perfeito",
        "value": "B"
      },
      {
        "label": "C) Futuro do Presente",
        "value": "C"
      },
      {
        "label": "D) Futuro do Pretérito",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  }
];

export default function PortuguesSimuladoScreen() {
  return <StudyContentScreen kind="simulado" title="Simulado Português e Literatura ENCCEJA" subtitle="Prepare-se para o Encceja com nosso simulado de Português e Literatura. Este teste contém 10 questões que cobrem os principais tópicos do exame. Boa sorte!" duration="60 minutos" questions={questions} />;
}
