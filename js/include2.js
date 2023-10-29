let menuPlace = document.getElementById('menu_main');
let sidePanelPlace = document.getElementById('mySidepanel');
let leftMenuPlace = document.getElementById('menuPanel');
let headStrokeMenuPlace = document.getElementById('sub_header');

getPrePath();


function getMenu_old() {

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

function getMenu() {
    return ""+
        insertDetails("_home/_android", "Android",""+
            insertDetails("_home/_android/part1", "Всякое разное",""+
                item("_home/_android/part1/part1_1.html", "SettingsActivity. Базовый код")+
                item("_home/_android/part1/full_screen.html", "На весь экран")+
                item("_home/_android/part1/auto_input.html", "Разное")+
                item("_home/_android/part1/md_stuff.html", "ReadMe.MD")+
                item("_home/_android/part1/entity_timeout.html", "Entity Timeout")+
                item("_home/_android/part1/request.html", "RequestPermissions")
            )+
            insertDetails("_home/_android/sqr_library", "Sqr Library",""+
                item("_home/_android/sqr_library/buzz.html", "Buzz")+
                item("_home/_android/sqr_library/input_value.html", "InputValue")+
                item("_home/_android/sqr_library/p_checker.html", "PermissionChecker")+
                item("_home/_android/sqr_library/save_load.html", "SaveLoad")+
                item("_home/_android/sqr_library/theme_utils.html", "ThemeUtils")+
                item("_home/_android/sqr_library/value_changer.html", "ValueChanger")+
                item("_home/_android/sqr_library/toggler.html", "Toggler")
            )
        )+
        insertDetails("_home/muzz", "Muzz", ""+
            insertDetails("_home/muzz/mccartney", "Paul McCartney",""+
                item("_home/muzz/mccartney/put_it_there.html", "Put It There")+
                item("_home/muzz/mccartney/this_one.html", "This One")
            )+
            insertDetails("_home/muzz/aria", "Ария",""+
                item("_home/muzz/aria/angel_pil.html", "Ангельская пыль")+
                item("_home/muzz/aria/shtil.html", "Штиль")
            )+
            insertDetails("_home/muzz/bon_jovi", "Bon Jovi",""+
                item("_home/muzz/bon_jovi/ill_be_there.html", "I'll Be There For You")
            )+
            insertDetails("_home/muzz/green_day", "Green Day",""+
                item("_home/muzz/green_day/f_o_d.html", "FOD")+
                item("_home/muzz/green_day/good_riddance.html", "Good Riddance")
            )+
            insertDetails("_home/muzz/oasis", "Oasis",""+
                item("_home/muzz/oasis/champagne_supernova.html", "Champagne Supernova")+
                item("_home/muzz/oasis/wonderwall.html", "Wonderwall")
            )+
            insertDetails("_home/muzz/pink_floyd", "Pink Floyd",""+
                item("_home/muzz/pink_floyd/learning_to_fly.html", "Learning To Fly")+
                item("_home/muzz/pink_floyd/shtil.html", "Штиль")
            )+
            insertDetails("_home/muzz/rosenbaum", "А. Розенбаум",""+
                item("_home/muzz/rosenbaum/bratan.html", "Братан")+
                item("_home/muzz/rosenbaum/vals_boston.html", "Вальс-бостон")+
                item("_home/muzz/rosenbaum/veschaya_sudba.html", "Вещая судьба")+
                item("_home/muzz/rosenbaum/monolog_pilota.html", "Монолог пилота «чёрного тюльпана»")+
                item("_home/muzz/rosenbaum/narisuyte_mne_dom.html", "Нарисуйте мне дом")+
                item("_home/muzz/rosenbaum/utinaya_ohota.html", "Утиная охота")
            )+
            insertDetails("_home/muzz/other", "Всякое разное",""+
                item("_home/muzz/other/more_than_words.html", "More Than Words")+
                item("_home/muzz/other/wonderwall.html", "Wonderwall")+
                item("_home/muzz/other/mrs_robinson.html", "Mrs. Robinson")+
                item("_home/muzz/other/stairway_to_heaven.html", "Stairway To Heaven")
            )
        )
}

function sqrMenuAdapter(target) {
    target.innerHTML+=getMenu();
}

/**
 *
 * @param checkPath часть пути для проверки openIfContains
 * @param title
 * @param inner
 */
function insertDetails(checkPath, title, inner) {
    return '<details '+openIfContains(checkPath)+'><summary><span>'+title+'</span></summary><ul>' +
        inner +
    '</ul></details>';
}

/**
 *
 * @param path
 * @param title
 * @returns {string}
 */
function item(path, title) {
    return '<li><a href='+getPrePath()+path+'>'+title+'</a></li>';
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