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
        this.name = name
    }
}

// create Box class
// add box to length
// print the farm

const farm1 = new Farm("Mullo", "Ethiopia");
const flower1 = new Flower("Hypericum", "pink");

const length50 = new Length("Fifty");
const length70 = new Length("Seventy");

flower1.addLength(length50);
flower1.addLength(length70);

// farm1.addFlower(flower1.id);

// box50 -> (id) , length.boxes () -> 

farm1.addFlower(flower1);

console.log({
    flower: JSON.stringify(farm1)
});