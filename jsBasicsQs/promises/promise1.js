// //when to use?
// //to achive asynchronous behaviour
// //js engine is not multithreaded
// //it's time consuming



// let p2= new Promise((resolve,reject)=>{
//     resolve();
//     // reject("something went wrong..!");
// })


// p2.then(()=>{
// console.log("then block");
// })
 
// p2.catch(()=>{
//     console.log("catch block");
//     })


// console.log("first");
//     let p3= new Promise((resolve,reject)=>{
//         let a=10;

//         resolve(a);
//     })
// p3.then((val)=>{
// console.log("value passed ",val);
// })
// console.log("last");























//array of objects in json file=API
//states of p
//what is readiable and writable stream
//fetch method will return a promise
//how to handle promises 



// console.log("first");
// let promiseResolve=fetch("https://api.github.com/users");
// console.log(promiseResolve);

// promiseResolve.then((val)=>{
//     console.log(val);
//     let data=val.json();
//     return data;
// }).then((val2)=>{console.log(val2)}).catch((err)=>{console.log("something went wrong...!",err)})
// console.log("last");


fetch("https://api.github.com/users").then((val)=>{return val.jason()}).then((data)=>{console.log(data)}).catch((err)=>{console.log("something went wrong...!",err)})



//-----------------------------------------------------------------------------------------------------------------------------------------------------
//promises are the objects in js
//promises are used to handle the asynchronus task
//with promises we get 3 different sates 
//pending resolve and rejected

//--promise will be in pending state when it is neither resolved or rejected
//--promise will be in resoved state when promise ifs fullfield ,when promise is resolved it will call the 'then()' block and we can pass some argument along with it 
//--promise will be in reject state when promise ifs not fullfield ,when promise is rejected it will call the 'catch()' block ,
//catch block can be used to handle the errors and exceptions 

//--promise can't be resolved or rejected at a time 

//--synchronous task in js will internally return the promise we just have to handle the promise using then and catch block
//fetch() method will return the promise we have to handle that using then and fetch block
//-Promises was introduced to call backhell

/*
.
  .
    .
      .
        .
      .
    .
  .
.


call-back hell pattern


-to overcome this promises are ontroduced
-to overcome limitations of promises async await
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------


