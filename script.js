let audios = [
    {caminho:'matuto.mp3', legenda:'Matuto de verdade'},
    {caminho:'Arash.mp3', legenda:'Arash'},
    {caminho:'gustavo1.mp3', legenda:'Paula Fernandes'},
    {caminho:'Hayit.mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'gustavo2.mp3', legenda:'Paula Fernandes'},
    {caminho:'gustavo3.mp3', legenda:'Paula Fernandes'},
    {caminho:'gustavo4.mp3', legenda:'Paula Fernandes'},
    {caminho:'gustavo5.mp3', legenda:'Paula Fernandes'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

