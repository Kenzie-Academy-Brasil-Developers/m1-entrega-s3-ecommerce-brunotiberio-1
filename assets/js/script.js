function filtroPosts(evento){
    const novoProduto = []
    const card = evento.target
    const arrayProdutos = document.querySelectorAll('.item')

    if(card.dataset.tag === 'Todos'){
        filtroTags(produtos)        
    } else {
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].tags.indexOf(card.dataset.tag) != -1){
                novoProduto.push(produtos[i])
            }
        }
        filtroTags(novoProduto)
    }

    for(let i = 0; i < arrayProdutos.length; i++){
        arrayProdutos[i].classList.remove('active');
    }
    
    card.classList.add('active')
}

const buttonBuscar = document.getElementById('botaoBuscar');
buttonBuscar.addEventListener('click', encontrarProdutos);

const listItem = document.getElementById('nav');
listItem.addEventListener('click', filtroPosts)

