const tab_title = document.querySelector('.tab_title');
const button = document.querySelector('.new_tab');
const input = document.getElementById('title');
const tabs = document.querySelector('.tab');

var conTabs = 1;
var tabList = [];
var titleList= [];

(function(){
    'use strict';

    button.addEventListener('click', () => {

        var newtab = `<button class="tablinks" id="tab${conTabs}" onclick="viewTitle(${conTabs}-1)">Tab${conTabs}</button>`; 
        console.log(newtab);
        tabList.push(newtab);
        tabs.innerHTML = tabList;

        var newTitle = new Tab(input.value);
        input.value = "";

        titleList.push(newTitle);
        console.log(titleList[0]);

        conTabs = conTabs + 1;
    });

    class Tab{
        constructor(title){
            this.title = title;
        }
    
        mostrarTab(){
            tab_title.innerHTML = `<h2 class="title_tab">${this.title}</h2>`;
        } 
    }

})();

function viewTitle(object){
    titleList[object].mostrarTab();
}

