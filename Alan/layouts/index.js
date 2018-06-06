(function() {
    'use strict';

    const sidenavButton = document.getElementsByClassName('toogleSidenav');
    const sideNav = document.querySelector('.sidenav');

    for(let button of sideNav) {
        button.addEventListener('click', () => {
            sideNav.classList.toggle('sidenav--open');
        });
    }

})();