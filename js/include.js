// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    // console.log(window.innerWidth);
    let mybutton = document.getElementById("backToTopButton");
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
    document.getElementById("mySidepanel").style.width = "450px";
    // console.log(document.getElementById("content_div").style.marginLeft.valueOf());
    // document.getElementById("content_div").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    // document.getElementById("content_div").style.marginLeft = "auto";
}




/*--------------------------------------------------------------------------------------------------------------------*/
// let menuPlace = document.getElementById('menu_main');
// let sidePanelPlace = document.getElementById('mySidepanel');
// let leftMenuPlace = document.getElementById('menuPanel');
// let headStrokeMenuPlace = document.getElementById('sub_header');
let currentPath;



function toggleVision(elem, item) {
    elem.addEventListener("click", function () { item.setOpen(!item.getOpen); });
    //todo//////item.

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

// getPath();
// sqrMenuAdapter(menuPlace, menu);
// sqrLeftMenuAdapter(leftMenuPlace, menu);
// sqrMenuAdapterSide(sidePanelPlace, menu);

