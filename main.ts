// homework university mannagement system

// ================= Abstract =================


abstract class homeAppliances{
    private _brand_name: string

    constructor(BrandName:string){
        this._brand_name = BrandName
    }
    abstract turnOn():void
    abstract turnOff():void

    GetBrandName(){
        console.log("Brand name is",this._brand_name)
    }
}

// ===> 1st Example with same extends(homeAppliance) <===


class Microwave extends homeAppliances{
    constructor(BrandName: string){
        super(BrandName)
    }
    turnOn() {
        console.log("Microwave is turnOn")
    }

    turnOff() {
        console.log("Microwave is turnOff")
    }
}

let machine1 = new Microwave("LG")
machine1.GetBrandName()
machine1.turnOn()

// ===> 2nd Example with same extends(homeAppliance) <===

class washingMachine extends homeAppliances{
    constructor(BrandName: string){
        super(BrandName)
    }
    turnOff(): void {
        console.log("WashingMachine is Off")
    }
    turnOn(): void {
        console.log("WashingMachine is Off")
    }
}

let machine2 = new washingMachine("Sonny")
machine2.GetBrandName()
machine2.turnOff()