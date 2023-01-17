let resistors:number[]=[4,2];
let inversesum:number=0;
for(let resistance of resistors){
    inversesum+=1/resistance;
}
console.log(1/inversesum);