function filtroTags(arrayProdutos){

    const produtoFiltro = document.querySelector('.produtos')
    produtoFiltro.innerText = ''

    for(let i = 0; i < arrayProdutos.length; i++){

        const li = document.createElement('li')
        li.classList.add('itemProdutos')

        const img = document.createElement('img')
        img.src = arrayProdutos[i].img

        const pTags = document.createElement('p')
        pTags.classList.add('tags')
        pTags.innerText = arrayProdutos[i].tags

        const h2 = document.createElement('h2')
        h2.classList.add('nomeProduto')
        h2.innerText = arrayProdutos[i].nome

        const pDescricao = document.createElement('p')
        pDescricao.classList.add('descricao')
        pDescricao.innerText = arrayProdutos[i].descricao

        const pPreco = document.createElement('p')
        pPreco.classList.add('preco')
        pPreco.innerText = arrayProdutos[i].preco

        const span = document.createElement('span')
        span.classList.add('botaoAddCarrinho')
        span.innerText = 'Adicionar ao carrinho'

        li.appendChild(img)
        li.appendChild(pTags)
        li.appendChild(h2)
        li.appendChild(pDescricao)
        li.appendChild(pPreco)
        li.appendChild(span)

        produtoFiltro.appendChild(li)
    }
}

filtroTags(produtos)


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













