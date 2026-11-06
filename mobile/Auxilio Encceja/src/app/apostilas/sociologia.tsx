import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Introdução à Sociologia",
    "description": "Os fundamentos da ciência social, seu surgimento e os principais pensadores clássicos.",
    "topics": [
      "O que é Sociologia?",
      "O Positivismo de Comte e Durkheim",
      "A Sociologia compreensiva de Weber",
      "O Materialismo Histórico de Marx"
    ]
  },
  {
    "title": "Cultura e Sociedade",
    "description": "Entenda a formação da identidade cultural, o etnocentrismo e a diversidade no Brasil.",
    "topics": [
      "Conceito de Cultura e Etnocentrismo",
      "Indivíduo e Socialização",
      "Identidade e Diversidade Cultural",
      "Patrimônio Cultural e Memória"
    ]
  },
  {
    "title": "Estrutura Social",
    "description": "Análise das camadas sociais, desigualdade e os conceitos de classes e status.",
    "topics": [
      "Estratificação e Classes Sociais",
      "Mobilidade Social",
      "Pobreza e Desigualdade no Brasil",
      "Movimentos Sociais"
    ]
  },
  {
    "title": "Mundo do Trabalho",
    "description": "A evolução do trabalho, a Revolução Industrial e as transformações no mercado atual.",
    "topics": [
      "Taylorismo, Fordismo e Toyotismo",
      "Industrialização e Urbanização",
      "Desemprego Estrutural",
      "Tecnologia e o futuro do trabalho"
    ]
  },
  {
    "title": "Poder e Política",
    "description": "Conceitos de Estado, democracia, cidadania e os sistemas de governo.",
    "topics": [
      "Estado, Nação e Governo",
      "Democracia e Representação",
      "Cidadania e Direitos Civis",
      "Partidos Políticos e Eleições"
    ]
  },
  {
    "title": "Mudança Social",
    "description": "Entenda a globalização, o impacto da mídia e as questões ambientais contemporâneas.",
    "topics": [
      "Globalização e Cultura Global",
      "Meios de Comunicação de Massa",
      "Sociedade de Consumo",
      "Crise Ambiental e Sustentabilidade"
    ]
  }
];

export default function SociologiaApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de Sociologia" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
