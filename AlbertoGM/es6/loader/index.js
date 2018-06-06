(function () {

    var time;
    var interval;


    const btn = document.querySelector('.startLoader');
    btn.addEventListener('click',()=> {


        const bar = document.querySelector('.progress__bar');
        const value = document.querySelector('.barvalue');

        bar.value= 0;
        value.innerHTML = bar.value + '%';

        function getRandomInterval(min, max) {
            return Math.floor(Math.random() * ((max - min) + min));
        }
        function getRandomTime(min, max) {
            return Math.floor((Math.random() * ((max - min) + min))/60);
        }

        const animator = ()=> {

            interval = getRandomInterval(1,15);
            time = getRandomTime(10,50000);

            console.log('interval',interval);
            console.log('time',time);

            bar.value=(bar.value + interval);
            value.innerHTML = bar.value + '%';
            if ( bar.value+interval < bar.getAttribute('max')){
                setTimeout(animator, time);
            } else {
                value.innerHTML = 'Carga completada';
                bar.value = bar.getAttribute('max');
            }
        };


        setTimeout(animator, time);

    });


})();
