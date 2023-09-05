// tipos de dados e booleanos

// CONVERSÃO IMPLÍCITA
// pode converter um tipo de dado em outro

const numero = 456;
const numeroString = '456';

// aqui vai retornar false
// console.log(numero === numeroString);

// aqui vai retornar true, porque só com dois == não compara tipo
// console.log(numero == numeroString);

// aqui vira como se fosse uma concatenação
// console.log(numero + numeroString);

// CONVERSÃO EXPLÍCITA
//Number()
//String()

console.log(numero + Number(numeroString));
