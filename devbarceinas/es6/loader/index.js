(function() {

    'use strict';

    const loader__action    = document.getElementById('loader__action');
    const loader__bar       = document.getElementsByClassName('loader__bar')[0];

    loader__action.addEventListener('click', () => {
        loading(0); 
    });

    const loading = (anch) => {
        if (anch >= 100) {
            document.getElementById("loader__message").innerHTML = "Welcome Barrio !! :D";
        } else {
            let random = Math.round(Math.random() * (100 - anch));
            let action = anch + random
             ;
            loadingVelocy(action);
        }
    }

    const loadingVelocy = (anch) => {
        let time = loadingSlow();
        loader__bar.style.duration = `${time}s`;
        loader__bar.style.width = `${anch}%`;
        setTimeout(() => {
          loading(anch);
        }, time * 1000);
      }

    const loadingSlow = () => {
        let velocy = Math.ceil(Math.random() * 5);
        return velocy;
    }

})();