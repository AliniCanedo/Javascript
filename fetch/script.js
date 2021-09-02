fetch('https://ranekapi.origamid.dev/json/api/produto').then((response) =>  response.json()
).then(jsonBody => {
    document.querySelector('#app').innerHTML = jsonBody[0].nome;
    console.log(jsonBody)
});

/* const data = {
    id: 'alini',
    nome: 'Alini',
    email: 'alini.canedo@gmail.com',
    senha: '123123',
    cep: '80010010',
    rua: 'Rua Marechal Deodoro',
    numero: '123',
    bairro: 'Centro',
    cidade: 'Curitiba',
    estado: 'Paraná'

}

fetch('https://ranekapi.origamid.dev/wp-json/api/usuario', {
    method: 'POST',
    headers: {
        'Content-Type': 'applaction/json'
    },
    body: JSON.stringify(data)
}); */