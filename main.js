const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');

function playSound(x) {
        listaDeSons[x].play();
}
let index = 0;
while (index < listaDeTeclas.length) {
    listaDeTeclas[index].onclick = playSound(index);
    index++;

}
