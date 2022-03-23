const buttonBuscar = document.getElementById('botaoBuscar');
buttonBuscar.addEventListener('click', encontrarProdutos);

//botao filtro

const listItem = document.getElementById('nav');
listItem.addEventListener('click', filtroPosts)

//botao carrinho

const addProdutos = document.getElementById('produtos')
addProdutos.addEventListener('click', function(event){
    const idProduto = event.target.id

    const produto = produtos.filter((elemento) => elemento.id === Number(idProduto)) //fazer com for
    bancoDeDadosCarrinho.push(...produto)


console.log(bancoDeDadosCarrinho)

        addCarrinhoCompras(bancoDeDadosCarrinho)
})


