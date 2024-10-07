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
     let a;

     while (true) {
          a = Math.round(Math.random() * Math.pow(10, num));
          // console.log(Math.round(Math.random() * Math.pow(10, num)));
          // console.log(Math.pow(10,num-1));
          // console.log(Math.pow(10,num));
          if (a >= (Math.pow(10, num - 1)) && a < (Math.pow(10, num))) {
               console.log( `${num} digit otp ${a}`);
               return;
          }
     }
}

for(let i=1;i<=1000;i++)
{
otp(4);
}

console.log("exicution completed..!");