function addCarrinhoCompras(arrayProdutos){

    let somaValorTotal = 0
    let somaItens = 0

    if(somaValorTotal !== 0){
        const carrinho = document.querySelector('.carrinhoItens')
        carrinho.innerText = ''

        const carrinhoCheio = document.createElement('div')
        carrinhoCheio.classList.add('carrinhoCheio')

        const somaCarrinho = document.createElement('div')
        somaCarrinho.classList.add('somaCarrinho')

        const divCarrinhoQuantidade = document.createElement('div')
        divCarrinhoQuantidade.classList.add('carrinhoQuantidade')

        const pCarrinhoQuantidade = document.createElement('p')
        pCarrinhoQuantidade.classList.add('quantidade')
        pCarrinhoQuantidade.innerText = 'Quantidade:'

        const pCarrinhoTotal = document.createElement('p')
        pCarrinhoTotal.classList.add('carrinhoTotal')
        pCarrinhoQuantidade.innerText = 'Total:'

        const divCarrinhoValor = document.createElement('div')
        divCarrinhoValor.classList.add('carrinhoValor')

        const pValorQuantidade = document.createElement('p')
        pValorQuantidade.classList.add('valorQuantidade')
        pCarrinhoQuantidade.innerText = 'Quantidade:' + somaItens

        const pValorTotal = document.createElement('p')
        pValorTotal.classList.add('valorTotal')
        pCarrinhoQuantidade.innerText = 'Total: R$ ' + somaValorTotal
    

        for(let i = 0; i < produtos.length; i++){

            const divImgCarrinho = document.createElement('div')
            divImgCarrinho.classList.add('carrinhoImagem')

            const imgCarrinho = document.createElement('img')
            imgCarrinho.src = arrayProdutos[i].img

            const divTextosCarrinho = document.createElement('div')

            const h3Carrinho = document.createElement('h3')
            h3Carrinho.classList.add('carrinhoNome')
            h3Carrinho.innerText = arrayProdutos[i].nome

            const pCarrinho = document.createElement('p')
            pCarrinho.classList.add('carrinhoPreco')
            pCarrinho.innerText = arrayProdutos[i].preco

            const spanCarrinho = document.createElement('span')
            spanCarrinho.classList.add('removerProduto')
            spanCarrinho.innerText = 'Remover produto'

            divTextosCarrinho.appendChild(spanCarrinho)
            divTextosCarrinho.appendChild(pCarrinho)
            divTextosCarrinho.appendChild(h3Carrinho)
            divImgCarrinho.appendChild(imgCarrinho)
            carrinhoCheio.appendChild(divImgCarrinho)
            carrinhoCheio.appendChild(divTextosCarrinho)

            divCarrinhoQuantidade.appendChild(pCarrinhoQuantidade)
            divCarrinhoQuantidade.appendChild(pCarrinhoTotal)
        
            
            divCarrinhoValor.appendChild(pValorQuantidade)
            divCarrinhoValor.appendChild(pValorTotal)
            
            somaCarrinho.appendChild(divCarrinhoQuantidade)
            somaCarrinho.appendChild(divCarrinhoValor)
        }

        for(j = 0; j < produtos.length; j++){
            let somaProduto = parseInt(produtos[i].preco)
            somaValorTotal += somaProduto
            somaItens++
        }
    }
}

addCarrinhoCompras(produtos)