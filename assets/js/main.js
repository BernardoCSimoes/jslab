console.log("JavaScript carregado com Sucesso");


let quantidade = 3;

console.log(quantidade);

quantidade = 5;

console.log(quantidade);

const nomeCurso = "Desenvolvimento de Interfaces Web";

console.log(nomeCurso);

const instituicao = "PUC Minas";
console.log(instituicao);

console.log(typeof "Ola");
console.log(typeof 42);
console.log(typeof false);


// 14
const nome = "Ana";
const idade = 21;

let mensagem =
    "Nome: " + nome + " | Idade: " + idade;

console.log(mensagem);



// 15
mensagem =
    `Nome: ${nome} | Idade: ${idade}`;

// 16
const preco = 120;
quantidade = 3;
const percentualDesconto = 10;
const subTotal = preco * quantidade;
const desconto = subTotal * percentualDesconto / 100;

const total = subTotal - desconto;

console.log(`Subtotal: R$ ${subTotal}`)
console.log(`Desconto: R$ ${desconto}`)
console.log(`Total: R$ ${total}`)

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

