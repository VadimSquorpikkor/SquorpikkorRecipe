class Chord {
    name;
    _s;

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

class GLine {
    ctx;
    width;
    color;
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.arc(left, top, POINT_R, 0, 2 * Math.PI);
        this.ctx.fillStyle = "BLACK";
        this.ctx.fill();
        this.ctx.stroke();
    }

}

const COLOR_BLACK = '#000000';
const COLOR_GRAY = '#999999';
const LINE_WIDTH = 4;
const S_HEIGHT = 15;
const S_WIDTH = 36;
const POINT_R = 4;


/**Сколько ладов занимает аккорд*/
function getChordCount(chord) {
    let min = 24;
    let max = 0;

    for (let i = 0; i < chord.s.length; i++) {
        let s = chord.s[i];
        if (s > max) max = s;
        if (s < min && s>0) min = s;
    }
    chord.min = min;

    let ret;
    //нулевой лад это открытая струна, и точка не ставится, а значит и лада нулевого нет
    if (min===0) ret = max-min
    else ret = max-min+1;
    ////if (ret<3) ret = 3;
    ////if (min===2) ret = 3;
    return ret;
}

/**Удобнее делать ф-ю отдельно от класса Chord: скорее всего будут какие-то уже готовые шаблоны аккордов, и тогда этим
 * методом можно сразу их рисовать без создания (не писать каждый раз new Chord(...).draw(...), а сразу drawChord(AM7)*/
function drawChord(chord, id) {
    let count = getChordCount(chord);
    console.log("count="+count+" chord.min = "+chord.min);
    let emptySpace = chord.min-1;
    let ctx = document.getElementById(id).getContext("2d");
    let line = new GLine(ctx);
    for (let i = 0; i < 6; i++) {
        line.drawHorz(0, S_HEIGHT*i+10, S_WIDTH*count, 0.5);

        let position = chord.s[i]-emptySpace;
        let w = S_WIDTH * position - S_WIDTH/2;
        line.drawCircle(w, i*S_HEIGHT+10);
    }

    for (let i = 0; i < count+1; i++) {
        let lineWidth = 0.5;
        if (chord.min == 1) lineWidth = 1.5;
        line.drawVert(S_WIDTH*i, 0+10, S_HEIGHT*5, lineWidth);
    }
}