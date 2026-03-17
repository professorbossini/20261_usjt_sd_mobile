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