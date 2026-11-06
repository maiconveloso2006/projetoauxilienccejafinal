import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Relevo Brasileiro",
    "prompt": "Qual é a principal formação do relevo brasileiro?",
    "options": [
      {
        "label": "A) Planaltos",
        "value": "Planaltos"
      },
      {
        "label": "B) Planícies",
        "value": "Planícies"
      },
      {
        "label": "C) Depressões",
        "value": "Depressões"
      },
      {
        "label": "D) Montanhas",
        "value": "Montanhas"
      }
    ],
    "correct": "Planaltos",
    "explanation": "Os planaltos são a principal formação do relevo brasileiro, ocupando cerca de 40% do território nacional. Eles são áreas de terrenos elevados com superfícies planas ou onduladas."
  },
  {
    "title": "Exercício 2: Bacias Hidrográficas",
    "prompt": "Qual é a maior bacia hidrográfica do Brasil?",
    "options": [
      {
        "label": "A) Bacia do São Francisco",
        "value": "Bacia do São Francisco"
      },
      {
        "label": "B) Bacia do Paraná",
        "value": "Bacia do Paraná"
      },
      {
        "label": "C) Bacia Amazônica",
        "value": "Bacia Amazônica"
      },
      {
        "label": "D) Bacia do Tocantins-Araguaia",
        "value": "Bacia do Tocantins-Araguaia"
      }
    ],
    "correct": "Bacia Amazônica",
    "explanation": "A Bacia Amazônica é a maior bacia hidrográfica do Brasil e do mundo, com aproximadamente 7 milhões de km². Ela abrange vários países da América do Sul, mas a maior parte está em território brasileiro."
  },
  {
    "title": "Exercício 3: Climas do Brasil",
    "prompt": "Qual tipo climático predomina na maior parte do território brasileiro?",
    "options": [
      {
        "label": "A) Equatorial",
        "value": "Equatorial"
      },
      {
        "label": "B) Tropical",
        "value": "Tropical"
      },
      {
        "label": "C) Subtropical",
        "value": "Subtropical"
      },
      {
        "label": "D) Semiárido",
        "value": "Semiárido"
      }
    ],
    "correct": "Tropical",
    "explanation": "O clima tropical predomina na maior parte do território brasileiro, especialmente nas regiões Centro-Oeste, Sudeste e parte do Nordeste. Caracteriza-se por temperaturas médias elevadas e duas estações bem definidas: verão chuvoso e inverno seco."
  },
  {
    "title": "Exercício 4: Vegetação",
    "prompt": "Qual é o maior bioma brasileiro?",
    "options": [
      {
        "label": "A) Mata Atlântica",
        "value": "Mata Atlântica"
      },
      {
        "label": "B) Cerrado",
        "value": "Cerrado"
      },
      {
        "label": "C) Amazônia",
        "value": "Amazônia"
      },
      {
        "label": "D) Caatinga",
        "value": "Caatinga"
      }
    ],
    "correct": "Amazônia",
    "explanation": "A Amazônia é o maior bioma brasileiro, ocupando cerca de 40% do território nacional. É a maior floresta tropical do mundo e abriga uma biodiversidade incalculável."
  },
  {
    "title": "Exercício 5: Geomorfologia",
    "prompt": "Qual processo geomorfológico é predominante na formação do relevo brasileiro?",
    "options": [
      {
        "label": "A) Vulcanismo",
        "value": "Vulcanismo"
      },
      {
        "label": "B) Tectonismo",
        "value": "Tectonismo"
      },
      {
        "label": "C) Erosão",
        "value": "Erosão"
      },
      {
        "label": "D) Sedimentação",
        "value": "Sedimentação"
      }
    ],
    "correct": "Erosão",
    "explanation": "A erosão é o processo geomorfológico predominante na formação do relevo brasileiro. O Brasil está em uma área tectonicamente estável, e seu relevo atual foi modelado principalmente por processos erosivos."
  },
  {
    "title": "Exercício 6: Solos",
    "prompt": "Qual tipo de solo é predominante na região do Cerrado brasileiro?",
    "options": [
      {
        "label": "A) Latossolo",
        "value": "Latossolo"
      },
      {
        "label": "B) Podzólico",
        "value": "Podzólico"
      },
      {
        "label": "C) Areia quartzosa",
        "value": "Areia quartzosa"
      },
      {
        "label": "D) Solo orgânico",
        "value": "Solo orgânico"
      }
    ],
    "correct": "Latossolo",
    "explanation": "O latossolo é o tipo de solo predominante na região do Cerrado brasileiro. É um solo profundo, bem drenado, ácido e com baixa fertilidade natural, que exige correção para uso agrícola."
  },
  {
    "title": "Exercício 7: Recursos Hídricos",
    "prompt": "Qual é o principal aquífero do Brasil?",
    "options": [
      {
        "label": "A) Aquífero Guarani",
        "value": "Aquífero Guarani"
      },
      {
        "label": "B) Aquífero Alter do Chão",
        "value": "Aquífero Alter do Chão"
      },
      {
        "label": "C) Aquífero Bauru",
        "value": "Aquífero Bauru"
      },
      {
        "label": "D) Aquífero Serra Geral",
        "value": "Aquífero Serra Geral"
      }
    ],
    "correct": "Aquífero Guarani",
    "explanation": "O Aquífero Guarani é o principal aquífero do Brasil e um dos maiores do mundo. Ele se estende por oito países da América do Sul e abrange uma área de aproximadamente 1,2 milhão de km² em território brasileiro."
  },
  {
    "title": "Exercício 8: Domínios Morfoclimáticos",
    "prompt": "Qual domínio morfoclimático é caracterizado por clima semiárido e vegetação de xerófitas?",
    "options": [
      {
        "label": "A) Domínio Amazônico",
        "value": "Domínio Amazônico"
      },
      {
        "label": "B) Domínio do Cerrado",
        "value": "Domínio do Cerrado"
      },
      {
        "label": "C) Domínio da Caatinga",
        "value": "Domínio da Caatinga"
      },
      {
        "label": "D) Domínio dos Mares de Morros",
        "value": "Domínio dos Mares de Morros"
      }
    ],
    "correct": "Domínio da Caatinga",
    "explanation": "O Domínio da Caatinga é caracterizado por clima semiárido e vegetação de xerófitas. Ocupa a maior parte da região Nordeste do Brasil e apresenta temperaturas elevadas e baixos índices pluviométricos."
  },
  {
    "title": "Exercício 9: Fenômenos Climáticos",
    "prompt": "Qual fenômeno climático é responsável pelas secas prolongadas na região Nordeste do Brasil?",
    "options": [
      {
        "label": "A) El Niño",
        "value": "El Niño"
      },
      {
        "label": "B) La Niña",
        "value": "La Niña"
      },
      {
        "label": "C) Zona de Convergência Intertropical",
        "value": "Zona de Convergência Intertropical"
      },
      {
        "label": "D) Dipolo do Atlântico",
        "value": "Dipolo do Atlântico"
      }
    ],
    "correct": "Zona de Convergência Intertropical",
    "explanation": "A Zona de Convergência Intertropical (ZCIT) é o fenômeno climático que mais influencia as chuvas na região Nordeste do Brasil. Quando a ZCIT não atinge a região durante o verão austral, ocorrem as secas prolongadas."
  },
  {
    "title": "Exercício 10: Estrutura Geológica",
    "prompt": "Qual era geológica predomina na estrutura do território brasileiro?",
    "options": [
      {
        "label": "A) Era Cenozoica",
        "value": "Era Cenozoica"
      },
      {
        "label": "B) Era Mesozoica",
        "value": "Era Mesozoica"
      },
      {
        "label": "C) Era Paleozoica",
        "value": "Era Paleozoica"
      },
      {
        "label": "D) Eras Pré-Cambrianas",
        "value": "Eras Pré-Cambrianas"
      }
    ],
    "correct": "Eras Pré-Cambrianas",
    "explanation": "As Eras Pré-Cambrianas correspondem a aproximadamente 36% do território brasileiro, sendo predominantes na estrutura geológica do país. Essas formações antigas compõem os escudos cristalinos."
  },
  {
    "title": "Exercício 11: População Brasileira",
    "prompt": "Qual é a região mais populosa do Brasil?",
    "options": [
      {
        "label": "A) Norte",
        "value": "Norte"
      },
      {
        "label": "B) Nordeste",
        "value": "Nordeste"
      },
      {
        "label": "C) Sudeste",
        "value": "Sudeste"
      },
      {
        "label": "D) Sul",
        "value": "Sul"
      }
    ],
    "correct": "Sudeste",
    "explanation": "A região Sudeste é a mais populosa do Brasil, concentrando aproximadamente 42% da população do país."
  },
  {
    "title": "Exercício 12: Urbanização",
    "prompt": "Qual é a taxa de urbanização do Brasil atualmente?",
    "options": [
      {
        "label": "A) Cerca de 65%",
        "value": "Cerca de 65%"
      },
      {
        "label": "B) Cerca de 75%",
        "value": "Cerca de 75%"
      },
      {
        "label": "C) Cerca de 85%",
        "value": "Cerca de 85%"
      },
      {
        "label": "D) Cerca de 95%",
        "value": "Cerca de 95%"
      }
    ],
    "correct": "Cerca de 85%",
    "explanation": "A taxa de urbanização do Brasil atualmente é de aproximadamente 85%."
  },
  {
    "title": "Exercício 13: Migrações",
    "prompt": "Qual foi o principal fluxo migratório interno no Brasil durante o século XX?",
    "options": [
      {
        "label": "A) Norte para Sul",
        "value": "Norte para Sul"
      },
      {
        "label": "B) Nordeste para Sudeste",
        "value": "Nordeste para Sudeste"
      },
      {
        "label": "C) Sul para Norte",
        "value": "Sul para Norte"
      },
      {
        "label": "D) Sudeste para Nordeste",
        "value": "Sudeste para Nordeste"
      }
    ],
    "correct": "Nordeste para Sudeste",
    "explanation": "O principal fluxo migratório interno no Brasil durante o século XX foi do Nordeste para o Sudeste, motivado pelas secas no Nordeste e pelo desenvolvimento industrial no Sudeste."
  },
  {
    "title": "Exercício 14: Economia",
    "prompt": "Qual é o principal setor da economia brasileira atualmente?",
    "options": [
      {
        "label": "A) Primário",
        "value": "Primário"
      },
      {
        "label": "B) Secundário",
        "value": "Secundário"
      },
      {
        "label": "C) Terciário",
        "value": "Terciário"
      },
      {
        "label": "D) Quaternário",
        "value": "Quaternário"
      }
    ],
    "correct": "Terciário",
    "explanation": "O setor terciário (comércio e serviços) é o principal da economia brasileira, representando aproximadamente 75% do PIB do país."
  },
  {
    "title": "Exercício 15: Rede Urbana",
    "prompt": "Qual é a maior metrópole do Brasil?",
    "options": [
      {
        "label": "A) Rio de Janeiro",
        "value": "Rio de Janeiro"
      },
      {
        "label": "B) São Paulo",
        "value": "São Paulo"
      },
      {
        "label": "C) Brasília",
        "value": "Brasília"
      },
      {
        "label": "D) Salvador",
        "value": "Salvador"
      }
    ],
    "correct": "São Paulo",
    "explanation": "São Paulo é a maior metrópole do Brasil e uma das maiores do mundo. A Região Metropolitana de São Paulo possui mais de 21 milhões de habitantes."
  },
  {
    "title": "Exercício 16: Indústria",
    "prompt": "Qual é o principal polo industrial do Brasil?",
    "options": [
      {
        "label": "A) Região Metropolitana de São Paulo",
        "value": "Região Metropolitana de São Paulo"
      },
      {
        "label": "B) Região Sudeste",
        "value": "Região Sudeste"
      },
      {
        "label": "C) Região Sul",
        "value": "Região Sul"
      },
      {
        "label": "D) Região Nordeste",
        "value": "Região Nordeste"
      }
    ],
    "correct": "Região Metropolitana de São Paulo",
    "explanation": "A Região Metropolitana de São Paulo é o principal polo industrial do Brasil, concentrando grande parte do parque industrial nacional."
  },
  {
    "title": "Exercício 17: Agricultura",
    "prompt": "Qual é o principal produto agrícola de exportação do Brasil?",
    "options": [
      {
        "label": "A) Café",
        "value": "Café"
      },
      {
        "label": "B) Soja",
        "value": "Soja"
      },
      {
        "label": "C) Cana-de-açúcar",
        "value": "Cana-de-açúcar"
      },
      {
        "label": "D) Milho",
        "value": "Milho"
      }
    ],
    "correct": "Soja",
    "explanation": "A soja é o principal produto agrícola de exportação do Brasil. O país é o maior produtor e exportador de soja do mundo."
  },
  {
    "title": "Exercício 18: Desigualdades Regionais",
    "prompt": "Qual indicador social melhor expressa as desigualdades regionais no Brasil?",
    "options": [
      {
        "label": "A) Taxa de natalidade",
        "value": "Taxa de natalidade"
      },
      {
        "label": "B) IDH",
        "value": "IDH"
      },
      {
        "label": "C) Densidade demográfica",
        "value": "Densidade demográfica"
      },
      {
        "label": "D) Taxa de urbanização",
        "value": "Taxa de urbanização"
      }
    ],
    "correct": "IDH",
    "explanation": "O Índice de Desenvolvimento Humano (IDH) é o indicador que melhor expressa as desigualdades regionais no Brasil, combinando medidas de educação, saúde e renda."
  },
  {
    "title": "Exercício 19: Globalização",
    "prompt": "Qual é o principal bloco econômico do qual o Brasil faz parte?",
    "options": [
      {
        "label": "A) Mercosul",
        "value": "Mercosul"
      },
      {
        "label": "B) União Europeia",
        "value": "União Europeia"
      },
      {
        "label": "C) NAFTA",
        "value": "NAFTA"
      },
      {
        "label": "D) ASEAN",
        "value": "ASEAN"
      }
    ],
    "correct": "Mercosul",
    "explanation": "O Mercosul (Mercado Comum do Sul) é o principal bloco econômico do qual o Brasil faz parte, criado em 1991."
  },
  {
    "title": "Exercício 20: Meio Ambiente",
    "prompt": "Qual é o principal desafio ambiental enfrentado pelo Brasil atualmente?",
    "options": [
      {
        "label": "A) Poluição industrial",
        "value": "Poluição industrial"
      },
      {
        "label": "B) Desmatamento",
        "value": "Desmatamento"
      },
      {
        "label": "C) Esgotamento dos recursos hídricos",
        "value": "Esgotamento dos recursos hídricos"
      },
      {
        "label": "D) Contaminação dos solos",
        "value": "Contaminação dos solos"
      }
    ],
    "correct": "Desmatamento",
    "explanation": "O desmatamento é o principal desafio ambiental enfrentado pelo Brasil, especialmente na Amazônia e no Cerrado."
  }
];

export default function GeografiaExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de Geografia para ENCCEJA" subtitle="Prepare-se para o exame com exercícios práticos e feedback imediato." questions={questions} />;
}
