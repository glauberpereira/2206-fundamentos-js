// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

//console.log(soma(3, 2));
//console.log(soma(-100, 30));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Glauber", 61));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));
