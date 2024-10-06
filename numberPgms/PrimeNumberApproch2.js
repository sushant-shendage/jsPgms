//Title:prime number approch 2
//(num/2) iteration
let num = 101;

for (var i = 2; i <= (num/2); i++) {
    if (num % i == 0) {
        break;
    }
}

if (i ==((num/2)+1)) 
{
    console.log(`${num} is prime number`);
} else {
    console.log(`${num} is prime number`);

}