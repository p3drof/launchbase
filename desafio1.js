const name = "Carlos"
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${name}, você está acima do peso ideal!`)
} else {
    console.log(`${name}, você está com o peso ideal!`)
}