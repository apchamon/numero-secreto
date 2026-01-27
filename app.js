alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');
while(chute != numeroSecreto)
    chute = prompt('Errou! Mas não desanime, continue tentando. Dê outro chute')

if (chute == numeroSecreto) {
    alert('Isso ai! Você descobriu o número secreto');
}