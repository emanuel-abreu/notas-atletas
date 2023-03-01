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

function calculaMedia(atletas){

  atletas.forEach( (atleta) => {
    console.log(`Atleta: ${atleta.nome}` );
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}` );
    
    let maiorNota = Math.max(atleta.notas[0]);
    let menorNota = Math.min(atleta.notas[0]);
    let indexMaior = 0;
    let indexMenor = 0;

    atleta.notas.forEach( (nota, index) =>{
      if (nota >= maiorNota){
        maiorNota = nota;
        indexMaior = index;
      }
      if (nota <= menorNota){
        menorNota = nota;
        indexMenor = index;
      }
    });
    
    atleta.notas.splice(indexMaior-1,1);
    atleta.notas.splice(indexMenor-1,1);
    
    let somaDeNotas = atleta.notas.reduce( (total,atual) => {
      return total + atual;
    }, 0);

    let mediaDasNotas = somaDeNotas / atleta.notas.length;

    console.log(`Média Válida: ${mediaDasNotas}` )
    console.log("------")
  });
        
};

calculaMedia(atletas);