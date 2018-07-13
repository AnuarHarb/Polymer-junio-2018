'use strict'

function progress() {
    let bar = document.getElementById('bar');
    let image = document.querySelector('.image--done');
    let width = 1;
    let id = setInterval(backLoad, timeLoad);
    if (image.style.display == "flex") {
        image.style.display = "none";
    }

    function backLoad() {
        if (width >= 100) {
            clearInterval(id);
            image.style.display = "flex";
        } else {
            width++;
            bar.style.padding = "10px 0";
            bar.style.width = `${width}%`;
            bar.innerHTML = `${width * 1} % `;
        }
    }

    function timeLoad() {
        let randomValue = Math.floor(Math.random() * 500) + 1;
        console.log(randomValue);
        return randomValue;
    }
}


// console.log(Math.floor(Math.random() * 500) + 1);

/* 
("#progressBar", {
    color: "#dd3355",
    strokeWidth: 5,
    svgStyle: {
        display: "block",
        width: "100%"
    },
    duration: 2500,
    easing: "easeInOutQuart"
}); */