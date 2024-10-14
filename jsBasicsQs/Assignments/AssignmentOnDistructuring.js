//task:11
const orgArr=[1,2,3]
let newArr=[...orgArr]
newArr.push(4)
console.log(orgArr)
console.log(newArr)

//task:12,13
const orgArr1=[1,2,3]
const orgArr2=[11,22,33]
let newArr2=[...orgArr1,...orgArr2];
console.log(newArr2)

//task :14
let car={
    make:"val1",
    model:"mod1"
}

let newObj={...car}
newObj.type="petrol"
console.log(car)
console.log(newObj)

 //task :15

 const defaults={
    volume:50,
    brightness:80
 }

 const userSettings={
    volum:30
 
}
let newObj3={...defaults,...userSettings}
let newObj4={...userSettings,...defaults}

console.log(newObj3)
console.log(newObj4)


//task16
let arr3=[5,10,15]
let sum=(a,b,c)=>{
    console.log(a,b,c)
}
sum(...arr3)


// //task 17
// let priceValues=[100,200,300]
// let calculateTotalfx=(...priceValues)=>{
// priceValues.reduce((acc,val)=>{
//     return acc+=val;
// })
// }



//task 18/19/20
let arr4=[1,2,3]
let arr5=[6,7,8]
let arr6=[99,77]
let arr7=[777,666]

let combineArr=(...allArrrays)=>{
 console.log(allArrrays);
};
combineArr(...arr4,...arr5,...arr6,...arr7);


//non primitive datas are mutable
//so const object attribute value can be changed

//freez and seal

const object11={
    name:"name1",
    accNo:48394895,
    contact:1122334455,
    balance:"133 Billion"
}
object11.balance="1330 Bilions"

console.log(object11)

Object.seal(object11);
object11.balance="13 Bilions"

console.log(object11)
//seal will not alloe add or remove new attributes
//  --allow to update attributes


Object.freeze(object11);
console.log(object11)


//freeze lead to seal and freez
//seal lead to seal only



