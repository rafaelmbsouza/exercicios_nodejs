// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##

let numVoo = rs.question('Qual é o número do seu vôo? ')

let fileira = rs.question('Em qual fileira você deseja sentar? ')

console.log('===========================') 

console.log('Cartão de embarque para o Vôo de número: '+numVoo)

console.log('Você sentará na fileira: '+fileira)

console.log('===========================') 