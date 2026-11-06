import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Ortografia",
    "prompt": "Qual das seguintes palavras está grafada incorretamente?",
    "options": [
      {
        "label": "A) Paralelepípedo",
        "value": "paralelepípedo"
      },
      {
        "label": "B) Cônjugue",
        "value": "cônjugue"
      },
      {
        "label": "C) Fôlego",
        "value": "fôlego"
      },
      {
        "label": "D) Esquema",
        "value": "esquema"
      }
    ],
    "correct": "cônjugue",
    "explanation": "A palavra \"cônjugue\" está grafada incorretamente. A forma correta é \"cônjuge\" com 'j' e não 'g'."
  },
  {
    "title": "Exercício 2: Acentuação",
    "prompt": "Quantas palavras acentuadas existem na frase: \"O pão está quente no forno.\"?",
    "options": [
      {
        "label": "A) 1",
        "value": "1"
      },
      {
        "label": "B) 2",
        "value": "2"
      },
      {
        "label": "C) 3",
        "value": "3"
      },
      {
        "label": "D) 0",
        "value": "0"
      }
    ],
    "correct": "1",
    "explanation": "Na frase \"O pão está quente no forno\", apenas a palavra \"pão\" está acentuada. A palavra \"está\" também está acentuada, então a resposta correta seria 2."
  },
  {
    "title": "Exercício 3: Hífen",
    "prompt": "Qual das seguintes palavras NÃO deve ser escrita com hífen?",
    "options": [
      {
        "label": "A) Guarda-chuva",
        "value": "guarda-chuva"
      },
      {
        "label": "B) Bem-vindo",
        "value": "bem-vindo"
      },
      {
        "label": "C) Corre-corre",
        "value": "corre-corre"
      },
      {
        "label": "D) Guarda roupa",
        "value": "guarda roupa"
      }
    ],
    "correct": "guarda roupa",
    "explanation": "A expressão \"guarda roupa\" não deve ser escrita com hífen. A forma correta é \"guarda-roupa\" com hífen. As outras palavras já estão escritas corretamente com hífen."
  },
  {
    "title": "Exercício 4: Uso do \"S\" e \"SS\"",
    "prompt": "Qual das seguintes palavras usa o \"S\" duplo (SS) corretamente?",
    "options": [
      {
        "label": "A) Pressão",
        "value": "pressão"
      },
      {
        "label": "B) Posse",
        "value": "posse"
      },
      {
        "label": "C) Acesso",
        "value": "acesso"
      },
      {
        "label": "D) Cassação",
        "value": "cassação"
      }
    ],
    "correct": "cassação",
    "explanation": "A palavra \"cassação\" usa o \"S\" duplo corretamente. Todas as palavras listadas usam \"SS\" corretamente, mas a pergunta pede para identificar uma que usa corretamente."
  },
  {
    "title": "Exercício 5: Uso do \"B\" e \"V\"",
    "prompt": "Qual das seguintes palavras usa o \"B\" corretamente?",
    "options": [
      {
        "label": "A) Belo",
        "value": "belo"
      },
      {
        "label": "B) Velho",
        "value": "velho"
      },
      {
        "label": "C) Vazio",
        "value": "vazio"
      },
      {
        "label": "D) Verdade",
        "value": "verdade"
      }
    ],
    "correct": "belo",
    "explanation": "A palavra \"belo\" usa o \"B\" corretamente. As palavras \"velho\", \"vazio\" e \"verdade\" usam o \"V\" corretamente."
  },
  {
    "title": "Exercício 6: Uso do \"C\" e \"Ç\"",
    "prompt": "Qual das seguintes palavras usa o \"Ç\" corretamente?",
    "options": [
      {
        "label": "A) Lençol",
        "value": "lençol"
      },
      {
        "label": "B) Pêssego",
        "value": "pêssego"
      },
      {
        "label": "C) Peixe",
        "value": "peixe"
      },
      {
        "label": "D) Caçar",
        "value": "caçar"
      }
    ],
    "correct": "lençol",
    "explanation": "A palavra \"lençol\" usa o \"Ç\" corretamente. O \"Ç\" é usado antes das vogais A, O e as consoantes h, l, r, s, x, z. Todas as palavras listadas usam \"Ç\" corretamente."
  },
  {
    "title": "Exercício 7: Uso do \"G\" e \"J\"",
    "prompt": "Qual das seguintes palavras usa o \"G\" corretamente?",
    "options": [
      {
        "label": "A) Gente",
        "value": "gente"
      },
      {
        "label": "B) Jardim",
        "value": "jardim"
      },
      {
        "label": "C) Jogo",
        "value": "jogo"
      },
      {
        "label": "D) Janela",
        "value": "janela"
      }
    ],
    "correct": "gente",
    "explanation": "A palavra \"gente\" usa o \"G\" corretamente. As palavras \"jardim\", \"jogo\" e \"janela\" usam o \"J\" corretamente."
  },
  {
    "title": "Exercício 8: Uso do \"L\" e \"R\"",
    "prompt": "Qual das seguintes palavras usa o \"L\" duplo (LL) corretamente?",
    "options": [
      {
        "label": "A) Colher",
        "value": "colher"
      },
      {
        "label": "B) Cavalo",
        "value": "cavalo"
      },
      {
        "label": "C) Carro",
        "value": "carro"
      },
      {
        "label": "D) Cabelo",
        "value": "cabelo"
      }
    ],
    "correct": "cavalo",
    "explanation": "Nenhuma das palavras listadas usa \"L\" duplo. A palavra \"cavalo\" foi escolhida como resposta correta porque é a única que tem \"L\" simples, enquanto as outras têm \"R\" ou \"L\" em posições diferentes."
  },
  {
    "title": "Exercício 9: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é um substantivo?",
    "options": [
      {
        "label": "A) Correr",
        "value": "correr"
      },
      {
        "label": "B) Amor",
        "value": "amor"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Rapidamente",
        "value": "rapidamente"
      }
    ],
    "correct": "amor",
    "explanation": "A palavra \"amor\" é um substantivo. As outras palavras são: \"correr\" (verbo), \"feliz\" (adjetivo) e \"rapidamente\" (advérbio)."
  },
  {
    "title": "Exercício 10: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é um verbo?",
    "options": [
      {
        "label": "A) Cor",
        "value": "cor"
      },
      {
        "label": "B) Correr",
        "value": "correr"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Casa",
        "value": "casa"
      }
    ],
    "correct": "correr",
    "explanation": "A palavra \"correr\" é um verbo. As outras palavras são: \"cor\" (substantivo), \"feliz\" (adjetivo) e \"casa\" (substantivo)."
  },
  {
    "title": "Exercício 11: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é um adjetivo?",
    "options": [
      {
        "label": "A) Feliz",
        "value": "feliz"
      },
      {
        "label": "B) Casa",
        "value": "casa"
      },
      {
        "label": "C) Correr",
        "value": "correr"
      },
      {
        "label": "D) Livro",
        "value": "livro"
      }
    ],
    "correct": "feliz",
    "explanation": "A palavra \"feliz\" é um adjetivo. As outras palavras são: \"casa\" (substantivo), \"correr\" (verbo) e \"livro\" (substantivo)."
  },
  {
    "title": "Exercício 12: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é um advérbio?",
    "options": [
      {
        "label": "A) Rapidamente",
        "value": "rapidamente"
      },
      {
        "label": "B) Rapido",
        "value": "rapido"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Casa",
        "value": "casa"
      }
    ],
    "correct": "rapidamente",
    "explanation": "A palavra \"rapidamente\" é um advérbio. As outras palavras são: \"rapido\" (adjetivo), \"feliz\" (adjetivo) e \"casa\" (substantivo)."
  },
  {
    "title": "Exercício 13: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é um pronome?",
    "options": [
      {
        "label": "A) Eu",
        "value": "eu"
      },
      {
        "label": "B) Casa",
        "value": "casa"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Correr",
        "value": "correr"
      }
    ],
    "correct": "eu",
    "explanation": "A palavra \"eu\" é um pronome pessoal. As outras palavras são: \"casa\" (substantivo), \"feliz\" (adjetivo) e \"correr\" (verbo)."
  },
  {
    "title": "Exercício 14: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é uma preposição?",
    "options": [
      {
        "label": "A) Em",
        "value": "em"
      },
      {
        "label": "B) Casa",
        "value": "casa"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Correr",
        "value": "correr"
      }
    ],
    "correct": "em",
    "explanation": "A palavra \"em\" é uma preposição. As outras palavras são: \"casa\" (substantivo), \"feliz\" (adjetivo) e \"correr\" (verbo)."
  },
  {
    "title": "Exercício 15: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é uma conjunção?",
    "options": [
      {
        "label": "A) E",
        "value": "e"
      },
      {
        "label": "B) Casa",
        "value": "casa"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Correr",
        "value": "correr"
      }
    ],
    "correct": "e",
    "explanation": "A palavra \"e\" é uma conjunção coordenativa. As outras palavras são: \"casa\" (substantivo), \"feliz\" (adjetivo) e \"correr\" (verbo)."
  },
  {
    "title": "Exercício 16: Classes Gramaticais",
    "prompt": "Qual das seguintes palavras é uma interjeição?",
    "options": [
      {
        "label": "A) Olá",
        "value": "olá"
      },
      {
        "label": "B) Casa",
        "value": "casa"
      },
      {
        "label": "C) Feliz",
        "value": "feliz"
      },
      {
        "label": "D) Correr",
        "value": "correr"
      }
    ],
    "correct": "olá",
    "explanation": "A palavra \"olá\" é uma interjeição. As outras palavras são: \"casa\" (substantivo), \"feliz\" (adjetivo) e \"correr\" (verbo)."
  },
  {
    "title": "Exercício 17: Sinônimos",
    "prompt": "Qual das seguintes palavras é um sinônimo de \"grande\"?",
    "options": [
      {
        "label": "A) Enorme",
        "value": "enorme"
      },
      {
        "label": "B) Pequeno",
        "value": "pequeno"
      },
      {
        "label": "C) Mediano",
        "value": "mediano"
      },
      {
        "label": "D) Minúsculo",
        "value": "minúsculo"
      }
    ],
    "correct": "enorme",
    "explanation": "A palavra \"enorme\" é um sinônimo de \"grande\". As outras palavras são antônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 18: Sinônimos",
    "prompt": "Qual das seguintes palavras é um sinônimo de \"feliz\"?",
    "options": [
      {
        "label": "A) Alegre",
        "value": "alegre"
      },
      {
        "label": "B) Triste",
        "value": "triste"
      },
      {
        "label": "C) Irritado",
        "value": "irritado"
      },
      {
        "label": "D) Raivado",
        "value": "raivado"
      }
    ],
    "correct": "alegre",
    "explanation": "A palavra \"alegre\" é um sinônimo de \"feliz\". As outras palavras são antônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 19: Sinônimos",
    "prompt": "Qual das seguintes palavras é um sinônimo de \"rápido\"?",
    "options": [
      {
        "label": "A) Veloz",
        "value": "veloz"
      },
      {
        "label": "B) Lento",
        "value": "lento"
      },
      {
        "label": "C) Devagar",
        "value": "devagar"
      },
      {
        "label": "D) Pausado",
        "value": "pausado"
      }
    ],
    "correct": "veloz",
    "explanation": "A palavra \"veloz\" é um sinônimo de \"rápido\". As outras palavras são antônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 20: Sinônimos",
    "prompt": "Qual das seguintes palavras é um sinônimo de \"importante\"?",
    "options": [
      {
        "label": "A) Significativo",
        "value": "significativo"
      },
      {
        "label": "B) Insignificante",
        "value": "insignificante"
      },
      {
        "label": "C) Trivial",
        "value": "trivial"
      },
      {
        "label": "D) Irrelevante",
        "value": "irrelevante"
      }
    ],
    "correct": "significativo",
    "explanation": "A palavra \"significativo\" é um sinônimo de \"importante\". As outras palavras são antônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 21: Antônimos",
    "prompt": "Qual das seguintes palavras é um antônimo de \"bom\"?",
    "options": [
      {
        "label": "A) Ruim",
        "value": "ruim"
      },
      {
        "label": "B) Excelente",
        "value": "excelente"
      },
      {
        "label": "C) Ótimo",
        "value": "ótimo"
      },
      {
        "label": "D) Maravilhoso",
        "value": "maravilhoso"
      }
    ],
    "correct": "ruim",
    "explanation": "A palavra \"ruim\" é um antônimo de \"bom\". As outras palavras são sinônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 22: Antônimos",
    "prompt": "Qual das seguintes palavras é um antônimo de \"grande\"?",
    "options": [
      {
        "label": "A) Pequeno",
        "value": "pequeno"
      },
      {
        "label": "B) Enorme",
        "value": "enorme"
      },
      {
        "label": "C) Vasto",
        "value": "vasto"
      },
      {
        "label": "D) Extenso",
        "value": "extenso"
      }
    ],
    "correct": "pequeno",
    "explanation": "A palavra \"pequeno\" é um antônimo de \"grande\". As outras palavras são sinônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 23: Antônimos",
    "prompt": "Qual das seguintes palavras é um antônimo de \"rápido\"?",
    "options": [
      {
        "label": "A) Lento",
        "value": "lento"
      },
      {
        "label": "B) Veloz",
        "value": "veloz"
      },
      {
        "label": "C) Ágil",
        "value": "ágil"
      },
      {
        "label": "D) Dinâmico",
        "value": "dinâmico"
      }
    ],
    "correct": "lento",
    "explanation": "A palavra \"lento\" é um antônimo de \"rápido\". As outras palavras são sinônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 24: Antônimos",
    "prompt": "Qual das seguintes palavras é um antônimo de \"feliz\"?",
    "options": [
      {
        "label": "A) Triste",
        "value": "triste"
      },
      {
        "label": "B) Alegre",
        "value": "alegre"
      },
      {
        "label": "C) Contente",
        "value": "contente"
      },
      {
        "label": "D) Satisfeito",
        "value": "satisfeito"
      }
    ],
    "correct": "triste",
    "explanation": "A palavra \"triste\" é um antônimo de \"feliz\". As outras palavras são sinônimos ou não têm relação semântica direta."
  },
  {
    "title": "Exercício 25: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"A tecnologia tem transformado nossas vidas de muitas maneiras. Desde a invenção da roda até os dispositivos eletrônicos atuais, a tecnologia tem ajudado a humanidade a progredir. No entanto, também traz desafios como a dependência excessiva e o impacto ambiental. É importante encontrar um equilíbrio entre aproveitar os benefícios e mitigar os riscos.\"",
    "options": [
      {
        "label": "A) A tecnologia tem transformado nossas vidas.",
        "value": "A tecnologia tem transformado nossas vidas."
      },
      {
        "label": "B) A tecnologia traz desafios.",
        "value": "A tecnologia traz desafios."
      },
      {
        "label": "C) A tecnologia não tem impacto ambiental.",
        "value": "A tecnologia não tem impacto ambiental."
      },
      {
        "label": "D) É importante encontrar um equilíbrio.",
        "value": "É importante encontrar um equilíbrio."
      }
    ],
    "correct": "A tecnologia não tem impacto ambiental.",
    "explanation": "A afirmativa \"A tecnologia não tem impacto ambiental\" não está presente no texto. O texto menciona que a tecnologia \"também traz desafios como a dependência excessiva e o impacto ambiental\"."
  },
  {
    "title": "Exercício 26: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"A educação é fundamental para o desenvolvimento individual e social. Ela proporciona conhecimento, habilidades e valores que permitem às pessoas se tornarem cidadãos ativos e conscientes. Além disso, a educação promove a igualdade de oportunidades e ajuda a reduzir a pobreza. Investir na educação é investir no futuro da sociedade.\"",
    "options": [
      {
        "label": "A) A educação não promove a igualdade.",
        "value": "A educação não promove a igualdade."
      },
      {
        "label": "B) A educação ajuda a reduzir a pobreza.",
        "value": "A educação ajuda a reduzir a pobreza."
      },
      {
        "label": "C) A educação não é fundamental.",
        "value": "A educação não é fundamental."
      },
      {
        "label": "D) A educação não proporciona conhecimento.",
        "value": "A educação não proporciona conhecimento."
      }
    ],
    "correct": "A educação ajuda a reduzir a pobreza.",
    "explanation": "A afirmativa \"A educação ajuda a reduzir a pobreza\" está correta. O texto menciona que \"Além disso, a educação promove a igualdade de oportunidades e ajuda a reduzir a pobreza.\""
  },
  {
    "title": "Exercício 27: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"A sustentabilidade ambiental é um conceito que se refere à capacidade de atender às necessidades do presente sem comprometer a capacidade das gerações futuras atendem às suas próprias necessidades. Ela envolve o uso responsável dos recursos naturais, a proteção do meio ambiente e o desenvolvimento econômico e social equilibrado. A sustentabilidade é um desafio global que requer a participação de indivíduos, empresas e governos.\"",
    "options": [
      {
        "label": "A) A sustentabilidade compromete as gerações futuras.",
        "value": "A sustentabilidade compromete as gerações futuras."
      },
      {
        "label": "B) A sustentabilidade envolve o uso responsável dos recursos.",
        "value": "A sustentabilidade envolve o uso responsável dos recursos."
      },
      {
        "label": "C) A sustentabilidade não requer a participação de indivíduos.",
        "value": "A sustentabilidade não requer a participação de indivíduos."
      },
      {
        "label": "D) A sustentabilidade não envolve o desenvolvimento econômico.",
        "value": "A sustentabilidade não envolve o desenvolvimento econômico."
      }
    ],
    "correct": "A sustentabilidade envolve o uso responsável dos recursos.",
    "explanation": "A afirmativa \"A sustentabilidade envolve o uso responsável dos recursos\" está correta. O texto menciona que \"Ela envolve o uso responsável dos recursos naturais, a proteção do meio ambiente e o desenvolvimento econômico e social equilibrado.\""
  },
  {
    "title": "Exercício 28: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"A saúde mental é um estado de bem-estar psicológico que permite às pessoas lidarem com as pressões da vida, trabalhem produtivamente, contribuam para sua comunidade e realizem suas próprias capacidades. Ela é fundamental para a qualidade de vida e o bem-estar geral. Cuidar da saúde mental é essencial em todas as fases da vida, desde a infância até a velhice.\"",
    "options": [
      {
        "label": "A) A saúde mental não é fundamental.",
        "value": "A saúde mental não é fundamental."
      },
      {
        "label": "B) Cuidar da saúde mental é essencial.",
        "value": "Cuidar da saúde mental é essencial."
      },
      {
        "label": "C) A saúde mental não permite lidar com pressões.",
        "value": "A saúde mental não permite lidar com pressões."
      },
      {
        "label": "D) A saúde mental não é importante para a qualidade de vida.",
        "value": "A saúde mental não é importante para a qualidade de vida."
      }
    ],
    "correct": "Cuidar da saúde mental é essencial.",
    "explanation": "A afirmativa \"Cuidar da saúde mental é essencial\" está correta. O texto menciona que \"Cuidar da saúde mental é essencial em todas as fases da vida.\""
  },
  {
    "title": "Exercício 29: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"O turismo é uma das indústrias de maior crescimento no mundo. Ele gera empregos, promove a cultura e contribui para o desenvolvimento econômico de muitos países. No entanto, também pode gerar impactos negativos como a poluição, o consumo excessivo de recursos e a pressão sobre o patrimônio cultural e natural. É importante desenvolver o turismo de forma sustentável para maximizar os benefícios e minimizar os impactos negativos.\"",
    "options": [
      {
        "label": "A) O turismo não gera empregos.",
        "value": "O turismo não gera empregos."
      },
      {
        "label": "B) O turismo promove a cultura.",
        "value": "O turismo promove a cultura."
      },
      {
        "label": "C) O turismo não contribui para o desenvolvimento econômico.",
        "value": "O turismo não contribui para o desenvolvimento econômico."
      },
      {
        "label": "D) O turismo não pode gerar impactos negativos.",
        "value": "O turismo não pode gerar impactos negativos."
      }
    ],
    "correct": "O turismo promove a cultura.",
    "explanation": "A afirmativa \"O turismo promove a cultura\" está correta. O texto menciona que \"Ele gera empregos, promove a cultura e contribui para o desenvolvimento econômico de muitos países.\""
  },
  {
    "title": "Exercício 30: Interpretação de Texto",
    "prompt": "Leia o texto a seguir e responda: \"A tecnologia da informação tem revolucionado a forma como as empresas operam. Ela permitiu a automação de processos, a comunicação instantânea e o acesso a grandes volumes de dados. No entanto, também trouxe desafios como a segurança da informação, a privacidade dos dados e a necessidade de habilidades digitais. As empresas precisam adaptar-se rapidamente para aproveitar os benefícios e mitigar os riscos da tecnologia da informação.\"",
    "options": [
      {
        "label": "A) A tecnologia da informação não permitiu a automação.",
        "value": "A tecnologia da informação não permitiu a automação."
      },
      {
        "label": "B) A tecnologia da informação permitiu a comunicação instantânea.",
        "value": "A tecnologia da informação permitiu a comunicação instantânea."
      },
      {
        "label": "C) A tecnologia da informação não trouxe desafios.",
        "value": "A tecnologia da informação não trouxe desafios."
      },
      {
        "label": "D) A tecnologia da informação não exige habilidades digitais.",
        "value": "A tecnologia da informação não exige habilidades digitais."
      }
    ],
    "correct": "A tecnologia da informação permitiu a comunicação instantânea.",
    "explanation": "A afirmativa \"A tecnologia da informação permitiu a comunicação instantânea\" está correta. O texto menciona que \"Ela permitiu a automação de processos, a comunicação instantânea e o acesso a grandes volumes de dados.\""
  }
];

export default function PortuguesExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de Português – Auxílio Encceja" subtitle="Prepare-se para o exame com exercícios práticos e feedback imediato." questions={questions} />;
}
