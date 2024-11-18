// //  console.log(123+"g")
// //-----------------------------------------------
// let arr1 = [100, 200, 300]
// console.log(arr1)
// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] *= 0.70;
// }
// console.log(arr1)


// let returnVowelsCount = (x) => {
//     let count = 0;
//     let ch='';

//     for (let i = 0; i < x.length; i++) {
//         ch=x.charAt(i);
//         if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U') {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(returnVowelsCount)

//bouncy nnumberr code
 


//arroe function in one line

let printHi=()=>console.log("hi");

 let returnPi=()=>3.15;

 console.log(returnPi())


 let cube=a=>a**3;
 console.log(cube(3))
 
 //forEach() method

 let arr3=[770,967,4857];
 arr3.forEach((val,index,arr)=>console.log(arr,":",index,":",val))

 arr310percent=arr3.map(val=>Math.floor(val*0.10))
 console.log(arr310percent)

 let prime=(num)=> {
    for(var i=2;i<num;i++){
        if (num%i==0) {
            break;
        }
        
         }
         
        console.log(num)
         if (i==num) {
            console.log("prime");
         } else {
            console.log("Not prime");
            
         }
 }

  for(let i=0;i<=10;i++){prime(i)}

 console.log(Math.floor(1234/100))
 

 //prototype 

 
 //declare and initilize integer number variable
 let number=10;
 //i will checjk is there any perfect divisor between range [2-number-1] range
 for(var i=2;i<number;i++){
if (number % i==0) {
   break;
}
 }
 //based on privious step i will make final desion that number is prime or not

 if(i==number){
   console.log(`${number} is prime number..!`);
 }else{
   console.log(`${number} is consecutive number..!`);
 }
 

 let objUtility={
    u1(){console.log("object utility fx1")},
    u2(){console.log("object utility fx2")},
    u3(){console.log("object utility fx3")}
 }

 let performArithmetics={
 greet:()=>{console.log("this is inheritance..!")}
 }

 performArithmetics.__proto__=objUtility;

  performArithmetics.greet;
  performArithmetics.u1();
  performArithmetics.u2();
  performArithmetics.u3();


  //synchronous vs asynchronous behaiviour
console.log("Synchronous behaviour");
console.log("one");
console.log("two");
console.log("three");
console.log("four");


console.log("asynchronous behaviour");
setTimeout(()=>{console.log("one taking 3000ms")},3000);
console.log("two");
console.log("three");
console.log("four");
setTimeout(()=>{console.log("five- 3000ms")},4000);
setTimeout(()=>{console.log("six- 2000ms")},2000);
setTimeout(()=>{console.log("seven- 1000ms")},1000);

 

let variable;
variable="declared after printing stateent..!"
console.log(variable)





