const tab_title = document.querySelector('.tab_title');
const button = document.querySelector('.new_tab');
const input = document.getElementById('title');
const tabs = document.querySelector('.tab');
const buttonNewTab = document.querySelector('#createTab');

var conTabs = 1;
var tabList = [];
var titleList= [];

(function(){
    'use strict';

    button.addEventListener('click', () => {

        var newtab = `<button class="tablinks" id="tab${conTabs}" onclick="viewTitle(${conTabs}-1)">Tab${conTabs}</button>`; 
        tabList.push(newtab);
        tabs.innerHTML = tabList;

        var newTitle = new Tab(input.value);
        input.value = "";
        titleList.push(newTitle);

        conTabs = conTabs + 1;
    });

    buttonNewTab.addEventListener('click', () => {
        button.style.setProperty('display', 'inline-block');
        input.style.setProperty('display', 'inline-block');
        document.querySelector('.title_tab').style.setProperty('display', 'none');
    });

    class Tab{
        constructor(title){
            this.title = title;
        }
    
        mostrarTab(){
            tab_title.innerHTML = `<h2 class="title_tab">${this.title}</h2>`;
            button.style.setProperty('display', 'none');
            input.style.setProperty('display', 'none');
        } 
    }

})();

function viewTitle(object){
    titleList[object].mostrarTab();
}

