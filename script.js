/* function postProdutos(arrayPosts){

    const lista = document.querySelector('.produtos')

    for(let i = 0; i < arrayPosts.length; i++){

        const li = document.createElement('li');
        li.classList.add('itemProdutos')

        const img = document.createElement('img');
        img.src = arrayPosts[i].img;

        const h2 = document.createElement('h2');
        h2.classList.add('nomeProduto')
        h2.innerText = arrayPosts[i].nome;

        const descricao = document.createElement('p');
        h2.classList.add('descricao')
        h2.innerText = arrayPosts[i].descricao;

        const preco = document.createElement('p'); 
        h2.classList.add('preco')
        h2.innerText = arrayPosts[i].preco;

        const span = document.createElement('span'); 
        h2.innerText = 'Adicionar ao carrinho';

        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(descricao);
        li.appendChild(preco)
        li.appendChild(span)

        let arrayTags = arrayPosts[i].tags; //Atribui o array de tags a variavel

        for(let j = 0; j < arrayTags.length; j++){ //Loop pelo array tags
            const tag = document.createElement('span'); //Criei uma tag
            tag.innerText = arrayTags[j]; // Inseri o texto do array na tag
            li.appendChild(tag); //Inseri a tag no li
        }

        lista.appendChild(li);
    }

}

postProdutos(produtos) */

