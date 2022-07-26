//Crie a const para a frase aqui
const mensagem1 = "Um carro verde e casa azul e parque laranja"
const mensagem2 = mensagem1.replace("verde","rosa")
const mensagem3 = mensagem2.replace("azul","laranja")
console.log(`Original: ${mensagem1}`)
console.log(`Trocando verde por rosa : ${mensagem2}`)
console.log(`Trocando azul por laranja: ${mensagem3}`)
console.log(`Nova string se contem Verde : ${mensagem3.includes('verde')}, \nE se contem laranja: ${mensagem3.includes('laranja')}`)
console.log(mensagem3)


// EXTRA
const frase = "mas não deixe o gato sair"
console.log(frase)
console.log("Frase Maiuscula \n"+ frase.toUpperCase())