(function () {

    const button =  document.querySelector('.button');
    const tabName = document.querySelector('.input__name');
    const tabUrlImg = document.querySelector('.input__url');

    const templateTabs = document.querySelector('.tabs--content');
    const templatePages = document.querySelector('.pages');

    let incId = 0;

    button.addEventListener('click',(e)=> {

        incId++;

        let tab = new Tab(incId,tabName.value, tabUrlImg.value);
        onTab(templateTabs);
        templateTabs.insertAdjacentHTML('beforeend',tab.createNewTab);




        let page = new Page(incId);
        onPage(templatePages);
        templatePages.insertAdjacentHTML('beforeend',page.createNewPage);



        let tabDefault = document.querySelector('#tab__0');
        tabDefault.firstElementChild.removeAttribute('selected');
        let pagDefault = document.querySelector('#page__0');
        pagDefault.removeAttribute('open');


    });




})();

class Tab {

    constructor(incId,name, url) {
        this.name = name;
        this.url = url;
        this.incId = incId;
    }

    get createNewTab(){

        let tab = `
                     <div id="tab__${this.incId}" class="tabs__tab">
                        <div class="tabs__tab--content" selected  onclick="onPage(document.querySelector('.pages')),onTab(document.querySelector('.tabs--content'))">
                        <div class="tabs__tab--icon">
                            <img src="${this.url}">
                        </div>
                        <div class="tabs__tab--title">${this.name}</div>
                        <div class="tabs__tab--close"></div>
                    </div>
                </div>
        `;

        return tab;

    }

}

class Page {
    constructor(incId) {
        this.incId = incId;
    }

    get createNewPage(){
        this.incId++;

        let page = `
                     <div id="page__${this.incId}" class="pages__page--content" open>
                        <h1> New Page  </h1>
                     </div>
        `;

        return page;
    }

}


function onTab(tabs) {

    let children = tabs.children;

    let e = event.target;

    if(children.length === 1){ return;}

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

            child.firstElementChild.removeAttribute('selected');


    }

}

function onPage(pages) {

    let children = pages.children;

    let e = event.target;

    if(children.length === 1){ return;}

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

            child.removeAttribute('open');

    }
}

function onDefaultTab() {
    onTab(document.querySelector('.tabs--content'));
    onPage( document.querySelector('.pages'));
    let tabDefault = document.querySelector('#tab__0');
    tabDefault.firstElementChild.setAttribute('selected','');
    let pagDefault = document.querySelector('#page__0');
    pagDefault.setAttribute('open','');
}
