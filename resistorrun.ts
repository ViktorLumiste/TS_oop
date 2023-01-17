class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
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
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getAllPower(u:number){
        let powers : any  = []
        this.resistors.forEach((r:Resistor)=> {
            powers.push(r.getPower(u))
        })
        return powers
    }

}

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(120));
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
console.log(sc1.getPower(12));
console.log(sc1.getAllPower(12))
