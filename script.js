//Funções borda verde de seleção
function selecionarPrato(selecionado){
    if (document.querySelector(".prato-selecionado") != null) {
        document.querySelector(".prato-selecionado").classList.remove("prato-selecionado");
    }
   selecionado.classList.add("prato-selecionado");
   exibirBotaoEncerramento ()
}

function selecionarBebida(selecionado){
    if (document.querySelector(".bebida-selecionado") != null) {
        document.querySelector(".bebida-selecionado").classList.remove("bebida-selecionado");
    }
   selecionado.classList.add("bebida-selecionado");
   exibirBotaoEncerramento ()
}
function selecionarSobremesa(selecionado){
    if (document.querySelector(".sobremesa-selecionado") != null) {
        document.querySelector(".sobremesa-selecionado").classList.remove("sobremesa-selecionado");
    }
   selecionado.classList.add("sobremesa-selecionado");

   exibirBotaoEncerramento ()
}

//Função exibir o botão fechar pedido verde
function exibirBotaoEncerramento (){
    if (document.querySelector(".prato-selecionado") != null && document.querySelector(".bebida-selecionado") != null && document.querySelector(".sobremesa-selecionado") != null ){
        document.querySelector(".botaopedido").classList.add("escondido") 
        document.querySelector(".fecharPedido").classList.remove("escondido") 
    }
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
    let elementoPrato = document.querySelector(".prato-selecionado h3").innerText
    let precoPrato = elementoPrato;
    elementoPrato = document.querySelector(".prato-selecionado h2").innerText   
    let nomePrato = elementoPrato
    elementoPrato = document.querySelector(".pratoFim p:nth-child(1)")
    elementoPrato.innerHTML = nomePrato
    elementoPrato = document.querySelector(".pratoFim p:nth-child(2)")
    elementoPrato.innerHTML= precoPrato

    let elementobebida = document.querySelector(".bebida-selecionado h3").innerText
    let precobebida = elementobebida;
    elementobebida = document.querySelector(".bebida-selecionado h2").innerText   
    let nomebebida = elementobebida
    elementobebida = document.querySelector(".bebidaFim p:nth-child(1)")
    elementobebida.innerHTML = nomebebida
    elementobebida = document.querySelector(".bebidaFim p:nth-child(2)")
    elementobebida.innerHTML= precobebida

    let elementosobremesa = document.querySelector(".sobremesa-selecionado h3").innerText
    let precosobremesa = elementosobremesa;
    elementosobremesa = document.querySelector(".sobremesa-selecionado h2").innerText   
    let nomesobremesa = elementosobremesa
    elementosobremesa = document.querySelector(".sobremesaFim p:nth-child(1)")
    elementosobremesa.innerHTML = nomesobremesa
    elementosobremesa = document.querySelector(".sobremesaFim p:nth-child(2)")
    elementosobremesa.innerHTML= precosobremesa

    let precoTotal = textoPedidoFinal(precoPrato, precobebida, precosobremesa)

    let elementoTotal = document.querySelector(".total p:nth-child(2)")
    precoTotal = "R$ " + precoTotal.toString()
    precoTotal = precoTotal.replace(".",",")
    elementoTotal.innerHTML = precoTotal
    return precoTotal
}

//Calcular preço total ajustando casas decimais
function textoPedidoFinal (preco1, preco2, preco3){
    
    preco1 = parseFloat(preco1.replace(",","."));
    preco2 = parseFloat(preco2.replace(",","."));
    preco3 = parseFloat(preco3.replace(",","."));
    let precoTotal = preco1 + preco2 + preco3 
    precoTotal = Number(precoTotal).toFixed(2)
    return precoTotal
}

function botãoWhatsapp (){ 
    let mensagem =`Olá, gostaria de fazer o pedido:
- Prato: ${document.querySelector(".prato-selecionado h2").innerText}
- Bebida: ${document.querySelector(".bebida-selecionado h2").innerText}
- Sobremesa: Pudim ${document.querySelector(".sobremesa-selecionado h2").innerText}
Total: ${imprimirPedido()}
    
Nome: ${prompt('Digite seu nome')}
Endereço: ${prompt('Digite seu endereço')}`
    mensagem =window.encodeURIComponent(mensagem);
    window.open("https://wa.me/5532988749578?text=" + mensagem )

}


