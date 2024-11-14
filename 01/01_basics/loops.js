const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}
const greetings="hello world"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`)
    
}
const map=new Map();
map.set('IN',"india ")
map.set('USA',"united states of america")
map.set('FR',"france")
//console.log(map);

const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"

}
for (const key in myObject){
   // console.log(key);

}
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
   // console.log(programming[key]);
    
}
const coding=["java","py"]
//coding.forEach(function(val){
   //console.log(val);
})
coding.forEach((item)=>{
   console.log(item);
})
