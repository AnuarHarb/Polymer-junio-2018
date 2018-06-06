(function() {
    'use srict';
    
    const sidenavButton = document.getElementsByClassName('toggleSidenav');
    const sidenav = document.querySelector('.sidenav');

    for(let button of sidenavButton) {
        button.addEventListener('click', () => {
            sidenav.classList.toggle('sidenav--open');
        });
    }
})();