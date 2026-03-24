//1 + 2 + 3 + ... + n
const calculoRapidinho = (n) => {
  return n > 0 ? 
          Promise.resolve((n / 2) * (n + 1)) :
          Promise.reject('Somente valores positivos')
}
calculoRapidinho(-1000)
.then((res) => {
  calculoRapidinho(res)
  .then(res2 =>{
    calculoRapidinho(res2)
    .then((res3) =>{
      calculoRapidinho(res4)
      .then((res5) => {
        console.log(res5)
      })
    })
  })
})
.catch(function(erro){
  console.log(`Erro: ${erro}`)
})
// function calculoDemorado(n){
//   const p = new Promise((resolve, reject) => {
//     if(n > 0){
//       let ac = 0
//       for(let i = 1; i <= n; i++)
//         ac += i
//       resolve(ac)
//     }
//     else{
//       reject('Somente valores positivos, por favor')
//     }
//   })
//   return p
// }

// const minhaPromise = calculoDemorado(1000)
// minhaPromise
// .then((res) => {
//   console.log(`Resultado: ${res}`)
// })
// .catch((erro) => {
//   console.log(`Erro: ${erro}`)
// })

// console.log("Fim do script...")


// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//   //callback
//   const exibirConteudo = (erro, conteudo) => {
//     console.log('C')
//     if(erro){
//       console.log(`Deu erro: ${erro}`)
//     }
//     else{
//       console.log(`Conteúdo: ${conteudo.toString()}`)
//       const dobro = Number(conteudo.toString()) * 2
//       const finalizar = (erro) => {
//         console.log('D')
//         if(erro)
//           console.log(`Erro: ${erro}`)
//         else{
//           const escreverResultado = (erro){
//             console.log(erro ? 'Erro' : 'Sem erro')
//           }
//           fs.writeFile('resultado.txt', "Tudo ok", escreverResultado)
//         }
//       }
//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//       console.log('B')
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
//   console.log('A')
// }
// abrirArquivo("arquivo.txt")

// function demorada(tempo){
//   const dataAtualMaisTempo = new Date().getTime() + tempo
//   while(new Date().getTime() <= dataAtualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// setTimeout(() => {
//   demorada(2000)
//   console.log(`Demora: ${2000}`)
// }, 2000)

// setTimeout(() => {
//   demorada(10000)
//   console.log(`Demora: ${1000}`)
// }, 1000)


// console.log('Fim do script principal...')

// const a = 2 + 5
// const b = 6 + 3 - 2

// setTimeout(() => {
//   const d = demorada()
//   console.log(`d: ${d}`)
// }, 0)

// const e = a + b * 2
// console.log(`e: ${e}`)

// const a = 2 + 7 * 2
// const b = 5 * 6 + 1
// console.log(a + b)

// console.log("Eu primeiro...")
// console.log("Agora eu...")
// console.log("Serei sempre a última...:(")

// JSON: JavaScript Object Notation
//Uma calculadora faz as quatro operações fundamentais
//A soma deve ser uma função comum com function
//A subtração deve ser uma arrow function com return
//A multiplicação deve ser uma arrow function sem return
//A divisão fica a seu critério
// const calculadora = {
//   somar: function(a, b){
//     return a + b
//   },
//   subtrair: (a, b) => {return a - b},
//   multiplicar: (a, b) => a * b,
//   dividir: function(dividendo, divisor){
//     if(divisor === 0)
//       console.log('Não divida por zero')
//     else
//       return dividendo / divisor
    
//   }
// }
// const a = 2, b = 3
// console.log(calculadora.somar(a, b))
// console.log(calculadora.dividir(a, 0))

//Uma concessionaria tem CNPJ, nome e endereço. Ela possui alguns carros em estoque. Cada carro tem marca e modelo.



// const concessionaria = {
//   cnpj: '00.000.000/0001-00',
//   nome: 'Volks',
//   endereco: {
//     logradouro: 'Rua J',
//     numero: 12,
//     bairro: {
//       nome: 'Vila H',
//       cidade: 'SP'
//     }
//   },
//   estoque: [
//     {
//       marca: "VW",
//       modelo: "Fusca"
//     },
//     {
//       marca: "Ford",
//       modelo: 'Ka'
//     },
//     {
//       marca: 'Ford',
//       modelo: 'Fiesta'
//     }
//   ]
// }
// // console.log(concessionaria.endereco.bairro.cidade)
// // console.log(concessionaria.estoque[0]['modelo'])

// const nome = 'Ana'
// console.log('Oi ' + nome)
// console.log(`Oi, ${nome}`)


// for(let veiculo of concessionaria.estoque){
//   console.log(`
//     Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}  
//   `)  
// }




//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 12
// const pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 12
//   }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa['endereco'].logradouro)
// const pessoa = {
//   nome: 'Maria',
//   idade: 21,
//   logradouro: 'Rua B',
//   numero: 12
// }

//Uma pessoa se chama João e tem 17 anos
// const pessoa = {
//   nome: "João",
//   idade: 17
// }
// // . e []
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// const dobrar = (n) => 2 * n

// console.log(dobrar(5))
// const hello = nome => console.log('Hello ' + nome)
// hello('Ana')
// const hello = () => console.log("Hello")
// hello()
// const hello = nome => {console.log('Oi ' + nome )}
// hello('Ana')
// const hello = () => { console.log('Oi')}
// hello()

//funções
//function e arrow function
// const f1 = a => a
// // const f1 = a => {return a}
// const f2 = () => {2}
// console.log(f2())

// console.log(f1(2))
// const somar = (a, b) => {
//   a + b
//   return undefined
// }
// console.log(somar(2, 3))
// const hello = nome => console.log('Oi, ' + nome)
// hello('Ana')
// const hello = () => {console.log('ooi')}
// hello()


// const triplo = function(n = 5){
//   return n * 3
// }
// console.log(triplo())
// console.log(triplo(6))
// const dobro = function(n){
//   return 2 * n
// }
// console.log(dobro(5))
// function hello(){
//   console.log('Oi')
// }
// hello(undefined)
// function hello(nome){
//   console.log("Oi, " + nome)
// }
// hello('Ana')
//vetores ou listas
// v1 = []
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[10] = 25
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i = i + 1){
//   console.log(v1[i])
// }


//coerção
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2 //coerção implícita
// const n4 = n1 + Number(n2) //coerção explícita
// console.log(n3)
// console.log(n4)


//var, let, const
//hoist: içamento
// let idade = 18
// let nome = 'João'
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   console.log(nome + ', você pode dirigir')
// }
// console.log("Você tem " + idade + " anos")
// console.log('Tchau, ' + nome)
// let linguagem = 'Javascript'
// console.log("Aprendendo " + linguagem)
// let linguagem = 'Python'
// console.log('Aprendendo ' + linguagem)
// const idade = 17
// console.log ('Tenho ' + idade + ' anos')
// idade = 18
// console.log(`Agora eu tenho ${idade} anos`)
// const nome = 'José'
// console.log(nome)
// nome = 'José da Silva'
// console.log(nome)

//console.log("Hello, World")