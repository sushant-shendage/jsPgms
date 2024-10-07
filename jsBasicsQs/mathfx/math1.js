console.log("--console.log(Math.ceil(10.0))--");
console.log(Math.ceil(10.0));
//floor
//pow(,)
//log()
//max
console.log("--console.log(Math.max(77,9,67,48,57))--");
console.log(Math.max(77, 9, 67, 48, 57));

console.log("--console.log(Math.pow(3,2))--");
console.log(Math.pow(3, 2));

console.log("--console.log(Math.random())--");
console.log(Math.random());

function otp(num) {
     let a = Math.round(Math.random() * Math.pow(10, num));
     return `${num} digit otp ${a}`;
}
otp(5);