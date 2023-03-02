class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11 ){
          console.log("Categoria: Infantil")
        }
        else if (this.idade === 12 || this.idade === 13 ){
          console.log("Categoria: Juvenil")
        }
        else if (this.idade === 14 || this.idade === 15 ){
          console.log("Categoria: Intermediário")
        }
        else if (this.idade >= 16 && this.idade <= 30 ){
          console.log("Categoria: Adulto")
        }
        else {
          console.log("Sem categoria")
        }
    }

    calculaIMC(){
        let calculoIMC = this.peso / this.altura ** 2;
        return console.log(`IMC: ${calculoIMC}`)
    }

    calculaMediaValida(){
      let notasOrdenadas = [...this.notas].sort((a,b) => a - b);
      let somaDeNotas = notasOrdenadas.slice(1, -1).reduce((total, atual) => total + atual, 0);
      let mediaDasNotas = somaDeNotas / (notasOrdenadas.length - 2);
      
      console.log(`Média Válida: ${mediaDasNotas}`);
    }

  obterNomeAtleta(){
    return console.log(`Nome: ${this.nome}`)
  }

  obterIdadeAtleta(){
    return console.log(`Idade: ${this.idade}`)
  }

  obterPesoAtleta(){
    return console.log(`Peso: ${this.peso}`)
  }

  obterAlturaAtleta(){
    return console.log(`Altura: ${this.altura}`)
  }

  obterNotasAtleta(){
    let matrizNotas  = []
    this.notas.forEach((nota) => {
      matrizNotas.push(nota)
    })
    return console.log(`Notas: ${matrizNotas}`);
  }

  obterCategoria(){
    return this.calculaCategoria()
  }

  obterIMC(){
    return this.calculaIMC()
  }

  obterMediaValida(){
    return this.calculaMediaValida()
  }


}

const atleta = new Atleta("Emanuel Abreu", 22, 63, 1.62,[10, 9.34, 8.42, 10, 7.88])


atleta.obterNomeAtleta()
atleta.obterIdadeAtleta()
atleta.obterPesoAtleta()
atleta.obterAlturaAtleta()
atleta.obterNotasAtleta()
atleta.obterCategoria()
atleta.obterIMC()
atleta.obterMediaValida()