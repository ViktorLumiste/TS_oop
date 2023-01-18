let voltage:number = 4.5
let amps:number = 0.5
let ohms:number = voltage / amps
let power:number = voltage * amps
let resistors:number[]=[110, 220, 220];
let inversesum:number=0;
for(let resistance of resistors){
    inversesum+=1/resistance;
}
console.log(1/inversesum);
console.log(ohms)
console.log(power)