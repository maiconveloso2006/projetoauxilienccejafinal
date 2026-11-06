import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Questão 1",
    "prompt": "Qual foi a principal causa do movimento das Reformas Liberais no Brasil no século XIX?",
    "options": [
      {
        "label": "A) A necessidade de modernização do Estado e adaptação às mudanças sociais e econômicas.",
        "value": "A"
      },
      {
        "label": "B) A pressão dos escravizados pela abolição imediata da escravidão.",
        "value": "B"
      },
      {
        "label": "C) A revolta dos militares contra o governo imperial.",
        "value": "C"
      },
      {
        "label": "D) A crise econômica causada pela seca no Nordeste.",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 2",
    "prompt": "Qual das seguintes características NÃO é típica da Revolução Industrial na Inglaterra?",
    "options": [
      {
        "label": "A) A invenção da máquina a vapor.",
        "value": "A"
      },
      {
        "label": "B) O desenvolvimento de novas técnicas de agricultura.",
        "value": "B"
      },
      {
        "label": "C) A forte dependência de energia hidráulica.",
        "value": "C"
      },
      {
        "label": "D) A urbanização massiva e o crescimento das cidades.",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 3",
    "prompt": "Qual foi o principal resultado da Guerra do Paraguai para o Brasil?",
    "options": [
      {
        "label": "A) A consolidação da República e a queda da monarquia.",
        "value": "A"
      },
      {
        "label": "B) O fortalecimento do poder militar e a expansão da influência brasileira na região.",
        "value": "B"
      },
      {
        "label": "C) A abolição da escravidão no Brasil.",
        "value": "C"
      },
      {
        "label": "D) A perda de territórios para o Paraguai.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 4",
    "prompt": "Qual das seguintes capitais brasileiras está localizada na Região Norte?",
    "options": [
      {
        "label": "A) Belo Horizonte",
        "value": "A"
      },
      {
        "label": "B) Manaus",
        "value": "B"
      },
      {
        "label": "C) Salvador",
        "value": "C"
      },
      {
        "label": "D) Curitiba",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 5",
    "prompt": "Qual das seguintes características NÃO pertence à cultura dos povos indígenas da Amazônia?",
    "options": [
      {
        "label": "A) A prática da agricultura itinerante.",
        "value": "A"
      },
      {
        "label": "B) A crença em espíritos da natureza.",
        "value": "B"
      },
      {
        "label": "C) A construção de cidades com grandes monumentos de pedra.",
        "value": "C"
      },
      {
        "label": "D) A utilização de plantas medicinais para tratamento de doenças.",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 6",
    "prompt": "Qual foi a principal causa da Primeira Guerra Mundial?",
    "options": [
      {
        "label": "A) A crise financeira global de 1929.",
        "value": "A"
      },
      {
        "label": "B) A rivalidade entre as potências europeias e a corrida armamentista.",
        "value": "B"
      },
      {
        "label": "C) A ascensão do fascismo na Itália.",
        "value": "C"
      },
      {
        "label": "D) A revolução bolchevique na Rússia.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 7",
    "prompt": "Qual é a capital da Argentina?",
    "options": [
      {
        "label": "A) Santiago",
        "value": "A"
      },
      {
        "label": "B) Buenos Aires",
        "value": "B"
      },
      {
        "label": "C) Montevideo",
        "value": "C"
      },
      {
        "label": "D) Asunción",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 8",
    "prompt": "Qual foi o principal objetivo da Campanha Abolicionista no Brasil?",
    "options": [
      {
        "label": "A) Promover a integração dos escravizados no mercado de trabalho livre.",
        "value": "A"
      },
      {
        "label": "B) Forçar a libertação imediata de todos os escravizados.",
        "value": "B"
      },
      {
        "label": "C) Definir um valor econômico para a abolição da escravidão.",
        "value": "C"
      },
      {
        "label": "D) Reintegrar os escravizados nas fazendas como trabalhadores assalariados.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 9",
    "prompt": "Qual das seguintes características NÃO pertence à cultura dos povos indígenas do Sertão Nordestino?",
    "options": [
      {
        "label": "A) A prática da agricultura de sequeiro.",
        "value": "A"
      },
      {
        "label": "B) A criação de gado e a produção de queijo coalho.",
        "value": "B"
      },
      {
        "label": "C) A construção de grandes pirâmides e templos.",
        "value": "C"
      },
      {
        "label": "D) A utilização de cactos e outras plantas para fins medicinais e rituais.",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 10",
    "prompt": "Qual foi a principal causa da Revolução Russa de 1917?",
    "options": [
      {
        "label": "A) A ascensão do nazismo na Alemanha.",
        "value": "A"
      },
      {
        "label": "B) A participação da Rússia na Primeira Guerra Mundial e a crise econômica subsequente.",
        "value": "B"
      },
      {
        "label": "C) A descoberta de petróleo no Mar Cáspio.",
        "value": "C"
      },
      {
        "label": "D) A invasão da Rússia pelos EUA durante a Guerra Fria.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 11",
    "prompt": "Qual é a capital do Paraguai?",
    "options": [
      {
        "label": "A) Assunção",
        "value": "A"
      },
      {
        "label": "B) La Paz",
        "value": "B"
      },
      {
        "label": "C) Lima",
        "value": "C"
      },
      {
        "label": "D) Bogotá",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 12",
    "prompt": "Qual foi o principal resultado da Guerra do Fim do Mundo para o Brasil?",
    "options": [
      {
        "label": "A) A anexação da República Riograndense ao Brasil.",
        "value": "A"
      },
      {
        "label": "B) A perda de territórios para a Argentina.",
        "value": "B"
      },
      {
        "label": "C) A independência do Uruguai.",
        "value": "C"
      },
      {
        "label": "D) A abolição da escravidão no Brasil.",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 13",
    "prompt": "Qual é a capital do Peru?",
    "options": [
      {
        "label": "A) Bogotá",
        "value": "A"
      },
      {
        "label": "B) Quito",
        "value": "B"
      },
      {
        "label": "C) Lima",
        "value": "C"
      },
      {
        "label": "D) Caracas",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 14",
    "prompt": "Qual foi a principal causa da Revolução Cubana de 1959?",
    "options": [
      {
        "label": "A) A pressão dos EUA para a implementação de políticas capitalistas.",
        "value": "A"
      },
      {
        "label": "B) A corrupção do regime de Fulgencio Batista e a desigualdade social.",
        "value": "B"
      },
      {
        "label": "C) A invasão da Baía dos Porcos pelos exilados cubanos.",
        "value": "C"
      },
      {
        "label": "D) A descoberta de petróleo na costa cubana.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 15",
    "prompt": "Qual é a capital do Uruguai?",
    "options": [
      {
        "label": "A) Buenos Aires",
        "value": "A"
      },
      {
        "label": "B) Montevideo",
        "value": "B"
      },
      {
        "label": "C) Santiago",
        "value": "C"
      },
      {
        "label": "D) Asunción",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 16",
    "prompt": "Qual é a capital do Chile?",
    "options": [
      {
        "label": "A) Bogotá",
        "value": "A"
      },
      {
        "label": "B) Quito",
        "value": "B"
      },
      {
        "label": "C) Santiago",
        "value": "C"
      },
      {
        "label": "D) Lima",
        "value": "D"
      }
    ],
    "correct": "C",
    "explanation": ""
  },
  {
    "title": "Questão 17",
    "prompt": "Qual foi a principal causa da Revolução Francesa de 1789?",
    "options": [
      {
        "label": "A) A invasão da França pelos exércitos revolucionários americanos.",
        "value": "A"
      },
      {
        "label": "B) A crise financeira do Estado e a desigualdade social.",
        "value": "B"
      },
      {
        "label": "C) A descoberta da América e a corrida colonial.",
        "value": "C"
      },
      {
        "label": "D) A ascensão do fascismo na Europa.",
        "value": "D"
      }
    ],
    "correct": "B",
    "explanation": ""
  },
  {
    "title": "Questão 18",
    "prompt": "Qual é a capital do Equador?",
    "options": [
      {
        "label": "A) Quito",
        "value": "A"
      },
      {
        "label": "B) Bogotá",
        "value": "B"
      },
      {
        "label": "C) Lima",
        "value": "C"
      },
      {
        "label": "D) Caracas",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 19",
    "prompt": "Qual foi a principal causa da Guerra do Paraguai?",
    "options": [
      {
        "label": "A) A disputa pela posse de territórios entre Brasil, Argentina e Uruguai.",
        "value": "A"
      },
      {
        "label": "B) A revolta dos escravizados contra o governo paraguaio.",
        "value": "B"
      },
      {
        "label": "C) A descoberta de petróleo no território paraguaio.",
        "value": "C"
      },
      {
        "label": "D) A independência do Brasil.",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  },
  {
    "title": "Questão 20",
    "prompt": "Qual é a capital da Colômbia?",
    "options": [
      {
        "label": "A) Bogotá",
        "value": "A"
      },
      {
        "label": "B) Quito",
        "value": "B"
      },
      {
        "label": "C) Lima",
        "value": "C"
      },
      {
        "label": "D) Caracas",
        "value": "D"
      }
    ],
    "correct": "A",
    "explanation": ""
  }
];

export default function HistoriaGeografiaSimuladoScreen() {
  return <StudyContentScreen kind="simulado" title="Simulado História e Geografia ENCCEJA" subtitle="Prepare-se para o exame com nosso simulado de História e Geografia. Este teste contém 20 questões que cobrem os principais tópicos. Boa sorte!" duration="90 minutos" questions={questions} />;
}
