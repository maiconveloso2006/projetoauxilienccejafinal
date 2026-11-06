import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const questions = [
  {
    "title": "Exercício 1: Movimento Retilíneo Uniforme",
    "prompt": "Um carro se desloca com velocidade constante de 60 km/h. Quantos metros ele percorre em 10 segundos?",
    "options": [
      {
        "label": "A) 166,7 m",
        "value": "166.7m"
      },
      {
        "label": "B) 600 m",
        "value": "600m"
      },
      {
        "label": "C) 100 m",
        "value": "100m"
      },
      {
        "label": "D) 60 m",
        "value": "60m"
      }
    ],
    "correct": "166.7m",
    "explanation": "Resolução: Primeiro, convertemos a velocidade para m/s: v = 60 km/h = 60 × (1000 m / 3600 s) = 16,67 m/s Em seguida, usamos a fórmula do movimento uniforme: d = v × t d = 16,67 m/s × 10 s = 166,7 m"
  },
  {
    "title": "Exercício 2: Segunda Lei de Newton",
    "prompt": "Uma força de 20 N é aplicada em um corpo de massa 5 kg. Qual é a aceleração adquirida pelo corpo?",
    "options": [
      {
        "label": "A) 4 m/s²",
        "value": "4m/s²"
      },
      {
        "label": "B) 100 m/s²",
        "value": "100m/s²"
      },
      {
        "label": "C) 0,25 m/s²",
        "value": "0.25m/s²"
      },
      {
        "label": "D) 15 m/s²",
        "value": "15m/s²"
      }
    ],
    "correct": "4m/s²",
    "explanation": "Resolução: Pela Segunda Lei de Newton, F = m × a 20 N = 5 kg × a a = 20 N / 5 kg = 4 m/s²"
  },
  {
    "title": "Exercício 3: Energia Cinética",
    "prompt": "Qual é a energia cinética de um corpo com massa de 2 kg que se move com velocidade de 10 m/s?",
    "options": [
      {
        "label": "A) 100 J",
        "value": "100J"
      },
      {
        "label": "B) 20 J",
        "value": "20J"
      },
      {
        "label": "C) 200 J",
        "value": "200J"
      },
      {
        "label": "D) 50 J",
        "value": "50J"
      }
    ],
    "correct": "100J",
    "explanation": "Resolução: A energia cinética é calculada pela fórmula: Ec = ½ × m × v² Ec = ½ × 2 kg × (10 m/s)² Ec = 1 × 100 = 100 J"
  },
  {
    "title": "Exercício 4: Lei de Ohm",
    "prompt": "Um resistor de 10 Ω é submetido a uma diferença de potencial de 20 V. Qual é a corrente elétrica que o percorre?",
    "options": [
      {
        "label": "A) 2 A",
        "value": "2A"
      },
      {
        "label": "B) 0,5 A",
        "value": "0.5A"
      },
      {
        "label": "C) 200 A",
        "value": "200A"
      },
      {
        "label": "D) 30 A",
        "value": "30A"
      }
    ],
    "correct": "2A",
    "explanation": "Resolução: Pela Lei de Ohm, U = R × I 20 V = 10 Ω × I I = 20 V / 10 Ω = 2 A"
  },
  {
    "title": "Exercício 5: Calorimetria",
    "prompt": "Quantos calorias são necessárias para elevar a temperatura de 200 g de água de 20°C para 30°C? (Dado: calor específico da água = 1 cal/g°C)",
    "options": [
      {
        "label": "A) 2000 cal",
        "value": "2000cal"
      },
      {
        "label": "B) 200 cal",
        "value": "200cal"
      },
      {
        "label": "C) 4000 cal",
        "value": "4000cal"
      },
      {
        "label": "D) 1000 cal",
        "value": "1000cal"
      }
    ],
    "correct": "2000cal",
    "explanation": "Resolução: A quantidade de calor é calculada por: Q = m × c × ΔT Q = 200 g × 1 cal/g°C × (30°C - 20°C) Q = 200 g × 1 cal/g°C × 10°C = 2000 cal"
  },
  {
    "title": "Exercício 6: Ondas Sonoras",
    "prompt": "O som viaja no ar com velocidade aproximada de 340 m/s. Se um trovão é ouvido 3 segundos após o relâmpago ser visto, a que distância ocorreu a tempestade?",
    "options": [
      {
        "label": "A) 1020 m",
        "value": "1020m"
      },
      {
        "label": "B) 340 m",
        "value": "340m"
      },
      {
        "label": "C) 113,3 m",
        "value": "113.3m"
      },
      {
        "label": "D) 1360 m",
        "value": "1360m"
      }
    ],
    "correct": "1020m",
    "explanation": "Resolução: A distância é calculada por: d = v × t d = 340 m/s × 3 s = 1020 m Considerando que a velocidade da luz é muito maior que a do som, o tempo entre o relâmpago e o trovão é aproximadamente o tempo que o som leva para percorrer a distância."
  },
  {
    "title": "Exercício 7: Pressão Hidrostática",
    "prompt": "Qual é a pressão exercida por uma coluna de água de 10 metros de altura? (Dado: densidade da água = 1000 kg/m³, g = 10 m/s²)",
    "options": [
      {
        "label": "A) 100000 Pa",
        "value": "100000Pa"
      },
      {
        "label": "B) 1000 Pa",
        "value": "1000Pa"
      },
      {
        "label": "C) 10000 Pa",
        "value": "10000Pa"
      },
      {
        "label": "D) 1000000 Pa",
        "value": "1000000Pa"
      }
    ],
    "correct": "100000Pa",
    "explanation": "Resolução: A pressão hidrostática é calculada por: p = d × g × h p = 1000 kg/m³ × 10 m/s² × 10 m p = 100000 N/m² = 100000 Pa"
  },
  {
    "title": "Exercício 8: Espelhos Planos",
    "prompt": "Uma pessoa de 1,70 m de altura está em frente a um espelho plano. Qual é a altura mínima que o espelho deve ter para que a pessoa possa ver sua imagem completa?",
    "options": [
      {
        "label": "A) 0,85 m",
        "value": "0.85m"
      },
      {
        "label": "B) 1,70 m",
        "value": "1.70m"
      },
      {
        "label": "C) 3,40 m",
        "value": "3.40m"
      },
      {
        "label": "D) 0,425 m",
        "value": "0.425m"
      }
    ],
    "correct": "0.85m",
    "explanation": "Resolução: Em um espelho plano, para ver a imagem completa, o espelho precisa ter no mínimo metade da altura da pessoa. Altura mínima do espelho = 1,70 m / 2 = 0,85 m Isso ocorre porque a luz que parte do topo da pessoa atinge o espelho na metade de sua altura, e a luz que parte dos pés atinge o espelho na metade inferior."
  },
  {
    "title": "Exercício 9: Tabela Periódica",
    "prompt": "Qual é o número atômico do elemento Carbono (C)?",
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
    "explanation": "Resolução: O número atômico (Z) corresponde ao número de prótons no núcleo de um átomo. Para o elemento Carbono (C), o número atômico é 6, o que significa que seu átomo possui 6 prótons. O número 12 corresponde ao número de massa (A), que é a soma de prótons e nêutrons."
  },
  {
    "title": "Exercício 10: Ligações Químicas",
    "prompt": "Qual é o tipo de ligação química que ocorre entre átomos de sódio (Na) e cloro (Cl) para formar o cloreto de sódio (NaCl)?",
    "options": [
      {
        "label": "A) Iônica",
        "value": "Iônica"
      },
      {
        "label": "B) Covalente",
        "value": "Covalente"
      },
      {
        "label": "C) Metálica",
        "value": "Metálica"
      },
      {
        "label": "D) Dipolo-dipolo",
        "value": "Dipolo-dipolo"
      }
    ],
    "correct": "Iônica",
    "explanation": "Resolução: A ligação entre átomos de sódio (metal) e cloro (não-metal) é do tipo iônica. Nesse tipo de ligação, ocorre a transferência de elétrons do sódio para o cloro, formando íons Na⁺ e Cl⁻, que se atraem por forças eletrostáticas."
  },
  {
    "title": "Exercício 11: Funções Inorgânicas",
    "prompt": "Qual é a fórmula química do ácido sulfúrico?",
    "options": [
      {
        "label": "A) H₂SO₄",
        "value": "H₂SO₄"
      },
      {
        "label": "B) H₂SO₃",
        "value": "H₂SO₃"
      },
      {
        "label": "C) H₂S",
        "value": "H₂S"
      },
      {
        "label": "D) HSO₄",
        "value": "HSO₄"
      }
    ],
    "correct": "H₂SO₄",
    "explanation": "Resolução: O ácido sulfúrico é um ácido inorgânico forte, de fórmula H₂SO₄. É formado por dois átomos de hidrogênio, um átomo de enxofre e quatro átomos de oxigênio. O H₂SO₃ corresponde ao ácido sulfuroso, e o H₂S ao ácido sulfídrico."
  },
  {
    "title": "Exercício 12: Estequiometria",
    "prompt": "Na reação de combustão do metano: CH₄ + 2O₂ → CO₂ + 2H₂O, quantos mols de CO₂ são produzidos quando 2 mols de CH₄ reagem completamente?",
    "options": [
      {
        "label": "A) 2 mols",
        "value": "2mols"
      },
      {
        "label": "B) 1 mol",
        "value": "1mol"
      },
      {
        "label": "C) 4 mols",
        "value": "4mols"
      },
      {
        "label": "D) 0,5 mol",
        "value": "0.5mol"
      }
    ],
    "correct": "2mols",
    "explanation": "Resolução: Pela estequiometria da reação, a proporção entre CH₄ e CO₂ é de 1:1. CH₄ + 2O₂ → CO₂ + 2H₂O Isso significa que para cada mol de CH₄ que reage, é produzido 1 mol de CO₂. Portanto, se 2 mols de CH₄ reagem completamente, serão produzidos 2 mols de CO₂."
  },
  {
    "title": "Exercício 13: Soluções",
    "prompt": "Qual é a concentração molar de uma solução que contém 58,5 g de NaCl dissolvidos em água suficiente para 500 mL de solução? (Dado: massa molar do NaCl = 58,5 g/mol)",
    "options": [
      {
        "label": "A) 2 M",
        "value": "2M"
      },
      {
        "label": "B) 1 M",
        "value": "1M"
      },
      {
        "label": "C) 0,5 M",
        "value": "0.5M"
      },
      {
        "label": "D) 4 M",
        "value": "4M"
      }
    ],
    "correct": "2M",
    "explanation": "Resolução: A concentração molar (M) é calculada por: M = n / V Onde n é o número de mols e V é o volume em litros. n = massa / massa molar = 58,5 g / 58,5 g/mol = 1 mol V = 500 mL = 0,5 L M = 1 mol / 0,5 L = 2 M"
  },
  {
    "title": "Exercício 14: pH de Soluções",
    "prompt": "Qual é o pH de uma solução aquosa com [H⁺] = 0,001 mol/L?",
    "options": [
      {
        "label": "A) 3",
        "value": "3"
      },
      {
        "label": "B) 1",
        "value": "1"
      },
      {
        "label": "C) 7",
        "value": "7"
      },
      {
        "label": "D) 11",
        "value": "11"
      }
    ],
    "correct": "3",
    "explanation": "Resolução: O pH é calculado por: pH = -log[H⁺] Para [H⁺] = 0,001 mol/L = 10⁻³ mol/L: pH = -log(10⁻³) = 3 Como o pH é menor que 7, a solução é ácida."
  },
  {
    "title": "Exercício 15: Termoquímica",
    "prompt": "Na reação de formação da água: H₂ + ½O₂ → H₂O + 286 kJ, o que representa o valor 286 kJ?",
    "options": [
      {
        "label": "A) Calor de formação",
        "value": "Calor de formação"
      },
      {
        "label": "B) Calor de combustão",
        "value": "Calor de combustão"
      },
      {
        "label": "C) Energia de ativação",
        "value": "Energia de ativação"
      },
      {
        "label": "D) Calor de neutralização",
        "value": "Calor de neutralização"
      }
    ],
    "correct": "Calor de formação",
    "explanation": "Resolução: O valor 286 kJ representa o calor de formação da água, que é a energia liberada quando 1 mol de água é formada a partir de seus elementos constituintes (H₂ e O₂) no estado padrão. Como o valor é positivo no lado dos produtos, a reação é exotérmica, liberando 286 kJ por mol de água formada."
  },
  {
    "title": "Exercício 16: Química Orgânica",
    "prompt": "Qual é a fórmula estrutural do eteno (etileno)?",
    "options": [
      {
        "label": "A) H₂C=CH₂",
        "value": "H₂C=CH₂"
      },
      {
        "label": "B) H₃C-CH₃",
        "value": "H₃C-CH₃"
      },
      {
        "label": "C) H₂C-CH₂",
        "value": "H₂C-CH₂"
      },
      {
        "label": "D) HC≡CH",
        "value": "HC≡CH"
      }
    ],
    "correct": "H₂C=CH₂",
    "explanation": "Resolução: O eteno, também conhecido como etileno, é um hidrocarboneto com fórmula molecular C₂H₄. Sua fórmula estrutural é H₂C=CH₂, que indica a presença de uma ligação dupla entre os átomos de carbono. É o alceno mais simples e um importante composto orgânico utilizado na produção de plásticos."
  },
  {
    "title": "Exercício 17: Células",
    "prompt": "Qual é a organela celular responsável pela produção de energia na forma de ATP?",
    "options": [
      {
        "label": "A) Mitocôndria",
        "value": "Mitocôndria"
      },
      {
        "label": "B) Núcleo",
        "value": "Núcleo"
      },
      {
        "label": "C) Retículo endoplasmático",
        "value": "Retículo endoplasmático"
      },
      {
        "label": "D) Complexo de Golgi",
        "value": "Complexo de Golgi"
      }
    ],
    "correct": "Mitocôndria",
    "explanation": "Resolução: A mitocôndria é a organela responsável pela produção de energia na forma de ATP através do processo de respiração celular. É na mitocôndria que ocorrem as etapas finais da respiração aeróbia, incluindo o ciclo de Krebs e a cadeia transportadora de elétrons. Por essa razão, a mitocôndria é frequentemente chamada de \"usina de energia\" da célula."
  },
  {
    "title": "Exercício 18: Fotossíntese",
    "prompt": "Quais são os principais produtos da fotossíntese?",
    "options": [
      {
        "label": "A) Glicose e oxigênio",
        "value": "Glicose e oxigênio"
      },
      {
        "label": "B) Glicose e dióxido de carbono",
        "value": "Glicose e dióxido de carbono"
      },
      {
        "label": "C) Água e glicose",
        "value": "Água e glicose"
      },
      {
        "label": "D) Água e oxigênio",
        "value": "Água e oxigênio"
      }
    ],
    "correct": "Glicose e oxigênio",
    "explanation": "Resolução: A fotossíntese é o processo pelo qual as plantas convertem energia luminosa em energia química. A equação geral da fotossíntese é: 6CO₂ + 6H₂O + energia luminosa → C₆H₁₂O₆ (glicose) + 6O₂ Portanto, os principais produtos da fotossíntese são a glicose e o oxigênio."
  },
  {
    "title": "Exercício 19: Genética",
    "prompt": "Em uma cruzamento entre dois indivíduos heterozigotos para um caráter (Aa), qual é a probabilidade de nascer um descendente homozigoto recessivo (aa)?",
    "options": [
      {
        "label": "A) 25%",
        "value": "25%"
      },
      {
        "label": "B) 50%",
        "value": "50%"
      },
      {
        "label": "C) 75%",
        "value": "75%"
      },
      {
        "label": "D) 100%",
        "value": "100%"
      }
    ],
    "correct": "25%",
    "explanation": "Resolução: No cruzamento entre dois heterozigotos (Aa × Aa), os gametas possíveis são A e a para cada indivíduo. O quadro de Punnett mostra os seguintes genótipos possíveis na descendência: AA (25%), Aa (50%), aa (25%) Portanto, a probabilidade de nascer um descendente homozigoto recessivo (aa) é de 25%."
  },
  {
    "title": "Exercício 20: Evolução",
    "prompt": "Quem foi o naturalista que propôs a teoria da evolução por meio da seleção natural?",
    "options": [
      {
        "label": "A) Charles Darwin",
        "value": "Charles Darwin"
      },
      {
        "label": "B) Gregor Mendel",
        "value": "Gregor Mendel"
      },
      {
        "label": "C) Jean-Baptiste Lamarck",
        "value": "Jean-Baptiste Lamarck"
      },
      {
        "label": "D) Louis Pasteur",
        "value": "Louis Pasteur"
      }
    ],
    "correct": "Charles Darwin",
    "explanation": "Resolução: Charles Darwin foi o naturalista que propôs a teoria da evolução por meio da seleção natural, publicada em 1859 na obra \"A Origem das Espécies\". Segundo essa teoria, os indivíduos com características mais adaptadas ao ambiente têm maior probabilidade de sobreviver e deixar descendentes, transmitindo essas características às gerações seguintes."
  },
  {
    "title": "Exercício 21: Ecologia",
    "prompt": "Qual é o nome dado ao conjunto de todos os ecossistemas da Terra?",
    "options": [
      {
        "label": "A) Biosfera",
        "value": "Biosfera"
      },
      {
        "label": "B) Atmosfera",
        "value": "Atmosfera"
      },
      {
        "label": "C) Hidrosfera",
        "value": "Hidrosfera"
      },
      {
        "label": "D) Litosfera",
        "value": "Litosfera"
      }
    ],
    "correct": "Biosfera",
    "explanation": "Resolução: A biosfera é o conjunto de todos os ecossistemas da Terra, onde existe vida. Ela abrange desde as profundezas dos oceanos até as altas montanhas, incluindo porções da atmosfera, hidrosfera e litosfera. A biosfera é o maior nível de organização ecológica, englobando todos os seres vivos e seus ambientes."
  },
  {
    "title": "Exercício 22: Fisiologia Humana",
    "prompt": "Qual é o nome do órgão responsável pela produção de insulina no corpo humano?",
    "options": [
      {
        "label": "A) Pâncreas",
        "value": "Pâncreas"
      },
      {
        "label": "B) Fígado",
        "value": "Fígado"
      },
      {
        "label": "C) Rim",
        "value": "Rim"
      },
      {
        "label": "D) Timo",
        "value": "Timo"
      }
    ],
    "correct": "Pâncreas",
    "explanation": "Resolução: O pâncreas é o órgão responsável pela produção de insulina no corpo humano. Especificamente, a insulina é produzida pelas células beta das ilhotas de Langerhans, que são estruturas localizadas no pâncreas. A insulina é um hormônio essencial para a regulação dos níveis de glicose no sangue, facilitando sua entrada nas células."
  },
  {
    "title": "Exercício 23: Botânica",
    "prompt": "Qual é o nome do tecido vegetal responsável pelo transporte de seiva bruta (água e sais minerais) das raízes para as folhas?",
    "options": [
      {
        "label": "A) Xilema",
        "value": "Xilema"
      },
      {
        "label": "B) Floema",
        "value": "Floema"
      },
      {
        "label": "C) Súber",
        "value": "Súber"
      },
      {
        "label": "D) Parênquima",
        "value": "Parênquima"
      }
    ],
    "correct": "Xilema",
    "explanation": "Resolução: O xilema é o tecido vascular responsável pelo transporte de seiva bruta (água e sais minerais) das raízes para as folhas. Esse transporte ocorre principalmente por força de sucção gerada pela transpiração nas folhas e por pressão positiva nas raízes. O floema, por sua vez, é responsável pelo transporte de seiva elaborada (substâncias orgânicas) das folhas para o resto da planta."
  },
  {
    "title": "Exercício 24: Zoologia",
    "prompt": "Qual é o filo animal caracterizado pela presença de corpo segmentado e exoesqueleto quitinoso?",
    "options": [
      {
        "label": "A) Artrópodes",
        "value": "Artrópodes"
      },
      {
        "label": "B) Anelídeos",
        "value": "Anelídeos"
      },
      {
        "label": "C) Moluscos",
        "value": "Moluscos"
      },
      {
        "label": "D) Equinodermos",
        "value": "Equinodermos"
      }
    ],
    "correct": "Artrópodes",
    "explanation": "Resolução: Os artrópodes constituem o filo animal caracterizado pela presença de corpo segmentado e exoesqueleto quitinoso. Esses animais apresentam apêndices articulados e corpo dividido em cabeça, tórax e abdome (em insetos) ou cefalotórax e abdome (em aracnídeos e crustáceos). Exemplos de artrópodes incluem insetos, aracnídeos, crustáceos e quilópodes."
  }
];

export default function CienciasExerciciosScreen() {
  return <StudyContentScreen kind="exercicio" title="Exercícios de Ciências para ENCCEJA" subtitle="Prepare-se para o exame com exercícios práticos de Física, Química e Biologia." questions={questions} />;
}
