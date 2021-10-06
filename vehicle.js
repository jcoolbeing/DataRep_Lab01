class Vehicle{
    constructor(make, year, model){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year, doors);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`)
    }
}

let myCar = new Car('VW', 22, 'Golf', 4);
myCar.Information();