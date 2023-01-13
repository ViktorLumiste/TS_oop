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
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getTotalPower(v :number) {
        let sum: number = 0
        this.resistors.forEach((r: Resistor) => {
            sum += r.getPower(v)
        })
        return sum
    }
    getBiggestOhm(){
        let biggest: number = 0
        this.resistors.forEach((res:Resistor)=> {
            if(res.r > biggest){
                biggest = res.r
            }
        })
        return biggest
    }
    getBiggestVolt(v:number){
        let biggest: number = 0
        this.resistors.forEach((res:Resistor)=> {
            if(v/3 > biggest){
                biggest = v/3
            }
        })
        return biggest
    }
    getBiggestWatt(v:number){
        let biggest: number = 0
        this.resistors.forEach((res:Resistor)=> {
            if(res.getPower(v/3) > biggest){
                biggest = res.getPower(v/3)
            }
        })
        return biggest
    }

}

let sc1: SeriesCircuit = new SeriesCircuit();
let sc2: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(110));
sc2.push(new Resistor(210))
sc2.push(new Resistor(510))
sc2.push(new Resistor(610))
console.log(sc1.getTotalResistance());
console.log(sc2.getTotalResistance());
console.log("------")
console.log(sc1.getCurrent(12));
console.log(sc2.getCurrent(10));
console.log("------")
console.log(sc1.getTotalPower(12));
console.log(sc2.getTotalPower(10));
console.log("------")
console.log(sc1.getBiggestOhm())
console.log(sc2.getBiggestOhm())
console.log("------")
console.log(sc1.getBiggestVolt(5))
console.log(sc2.getBiggestVolt(5))
console.log("------")
console.log(sc1.getBiggestWatt(5))
console.log(sc2.getBiggestWatt(5))
console.log("------")


