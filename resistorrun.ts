class Resistor {
    r: number = 0;
    m: number = 0;
    constructor(r: number, m:number) {
        this.r = r;
        this.m = m
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(): number {
        return this.m * this.getCurrent(this.m);
    }
    getMax():number{
        return Math.sqrt(this.getPower() * this.r)
    }
    checkMax():boolean{
        return this.m<=this.getMax()
    }
}

let r1 = new Resistor(400, 10);
let r2 = new Resistor(330, 10);
let r3 = new Resistor(320, 10);
let r4 = new Resistor(470, 10);
let r5 = new Resistor(110, 10);
let resistors: Resistor[] = [r1,r2,r3,r4,r5]
function filterResistors(): Resistor[]{
    let allow: Resistor[] = [];
    resistors.forEach((resistorr) => {
        if (resistorr.checkMax()){
            allow.push(resistorr)
        }
    })
    return allow
}

console.log(r1);
console.log(r1.getPower());
console.log(r1.getMax())
console.log(filterResistors())
