import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.confirm('Paulin diz ta dizido');
  }, []);

  return (
    <h1>Salve, comprei esse domínio pra fazer meu portifólio?</h1>
  );
}

function teste() {
  console.log("teste");
}

function teste2() {
  console.log("indentaçao nada a ve");
}

export default Home;
