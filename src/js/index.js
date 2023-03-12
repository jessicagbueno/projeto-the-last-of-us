/*
 objetivo- quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

 -passo1- dar um jeito de pegar o elemento html dos botões

 passo2- dar um jeito de identificar o clique do usuário no botão

 passo3- desmarcar o botão selecionado anterior

 passo4- marcar o botão clicando como se estivesse selecionado
 passo5- esconder a imagem ativa de fundo 
 passo6- fazer aparecer a imagem correspondente ao botão clicado
 */


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', () =>{
        console.log(indice);
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[indice].classList.add('ativa');


    })
})