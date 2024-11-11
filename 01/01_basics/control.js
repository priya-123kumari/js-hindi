console.log("priya")
const month=3
switch(month){
    case 1:
        console.log("jan");
        break;
        case 2:
        console.log("feb");
        break;
        case 3:
        console.log("march");
        break;
        default:
            console.log("default");
            break;

}
//let val1;
//val1=5??10;
//val1=null??10;
//val1=undefined??10;
//console.log(val1);
//const iceteaprice=100
//iceteaprice>=80 ? console.log("less than 80"): console.log("more then 80")
for(let index=0; index<=10;index++){
    const element=index;
    console.log(element)
}
/*let myArray=["flash","batsman","superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}


for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log('detected 5')
        break
    }
    
    console.log('value of i is ${i}');
    
}

for (let j = 1; j <= 20; j++) {
    if(j==5){
        console.log('detected 5')
       continue
    }
    
    console.log('value of j is ${j}');
    
}*/
let index=0
while(index<=10){
    console.log(`value of index is ${index}`);
    
    
    
    index=index+2;
}

let score=11
do{
    console.log(`score is ${score}`)
    score++
    while(score<=10);
}
