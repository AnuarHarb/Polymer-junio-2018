const tab_title = document.querySelector('.tab_title');
const button = document.querySelector('.new_tab');
const input = document.getElementById('title');
const tabs = document.querySelector('.tab');
const buttonNewTab = document.querySelector('#createTab');
const input_button = document.querySelector('.input_button');
const comment = document.querySelector('.comment');

var conTabs = 1;
var tabList = [];
var titleList= [];

(function(){
    'use strict';

    button.addEventListener('click', () => {

        var newtab = `<button class="tablinks" id="tab${conTabs}" onclick="viewTitle(${conTabs}-1)">${input.value}</button>`; 
        tabList.push(newtab);
        tabs.innerHTML = tabList;

        var newTitle = new Tab(input.value, comment.value);
        input.value = "";
        comment.value = "";
        titleList.push(newTitle);

        conTabs = conTabs + 1;
    });

    buttonNewTab.addEventListener('click', () => {
        input_button.style.setProperty('display', 'flex');
        tab_title.style.setProperty('display', 'none');
    });

    class Tab{
        constructor(title, comment){
            this.title = title;
            this.comment = comment;
        }
    
        mostrarTab(){
            tab_title.innerHTML = `<h3 class="title_tab">${this.comment}</h3>`;
            tab_title.style.setProperty('display','inline');
            input_button.style.setProperty('display', 'none');
        } 
    }

})();

function viewTitle(object){
    titleList[object].mostrarTab();
}

