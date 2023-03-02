function calculaMediaValida(notas) {
  atletas.forEach( (atleta) => {

    console.log(`Atleta: ${atleta.nome}` );
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}` );

    let notasOrdenadas = atleta.notas.sort((a,b) => a - b);
    let somaDeNotas = notasOrdenadas.slice(1, -1).reduce((total, atual) => total + atual, 0);
    let mediaDasNotas = somaDeNotas / (notasOrdenadas.length - 2);
    console.log(`Média Válida: ${mediaDasNotas}`);
    console.log("\n")

  });
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


calculaMediaValida(atletas);