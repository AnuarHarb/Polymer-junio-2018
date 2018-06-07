
(function () {
    let loaderBar = document.querySelector(".loader");
    let button = document.querySelector("button");
    button.addEventListener("click", startLoader);

    let percentage = 0;

    function setRandomInterval() {
        return Math.floor((Math.random() * 10) + 5);
    }

    function startLoader() {
        alert("hi")
        while (percentage < 120) {
            myFunc()

        }

    }

    function myFunc() {
        setInterval(function () {
            aconsole.log(percentage)
            percentage += 20
        }, 3000);
    }

    function getNumBetween2And6() {
        let num = Math.floor((Math.random() * 5) + 1);
        if (isOddNumer(num)) { num++ };
        console.log(num);
        return num;
    }

    function runLoader() {
        if (percentage < 120) {
            loaderBar.style.setProperty('--progress', `${percentage}%`);
            percentage += setRandomInterval();
            if (percentage > 120) {
                document.querySelector(".dog").style.display = "block";
            }
        }
    }

    function incrementLoader(num) {
        loaderBar.style.setProperty('--progress', `${percentage}%`);
    }

    function incrementPercentage(num) {
        percentage = percentage + num;
    }

    function isOddNumer(num) {
        if (num % 2 !== 0) {
            return true
        }
    }






})()




