
try {
    console.log(a);
    throw new Error("a is not defined")
} catch (err) {
   //console.log("a is not defined..!");
   console.log(err);
}


