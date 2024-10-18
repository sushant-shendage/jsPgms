let demo = async () => {
    let res = await fetch("https://api.github.com/users");
    let data = await res.json();
    
     console.log(data)
console.log("--------------------------------------------------------------");
    data.map((val) => {
        console.log(val.login);
    });
}
demo();

//we can't use await without async

//always make fuction async in order to use await
//use of async and await keyword

//why we used await two times explain


//async keyword-use