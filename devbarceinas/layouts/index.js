(function() {

    'use strict';

    const menuButton = document.querySelector('.navbar__menu--mobile');
    const sideNav = document.querySelector('.sidenav');

    menuButton.addEventListener('click', () => {
        sideNav.classList.add('sidenav--open');
    });

})();