"use strict";
// homewor university mannagement system
// ================= Abstract =================
class homeAppliances {
    constructor(brand_name) {
        this._brand_name = brand_name;
    }
    GetBrandName() {
        console.log("Brand name", this._brand_name);
    }
}
class Microwave extends homeAppliances {
    constructor(brand_name) {
        super(brand_name);
    }
    turnOn() {
        console.log("Microwave is turnOn");
    }
    turnOff() {
        console.log("Microwave is turnOff");
    }
}
let machine1 = new Microwave("LG");
machine1.GetBrandName();
machine1.turnOn();
class washingMachine extends homeAppliances {
    constructor(brand_name) {
        super(brand_name);
    }
    turnOff() {
        console.log("WashingMachine is Off");
    }
    turnOn() {
        console.log("WashingMachine is Off");
    }
}
let machine2 = new washingMachine("Sonny");
machine2.GetBrandName();
machine2.turnOff();
