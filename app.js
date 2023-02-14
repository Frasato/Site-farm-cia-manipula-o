var produtos = document.getElementsByClassName('produto');

for(let i = 0; i < produtos.length; i++){
    produtos[i].addEventListener('mouseenter',()=>{
        produtos[i].classList.add('cardAnimado');
    });

    produtos[i].addEventListener('mouseout', ()=>{
        produtos[i].classList.remove('cardAnimado');
    });
}