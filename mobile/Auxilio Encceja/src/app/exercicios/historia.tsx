import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Colonização Portuguesa",
    "prompt": "Qual foi o primeiro território no Brasil a ser explorado pelos portugueses?",
    "options": [
      {
        "label": "A) Bahia",
        "value": "Bahia"
      },
      {
        "label": "B) São Paulo",
        "value": "São Paulo"
      },
      {
        "label": "C) Pernambuco",
        "value": "Pernambuco"
      },
      {
        "label": "D) Rio de Janeiro",
        "value": "Rio de Janeiro"
      }
    ],
    "correct": "Bahia",
    "explanation": "A Bahia foi o primeiro território no Brasil a ser explorado pelos portugueses. O primeiro estabelecimento português no Brasil foi o de Porto Seguro, em 1531, mas a Bahia se tornou a primeira capital colonial em 1549."
  },
  {
    "title": "Exercício 2: Ciclo da Cana-de-Açúcar",
    "prompt": "Qual foi a principal região produtora de cana-de-açúcar no Brasil Colonial?",
    "options": [
      {
        "label": "A) Sudeste",
        "value": "Sudeste"
      },
      {
        "label": "B) Norte",
        "value": "Norte"
      },
      {
        "label": "C) Nordeste",
        "value": "Nordeste"
      },
      {
        "label": "D) Sul",
        "value": "Sul"
      }
    ],
    "correct": "Nordeste",
    "explanation": "O Nordeste foi a principal região produtora de cana-de-açúcar no Brasil Colonial. Estados como Pernambuco, Bahia e Alagoas se tornaram os principais centros de produção e exportação de açúcar."
  },
  {
    "title": "Exercício 3: Ciclo do Ouro",
    "prompt": "Qual foi o estado que mais se beneficiou do Ciclo do Ouro no Brasil Colonial?",
    "options": [
      {
        "label": "A) Minas Gerais",
        "value": "Minas Gerais"
      },
      {
        "label": "B) São Paulo",
        "value": "São Paulo"
      },
      {
        "label": "C) Rio de Janeiro",
        "value": "Rio de Janeiro"
      },
      {
        "label": "D) Bahia",
        "value": "Bahia"
      }
    ],
    "correct": "Minas Gerais",
    "explanation": "Minas Gerais foi o estado que mais se beneficiou do Ciclo do Ouro no Brasil Colonial. A descoberta de ouro na região em 1693 levou a uma grande migração e ao desenvolvimento econômico da região."
  },
  {
    "title": "Exercício 4: Escravidão",
    "prompt": "Qual foi a principal causa da escravidão no Brasil Colonial?",
    "options": [
      {
        "label": "A) Falta de mão de obra nativa",
        "value": "Falta de mão de obra nativa"
      },
      {
        "label": "B) Desejo dos africanos de vir para o Brasil",
        "value": "Desejo dos africanos de vir para o Brasil"
      },
      {
        "label": "C) Vingança contra os índios",
        "value": "Vingança contra os índios"
      },
      {
        "label": "D) Divertimento dos portugueses",
        "value": "Divertimento dos portugueses"
      }
    ],
    "correct": "Falta de mão de obra nativa",
    "explanation": "A principal causa da escravidão no Brasil Colonial foi a falta de mão de obra nativa. Os índios eram suscetíveis a doenças e muitas vezes resistiam à escravidão, levando os colonizadores a buscar escravos africanos."
  },
  {
    "title": "Exercício 5: Guerra dos Emboabas",
    "prompt": "Quem participou da Guerra dos Emboabas em 1707?",
    "options": [
      {
        "label": "A) Portugueses e espanhóis",
        "value": "Portugueses e espanhóis"
      },
      {
        "label": "B) Portugueses e indígenas",
        "value": "Portugueses e indígenas"
      },
      {
        "label": "C) Paulistas e emboabas",
        "value": "Paulistas e emboabas"
      },
      {
        "label": "D) Brasileiros e africanos",
        "value": "Brasileiros e africanos"
      }
    ],
    "correct": "Paulistas e emboabas",
    "explanation": "A Guerra dos Emboabas foi um conflito entre os paulistas (colonos nascidos no Brasil) e os emboabas (colonos vindos de Portugal ou de outras colônias). O conflito surgiu por disputas sobre os direitos de exploração do ouro nas Minas Gerais."
  },
  {
    "title": "Exercício 6: Inconfidência Mineira",
    "prompt": "Quem foi o líder da Inconfidência Mineira?",
    "options": [
      {
        "label": "A) João Mendes de Albuquerque",
        "value": "João Mendes de Albuquerque"
      },
      {
        "label": "B) Tiradentes",
        "value": "Tiradentes"
      },
      {
        "label": "C) Dona Leopoldina",
        "value": "Dona Leopoldina"
      },
      {
        "label": "D) Dom João VI",
        "value": "Dom João VI"
      }
    ],
    "correct": "Tiradentes",
    "explanation": "Tiradentes (Joaquim José da Silva Xavier) foi o líder da Inconfidência Mineira, um movimento separatista que ocorreu em 1789 na capitania de Minas Gerais."
  },
  {
    "title": "Exercício 7: Guerra de Canudos",
    "prompt": "Quem liderou a resistência em Canudos contra o governo republicano?",
    "options": [
      {
        "label": "A) Antônio Conselheiro",
        "value": "Antônio Conselheiro"
      },
      {
        "label": "B) D. Pedro II",
        "value": "D. Pedro II"
      },
      {
        "label": "C) Deodoro da Fonseca",
        "value": "Deodoro da Fonseca"
      },
      {
        "label": "D) Marechal Hermes",
        "value": "Marechal Hermes"
      }
    ],
    "correct": "Antônio Conselheiro",
    "explanation": "Antônio Conselheiro foi quem liderou a resistência em Canudos contra o governo republicano. Ele fundou uma comunidade religiosa em 1893 no sertão da Bahia, que foi destruída pelo exército em 1897."
  },
  {
    "title": "Exercício 8: Independência do Brasil",
    "prompt": "Em que data o Brasil declarou sua independência?",
    "options": [
      {
        "label": "A) 15 de novembro de 1889",
        "value": "15 de novembro de 1889"
      },
      {
        "label": "B) 7 de setembro de 1822",
        "value": "7 de setembro de 1822"
      },
      {
        "label": "C) 1820",
        "value": "1820"
      },
      {
        "label": "D) 1825",
        "value": "1825"
      }
    ],
    "correct": "7 de setembro de 1822",
    "explanation": "O Brasil declarou sua independência em 7 de setembro de 1822. No dia 7 de setembro, D. Pedro I proclamou a independência do Brasil do Império Português."
  },
  {
    "title": "Exercício 9: Abolição da Escravatura",
    "prompt": "Qual lei aboliu a escravatura no Brasil?",
    "options": [
      {
        "label": "A) Lei Áurea",
        "value": "Lei Áurea"
      },
      {
        "label": "B) Estatuto do Trabalho",
        "value": "Estatuto do Trabalho"
      },
      {
        "label": "C) Constituição de 1891",
        "value": "Constituição de 1891"
      },
      {
        "label": "D) Lei do Ventre Livre",
        "value": "Lei do Ventre Livre"
      }
    ],
    "correct": "Lei Áurea",
    "explanation": "A Lei Áurea, sancionada em 13 de maio de 1888, aboliu a escravatura no Brasil. A lei foi proposta pela Condessa de Barral e sancionada pelo então presidente Rodrigues Alves."
  },
  {
    "title": "Exercício 10: Guerra do Paraguai",
    "prompt": "Quem comandou o Exército Brasileiro na Guerra do Paraguai?",
    "options": [
      {
        "label": "A) Deodoro da Fonseca",
        "value": "Deodoro da Fonseca"
      },
      {
        "label": "B) Marechal Hermes",
        "value": "Marechal Hermes"
      },
      {
        "label": "C) Marechal Floriano Peixoto",
        "value": "Marechal Floriano Peixoto"
      },
      {
        "label": "D) Marechal Cândido Rondon",
        "value": "Marechal Cândido Rondon"
      }
    ],
    "correct": "Marechal Floriano Peixoto",
    "explanation": "Marechal Floriano Peixoto comandou o Exército Brasileiro na Guerra do Paraguai. Ele foi um dos heróis da guerra e posteriormente tornou-se vice-presidente e depois presidente da República."
  },
  {
    "title": "Exercício 11: Constituição de 1824",
    "prompt": "Qual foi o sistema de governo estabelecido pela Constituição de 1824?",
    "options": [
      {
        "label": "A) Monarquia Absoluta",
        "value": "Monarquia Absoluta"
      },
      {
        "label": "B) Monarquia Parlamentar",
        "value": "Monarquia Parlamentar"
      },
      {
        "label": "C) República Federal",
        "value": "República Federal"
      },
      {
        "label": "D) República Presidencial",
        "value": "República Presidencial"
      }
    ],
    "correct": "Monarquia Parlamentar",
    "explanation": "A Constituição de 1824 estabeleceu uma Monarquia Parlamentar no Brasil. O sistema conferia amplos poderes ao imperador, mas também previa limitações e controles por parte do Congresso Nacional."
  },
  {
    "title": "Exercício 12: Guerra dos Farrapos",
    "prompt": "Quem foi o líder da República Rio-Grandense durante a Guerra dos Farrapos?",
    "options": [
      {
        "label": "A) Dom Pedro I",
        "value": "Dom Pedro I"
      },
      {
        "label": "B) Dom João VI",
        "value": "Dom João VI"
      },
      {
        "label": "C) Manuel Luis Osório",
        "value": "Manuel Luis Osório"
      },
      {
        "label": "D) Bento Gonçalves da Silva",
        "value": "Bento Gonçalves da Silva"
      }
    ],
    "correct": "Bento Gonçalves da Silva",
    "explanation": "Bento Gonçalves da Silva foi o líder da República Rio-Grandense durante a Guerra dos Farrapos. Ele proclamou a República Rio-Grandense em 11 de setembro de 1835, separando-se do Império do Brasil."
  },
  {
    "title": "Exercício 13: Abolicionismo",
    "prompt": "Qual foi a principal organização abolicionista no Brasil?",
    "options": [
      {
        "label": "A) Partido Republicano",
        "value": "Partido Republicano"
      },
      {
        "label": "B) Partido Liberal",
        "value": "Partido Liberal"
      },
      {
        "label": "C) Comissão Central Abolicionista",
        "value": "Comissão Central Abolicionista"
      },
      {
        "label": "D) Inconfidência Mineira",
        "value": "Inconfidência Mineira"
      }
    ],
    "correct": "Comissão Central Abolicionista",
    "explanation": "A Comissão Central Abolicionista foi a principal organização abolicionista no Brasil. Fundada em 1880, ela coordenou as campanhas abolicionistas no país até a promulgação da Lei Áurea em 1888."
  },
  {
    "title": "Exercício 14: Crise na Monarquia",
    "prompt": "Qual foi um dos principais fatores que levaram à crise na monarquia no Brasil?",
    "options": [
      {
        "label": "A) Política do Cabidão",
        "value": "Política do Cabidão"
      },
      {
        "label": "B) Questão religiosa",
        "value": "Questão religiosa"
      },
      {
        "label": "C) Guerra do Paraguai",
        "value": "Guerra do Paraguai"
      },
      {
        "label": "D) Abolição da escravatura",
        "value": "Abolição da escravatura"
      }
    ],
    "correct": "Questão religiosa",
    "explanation": "A Questão religiosa foi um dos principais fatores que levaram à crise na monarquia no Brasil. O conflito surgiu em 1872 quando o imperador D. Pedro II tentou limitar os privilégios da Igreja Católica, que gerou forte oposição da hierarquia eclesiástica e de setores conservadores da sociedade."
  },
  {
    "title": "Exercício 15: Proclamação da República",
    "prompt": "Quem liderou a Proclamação da República do Brasil?",
    "options": [
      {
        "label": "A) Deodoro da Fonseca",
        "value": "Deodoro da Fonseca"
      },
      {
        "label": "B) Marechal Hermes",
        "value": "Marechal Hermes"
      },
      {
        "label": "C) Marechal Floriano Peixoto",
        "value": "Marechal Floriano Peixoto"
      },
      {
        "label": "D) Marechal Cândido Rondon",
        "value": "Marechal Cândido Rondon"
      }
    ],
    "correct": "Deodoro da Fonseca",
    "explanation": "Deodoro da Fonseca liderou a Proclamação da República do Brasil. Ele era marechal do Exército e presidente do Conselho de Ministros e do Senado Imperial no momento da revolução."
  },
  {
    "title": "Exercício 16: Constituição de 1891",
    "prompt": "Qual foi a forma de governo estabelecida pela Constituição de 1891?",
    "options": [
      {
        "label": "A) República Presidencialista",
        "value": "República Presidencialista"
      },
      {
        "label": "B) República Parlamentarista",
        "value": "República Parlamentarista"
      },
      {
        "label": "C) Monarquia Federal",
        "value": "Monarquia Federal"
      },
      {
        "label": "D) República Monárquica",
        "value": "República Monárquica"
      }
    ],
    "correct": "República Presidencialista",
    "explanation": "A Constituição de 1891 estabeleceu uma República Presidencialista no Brasil. O sistema conferia amplos poderes ao presidente da República, eleito indiretamente pelo Congresso Nacional."
  },
  {
    "title": "Exercício 17: República Velha",
    "prompt": "Qual foi o sistema político predominante durante a República Velha (1889-1930)?",
    "options": [
      {
        "label": "A) Democracia direta",
        "value": "Democracia direta"
      },
      {
        "label": "B) Partidarismo",
        "value": "Partidarismo"
      },
      {
        "label": "C) Caciquismo e coronelismo",
        "value": "Caciquismo e coronelismo"
      },
      {
        "label": "D) Federalismo",
        "value": "Federalismo"
      }
    ],
    "correct": "Caciquismo e coronelismo",
    "explanation": "O sistema político predominante durante a República Velha (1889-1930) foi o Caciquismo e coronelismo. Esse sistema baseava-se em clientelismo, corrupção e controle político regional por parte de líderes locais (coroneis) apoiados por políticos nacionais (caciques)."
  },
  {
    "title": "Exercício 18: Revolta da Armada",
    "prompt": "Quando ocorreu a Revolta da Armada?",
    "options": [
      {
        "label": "A) 1891",
        "value": "1891"
      },
      {
        "label": "B) 1893",
        "value": "1893"
      },
      {
        "label": "C) 1895",
        "value": "1895"
      },
      {
        "label": "D) 1890",
        "value": "1890"
      }
    ],
    "correct": "1893",
    "explanation": "A Revolta da Armada ocorreu em 1893. Foi uma rebelião de oficiais da Marinha contra o governo de Floriano Peixoto, que resultou em um conflito armado que durou cerca de um ano."
  },
  {
    "title": "Exercício 19: Revolução de 1930",
    "prompt": "Quem liderou a Revolução de 1930?",
    "options": [
      {
        "label": "A) Getúlio Vargas",
        "value": "Getúlio Vargas"
      },
      {
        "label": "B) Washington Luís",
        "value": "Washington Luís"
      },
      {
        "label": "C) Júlio Prestes",
        "value": "Júlio Prestes"
      },
      {
        "label": "D) Arthur Bernardes",
        "value": "Arthur Bernardes"
      }
    ],
    "correct": "Getúlio Vargas",
    "explanation": "Getúlio Vargas liderou a Revolução de 1930. A revolta foi motivada pela fraude eleitoral nas eleições de 1930 e resultou no fim da República Velha e na ascensão de Vargas ao poder."
  },
  {
    "title": "Exercício 20: Estado Novo",
    "prompt": "Qual foi a característica principal do Estado Novo (1937-1945)?",
    "options": [
      {
        "label": "A) Democracia representativa",
        "value": "Democracia representativa"
      },
      {
        "label": "B) Autoritarismo",
        "value": "Autoritarismo"
      },
      {
        "label": "C) Federalismo",
        "value": "Federalismo"
      },
      {
        "label": "D) Parlamentarismo",
        "value": "Parlamentarismo"
      }
    ],
    "correct": "Autoritarismo",
    "explanation": "A característica principal do Estado Novo (1937-1945) foi o Autoritarismo. Getúlio Vargas fechou o Congresso Nacional, promulgou uma nova constituição e concentrou poderes executivos, criando um regime semelhante ao fascismo europeu."
  },
  {
    "title": "Exercício 21: Segunda Guerra Mundial",
    "prompt": "Em que ano o Brasil entrou na Segunda Guerra Mundial?",
    "options": [
      {
        "label": "A) 1941",
        "value": "1941"
      },
      {
        "label": "B) 1942",
        "value": "1942"
      },
      {
        "label": "C) 1943",
        "value": "1943"
      },
      {
        "label": "D) 1944",
        "value": "1944"
      }
    ],
    "correct": "1942",
    "explanation": "O Brasil entrou na Segunda Guerra Mundial em 1942. A entrada foi motivada pelo afundamento de vários navios brasileiros por submarinos alemães, após o qual o governo brasileiro declarou guerra contra as potências do Eixo."
  },
  {
    "title": "Exercício 22: Força Expedicionária Brasira",
    "prompt": "Qual foi a principal contribuição da Força Expedicionária Brasileira na Segunda Guerra Mundial?",
    "options": [
      {
        "label": "A) Combate na frente do Pacífico",
        "value": "Combate na frente do Pacífico"
      },
      {
        "label": "B) Combate na frente da Itália",
        "value": "Combate na frente da Itália"
      },
      {
        "label": "C) Produção de material bélico",
        "value": "Produção de material bélico"
      },
      {
        "label": "D) Transporte aéreo de tropas",
        "value": "Transporte aéreo de tropas"
      }
    ],
    "correct": "Combate na frente da Itália",
    "explanation": "A principal contribuição da Força Expedicionária Brasileira na Segunda Guerra Mundial foi o Combate na frente da Itália. Cerca de 25 mil brasileiros integraram a Força Expedicionária, que lutou na Campanha da Itália entre 1944 e 1945."
  },
  {
    "title": "Exercício 23: Guerra Fria",
    "prompt": "Qual foi a posição do Brasil durante a Guerra Fria?",
    "options": [
      {
        "label": "A) Neutral",
        "value": "Neutral"
      },
      {
        "label": "B) Aliado dos EUA",
        "value": "Aliado dos EUA"
      },
      {
        "label": "C) Aliado da URSS",
        "value": "Aliado da URSS"
      },
      {
        "label": "D) Aliado da China",
        "value": "Aliado da China"
      }
    ],
    "correct": "Aliado dos EUA",
    "explanation": "O Brasil posicionou-se como Aliado dos EUA durante a Guerra Fria. O país manteve uma posição anticomunista e participou de diversas organizações internacionais lideradas pelos EUA."
  },
  {
    "title": "Exercício 24: Ditadura Militar",
    "prompt": "Qual foi o principal evento que marcou o início da Ditadura Militar no Brasil?",
    "options": [
      {
        "label": "A) Golpe de Estado de 1964",
        "value": "Golpe de Estado de 1964"
      },
      {
        "label": "B) Revolução de 1930",
        "value": "Revolução de 1930"
      },
      {
        "label": "C) Revolução de 1932",
        "value": "Revolução de 1932"
      },
      {
        "label": "D) Proclamação da República",
        "value": "Proclamação da República"
      }
    ],
    "correct": "Golpe de Estado de 1964",
    "explanation": "O principal evento que marcou o início da Ditadura Militar no Brasil foi o Golpe de Estado de 1964. A revolta militar, liderada por generais como Castello Branco, depôs o presidente João Goulart e instaurou um regime militar no país."
  },
  {
    "title": "Exercício 25: Diretas Já",
    "prompt": "Em que ano ocorreu o processo de redemocratização no Brasil?",
    "options": [
      {
        "label": "A) 1982",
        "value": "1982"
      },
      {
        "label": "B) 1984",
        "value": "1984"
      },
      {
        "label": "C) 1986",
        "value": "1986"
      },
      {
        "label": "D) 1988",
        "value": "1988"
      }
    ],
    "correct": "1984",
    "explanation": "O ano de 1984 foi marcado pelo movimento Diretas Já, que exigia a realização de eleições diretas para presidente. Embora as eleições diretas só ocorreram em 1989, o movimento Diretas Já foi um importante passo no processo de redemocratização do Brasil."
  }
];

export default function HistoriaExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de História para ENCCEJA" subtitle="Prepare-se para o exame com exercícios práticos e feedback imediato." questions={questions} />;
}
