

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*--------------------------------------------------------------------------------------------------------------------*/
class menuItem {
    _title;
    _path;
    _child;
    _menu;

    constructor(title, path) {
        this._title = title;
        this._path = path;
    }

    get getChild() {
        return this._child;
    }

    set setChild(value) {
        this._child = value;
    }

    get getTitle() {
        return this._title;
    }

    get getPath() {
        return this._path;
    }

    get getMenu() {
        return this._menu;
    }

    addMenu(value) {
        this._menu = value;
    }
}

class sqrMenu {
    _items = [];
    addItem(item) { this._items.push(item); }

    addItems(...items) {
        for (let i = 0; i < items.length; i++) {
            this.addItem(items[i]);
        }
    }

    get getItems() { return this._items; }
}

let menu;

function initMenu() {
    menu = new sqrMenu();
    menu.addItem(new menuItem('mItem1', '../settings.html'));
    menu.addItem(new menuItem('mItem2', '../settings.html'));
    menu.addItem(new menuItem('mItem3', '../settings.html'));
    menu.addItems(
        new menuItem('mItem4', '../settings.html'),
        new menuItem('mItem5', '../settings.html'),
        new menuItem('mItem6', '../settings.html'));
    // let menu2 = new
    menu.addItem(new menuItem('itemSub7', '3e'));

    console.log(menu.getItems.length);


    for (let i = 0; i < menu.getItems.length; i++) {
        console.log(menu.getItems[i].getTitle);
    }

    // for (let item in menu.getItems) {
    //     console.log(item.getTitle);
    // }

}



initMenu();

