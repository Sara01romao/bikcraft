const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {

    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        console.log(link)
        link.classList.add("ativo")
    }


}
links.forEach(ativarLink)

//Ativar Itens do orçamento


const parametros = new URLSearchParams(location.search);


function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true;
    }
   
 
}

parametros.forEach(ativarProduto)



