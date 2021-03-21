// reference type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2;
object1 === object3;
object1.value = 15;
object2.value;
object3.value;

// context

function a() {
    console.log(this);
}

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log('hi I am ${this.name}, I am a ${this.type}');
    }
}



class Wizard extends Player { // inheritance
    constructor(name, type) {
        // to use players variables
        // console.log('wizard', this); // needs super to run
        super(name, type)
        console.log('wizard', this);
    }
    play () {
        console.log('WEEEEEEEE I am a ${this.type}');
    }
}

const wizard1 = new Wizard('Daku', 'ChooMantar Wala');
const wizard2 = new Wizard('Police', 'Chor hum Daku se bde hai');
