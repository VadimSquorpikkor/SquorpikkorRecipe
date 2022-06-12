// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
        document.getElementById("navbar").style.top = "0";
    } else {
        mybutton.style.display = "none";
        document.getElementById("navbar").style.top = "-50px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
/*--------------------------------------------------------------------------------------------------------------------*/
// let menuPlace = document.getElementsByTagName('menu_main');
let menuPlace = document.getElementById('menu_main');

console.log(menuPlace);

class menuItem {
    _title;
    _path;
    _items_arrays = [];

    constructor(title, path, ...items) {
        this._title = title;
        this._path = path;
        this._items_arrays = items;
    }

    get getTitle() {
        return this._title;
    }

    get getPath() {
        return this._path;
    }

    get getItems() {
        return this._items_arrays;
    }

    hasChild() {
        return (this._items_arrays.length>0);
    }
}

class sqrMenu {
    _items = [];

    addItem(item) {
        this._items.push(item);
    }

    addItems(...items) {
        for (let i = 0; i < items.length; i++) {
            this.addItem(items[i]);
        }
    }

    get getItems() {
        return this._items;
    }

    getMainMenu() {
        return this._items[0].getItemsAr;
    }
}

let menu;


function initMenu() {
    menu = new sqrMenu();
    menu.addItem(
        new menuItem('Home', '../settings.html',
            new menuItem('mItem1', '../settings.html'),
            new menuItem('mItem2', '../settings.html'),
            new menuItem('mItem3', '../settings.html',
                new menuItem('sub3-1', '../settings.html'),
                new menuItem('sub3-2', '../settings.html'),
                new menuItem('sub3-3', '../settings.html')
            ),
            new menuItem('mItem4', '../settings.html',
            new menuItem('sub4-1', '../settings.html'),
            new menuItem('sub4-2', '../settings.html'),
            new menuItem('sub4-3', '../settings.html',
                new menuItem('subsub4-3-1', '../settings.html'),
                new menuItem('subsub4-3-2', '../settings.html'),
                new menuItem('subsub4-3-3', '../settings.html')
            )
        )
    ));

    // logItem(menu.getItems[0], '---');
    // console.log('________________________________________________');
    // console.log(menu.getItems.length);
    // console.log(menu.getMainMenu().length);

}

function logItem(item, tab) {
    tab = tab + '---';
    for (let j = 0; j < item.getItems.length; j++) {
        let item2 = item.getItems[j];
        console.log(tab + item2.getTitle + '---' + item2.getItems.length);
        if (item2.hasChild()) logItem(item2, tab);
    }
}

//playground.innerHTML += '<img src="'+src+'" style="position: absolute; margin-left: '+x+'px; margin-top: '+y+'px"  alt="нет рисунка">';

function sqrMenuAdapter(target, sqrMenu) {
    let stringMenu =
        '<ul>'+
        '<li><a href="#home">Home</a></li>'+
        '<li><a href="#news">News</a></li>'+
        '<li class="dropdown">'+
        '<a href="javascript:void(0)" class="dropbtn">Dropdown</a>'+
        '<div class="dropdown-content">'+
        '<a href="#">Link 1</a>'+
        '<a href="#">Link 2</a>'+
        '<a href="#">Link 3</a>'+
        '</div>'+
        '</li>'+
        '</ul>';
    target.innerHTML+=stringMenu;
}

function sqrMenuAdapter_(target, sqrMenu) {
    // <ul>
    //     <li><a href="#home">Home</a></li>
    //     <li><a href="#news">News</a></li>
    //     <li className="dropdown">
    //         <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
    //         <div className="dropdown-content">
    //             <a href="#">Link 1</a>
    //             <a href="#">Link 2</a>
    //             <a href="#">Link 3</a>
    //         </div>
    //     </li>
    // </ul>



    console.log(sqrMenu.getItems.length);
    target.innerHTML+='<div style="position: absolute">';
    for (let i = 0; i < sqrMenu.getItems.length; i++) {
        let item = sqrMenu.getItems[i];
        if (item.hasChild()) target.innerHTML+=getUiWithListener(item);
        else target.innerHTML+=getUiForMenuItem(item);
    }
    target.innerHTML+='</div>';
    // target.innerHTML+=getUiForMenuItem(sqrMenu.getItems[0]);
    // console.log(target.innerHTML+='<span class="data_span">123123123</span>');
    console.log(sqrMenu);

}

function getUiForMenuItem(item) {
    return '<a href='+item.getPath+'>'+item.getTitle+'</a>';
}

function getUiWithListener(item) {
    // return '<a onclick='alert(1)">'+item.getTitle+'</a>';
    let listener = "onClick=alert(1)";
    return '<a '+listener+'>'+item.getTitle+'</a>';
}
initMenu();

sqrMenuAdapter(menuPlace, menu);

