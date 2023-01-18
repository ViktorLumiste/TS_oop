class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getResistance(): number {
        return this.r;
    }
}

class Switch extends Resistor {
    constructor() {
        super(0);
    }
    on() {
        this.r = 0;
    }
    off() {
        this.r = 1000000000;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getPower(u:number){
        return u* this.getCurrent(u)
    }
}
class ParallelCircuit{
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance(){
        let sum:number = 0
        this.resistors.forEach((r:Resistor) => {
            if(r.r > 0) {
                sum += 1 / r.r
            }
        })
        return sum
    }

}

// let r1: Resistor = new Resistor(220);
// let sw1: Switch = new Switch();
// let sw2: Switch = new Switch();
// let sc1: SeriesCircuit = new SeriesCircuit();
// sc1.push(r1);
// sc1.push(sw1);
// sc1.push(sw2);
// sw1.off()
// sw2.off()
// console.log(sc1.getTotalResistance());
// console.log(sc1.getCurrent(5));
// console.log(sc1.getPower(5));
// sw1.on();
// console.log(sc1.getTotalResistance());
// console.log(sc1.getCurrent(5));
// console.log(sc1.getPower(5));
// sw2.on()
// console.log(sc1.getTotalResistance());
// console.log(sc1.getCurrent(5));
// console.log(sc1.getPower(5));

let r1:Resistor = new Resistor(220)
let sw1:Switch = new Switch()
let sw2:Switch = new Switch()
let pc1:ParallelCircuit = new ParallelCircuit()
pc1.push(r1)
pc1.push(sw1)
pc1.push(sw2)
sw1.off()
sw2.off()
console.log(pc1.getTotalResistance())
sw2.on()
console.log(pc1.getTotalResistance())
sw1.on()
console.log(pc1.getTotalResistance())
