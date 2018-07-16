let loaderBar = document.querySelector(".loader");
let buttonStart = document.querySelector(".button-start");
let buttonReset = document.querySelector(".button-reset")
buttonStart.addEventListener("click", startLoader);
buttonReset.addEventListener("click", resetLoader);

let intervalo = 1000;
let percentage = 2;
let loaderOnPause = true;


function startLoader() {
    loaderOnPause = false;

    setInterval(function () {
        if (percentage < 100 && !loaderOnPause) {
            intervalo = (Math.floor((Math.random() * 5) + 1)) * 500;
            percentage += getRandomNum();
            loaderBar.style.setProperty('--progress', `${percentage}%`);
            if (percentage >= 100) { document.querySelector(".dog").style.display = "block"; }
        }
    }, intervalo);
}

function getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function resetLoader() {
    percentage = 0;
    loaderOnPause = true;
    loaderBar.style.setProperty('--progress', `${percentage}%`);
    document.querySelector(".dog").style.display = "none";
}

