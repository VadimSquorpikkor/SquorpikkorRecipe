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

function drawChord(chord) {
    console.log('----------drawChord');
    console.log(chord.s);
}