//Função adicionar borda verde de acordo com o tipo selecionado
function selecionarPedido(selecionado, tipo){
    if (document.querySelector(`.${tipo}-selecionado`) != null) {
        document.querySelector(`.${tipo}-selecionado`).classList.remove(`${tipo}-selecionado`);
    
    }
   selecionado.classList.add(`${tipo}-selecionado`);
}

//Função exibir o botão fechar pedido verde
function exibirBotaoEncerramento (){
    if (document.querySelector(".prato-selecionado") != null && document.querySelector(".bebida-selecionado") != null && document.querySelector(".sobremesa-selecionado") != null ){
        document.querySelector(".botaopedido").classList.add("escondido") 
        document.querySelector(".fecharPedido").classList.remove("escondido") 
    }
}

//funções referente a cada tipo do menu
function selecionarPrato(selecionado){
    selecionarPedido (selecionado, "prato")
    exibirBotaoEncerramento ()
}
function selecionarBebida(selecionado){
    selecionarPedido (selecionado, "bebida")
    exibirBotaoEncerramento ()
}
function selecionarSobremesa(selecionado){
    selecionarPedido (selecionado, "sobremesa")
    exibirBotaoEncerramento ()
}

//Função aparecer tela de encerrar pedido
function fecharPedido (){
    document.querySelector(".filtro").classList.remove("escondido") 
    document.querySelector(".concluirCompra").classList.remove("escondido") 
    imprimirPedido()
}

//Botão de cancelar pedido
function cancelarPedido(){
    document.querySelector(".filtro").classList.add("escondido") 
    document.querySelector(".concluirCompra").classList.add("escondido") 
}

//Impressão do pedido na tela
function imprimirPedido(){
    //Prato
    const tipoPedido = ["prato" , "bebida", "sobremesa"] 
    let precoTotal = 0
    for (const pedido of tipoPedido){
        const precoPrato =  document.querySelector(`.${pedido}-selecionado h3`).innerText
        const nomePrato =  document.querySelector(`.${pedido}-selecionado h2`).innerText 
        document.querySelector(`.${pedido}Fim p:nth-child(1)`).innerHTML = nomePrato
        document.querySelector(`.${pedido}Fim p:nth-child(2)`).innerHTML= precoPrato
        precoTotal += convertTextPrice(precoPrato)
    }

    precoTotal = "R$ " + precoTotal.toFixed(2).replace(".",",")
    document.querySelector(".total p:nth-child(2)").innerHTML = precoTotal
    return precoTotal
}

//converter texto para preço
function convertTextPrice (text){
    return parseFloat(text.replace(",","."))
}


function botaoWhatsapp (){ 
    let mensagem =`Olá, gostaria de fazer o pedido:
- Prato: ${document.querySelector(".prato-selecionado h2").innerText}
- Bebida: ${document.querySelector(".bebida-selecionado h2").innerText}
- Sobremesa: ${document.querySelector(".sobremesa-selecionado h2").innerText}
Total: ${document.querySelector(".total p:nth-child(2)").innerText}
    
Nome: ${prompt('Digite seu nome')}
Endereço: ${prompt('Digite seu endereço')}`
    mensagem =window.encodeURIComponent(mensagem);
    window.open("https://wa.me/5532988749578?text=" + mensagem )

}


