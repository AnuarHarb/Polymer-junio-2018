class Tab {


    constructor() {
    }

    addItem() {
        let ul = document.getElementById("tabs");
        let tabs__input = document.getElementById("tabs__input");
        let li = document.createElement("li");
        li.setAttribute('id', tabs__input.value);
        li.appendChild(document.createTextNode(tabs__input.value));
        ul.appendChild(li).style.padding='20px';
    }

}

let addTabs = document.getElementById("tabs__add--element"); 

if (addTabs) {
    addTabs.addEventListener('click', () => {
        const tab = new Tab();
        tab.addItem();
    });
}
