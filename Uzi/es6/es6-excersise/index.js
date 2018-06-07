var loader = document.querySelector('.loader');
var button = document.querySelector('.main__button');
var img = document.querySelector('.success__img');

function random() {
    for (let width = 0; width < 101; width++) {
        let randomWidth = Math.ceil((Math.random()) * 10);
        let randomTime = Math.ceil((Math.random()) * 10);
        width = width + randomWidth;
        loader.style.width = `calc(${width}%)`;
        loader.style.transition = `width ${randomTime}s`
        console.log(`Ancho agregado en este ciclo: ${width}`);
        console.log(`Tiempo en esta ejecución: ${randomTime}`);
    }
}

loader.addEventListener('transitionend', (event) => {
        button.style.display = 'none';
        img.style.display = 'initial';
    });



