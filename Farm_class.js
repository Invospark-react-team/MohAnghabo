function generateID() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

class Farm {
    constructor(name, country) {
        this.id = generateID();
        this.name = name;
        this.country = country;
        this.flowers = [];
    }

    addFlower(flower) {
        (this.flowers).push(flower);
    }
}

class Flower {
    constructor(name, color) {
        this.id = generateID();
        this.name = name;
        this.color = color;
        this.lengths = [];
    }

    addLength(length) {
        (this.lengths).push(length)
    }
}

class Length {
    constructor(name) {
        this.id = generateID()
        this.name = name;
        this.box = [];
    }

    addBox(box) {
        (this.box).push(box);
    }
}

class Box {
    constructor(name, stems) {
        this.id = generateID();
        this.name = name;
        this.stems = stems
    }
}

// create Box class
// add box to length
// print the farm

const farm1 = new Farm("Mullo", "Ethiopia");
const flower1 = new Flower("Hypericum", "pink");

const length50 = new Length("Fifty");
const length70 = new Length("Seventy");

const box1 = new Box("Small", 20);
const box2 = new Box("Medium", 30);

length50.addBox(box1);

farm1.addFlower(flower1);

flower1.addLength(length50);
flower1.addLength(length70);

// farm1.addFlower(flower1.id);

// box50 -> (id) , length.boxes () -> 


// console.log({
//     farm: JSON.stringify(farm1)
// });

console.log(JSON.stringify(farm1))