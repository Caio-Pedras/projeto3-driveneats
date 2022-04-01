function selecionarPrato(selecionado){
    if (document.querySelector(".prato-selecionado") != null) {
        document.querySelector(".prato-selecionado").classList.remove("prato-selecionado");
    }
   selecionado.classList.add("prato-selecionado");
   if (document.querySelector(".prato-selecionado") != null && document.querySelector(".bebida-selecionado") != null && document.querySelector(".sobremesa-selecionado") != null ){
    document.querySelector(".botaopedido").classList.add("escondido") 
    document.querySelector(".fecharPedido").classList.remove("escondido") 
}
}

function selecionarBebida(selecionado){
    if (document.querySelector(".bebida-selecionado") != null) {
        document.querySelector(".bebida-selecionado").classList.remove("bebida-selecionado");
    }
   selecionado.classList.add("bebida-selecionado");
   if (document.querySelector(".prato-selecionado") != null && document.querySelector(".bebida-selecionado") != null && document.querySelector(".sobremesa-selecionado") != null ){
    document.querySelector(".botaopedido").classList.add("escondido") 
    document.querySelector(".fecharPedido").classList.remove("escondido") 
}
   
}


function selecionarSobremesa(selecionado){
    if (document.querySelector(".sobremesa-selecionado") != null) {
        document.querySelector(".sobremesa-selecionado").classList.remove("sobremesa-selecionado");
    }
   selecionado.classList.add("sobremesa-selecionado");

   if (document.querySelector(".prato-selecionado") != null && document.querySelector(".bebida-selecionado") != null && document.querySelector(".sobremesa-selecionado") != null ){
    document.querySelector(".botaopedido").classList.add("escondido") 
    document.querySelector(".fecharPedido").classList.remove("escondido") 
}
}

function fecharPedido (){
    document.querySelector(".filtro").classList.remove("escondido") 
    document.querySelector(".concluirCompra").classList.remove("escondido") 
}

function cancelarPedido(){
    document.querySelector(".filtro").classList.add("escondido") 
    document.querySelector(".concluirCompra").classList.add("escondido") 
}