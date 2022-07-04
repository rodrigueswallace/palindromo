function numeros (num1,num2) {
  let simNao = 'não'
  if(num1 === num2) {
    simNao = ''
  }
  let soma = num1 + num2

  let maiormenor = 'maior'
  if(soma < 10) {
    maiormenor = 'menor'
  }

  let maiormenor2 = 'maior'
  if(soma < 20) {
    maiormenor2 = 'menor'
  }
  return(`Os números ${num1} e ${num2} ${simNao} são iguais. Sua soma é ${soma}, que é ${maiormenor} que 10 ${maiormenor2} que 20`)
  
}

console.log(numeros(2.5))