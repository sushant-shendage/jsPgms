console.log("8 oct,24");

/*
---objec==>[prtotype](object prototype)//object is internally object
---array==>[prtotype](object prototype)//array internally is object

---[***] datatypes's prototype
---[***]how to check protype of number,array,object,datatype exception(null)

---[Q]explain why js is object based programing language?

---every protpotype consist of its own properties(method) 
   --every car model has it's own fetures

---multiple models derived from using basic prototype

---[***]oops in js
*/


//---------------------------------------------\\
console.log("---------------------------");
 let num=10;

console.log(num.__proto__);
console.log("---------------------------");

//---------------------------------------------//



//---------------------------------------------\\
console.log("---------------------------");
 let str="demo";

console.log(str.__proto__);
console.log("---------------------------");

//---------------------------------------------//



//---------------------------------------------\\
console.log("---------------------------");
 let bool1=true;

console.log(bool1.__proto__);
console.log("---------------------------");

//---------------------------------------------//



//---------------------------------------------\\
console.log("---------------------------");
 let arr=[1,2,3,4,5];
console.log(arr);
console.log("---------------------------");

//---------------------------------------------//



//---------------------------------------------\\
console.log("---------------------------");
let ob1={
     att1:45,
     att2:55
}

console.log(ob1);

console.log("---------------------------");

//---------------------------------------------//







//[inheritance in js]
//---------------------------------------------\\
console.log("---------------------------");
  let obj1={name:"Tinku"}
  let obj2={surname:"pande"}

console.log(obj1)
obj1.__proto__=obj2
console.log(obj1)

console.log(obj1.surname)
console.log("---------------------------");

//---------------------------------------------//

