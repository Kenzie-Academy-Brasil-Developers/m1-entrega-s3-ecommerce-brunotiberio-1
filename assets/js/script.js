//botao pesquisar

const buttonBuscar = document.getElementById('botaoBuscar');
buttonBuscar.addEventListener('click', encontrarProdutos);

//botao filtro

const listItem = document.getElementById('nav');
listItem.addEventListener('click', filtroPosts)

//botao carrinho

const addProdutos = document.getElementById('produtos')
addProdutos.addEventListener('click', function(){
    for(let i = 0; i < produtos.length; i++){
        bancoDeDadosCarrinho.push(addProdutos)
        addCarrinhoCompras(bancoDeDadosCarrinho)
    }

})
