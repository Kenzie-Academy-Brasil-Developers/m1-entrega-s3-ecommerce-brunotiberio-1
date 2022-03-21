function encontrarProdutos(){
    const valorInput = document.getElementById('inputPesquisa');
    const novoData = [];
    
    for (let i = 0; i < produtos.length; i++){
        if(produtos[i].nome.indexOf(valorInput.value) !== -1){
            novoData.push(produtos[i])
        }
    }
    filtroTags(novoData);
}

