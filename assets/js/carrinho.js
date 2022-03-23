function receberNodeList(){
    const removerProdutos = document.querySelectorAll('.removerProduto')
    console.log(removerProdutos)

    removerProdutos.forEach((elemento) => elemento.addEventListener('click', function(event){
        const idProduto = event.target.id
        console.log(idProduto)

/*         const produtoClicado = bancoDeDadosCarrinho.map((elemento) => 
        (bancoDeDadosCarrinho.indexOf(elemento.id == idProduto)))
        console.log(produtoClicado)

        const posicao = bancoDeDadosCarrinho.indexOf() */
    
/*         const resposta = bancoDeDadosCarrinho.filter((elemento, index) => 
        {
            
        return bancoDeDadosCarrinho.indexOf(elemento.id != idProduto)

        
        }) //fazer com for
        console.log(resposta) */

        const novoCarrinho = bancoDeDadosCarrinho.splice(bancoDeDadosCarrinho.findIndex((elemento) => 
        elemento.id == idProduto), 1)

        addCarrinhoCompras(bancoDeDadosCarrinho)

    




    }))

}

const bancoDeDadosCarrinho = []

function addCarrinhoCompras(){

    const somaValor = bancoDeDadosCarrinho.reduce((prev, pos) => prev + pos.preco, 0)

    let somaQuantidade = bancoDeDadosCarrinho.length

        //zerar carrinhoItens
        const zerandoCarrinhoArea = document.getElementById('carrinhoArea')
        zerandoCarrinhoArea.innerText = ''

        //h2 com os dizeres carrinho de compras pre-renderizado
        const h2 = document.createElement('h2')
        h2.classList.add('carrinho')
        h2.innerText = 'Carrinho de compras'

        //div pai do carrinho inteiro preenchido (colocar o carrinhoCheio aqui) pre-renderizado
        const divCarrinhoArea = document.getElementById('carrinhoArea')

        //div pai de todos os itens do carrinho (colocar todos os itens aqui) pre-renderizado
        const divCarrinhoCheio = document.createElement('div')
        divCarrinhoCheio.classList.add('carrinhoCheio')

        //divSomaCarrinho que é filha de carrinhoArea, já que fica abaixo da area do carrinho pre-renderizado
        const divSomaCarrinho = document.createElement('div')
        divSomaCarrinho.classList.add('somaCarrinho')

        //carrinhoQuantidade que será filho do divSomaCarrinho pre-renderizado
        const divCarrinhoQuantidade = document.createElement('div')
        divCarrinhoQuantidade.classList.add('carrinhoQuantidade')

        //texto quantidade que será filho de divCarrinhoQuantidade pre-renderizado
        const pQuantidade = document.createElement('p')
        pQuantidade.classList.add('quantidade')
        pQuantidade.innerText = 'Quantidade:'

        //texto total que será filho de divCarrinhoQuantidade pre-renderizado
        const pCarrinhoTotal = document.createElement('p')
        pCarrinhoTotal.classList.add('carrinhoTotal')
        pCarrinhoTotal.innerText = 'Total:'

        //carrinhoValor que será filho do divSomaCarrinho pre-renderizado
        const divCarrinhoValor = document.createElement('div')
        divCarrinhoValor.classList.add('carrinhoValor')




        //itens dinamicos

        for(let i = 0; i < bancoDeDadosCarrinho.length; i++){

            //dinamicos dos itens do carrinho de compras

        const divOrganizada = document.createElement('div')
        divOrganizada.classList.add('divOrganizada')

        // div da imagem do produto no carrinho, pai da img abaixo **dinamico
        const divCarrinhoImagens = document.createElement('div')
        divCarrinhoImagens.classList.add('carrinhoImagem')

        //imagem filho da div imagem **dinamico
        const imgCarrinho = document.createElement('img')
        imgCarrinho.src = bancoDeDadosCarrinho[i].img

        //div que será pai dos textos dos itens do carrinho e que será adicionada a divCarrinhoCheio ** dinamico
        const divTextoItem = document.createElement('div')
        divTextoItem.classList.add('textoItem')

        //nome do produto que será filho da divTextoItem **dinamico
        const h3CarrinhoNome = document.createElement('h3')
        h3CarrinhoNome.classList.add('carrinhoNome')
        h3CarrinhoNome.innerText = bancoDeDadosCarrinho[i].nome

        //preco do produto que será filho da divTextoItem **dinamico
        const pCarrinhoPreco = document.createElement('p')
        pCarrinhoPreco.classList.add('carrinhoPreco')
        pCarrinhoPreco.innerText = 'R$ ' + bancoDeDadosCarrinho[i].preco.toFixed(2)

        //remover produto que será filho da divTextoItem **dinamico
        const spanRemoverItem = document.createElement('span')
        spanRemoverItem.id = bancoDeDadosCarrinho[i].id
        spanRemoverItem.classList.add('removerProduto')
        spanRemoverItem.innerText = 'Remover produto'

        
        //itens dinamicos do divSomaCarrinho

        //valorQuantidade será filho de carrinhoValor **dinamico
        const pValorQuantidade = document.createElement('p')
        pValorQuantidade.classList.add('valorQuantidade')
        pValorQuantidade.innerText = somaQuantidade

        //valorTotal será filho de carrinhoValor **dinamico
        const pValorTotal = document.createElement('p')
        pValorTotal.classList.add('valorTotal')
        pValorTotal.innerText = 'R$ ' + somaValor.toFixed(2)

        //area de adicionar filhos e pais dinamicos

        //dinamicos

        //div que organiza os itens do carrinho
        divOrganizada.appendChild(divCarrinhoImagens)
        divOrganizada.appendChild(divTextoItem)


        //adicionado a imagem **dinamicos
        divCarrinhoImagens.appendChild(imgCarrinho)


        //adicionado textos dos itens do carrinho **dinamicos
        divTextoItem.appendChild(h3CarrinhoNome)
        divTextoItem.appendChild(pCarrinhoPreco)
        divTextoItem.appendChild(spanRemoverItem)


        //adicionado a imagem e o item **dinamicos
        divCarrinhoCheio.appendChild(divOrganizada)

        //adicionado textos dos itens carrinhoValor
        divCarrinhoValor.appendChild(pValorQuantidade)
        divCarrinhoValor.appendChild(pValorTotal)


        }     
        
        //tudo adicionado (pre-renderizados)

        //todos os itens pre-renderizados da divCarrinhoQuantidade
        divCarrinhoQuantidade.appendChild(pQuantidade)
        divCarrinhoQuantidade.appendChild(pCarrinhoTotal)


        //todos os itens pre-renderizados da divSomaCarrinho
        divSomaCarrinho.appendChild(divCarrinhoQuantidade)
        divSomaCarrinho.appendChild(divCarrinhoValor)



        //todos os itens pre-rederizados do carrinhoArea
        divCarrinhoArea.appendChild(h2)
        divCarrinhoArea.appendChild(divCarrinhoCheio)
        divCarrinhoArea.appendChild(divSomaCarrinho)  

        receberNodeList()

}
