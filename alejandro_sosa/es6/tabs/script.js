(function(){
    const tabContent = document.getElementById('tabContent');
    const tabNav = document.getElementById('tabNav');
    const tab = document.getElementById('tabModule');

    class Tab{
        constructor( label, content ){
            this.label = label || 'New Tab';
            this.content = content || '';
        }

        create(){
            tabContent.appendChild( this.createEl( tabContent, 'DIV', "tab__contentItem", this.content ));
            tabNav.appendChild( this.createEl( tabNav, 'LI', "tab__navItem", this.label ));
        }

        createEl(_target, _tag, _class, _content){
            let tpl = document.createElement( _tag );
            tpl.className = _class +" "+ (_target.children.length?'':'selected');
            tpl.setAttribute('data-index',_target.children.length+1 );
            tpl.innerHTML = _content;
            return tpl;
        }
    }

    let html =
        `<h2>Create Tabs</h2>
        <ul>
            <li><input id="newTitle" type="text" placeholder="Title"></li>
            <li><textarea id="newContent" placeholder="HTML"></textarea></li>
            <li><button id="createBtn">Create</button></li>
        </ul>`;
    let tabCreator = new Tab('Create a Tab', html);
    tabCreator.create();

    function createTabs( ){
        let label = document.getElementById('newTitle');
        let html  = document.getElementById('newContent');
        let item  = new Tab(  label.value, html.value);
        item.create();

        label.value ='';
        html.value  ='';
    }

    tab.addEventListener('click', function(e){
        if( e.target.tagName == 'BUTTON' ){
            createTabs();
        }
        if( e.target.tagName == 'LI' && e.target.classList.contains('tab__navItem') ){
            tabNav.querySelector('.selected').classList.toggle('selected');
            tabContent.querySelector('.selected').classList.toggle('selected');
            
            e.target.classList.add('selected');
            tabContent.querySelector('[data-index="'+ e.target.getAttribute('data-index') +'"]').classList.toggle('selected');

        }
    });

})();