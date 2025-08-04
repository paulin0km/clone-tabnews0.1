//usei a ia pra fazer esse useEffect mas n sei usar nada disso ainda
import { useEffect } from "react";
//importo oq filho?? from react?? que??
function Home() {
  useEffect(() => {
    window.confirm('Paulin diz ta dizido');
  }, []);
//
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
