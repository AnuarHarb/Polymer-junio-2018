(function() {
    'use strict';

    const menu_icon = document.querySelector('.menu__icon');
    const menu = document.querySelector('.menu__mobile');
    const menu_scrim = document.querySelector('.menu__mobile--scrim');
    const menu_panel = document.querySelector('.menu__mobile--panel');

    window.onresize = function(/*event*/) {
        menu.removeAttribute('opened');
            menu_scrim.removeAttribute('opened');
            menu_panel.removeAttribute('opened');
    };

    
    menu_icon.addEventListener('click',()=>{
        if(menu.hasAttribute('opened')){
            menu.removeAttribute('opened');
            menu_scrim.removeAttribute('opened');
            menu_panel.removeAttribute('opened');
        }else{
            menu.setAttribute('opened','');
            menu_scrim.setAttribute('opened','');
            menu_panel.setAttribute('opened','');
        }
    });

    


    

    /*const menu = document.querySelector('.menu__mobile');

    menu.addEventListener('click',()=> {
        menu.classList.toggle(--open);
    });*/



  
    /*const sidenavButton = document.getElementsByClassName('toggleSidenav');
    const sideNav = document.querySelector('.sidenav');
  
    for(let button of sidenavButton) {
      button.addEventListener('click', () => {
        sideNav.classList.toggle('sidenav--open');
      });
    };*/
  
  })();/* iife */