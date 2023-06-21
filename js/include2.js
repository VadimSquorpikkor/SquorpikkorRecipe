let menuPlace = document.getElementById('menu_main');
let sidePanelPlace = document.getElementById('mySidepanel');
let leftMenuPlace = document.getElementById('menuPanel');
let headStrokeMenuPlace = document.getElementById('sub_header');

getPrePath();

function getMenu() {

    return '<details '+openIfContains("_home/_android")+'><summary><span>Android</span></summary><ul>' +
        '               <details '+openIfContains("_home/_android/part1")+'><summary><span>Всякое разное</span></summary><ul>' +
        '                       <li><a href="'+getPrePath()+'_home/_android/part1/part1_1.html">SettingsActivity. Базовый код</a></li>' +
        '               </ul></details>' +
        '</ul></details>'+
        '<details '+openIfContains("_home/muzz")+'><summary><span>Muzz</span></summary><ul>' +
        '               <details '+openIfContains("_home/muzz/rosenbaum")+'><summary><span>А. Розенбаум</span></summary><ul>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/rosenbaum/bratan.html">Братан</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/rosenbaum/vals_boston.html">Вальс-бостон</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/rosenbaum/veschaya_sudba.html">Вещая судьба</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/rosenbaum/narisuyte_mne_dom.html">Нарисуйте мне дом</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/rosenbaum/utinaya_ohota.html">Утиная охота</a></li>' +
        '               </ul></details>' +
        '               <details '+openIfContains("_home/muzz/other")+'><summary><span>Всякое разное</span></summary><ul>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/other/more_than_words.html">More Than Words</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/other/wonderwall.html">Wonderwall</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/other/mrs_robinson.html">Mrs. Robinson</a></li>' +
        '               </ul></details>' +
        '</ul></details>';
}

function sqrMenuAdapter(target) {
    target.innerHTML+=getMenu();
}

/**меню автоматом раскрывается до ссылки на открытую в данный момент страницу*/
function openIfContains(path) {
    let pagePath = window.location.href;
    if (pagePath.includes(path)) return "open";
    else return "";
}

/**
 * Решение проблемы, когда пути в include меню работали только для одинаковой глубины ссылки (если html документ был
 * перенесен в подпапку, то ссылки из этого документа на другие документы переставали работать).
 * Метод добавляет перед путем ссылки необходимое количество "../"
 * */
function getPrePath() {
    let ar = window.location.href.split('/_home/');
    let path = ar[ar.length-1];

    ar = path.split('/');
    let count = ar.length;
    let ret="";
    for (let i = 0; i < count; i++) {
        ret = '../'+ret;
    }
    return ret;
}

function sqrLeftMenuAdapter(target, sqrMenu) {
    // doLoop(target, sqrMenu.getItems, -1);
}

function sqrMenuAdapterSide(target, sqrMenu) {
    // doLoopSide(target, sqrMenu.getItems);
}

sqrMenuAdapter(leftMenuPlace);
// sqrMenuAdapter(menuPlace);
sqrMenuAdapter(sidePanelPlace);