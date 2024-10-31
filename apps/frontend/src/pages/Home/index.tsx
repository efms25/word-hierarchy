import Background from "../../layouts/Background";
import Header from "../../components/Header";

function Home() {
  return (
    <Background>
      <Header
        title="Gerador de Hierarquia de Palavras"
        subtitle="Gere uma arvore de palavras, como por exemplo: categorias com subcategorias e exporte em JSON."
      />
    </Background>
  );
}

export default Home;
