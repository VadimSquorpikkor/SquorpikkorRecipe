let menuPlace = document.getElementById('menu_main');
let sidePanelPlace = document.getElementById('mySidepanel');
let leftMenuPlace = document.getElementById('menuPanel');
let headStrokeMenuPlace = document.getElementById('sub_header');

function getMenu() {
    return '<details><summary><span>Android</span></summary><ul>' +
        '        <li><a href="../other/flash_magic.html">Инструкция по прошивке LPC11U67</a></li>' +
        '               <details><summary><span>Всякое разное</span></summary><ul>' +
        '                       <li><a href="../other/flash_magic.html">Инструкция по прошивке LPC11U67</a></li>' +
        '                       <li><a href="../other/bdrm-05m.html">БДРМ-05М/ БДРМ-11. Настройка</a></li>' +
        '                       <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '                       <li><a href="../other/6130.html">АТ6130</a></li>' +
        '                       <li><a href="../other/6130_prosh.html">АТ6130 Прошивка</a></li>' +
        '                       <li><a href="../other/pdu.html">ПДУ</a></li>' +
        '                       <li><a href="../other/flip.html">Flip. Как шить</a></li>' +
        '                       <li><a href="../other/ed2_prosh.html">Прошивка ED2 (ChipProg)</a></li>' +
        '                       <li><a href="../other/odu_to7.html">Переходник ODU на ТО-7</a></li>' +
        '                       <li><a href="../other/5351_plis.html">Прошивка ПЛИС в ДКС-АТ5351</a></li>' +
        '               </ul></details>' +
        '        <li><a href="../other/adapter.html">Адаптер USB-БД</a></li>' +
        '        <li><a href="../other/6130.html">АТ6130</a></li>' +
        '        <li><a href="../other/6130_prosh.html">АТ6130 Прошивка</a></li>' +
        '        <li><a href="../other/pdu.html">ПДУ</a></li>' +
        '        <li><a href="../other/flip.html">Flip. Как шить</a></li>' +
        '        <li><a href="../other/ed2_prosh.html">Прошивка ED2 (ChipProg)</a></li>' +
        '        <li><a href="../other/odu_to7.html">Переходник ODU на ТО-7</a></li>' +
        '        <li><a href="../other/5351_plis.html">Прошивка ПЛИС в ДКС-АТ5351</a></li>' +
        '</ul></details>';
}

function sqrMenuAdapter(target) {
    target.innerHTML+=getMenu();
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