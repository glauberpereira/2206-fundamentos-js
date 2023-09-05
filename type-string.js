const texto1 = "Olá, mundo!";
const texto2 ='Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = 'O fulano disse "Oi"';
console.log(citacao);

// concatenação  (+)
const citacaoConcatenada = "Meu nome é ";
const meuNome = "Leonardo";
console.log(citacaoConcatenada + meuNome);

// template string OU template literal (pesquisar o que é)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// trabalhando com strings
// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

// transforma toda a string em minusculo
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// para saber a quantidade de caracteres de uma string
const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres

