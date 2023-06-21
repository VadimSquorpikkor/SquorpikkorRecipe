class Chord {
    name;
    _s;
    min;

    constructor(s, name) {
        this._s = s;
        this._name = name;
    }

    get s() {
        return this._s;
    }

    get name() {
        return this._name;
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
function getChordCount_old(chord) {

    let min;
    let max;
    if (Number.isInteger(Number(chord.s[0]))) {
        min = Number(chord.s[0]);
        max = Number(chord.s[0]);
        // min = 24;
        // max = 0;

    }
    // for (const s in chord.s) {
    for (let i = 1; i < chord.s.length; i++) {
        let s = chord.s[i];
        console.log(s);
        if (Number.isInteger(Number(s))) {
            // console.log("is = "+s);
            if (s > max) max = s;
            if (s === -1) min = s;
            else if (s<min) min = s;
        }
    }
    console.log("min="+min+" max="+max);
    //нулевой лад это открытая струна, и точка не ставится, а значит и лада нулевого нет
    if (min===0) return max-min
    else return max-min+1;
}

/**Сколько ладов занимает аккорд*/
function getChordCount(chord) {
    // let qqq = "";
    // for (let i = 0; i < chord.s.length; i++) {
    //     qqq+=chord.s[i];
    // }
    // console.log(qqq);

    let min = 24;
    let max = 0;

    for (let i = 0; i < chord.s.length; i++) {
        let s = chord.s[i];
        if (s > max) max = s;
        if (s < min && s>0) min = s;
    }
    chord.min = min;
    console.log("min="+min+" max="+max);
    let ret;
    //нулевой лад это открытая струна, и точка не ставится, а значит и лада нулевого нет
    if (min===0) ret = max-min
    else ret = max-min+1;
    ////if (ret<3) ret = 3; todo
    return ret;
}



/**
 *
 * @param ctx
 * @param chord
 * @param width количество отображаемых ладов
 */
function drawTable(ctx, chord, width) {
    let line = new GLine(ctx);
    for (let i = 0; i < 6; i++) {
        //line.draw(0, S_HEIGHT*i, S_WIDTH*3, S_HEIGHT*i);
        line.drawHorz(0, S_HEIGHT*i+10, S_WIDTH*width, 0.5);
    }
    for (let i = 0; i < width+1; i++) {
        line.drawVert(S_WIDTH*i, 0+10, S_HEIGHT*5, 0.5);
    }
}

function drawPoints(ctx, chord, width) {
    console.log("width = "+width);
    let line = new GLine(ctx);

    for (let i = 0; i < chord.s.length; i++) {
        let s = chord.s[i];
        // let s = chord.s[i] - (chord.s[i]-width);
        if (Number.isInteger(Number(s))) {
            //console.log("is = "+s);
            // console.log("chord.min = "+chord.min);
            let num = s - chord.min+1;
            console.log("chord.min = "+chord.min+" num = "+num+" s = "+s)
            let w = S_WIDTH * num - S_WIDTH/2;
            line.drawCircle(w, i*S_HEIGHT+10);
        }
    }
}


/**Удобнее делать ф-ю отдельно от класса Chord: скорее всего будут какие-то уже готовые шаблоны аккордов, и тогда этим
 * методом можно сразу их рисовать без создания (не писать каждый раз new Chord(...).draw(...), а сразу drawChord(AM7)*/
function drawChord(chord, id) {
    let count = getChordCount(chord);
    let ctx = document.getElementById(id).getContext("2d");
    drawTable(ctx, chord, count);
    drawPoints(ctx, chord, count);
}