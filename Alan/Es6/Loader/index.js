(function(){
    'use strict';
    
    const loader = document.querySelector('.relleno');
    const button = document.querySelector('.empezar');
    const img = document.querySelector('.nav__img');

    var relleno = 0;
    var velocidad = newVelocidad();
    var proceso;

    button.addEventListener('click', () => {

        proceso = setInterval(rellenado, velocidad);
        //proceso=setTimeout(rellenado, velocidad);

    });

    function rellenado(){
        relleno = relleno + newRelleno();
        velocidad=newVelocidad();
        if(relleno<100){
            loader.style.setProperty('width', `${relleno}%`);
        }
        else{
            relleno = 99;
            img.style.setProperty('display', 'flex');
            loader.style.setProperty('display', 'none');
            button.style.setProperty('display', 'none');
            clearInterval(proceso);
        }
        //clearInterval(proceso);
        //clearTimeout(proceso); 
    }

    function newVelocidad(){
        return (Math.ceil(Math.random()*3)*1000);
    }
    
    function newRelleno(){
        return Math.round(Math.random()*15)
    }

})();



