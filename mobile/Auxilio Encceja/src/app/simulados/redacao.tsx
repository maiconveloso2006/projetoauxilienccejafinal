import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

export default function RedacaoSimuladoScreen() {
  return <StudyContentScreen kind="redacao" title="Simulado Redação ENCCEJA" subtitle="Prova de redação do ENCCEJA" duration="60 minutos" essayPrompt="Prepare-se para a prova de redação com nosso simulado. Você terá 60 minutos para produzir uma redação dissertativa-argumentativa sobre o tema proposto. Boa sorte!" essaySupport={[
  "Esta prova segue o modelo do ENCCEJA. Você deverá produzir um texto dissertativo-argumentativo sobre o tema proposto, com base nos textos de apoio. Você terá 60 minutos para concluir sua redação.",
  "O impacto das redes sociais na sociedade contemporânea",
  "As redes sociais transformaram a forma como nos comunicamos, nos relacionamos e acessamos informações. Essas plataformas digitais trouxeram tanto benefícios quanto desafios para a sociedade moderna.",
  "Parabéns! Você concluiu sua redação dentro do tempo estipulado. Você escreveu 0 linhas ."
]} />;
}
