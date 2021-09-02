/*function showList(empresa, ...clientes) {
    console.log(empresa);
    console.log(clientes);
}
 showList('teste', 1.2,1231,123); */

/* 
const numeros = [1,2,4,5,58,8,250];

console.log(Math.max(...numeros));

const items = document.querySelectorAll('li');

[...items].map(item => {
    console.log(item);
}) */


/* const carro = { cor: "Azul", portas: 4, ano: 2020 };

const cloneCarro2 = carro;

const cloneCarro = { ...carro, turbo: true } */

class Transporte {
    constructor() {
        this.terrestre = true;
    }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super();
        this.cor = cor;
        this.portas = portas;
    }
}

const carro = new Carro("vermelho", 4);

const cloneCarro = { ...carro };

console.log(cloneCarro);