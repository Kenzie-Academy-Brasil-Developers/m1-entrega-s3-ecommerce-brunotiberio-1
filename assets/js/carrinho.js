const bancoDeDadosCarrinho = []

function addCarrinhoCompras(){

    //verificação do banco de dados do carrinho para montar o design

   if(bancoDeDadosCarrinho.length === 0){

    //carrinho vazio se tamanho do banco de dados do carrinho for igual a 0   
        
    const divCarrinhoVazio = document.createElement('div')
    divCarrinhoVazio.classList.add('carrinhoItens')

    const pVazio = document.createElement('p')
    pVazio.classList.add('vazio')
    pVazio.innerText = 'Carrinho vazio'

    const pVazioDescricao = document.createElement('p')
    pVazioDescricao.classList.add('vazioDescricao')
    pVazioDescricao.innerText = 'Adicione itens'

    divCarrinhoVazio.appendChild(pVazio)
    divCarrinhoVazio.appendChild(pVazioDescricao)    

   } else{

    //carrinho com itens se tamanho do banco de dados do carrinho for diferente a 0

    const carrinho = document.querySelector('.carrinhoItens')
    console.log(carrinho)
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
    pCarrinhoQuantidade.innerText = 'Quantidade:'

    const pValorTotal = document.createElement('p')
    pValorTotal.classList.add('valorTotal')
    pCarrinhoQuantidade.innerText = 'Total: R$ '

    for(let i = 0; i < bancoDeDadosCarrinho.length; i++){

        const divImgCarrinho = document.createElement('div')
        divImgCarrinho.classList.add('carrinhoImagem')

        const imgCarrinho = document.createElement('img')
        imgCarrinho.src = bancoDeDadosCarrinho[i].img

        const divTextosCarrinho = document.createElement('div')

        const h3Carrinho = document.createElement('h3')
        h3Carrinho.classList.add('carrinhoNome')
        h3Carrinho.innerText = bancoDeDadosCarrinho[i].nome

        const pCarrinho = document.createElement('p')
        pCarrinho.classList.add('carrinhoPreco')
        pCarrinho.innerText = bancoDeDadosCarrinho[i].preco

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
    }
}