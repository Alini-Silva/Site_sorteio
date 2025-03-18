//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomesJaSorteados = []

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
        if (nome != '') {
            amigos.push(nome);
        } else {
            alert("Por favor, insira um nome.");
        }
    console.log(nome);
    console.log(amigos);
    limparCampo(); //Chama a função para limpar o campo após adicionar o nome
    nomesNaLista();
}


function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}
///OBS O ".VALUE" É PARA INDICAR QUE VOCE QUER O VALOR OU SEJA O QUE O USUARIO INSERIU.

function nomesNaLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let resultado = document.getElementById('resultado');
        let indice = gerarIndice()
        console.log(resultado)

        while (nomesJaSorteados.includes(indice)){
            indice = gerarIndice();
        }

        let nomeSorteado = amigos[indice]
        nomesJaSorteados.push(indice)
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
      
        if (nomesJaSorteados.length === amigos.length){
            alert("Todos os amigos secretos foram sorteados!")
            console.log(nomesJaSorteados)
            return sortearAmigo
        }else{
            return nomeSorteado
        }
   }
}   


function gerarIndice(){
    let indice  = Math.floor(Math.random() * amigos.length) ;
    console.log(indice)
    return indice
}


//Não ter repetição de nomes na lista

// criar uma lista, em seguida criar uma função em que ao usuario apertar em adicionar o nome é inserido na lista. 
// Em seguida ao clicar em sortear amigo os nomes vao ser retirado da lista sem repetição