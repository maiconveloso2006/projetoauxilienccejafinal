import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Antiga e Medieval",
    "description": "Estudo das primeiras civilizações, mundo clássico e formação da Europa feudal.",
    "topics": [
      "Mesopotâmia, Egito, Hebreus e Persas",
      "Grécia: Democracia e Cultura",
      "Roma: República e Império",
      "Feudalismo e Igreja Medieval"
    ]
  },
  {
    "title": "Idade Moderna",
    "description": "As grandes navegações, reformas religiosas, absolutismo e o início da idade contemporânea.",
    "topics": [
      "Grandes Navegações e Mercantilismo",
      "Renascimento Cultural e Científico",
      "Reforma Protestante e Contra-Reforma",
      "Revoluções: Inglesa, Francesa e Industrial"
    ]
  },
  {
    "title": "Brasil Colônia",
    "description": "A chegada dos portugueses, a economia açucareira, a mineração e a sociedade colonial.",
    "topics": [
      "Descobrimento e Sistema de Capitanias",
      "Escravidão Africana e Indígena",
      "Ciclo do Ouro e Inconfidência Mineira",
      "Famílias no Brasil Colonial"
    ]
  },
  {
    "title": "Brasil Império",
    "description": "O processo de independência, a estrutura política dos Reinados e a abolição da escravatura.",
    "topics": [
      "Independência do Brasil",
      "Primeiro Reinado e Período Regencial",
      "Segundo Reinado: Café e Política",
      "Guerra do Paraguai e Abolição"
    ]
  },
  {
    "title": "Brasil República",
    "description": "Da Proclamação da República aos dias atuais, passando por Vargas e a Ditadura Militar.",
    "topics": [
      "Proclamação e República da Espada",
      "República do Café com Leite",
      "Era Vargas e Populismo",
      "Ditadura Militar e Redemocratização"
    ]
  },
  {
    "title": "Mundo Contemporâneo",
    "description": "Os grandes conflitos mundiais, a Guerra Fria e o processo de globalização.",
    "topics": [
      "Primeira e Segunda Guerra Mundial",
      "Revolução Russa e Guerra Fria",
      "Descolonização da África e Ásia",
      "Globalização e Neoliberalismo"
    ]
  }
];

export default function HistoriaApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de História" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
