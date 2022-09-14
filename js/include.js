// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    // console.log(window.innerWidth);
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
        document.getElementById("top_slide_panel").style.top = "0";
    } else {
        mybutton.style.display = "none";
        document.getElementById("top_slide_panel").style.top = "-50px";
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
    // console.log(document.getElementById("content_div").style.marginLeft.valueOf());
    // document.getElementById("content_div").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    // document.getElementById("content_div").style.marginLeft = "auto";
}
/*--------------------------------------------------------------------------------------------------------------------*/
let menuPlace = document.getElementById('menu_main');
let sidePanelPlace = document.getElementById('mySidepanel');
let leftMenuPlace = document.getElementById('menuPanel');
let headStrokeMenuPlace = document.getElementById('sub_header');

console.log(menuPlace);

class itm {
    _title;
    _path;
    _items_arrays = [];
    _parent;

    constructor(title, path, ...items) {
        this._title = title;
        this._path = path;
        this._items_arrays = items;
        if (this._items_arrays.length > 0) {
            for (let i = 0; i < this._items_arrays.length; i++) {
                this._items_arrays[i]._parent = this;
            }
        }
    }

    //вариант без использования дочернего класса: menuItem.chapter('Title', arr[])
    // static chapter(title, ...items) {
    //     return new menuItem(title, '', ...items);
    // }

    get getTitle() { return this._title; }

    get getPath() { return this._path; }

    get getItems() { return this._items_arrays; }

    hasChild() { return (this._items_arrays.length>0); }

    hasParent() { return typeof (this._parent) !== 'undefined'; }

    getParent() { return this._parent; }
}

class chapter extends itm {
    constructor(title, ...items) {
        super(title, '', ...items);
    }
}


//по-сути можно заменить menu на menuItem и всё будет работать
class sqrMenu {
    _items = [];

    addItem(item) { this._items.push(item); }

    get getItems() { return this._items; }
}

let menu;

function initMenu() {
    menu = new sqrMenu();
    menu.addItem(
        new chapter('Home',
            new chapter('Muzz'),
            new chapter('Schematics'),
            new chapter('Android',
                new itm('Settings', '../_android/settings.html'),
                new itm('sub3-2', '../settings.html'),
                new itm('sub3-3', '../settings.html')
            ),
            new chapter('HTML/CSS',
                new itm('Что-то ещё', '../settings.html'),
                new itm('sub4-2', '../settings.html'),
                new chapter('sub4-3',
                    new itm('subsub4-3-1', '../settings.html'),
                    new itm('subsub4-3-2', '../settings.html'),
                    new itm('subsub4-3-3', '../settings.html')
            )
        )
    ));
}

// noinspection JSUnusedLocalSymbols
function sqrMenuAdapter(target, sqrMenu) {
    // let stringMenu =
    //     '<ul>'+
    //     '<li><a href="#home">Home</a></li>'+
    //     '<li><a href="#news">News</a></li>'+
    //     '<li class="dropdown">'+
    //     '<a href="javascript:void(0)" class="dropbtn">Dropdown</a>'+
    //     '<div class="dropdown-content">'+
    //     '<a href="#">Link 1</a>'+
    //     '<a href="#">Link 2</a>'+
    //     '<a href="#">Link 3</a>'+
    //     '</div>'+
    //     '</li>'+
    //     '</ul>';
    let menuItems = sqrMenu.getItems[0].getItems;
    for (let i = 0; i < menuItems.length; i++) {
        target.innerHTML+='<a href="'+menuItems[i].getPath+'">'+menuItems[i].getTitle+'</a>';
    }
}

let currentPath;

function sqrLeftMenuAdapter(target, sqrMenu) {
    doLoop(target, sqrMenu.getItems, -1);
}

function sqrMenuAdapterSide(target, sqrMenu) {
    doLoopSide(target, sqrMenu.getItems);
}

function doLoop(target, parentArray, generation) {
    generation++;
    for (let i = 0; i < parentArray.length; i++) {
        let item = parentArray[i];
        if (item.hasParent()) console.log(item.getParent().getTitle);
        else console.log('NO PARENT');
        if (item.getPath===currentPath) makePathFromItem(item);/*todo selected menu item*/
        if (item.getPath==='') target.innerHTML+='<span '+getStyle(generation)+'>'+item.getTitle+'</span>';
        else target.innerHTML+='<a '+getStyle(generation)+' href="'+item.getPath+'">'+item.getTitle+'</a>';
        if (item.hasChild()) doLoop(target, item.getItems, generation);
    }
}

function getStyle(generation) {
    switch (generation) {
        case 0: return 'class=zeroGeneration';
        case 1: return 'class=firstGeneration';
        case 2: return 'class=secondGeneration';
        case 3: return 'class=thirdGeneration';
        default: return 'class=thirdGeneration';
    }
}

function doLoopSide(target, parentArray) {
    for (let i = 0; i < parentArray.length; i++) {
        let item = parentArray[i];
        if (item.hasParent()) console.log(item.getParent().getTitle);
        target.innerHTML+='<a href="'+item.getPath+'">'+item.getTitle+'</a>';
        if (item.hasChild()) doLoopSide(target, item.getItems);
    }
}

/**По полученному item получает всю цепочку наследования в виде массива items и из этого массива получает строку
 * <a> ссылок с именами и адресами и вставляет эту строку в таргет на странице*/
function makePathFromItem(item) {
    let ar = [];
    ar.push(item);
    while (true) {
        if (ar[ar.length - 1].hasParent()) ar.push(ar[ar.length - 1].getParent());
        else break;
    }
    for (let i = ar.length-1; i >= 0; i--) {
        console.log('*'+ar[i].getTitle);
        headStrokeMenuPlace.innerHTML+='<a href="'+ar[i].getPath+'">'+ar[i].getTitle+'</a>';
    }
}

/**Получение относительного адреса из URL: типа "../_android/settings.html"*/
function getPath() {
    console.log(window.location.href);
    let ar = window.location.href.split('/_home/');
    let path = ar[ar.length-1];
    path = '../'+path;
    console.log(path);
    currentPath = path;
}

initMenu();
getPath();
sqrMenuAdapter(menuPlace, menu);
sqrLeftMenuAdapter(leftMenuPlace, menu);
sqrMenuAdapterSide(sidePanelPlace, menu);

