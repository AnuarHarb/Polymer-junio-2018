(function(){
    const _loader  = document.getElementById('loader');
    const _speed   = document.getElementById('speed');
    const _button  = document.getElementById('button');
    const _message = document.getElementById('message');
    const _random  = document.getElementById('random');
    const MAX_CHARGE = 20;
    const MIN_CHARGE = 2;
    const MAX_WIDTH = 100;
    const MIN_SPEED = .5;
    const MAX_SPEED = 2;

    var width = 0;
    var cycle;
    var speed;

    function fillLoader( ){
        width = 0;
        speed =  +_speed.value || MIN_SPEED;

        // Reset loader bar
        _loader.style.width = 0;

        if( _random.checked ){
            speed = (Math.random()*MAX_SPEED) + MIN_SPEED;
            _speed.value = '';
        }
        // Start Download
        console.info( 'speed '+(speed*1000) );
        cycle = setInterval(loadCycle, speed*1000);
    }

    function loadCycle( ){
        width += (Math.random()*MAX_CHARGE) + MIN_CHARGE; 
        if( width >= MAX_WIDTH ){
            clearInterval( cycle );
            setTimeout(loadComplete, speed*1000);
            width = MAX_WIDTH;
        }
        _loader.style.width = width+'%';
    }

     // Complete Message
    function loadComplete( ){
        _message.innerHTML = 'Descarga Completa!!'
    }

    _button.addEventListener('click', fillLoader );

})();