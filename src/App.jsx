import { useState } from 'react';

const App = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao("Peso normal");
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao("Sobrepeso");
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setClassificacao("Obesidade Grau 1");
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setClassificacao("Obesidade Grau 2");
    } else {
      setClassificacao("Obesidade Grau 3");
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <label htmlFor="altura">Altura (cm):</label>
      <input type="number" id="altura" value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <label htmlFor="peso">Peso (kg):</label>
      <input type="number" id="peso" value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular</button>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;