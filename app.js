var p1 =  document.getElementById('p1');
var btnCompra = document.getElementById('btnCompra');

p1.addEventListener('mouseenter', ()=>{
    p1.classList.add('cardAnimado');
    p1.classList.remove('produto');
    btnCompra.style.display = 'block'
});

p1.addEventListener('mouseleave', ()=>{
    p1.classList.add('produto');
    p1.classList.remove('cardAnimado');
    btnCompra.style.display = 'none';
});