let menuPlace = document.getElementById('menu_main');
let sidePanelPlace = document.getElementById('mySidepanel');
let leftMenuPlace = document.getElementById('menuPanel');
let headStrokeMenuPlace = document.getElementById('sub_header');

getPrePath();

function getMenu() {

    return '<details><summary><span>Android</span></summary><ul>' +
        '               <details><summary><span>Всякое разное</span></summary><ul>' +
        '                       <li><a href="'+getPrePath()+'home/_android/part1/part1_1.html">SettingsActivity. Базовый код</a></li>' +
        '               </ul></details>' +
        '        <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '</ul></details>'+
        '<details><summary><span>Muzz</span></summary><ul>' +
        '               <details><summary><span>Всякое разное</span></summary><ul>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/extreme/more_than_words.html">More Than Words</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/oasis/wonderwall.html">Wonderwall</a></li>' +
        '                       <li><a href="'+getPrePath()+'_home/muzz/s_and_g/mrs_robinson.html">Mrs. Robinson</a></li>' +
        '               </ul></details>' +
        '        <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '</ul></details>';
}

function sqrMenuAdapter(target) {
    target.innerHTML+=getMenu();
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