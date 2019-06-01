(function () {
    'use srict';

    const button = document.querySelector('#create__btn');
    const list = document.querySelector('#tabs__list');
    const text = document.querySelector('#text__input');
    const welcomeBtn = document.querySelector('#welcome__btn');
    const createBtn = document.querySelector('#new__btn');
    const item = document.getElementsByClassName('selected__item');
    const welcome = document.querySelector('#welcome__div');
    const create = document.querySelector('#create__div');
    const content = document.querySelector('#content__div');

    welcomeBtn.addEventListener('click', () => {
        content.classList.add('hidden__div');
        create.classList.add('hidden__div');
        welcome.classList.remove('hidden__div');
    });

    createBtn.addEventListener('click', () => {
        content.classList.add('hidden__div');
        welcome.classList.add('hidden__div');
        create.classList.remove('hidden__div');
    });

    // Definition of Tab Class
    class Tab {
        constructor(title, myInput) {
            this.title = title;
            this.node = document.createElement("LI");
            this.textnode = document.createTextNode(myInput);
        }

        setTextNode() {
            this.node.appendChild(this.textnode);
        }

        setClasses() {
            this.node.classList.add('selected__item');
            this.node.classList.add('tab');
        }
    }

    button.addEventListener('click', () => {
        let inputValue = text.value; //Set input value in variable
        let newtab = new Tab(inputValue, inputValue); //New Class in each click
        newtab.setTextNode(); //Invoque internal methods
        newtab.setClasses(); //Invoque internal methods

        /* Procedimiento sin usar clases: 
        //let node = document.createElement("LI");
        //let textnode = document.createTextNode(text.value);
        //node.appendChild(textnode);
        //node.classList.add('selected__item');
        //node.classList.add('tab');
        */

        list.appendChild(newtab.node); // Add the element to List's elements (is an Array)
        setUpTabs(); //Set the tabs for read 
        text.value = ''; //Empty input
    });
    
    function setUpTabs() {
        for (const selected of item) {
            selected.addEventListener('click', () => {
                welcome.classList.add('hidden__div');
                create.classList.add('hidden__div');
                content.classList.remove('hidden__div');
                content.childNodes[1].innerText = selected.innerText;
            })
        }        
    }


})();