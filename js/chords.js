class Chord {

    strings = [];
    name;

    constructor(s, name) {
        for (let sKey in s) {
            this.strings.push(sKey);
        }
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

// let Am = new Chord("012200", "Am");
// console.log(Am.s);


window.onLoad = function(event) {
    console.log('----------onload');
    if (event.target.matches('.chord')) {
        console.log(event.id);
    }
}


const COLOR_GRAY = '#999999';
const LINE_WIDTH = 2;
const HEIGHT = 150;

function drawChord(chord, id) {

    console.log('----------drawChord');
    console.log(chord.s);
    // let doc = document.getElementById(id);
    // doc.innerHTML+=chord.s;



    console.log(id);
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();




    // let ctx = document.getElementById(id).getContext("2d");
    // ctx.canvas.width  = window.innerWidth;
    // ctx.canvas.height = HEIGHT;
    // let line = new GLine(ctx, COLOR_GRAY, LINE_WIDTH);
    // line.draw(0, 0, 50, 50);

    // addGData(id);

}

function addGData(id) {
    let ctx = document.getElementById(id).getContext("2d");
    // ctx.canvas.width  = window.innerWidth;
    // ctx.canvas.height = HEIGHT;

    // peakLine = new gLine(ctx, COLOR_GRAY, LINE_WIDTH);
    // peakLine.setLineData(arr);
}


class GLine {
    ctx;
    color;
    width;
    constructor(ctx, color, wide) {
        this.ctx = ctx;
        this.color = color;
        this.width = wide;
    }

    drawLine(ctx, fromX, fromY, toX, toY, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }

    draw(fromX, fromY, toX, toY) {
        console.log('kdkdkd');
        drawLine(this.ctx, fromX, fromY, toX, toY, this.color, this.width);
    }

}