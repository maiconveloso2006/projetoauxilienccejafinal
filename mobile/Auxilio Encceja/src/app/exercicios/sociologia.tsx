import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Conceitos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"sociedade\" na sociologia?",
    "options": [
      {
        "label": "A) Conjunto de indivíduos que compartilham um território e uma cultura",
        "value": "Conjunto de indivíduos que compartilham um território e uma cultura"
      },
      {
        "label": "B) Grupo de pessoas que moram na mesma cidade",
        "value": "Grupo de pessoas que moram na mesma cidade"
      },
      {
        "label": "C) Conjunto de famílias relacionadas",
        "value": "Conjunto de famílias relacionadas"
      },
      {
        "label": "D) Pessoas que trabalham na mesma empresa",
        "value": "Pessoas que trabalham na mesma empresa"
      }
    ],
    "correct": "Conjunto de indivíduos que compartilham um território e uma cultura",
    "explanation": "Na sociologia, uma sociedade é definida como um conjunto de indivíduos que compartilham um território e uma cultura, interagindo de forma organizada."
  },
  {
    "title": "Exercício 2: Conceitos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"cultura\" na sociologia?",
    "options": [
      {
        "label": "A) Conjunto de crenças, valores, normas e práticas compartilhadas por um grupo",
        "value": "Conjunto de crenças, valores, normas e práticas compartilhadas por um grupo"
      },
      {
        "label": "B) Conhecimento adquirido em escolas",
        "value": "Conhecimento adquirido em escolas"
      },
      {
        "label": "C) Artefatos e tecnologias de um povo",
        "value": "Artefatos e tecnologias de um povo"
      },
      {
        "label": "D) Tradições religiosas de um grupo",
        "value": "Tradições religiosas de um grupo"
      }
    ],
    "correct": "Conjunto de crenças, valores, normas e práticas compartilhadas por um grupo",
    "explanation": "Cultura na sociologia refere-se ao conjunto de crenças, valores, normas, práticas, símbolos e conhecimentos que são compartilhados por um grupo social e transmitidos de geração em geração."
  },
  {
    "title": "Exercício 3: Conceitos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"status\" na sociologia?",
    "options": [
      {
        "label": "A) Posição social de um indivíduo em uma estrutura social",
        "value": "Posição social de um indivíduo em uma estrutura social"
      },
      {
        "label": "B) Comportamento que um indivíduo adota em uma situação específica",
        "value": "Comportamento que um indivíduo adota em uma situação específica"
      },
      {
        "label": "C) Relação entre duas pessoas",
        "value": "Relação entre duas pessoas"
      },
      {
        "label": "D) Ação voluntária de um indivíduo",
        "value": "Ação voluntária de um indivíduo"
      }
    ],
    "correct": "Posição social de um indivíduo em uma estrutura social",
    "explanation": "Status na sociologia refere-se à posição social de um indivíduo ou grupo dentro de uma estrutura social, que determina suas expectativas, direitos e deveres."
  },
  {
    "title": "Exercício 4: Conceitos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"rol\" na sociologia?",
    "options": [
      {
        "label": "A) Conjunto de expectativas sociais associadas a um status",
        "value": "Conjunto de expectativas sociais associadas a um status"
      },
      {
        "label": "B) Posição social de um indivíduo",
        "value": "Posição social de um indivíduo"
      },
      {
        "label": "C) Ação voluntária de um indivíduo",
        "value": "Ação voluntária de um indivíduo"
      },
      {
        "label": "D) Relação entre duas pessoas",
        "value": "Relação entre duas pessoas"
      }
    ],
    "correct": "Conjunto de expectativas sociais associadas a um status",
    "explanation": "Rol (ou papel) na sociologia refere-se ao conjunto de expectativas, normas e comportamentos que são associados a um status ou posição social específica."
  },
  {
    "title": "Exercício 5: Conceitos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"desigualdade social\" na sociologia?",
    "options": [
      {
        "label": "A) Diferenças sistemáticas nas oportunidades e recursos entre diferentes grupos sociais",
        "value": "Diferenças sistemáticas nas oportunidades e recursos entre diferentes grupos sociais"
      },
      {
        "label": "B) Variações individuais nas habilidades e talentos",
        "value": "Variações individuais nas habilidades e talentos"
      },
      {
        "label": "C) Diferenças culturais entre grupos",
        "value": "Diferenças culturais entre grupos"
      },
      {
        "label": "D) Variações nas preferências pessoais",
        "value": "Variações nas preferências pessoais"
      }
    ],
    "correct": "Diferenças sistemáticas nas oportunidades e recursos entre diferentes grupos sociais",
    "explanation": "Desigualdade social na sociologia refere-se a diferenças sistemáticas nas oportunidades, recursos, poder e status entre diferentes grupos sociais dentro de uma sociedade."
  },
  {
    "title": "Exercício 6: Estruturas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"família\" como uma estrutura social?",
    "options": [
      {
        "label": "A) Grupo de pessoas relacionadas por laços de parentesco",
        "value": "Grupo de pessoas relacionadas por laços de parentesco"
      },
      {
        "label": "B) Grupo de amigos que se ajudam mutuamente",
        "value": "Grupo de amigos que se ajudam mutuamente"
      },
      {
        "label": "C) Pessoas que moram na mesma casa",
        "value": "Pessoas que moram na mesma casa"
      },
      {
        "label": "D) Colega de trabalho",
        "value": "Colega de trabalho"
      }
    ],
    "correct": "Grupo de pessoas relacionadas por laços de parentesco",
    "explanation": "Família como uma estrutura social é definida como um grupo de pessoas relacionadas por laços de parentesco (biológicos, legais ou adotivos) que compartilham responsabilidades sociais e econômicas."
  },
  {
    "title": "Exercício 7: Estruturas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"estado\" como uma estrutura social?",
    "options": [
      {
        "label": "A) Instituição política que detém o poder soberano sobre um território",
        "value": "Instituição política que detém o poder soberano sobre um território"
      },
      {
        "label": "B) Grupo de pessoas que governa uma cidade",
        "value": "Grupo de pessoas que governa uma cidade"
      },
      {
        "label": "C) Organização não governamental",
        "value": "Organização não governamental"
      },
      {
        "label": "D) Conjunto de leis de um país",
        "value": "Conjunto de leis de um país"
      }
    ],
    "correct": "Instituição política que detém o poder soberano sobre um território",
    "explanation": "Estado na sociologia é definido como uma instituição política que detém o poder soberano sobre um território e sua população, com capacidade de impor leis e coletar impostos."
  },
  {
    "title": "Exercício 8: Estruturas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"mercado\" como uma estrutura social?",
    "options": [
      {
        "label": "A) Espaço social onde bens e serviços são trocados ou vendidos",
        "value": "Espaço social onde bens e serviços são trocados ou vendidos"
      },
      {
        "label": "B) Lugar físico onde pessoas se encontram",
        "value": "Lugar físico onde pessoas se encontram"
      },
      {
        "label": "C) Conjunto de leis que regem as transações econômicas",
        "value": "Conjunto de leis que regem as transações econômicas"
      },
      {
        "label": "D) Rede de relações sociais",
        "value": "Rede de relações sociais"
      }
    ],
    "correct": "Espaço social onde bens e serviços são trocados ou vendidos",
    "explanation": "Mercado como uma estrutura social é definido como o espaço onde bens e serviços são trocados ou vendidos, envolvendo relações econômicas e sociais entre produtores e consumidores."
  },
  {
    "title": "Exercício 9: Estruturas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"religião\" como uma estrutura social?",
    "options": [
      {
        "label": "A) Sistema de crenças e práticas relacionadas ao sagrado",
        "value": "Sistema de crenças e práticas relacionadas ao sagrado"
      },
      {
        "label": "B) Grupo de pessoas que compartilham ideias políticas",
        "value": "Grupo de pessoas que compartilham ideias políticas"
      },
      {
        "label": "C) Conjunto de leis de um país",
        "value": "Conjunto de leis de um país"
      },
      {
        "label": "D) Artefatos culturais de um povo",
        "value": "Artefatos culturais de um povo"
      }
    ],
    "correct": "Sistema de crenças e práticas relacionadas ao sagrado",
    "explanation": "Religião como uma estrutura social é definida como um sistema de crenças, práticas, símbolos e instituições que se relacionam com o sagrado e que influenciam significativamente o comportamento social."
  },
  {
    "title": "Exercício 10: Estruturas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"educação\" como uma estrutura social?",
    "options": [
      {
        "label": "A) Sistema formal de transmissão de conhecimento e valores",
        "value": "Sistema formal de transmissão de conhecimento e valores"
      },
      {
        "label": "B) Aprendizado informal com os pais",
        "value": "Aprendizado informal com os pais"
      },
      {
        "label": "C) Conjunto de livros de um biblioteca",
        "value": "Conjunto de livros de um biblioteca"
      },
      {
        "label": "D) Artefatos culturais de um povo",
        "value": "Artefatos culturais de um povo"
      }
    ],
    "correct": "Sistema formal de transmissão de conhecimento e valores",
    "explanation": "Educação como uma estrutura social é definida como o sistema formal de instituições (escolas, universidades, etc.) que transmitem conhecimento, habilidades, valores e normas sociais de uma geração para outra."
  },
  {
    "title": "Exercício 11: Dinâmicas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"mobilidade social\" na sociologia?",
    "options": [
      {
        "label": "A) Mudança na posição social de um indivíduo ou grupo ao longo do tempo",
        "value": "Mudança na posição social de um indivíduo ou grupo ao longo do tempo"
      },
      {
        "label": "B) Troca de bens entre indivíduos",
        "value": "Troca de bens entre indivíduos"
      },
      {
        "label": "C) Mudança de endereço de uma pessoa",
        "value": "Mudança de endereço de uma pessoa"
      },
      {
        "label": "D) Troca de opiniões entre grupos",
        "value": "Troca de opiniões entre grupos"
      }
    ],
    "correct": "Mudança na posição social de um indivíduo ou grupo ao longo do tempo",
    "explanation": "Mobilidade social na sociologia refere-se à mudança na posição social de um indivíduo ou grupo ao longo do tempo, podendo ser vertical (ascendente ou descendente) ou horizontal."
  },
  {
    "title": "Exercício 12: Dinâmicas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"conflito social\" na sociologia?",
    "options": [
      {
        "label": "A) Luta por recursos, poder ou valores entre grupos sociais",
        "value": "Luta por recursos, poder ou valores entre grupos sociais"
      },
      {
        "label": "B) Discussão amigável entre amigos",
        "value": "Discussão amigável entre amigos"
      },
      {
        "label": "C) Competição esportiva entre times",
        "value": "Competição esportiva entre times"
      },
      {
        "label": "D) Troca de presentes em família",
        "value": "Troca de presentes em família"
      }
    ],
    "correct": "Luta por recursos, poder ou valores entre grupos sociais",
    "explanation": "Conflito social na sociologia refere-se a lutas por recursos, poder, status ou valores entre diferentes grupos sociais, que podem levar a mudanças sociais significativas."
  },
  {
    "title": "Exercício 13: Dinâmicas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"globalização\" como uma dinâmica social?",
    "options": [
      {
        "label": "A) Processo de crescente interconexão entre sociedades e culturas no mundo",
        "value": "Processo de crescente interconexão entre sociedades e culturas no mundo"
      },
      {
        "label": "B) Desenvolvimento de novas tecnologias de comunicação",
        "value": "Desenvolvimento de novas tecnologias de comunicação"
      },
      {
        "label": "C) Crescimento da população mundial",
        "value": "Crescimento da população mundial"
      },
      {
        "label": "D) Aumento das diferenças culturais entre países",
        "value": "Aumento das diferenças culturais entre países"
      }
    ],
    "correct": "Processo de crescente interconexão entre sociedades e culturas no mundo",
    "explanation": "Globalização como uma dinâmica social é definida como o processo de crescente interconexão entre sociedades, culturas, economias e políticas em nível mundial, facilitado por avanços tecnológicos e de comunicação."
  },
  {
    "title": "Exercício 14: Dinâmicas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"modernização\" como uma dinâmica social?",
    "options": [
      {
        "label": "A) Processo de mudança de sociedades tradicionais para sociedades industriais e pós-industriais",
        "value": "Processo de mudança de sociedades tradicionais para sociedades industriais e pós-industriais"
      },
      {
        "label": "B) Aumento da população rural",
        "value": "Aumento da população rural"
      },
      {
        "label": "C) Mudança das crenças religiosas",
        "value": "Mudança das crenças religiosas"
      },
      {
        "label": "D) Desenvolvimento de novas formas de arte",
        "value": "Desenvolvimento de novas formas de arte"
      }
    ],
    "correct": "Processo de mudança de sociedades tradicionais para sociedades industriais e pós-industriais",
    "explanation": "Modernização como uma dinâmica social é definida como o processo de mudança de sociedades tradicionais para sociedades industriais e pós-industriais, caracterizado por urbanização, crescimento econômico, educação formal e secularização."
  },
  {
    "title": "Exercício 15: Dinâmicas Sociais",
    "prompt": "Qual das seguintes opções define melhor o conceito de \"urbanização\" como uma dinâmica social?",
    "options": [
      {
        "label": "A) Processo de crescimento da população urbana em relação à rural",
        "value": "Processo de crescimento da população urbana em relação à rural"
      },
      {
        "label": "B) Aumento da população rural",
        "value": "Aumento da população rural"
      },
      {
        "label": "C) Desenvolvimento de novas tecnologias agrícolas",
        "value": "Desenvolvimento de novas tecnologias agrícolas"
      },
      {
        "label": "D) Mudança das crenças religiosas",
        "value": "Mudança das crenças religiosas"
      }
    ],
    "correct": "Processo de crescimento da população urbana em relação à rural",
    "explanation": "Urbanização como uma dinâmica social é definida como o processo de crescimento da população urbana em relação à rural, resultante de migrações de pessoas do campo para a cidade em busca de melhores oportunidades econômicas e sociais."
  },
  {
    "title": "Exercício 16: Estudos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o método \"etnografia\" na sociologia?",
    "options": [
      {
        "label": "A) Estudo detalhado de uma comunidade ou grupo social por meio da imersão do pesquisador",
        "value": "Estudo detalhado de uma comunidade ou grupo social por meio da imersão do pesquisador"
      },
      {
        "label": "B) Aplicação de questionários em larga escala",
        "value": "Aplicação de questionários em larga escala"
      },
      {
        "label": "C) Análise estatística de dados secundários",
        "value": "Análise estatística de dados secundários"
      },
      {
        "label": "D) Experimentos controlados em laboratório",
        "value": "Experimentos controlados em laboratório"
      }
    ],
    "correct": "Estudo detalhado de uma comunidade ou grupo social por meio da imersão do pesquisador",
    "explanation": "Etnografia na sociologia é um método de pesquisa qualitativa que envolve o estudo detalhado de uma comunidade ou grupo social por meio da imersão do pesquisador no ambiente do grupo, coleta de dados por um período prolongado e análise profunda das interações sociais e culturais."
  },
  {
    "title": "Exercício 17: Estudos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o método \"estudo de caso\" na sociologia?",
    "options": [
      {
        "label": "A) Análise profunda de um indivíduo, grupo ou instituição específica",
        "value": "Análise profunda de um indivíduo, grupo ou instituição específica"
      },
      {
        "label": "B) Aplicação de questionários em larga escala",
        "value": "Aplicação de questionários em larga escala"
      },
      {
        "label": "C) Análise estatística de dados secundários",
        "value": "Análise estatística de dados secundários"
      },
      {
        "label": "D) Experimentos controlados em laboratório",
        "value": "Experimentos controlados em laboratório"
      }
    ],
    "correct": "Análise profunda de um indivíduo, grupo ou instituição específica",
    "explanation": "Estudo de caso na sociologia é um método de pesquisa que envolve a análise profunda e detalhada de um indivíduo, grupo ou instituição específica, permitindo uma compreensão contextualizada e multifacetada do objeto de estudo."
  },
  {
    "title": "Exercício 18: Estudos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o método \"pesquisa por questionário\" na sociologia?",
    "options": [
      {
        "label": "A) Aplicação de questionários para coletar dados de um grande número de pessoas",
        "value": "Aplicação de questionários para coletar dados de um grande número de pessoas"
      },
      {
        "label": "B) Observação participante em comunidades",
        "value": "Observação participante em comunidades"
      },
      {
        "label": "C) Análise de documentos históricos",
        "value": "Análise de documentos históricos"
      },
      {
        "label": "D) Entrevistas em profundidade",
        "value": "Entrevistas em profundidade"
      }
    ],
    "correct": "Aplicação de questionários para coletar dados de um grande número de pessoas",
    "explanation": "Pesquisa por questionário na sociologia é um método quantitativo que envolve a aplicação de questionários padronizados para coletar dados de um grande número de pessoas, permitindo a análise estatística a generalização de resultados."
  },
  {
    "title": "Exercício 19: Estudos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o método \"entrevista\" na sociologia?",
    "options": [
      {
        "label": "A) Conversa estruturada ou semi-estruturada com um indivíduo para coletar informações",
        "value": "Conversa estruturada ou semi-estruturada com um indivíduo para coletar informações"
      },
      {
        "label": "B) Aplicação de questionários em larga escala",
        "value": "Aplicação de questionários em larga escala"
      },
      {
        "label": "C) Análise estatística de dados secundários",
        "value": "Análise estatística de dados secundários"
      },
      {
        "label": "D) Entrevistas em profundidade",
        "value": "Entrevistas em profundidade"
      }
    ],
    "correct": "Conversa estruturada ou semi-estruturada com um indivíduo para coletar informações",
    "explanation": "Entrevista na sociologia é um método de pesquisa qualitativa que envolve uma conversa estruturada ou semi-estruturada com um indivíduo para coletar informações detalhadas sobre suas percepções, experiências e comportamentos."
  },
  {
    "title": "Exercício 20: Estudos Sociológicos",
    "prompt": "Qual das seguintes opções define melhor o método \"análise de conteúdo\" na sociologia?",
    "options": [
      {
        "label": "A) Exame sistemático e objetivo do conteúdo de comunicação para descrever suas características",
        "value": "Exame sistemático e objetivo do conteúdo de comunicação para descrever suas características"
      },
      {
        "label": "B) Aplicação de questionários em larga escala",
        "value": "Aplicação de questionários em larga escala"
      },
      {
        "label": "C) Observação de grupos em interação",
        "value": "Observação de grupos em interação"
      },
      {
        "label": "D) Entrevistas em profundidade",
        "value": "Entrevistas em profundidade"
      }
    ],
    "correct": "Exame sistemático e objetivo do conteúdo de comunicação para descrever suas características",
    "explanation": "Análise de conteúdo na sociologia é um método de pesquisa que envolve o exame sistemático, objetivo e quantificável do conteúdo de comunicação (textos, imagens, vídeos, etc.) para descrever suas características temáticas, ideológicas ou ideológicas."
  }
];

export default function SociologiaExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de Sociologia para ENCCEJA" subtitle="Prepare-se para a prova com exercícios práticos e feedback imediato." questions={questions} />;
}
