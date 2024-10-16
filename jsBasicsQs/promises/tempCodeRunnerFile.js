
fetch('https://jsonplaceholder.typicode.com/users').then((val)=>{return val.jason()}).then((data)=>{console.log(data)}).catch((err)=>{console.log("something went wrong...!",err)})
