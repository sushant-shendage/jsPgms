// //when to use?
// //to achive asynchronous behaviour
// //js engine is not multithreaded



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



console.log("first");
let promiseResolve=fetch("https://api.github.com/users");
console.log(promiseResolve);

promiseResolve.then((val)=>{
    console.log(val);
    let data=val.json();
    return data;
}).then((val2)=>{console.log(val2)}).catch((err)=>{console.log("something went wrong...!",err)})
console.log("last");




