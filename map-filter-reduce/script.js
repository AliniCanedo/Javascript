const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meu dados",
];

const precosFiltro = precos.filter(preco => preco.includes("R$"));

const precoNumeros = precosFiltro.map((preco) => +preco.replace('R$ ', ''));

const total = precoNumeros.reduce(function(acumulador, item) {
    console.log(acumulador, item);
    return acumulador + item
})

console.log(total);


