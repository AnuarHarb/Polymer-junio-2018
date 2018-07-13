class NewTab {
  constructor(title) {
    this.title = title;
  }

  tabNew(title){
    console.log("hola");
    console.log(title);
  }

  createTab(title){
    let divTab = document.getElementById('tabTitle');
    let divContainer = document.getElementById('container')
    let clickFunct = 'onclick="openTab('+"'"+title+"'"+')"';
    let hideTab = 'style="display:none"';
    divTab.innerHTML += "<button "+clickFunct+" >"+ title +"</button>";
    divContainer.innerHTML += "<div id="+title+" "+hideTab+" class="+ 'tab__content' +" > <h1>hola</h1> </div>"
  }
}



  let buttonCreate = document.getElementById('btnCreate');
  buttonCreate.addEventListener('click', () => {
    let title = document.getElementById('tab_title').value;
    //console.log(title);
    let newTab = new NewTab();
    newTab.tabNew(title);
  });

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab__content");
    console.log();
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
