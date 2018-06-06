(function() {

    'use strict';

    const loader__action    = document.getElementById('#loader__action');
    const loader__bar       = document.getElementsByClassName('loader__bar')[0];

    document.getElementById('loader__action').addEventListener('click', () => {
        loading(0);
    });

    const loading = (anch) => {
        if (anch >= 100) {
            console.log('Datos cargados!!');
        } else {
            let random = 100;
            let action = anch + Math.round(Math.random() * (random - anch));
            loadingVelocy(action);
        }
    }

    const loadingVelocy = (anch) => {
        let time = loadingSlow();
        loader__bar.style.duration = time + 's';
        loader__bar.style.width = anch + '%';
        setTimeout(() => {
          loading(anch);
        }, time * 1000);
      }

    const loadingSlow = () => {
        let velocy = Math.ceil(Math.random() * 10);
        return velocy;
    }

})();