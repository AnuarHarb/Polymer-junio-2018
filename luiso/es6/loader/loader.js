'use strict'

let boton = document.querySelector("button");

boton.onclick = function () {
    console.log(Math.random()+1);
}


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