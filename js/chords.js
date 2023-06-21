class Chord {

    strings = [];
    name;
    _s;

    constructor(s, name) {
        // for (let sKey in s) {
        //     this.strings.push(sKey);
        // }
        // this.strings = s.split('');
        this._s = s;
        this._name = name;
    }


    get s() {
        return this._s;
    }

    get name() {
        return this._name;
    }

    get strArray() {
        return this.strings;
        // return ['1','2','0','5','0','5'];
    }
}

window.onLoad = function(event) {
    console.log('----------onload');
    if (event.target.matches('.chord')) {
        console.log(event.id);
    }
}

class GLine {
    ctx;
    // color;
    width;
    constructor(ctx) {
        this.ctx = ctx;
        // this.color = color;
        // this.width = wide;
    }

    drawRect() {
        ctx.drawVerticalLine = function(left, top, width, color){
            this.fillStyle=color;
            this.fillRect(left, top, 2, width);
        };

        ctx.drawHorizontalLine = function(left, top, width, color){
            this.fillStyle=color;
            this.fillRect(left, top, width, 2);
        }

        // ctx.drawVerticalLine(0, 0, 300, "green");
        // ctx.drawHorizontalLine(20, 0, 300, "red");
        ctx.drawHorizontalLine(0, 0, 300, "green");
        ctx.drawHorizontalLine(0, 20, 300, "red");
    }

    drawLine(ctx, fromX, fromY, toX, toY, color, width) {
        ctx.strokeStyle = color;
        // ctx.lineWidth = width; //width рпи рисовании нескольких линий делает все линии кроме первой толще
        ctx.beginPath();
        ctx.moveTo(fromX+0.5, fromY+0.5);
        ctx.lineTo(toX+0.5, toY+0.5);
        ctx.stroke();
    }

    draw(fromX, fromY, toX, toY) {
        this.drawLine(this.ctx, fromX, fromY, toX, toY, this.color, this.width);
    }

    drawVert(left, top, long, width) {
            this.ctx.fillRect(left, top, width, long);
    }
    drawHorz(left, top, long, width) {
            this.ctx.fillRect(left, top, long, width);
    }

    drawCircle(left, top) {
        this.ctx.beginPath();
        this.ctx.arc(left, top, 5, 0, 2 * Math.PI);
        this.ctx.fillStyle = "BLACK";
        this.ctx.fill();
        this.ctx.stroke();
    }

}

const COLOR_BLACK = '#000000';
const COLOR_GRAY = '#999999';
const LINE_WIDTH = 4;
const S_HEIGHT = 20;
const S_WIDTH = 50;

/**Сколько ладов занимает аккорд*/
function getChordCount(chord) {

    let min;
    let max;
    if (Number.isInteger(Number(chord.s[0]))) {
        min = Number(chord.s[0]);
        max = Number(chord.s[0]);
    }
    // for (const s in chord.s) {
    for (let i = 1; i < chord.s.length; i++) {
        let s = chord.s[i];
        console.log(s);
        if (Number.isInteger(Number(s))) {
            console.log("is = "+s);
            if (s > max) max = s;
            if (s === -1) min = s;
            else if (s<min) min = s;
        }
    }
    console.log("min="+min+" max="+max);
    return max-min;
}



function drawTable(ctx, chord) {
    let line = new GLine(ctx);
    for (let i = 0; i < 6; i++) {
        //line.draw(0, S_HEIGHT*i, S_WIDTH*3, S_HEIGHT*i);
        line.drawHorz(0, S_HEIGHT*i+10, S_WIDTH*3, 0.5);
    }
    for (let i = 0; i < 4; i++) {
        line.drawVert(S_WIDTH*i, 0+10, S_HEIGHT*5, 0.5);
    }
}

function drawPoints(ctx, chord) {
    let line = new GLine(ctx);
    for (let i = 0; i < chord.s.length; i++) {
        let s = chord.s[i];
        if (Number.isInteger(Number(s))) {
            console.log("is = "+s);
            let num = s;
            let w = S_WIDTH * s - S_WIDTH/2;
            line.drawCircle(w, i*S_HEIGHT+10);
        }

    }

}



/**Удобнее делать ф-ю отдельно от класса Chord: скорее всего будут какие-то уже готовые шаблоны аккордов, и тогда этим
 * методом можно сразу их рисовать без создания (не писать каждый раз new Chord(...).draw(...), а сразу drawChord(AM7)*/
function drawChord(chord, id) {
    let count = getChordCount(chord);
    let ctx = document.getElementById(id).getContext("2d");
    drawTable(ctx, chord);
    drawPoints(ctx, chord);
}