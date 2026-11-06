import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Dashboard() {
  const router = useRouter();

  const materias = [
    {
      nome: "Matemática",
      icone: "calculator-variant",
      cor: "#34495e",
      iconeAcesso: "trending-up",
    },
    {
      nome: "Português",
      icone: "book-open-variant",
      cor: "#34495e",
      iconeAcesso: "pencil",
    },
    {
      nome: "História",
      icone: "history",
      cor: "#34495e",
      iconeAcesso: "timer-sand",
    },
    {
      nome: "Geografia",
      icone: "earth",
      cor: "#34495e",
      iconeAcesso: "map",
    },
    {
      nome: "Ciências",
      icone: "flash",
      cor: "#34495e",
      iconeAcesso: "lightbulb-on",
    },
  ];

  const recursos = [
    {
      nome: "Biblioteca de Estudos",
      descricao: "Acesse materiais complementares",
      icone: "library-books",
    },
    {
      nome: "Links Úteis",
      descricao: "Sites e ferramentas para seus estudos",
      icone: "link-variant",
    },
    {
      nome: "Guia Completo do ENCCEJA",
      descricao: "Tudo sobre a prova do ENCCEJA",
      icone: "map",
    },
    {
      nome: "Dicas de Estudo",
      descricao: "Técnicas para melhorar seu aprendizado",
      icone: "lightbulb-on",
    },
  ];

  function acessarMateria(materia: string) {
    console.log("Matéria selecionada:", materia);
  }

  return (
    <View style={styles.TelaInteira}>
      <View style={styles.header}>
        <View style={styles.headerSuperior}>

          <Image
            source={require("@/assets/images/Logo 3.0.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.textosHeader}>
            <Text style={styles.titulo}>
              Auxílio Encceja
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
        >

          <TouchableOpacity
            style={[styles.menuBotao, styles.menuAtivo]}
            onPress={() => router.navigate("/dashboard")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="home-outline"
              size={15}
              color="#FFFFFF"
            />

            <Text style={styles.menuTexto}>
              Início
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/conteudos")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={15}
              color="#FFFFFF"
            />

            <Text style={styles.menuTexto}>
              Conteúdos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/acompanhamento")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="chart-line"
              size={15}
              color="#FFFFFF"
            />

            <Text style={styles.menuTexto}>
              Acompanhamento
            </Text>
        </TouchableOpacity>


          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/config")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="cog-outline"
              size={15}
              color="#FFFFFF"
            />

            <Text style={styles.menuTexto}>
              Configurações
            </Text>
          </TouchableOpacity>
        </ScrollView>
    </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.bannerBoasVindas}>

          <View style={styles.bannerConteudo}>

            <View style={styles.bannerTextoContainer}>

              <Text style={styles.boasVindasTitulo}>
                Bem-vindo de Volta, Estudante!
              </Text>

              <Text style={styles.boasVindasTexto}>
                Continue sua jornada de estudos para o ENCCEJA.
                {"\n"}
                Escolha uma matéria abaixo para começar a estudar
                agora mesmo.
            </Text>
        </View>
    </View>
</View>

        <View style={styles.tituloSecaoContainer}>

          <View style={styles.iconeTituloSecao}>

            <MaterialCommunityIcons
              name="book-open-variant"
              size={22}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.secaoTitulo}>
            O que você quer estudar hoje?
          </Text>
        </View>

        <View style={styles.materiasContainer}>

          {materias.map((materia, index) => (

            <TouchableOpacity
              key={index}
              style={styles.cardMateria}
              onPress={() => acessarMateria(materia.nome)}
              activeOpacity={0.8}
            >

              <View style={styles.iconeMateriaContainer}>

                <MaterialCommunityIcons
                  name={materia.icone as any}
                  size={38}
                  color="#25717a"
                />
              </View>

              <Text style={styles.nomeMateria}>
                {materia.nome}
              </Text>

              <View style={styles.acessarContainer}>

                <MaterialCommunityIcons
                  name={materia.iconeAcesso as any}
                  size={15}
                  color="#25717a"
                />

                <Text style={styles.acessarMateria}>
                  Acessar matéria
                </Text>
              </View>
            </TouchableOpacity>
        ))}

        </View>

        <View style={styles.tituloSecaoContainer}>

          <View style={styles.iconeTituloSecao}>

            <MaterialCommunityIcons
              name="star-outline"
              size={22}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.secaoTitulo}>
            Recursos Recomendados
          </Text>
       
        </View>

        <View style={styles.recursosContainer}>

          {recursos.map((recurso, index) => (

            <TouchableOpacity
              key={index}
              style={styles.cardRecurso}
              activeOpacity={0.8}
            >

              <View style={styles.recursoIcone}>

                <MaterialCommunityIcons
                  name={recurso.icone as any}
                  size={27}
                  color="#25717a"
                />
              </View>

              <View style={styles.recursoInfo}>

                <Text style={styles.recursoNome}>
                  {recurso.nome}
                </Text>

                <Text style={styles.recursoDescricao}>
                  {recurso.descricao}
                </Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color="#34495e"
              />
            </TouchableOpacity>
          ))}

        </View>

        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => router.navigate("/")}
          activeOpacity={0.8}
        >

          <MaterialCommunityIcons
            name="logout"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.textoBotaoSair}>
            Sair
          </Text>

        </TouchableOpacity>

        <Text style={styles.footer}>
          Auxílio Encceja © 2026
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  TelaInteira: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  header: {
    backgroundColor: "#34495e",
    paddingTop: 38,
    paddingBottom: 9,
    paddingHorizontal: 9,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  headerSuperior: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 47,
    height: 47,
    marginRight: 7,
  },

  textosHeader: {
    justifyContent: "center",
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 11,
    paddingBottom: 1,
    paddingHorizontal: 7,
  },

  menuBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginRight: 2,
    gap: 4,
  },

  menuAtivo: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  menuTexto: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    padding: 18,
    paddingBottom: 40,
  },

  bannerBoasVindas: {
    width: "100%",
    backgroundColor: "#34495e",
    borderRadius: 24,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 28,
    overflow: "hidden",
    shadowColor: "#34495e",
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 7,
  },

  bannerConteudo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  bannerTextoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },

  boasVindasTitulo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 10,
    lineHeight: 28,
    textAlign: "center",
  },

  boasVindasTexto: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },

  tituloSecaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    marginLeft: 2,
  },

  iconeTituloSecao: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#25717a",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  secaoTitulo: {
    flex: 1,
    color: "#2C3E50",
    fontSize: 19,
    fontWeight: "800",
  },

  materiasContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  cardMateria: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7EAED",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.07,
    shadowRadius: 9,
    elevation: 4,
  },

  iconeMateriaContainer: {
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: "#EAF4F3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  nomeMateria: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 8,
    textAlign: "center",
  },

  acessarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  acessarMateria: {
    color: "#34495e",

    fontSize: 12,
    fontWeight: "700",
  },

  recursosContainer: {
    marginBottom: 10,
  },

  cardRecurso: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7EAED",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    shadowOpacity: 0.06,
    shadowRadius: 7,
    elevation: 3,
  },

  recursoIcone: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#EAF4F3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  recursoInfo: {
    flex: 1,
    paddingRight: 5,
  },

  recursoNome: {
    color: "#2C3E50",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },

  recursoDescricao: {
    color: "#7F8C8D",
    fontSize: 12,
    lineHeight: 17,
  },

  botaoSair: {
    width: "100%",
    height: 50,
    backgroundColor: "#34495e",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },

  textoBotaoSair: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  footer: {
    textAlign: "center",
    color: "#7F8C8D",
    fontSize: 12,
    marginTop: 18,
  },
});