/*

``````````````````````````````````````````````
>> distructuring-->rest--->spread
>> basic     ...          advance
-[***]rest parameter:remaining value will stores in single array
-[***]parameter:it is a placeholder
-[***]spred is operator

[***] diff bet.n  rest  spread
---mostly used in 
     -LHS
     -RHS

     -single value
     -mult-value

     -parameter
     -operator

``````````````````````````````````````````````
[***]deep copy vs shallow copy vs clone
``````````````````````````````````````````````

*/

//-----------------------------------------\\
//-----------------------------------------//
//-----------------------------------------\\
{
let arr=["item1","item2","item3","item4","item5","item5",];

let [i0,i1,i2,i3]=arr;

console.log(i0);
console.log(i1);
console.log(i2);
console.log(i3);
console.log("---------------------------");
}
//-----------------------------------------//
//-----------------------------------------\\
{
let arr2=["it1","it2","it3","it4","it5","it6",];

let [a,b,c,...d]=arr2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("---------------------------");
}
//-----------------------------------------//

//-----------------------------------------\\
{
console.log("spred operator--------------------");

let arr4=["i_11","i_22","i_33","i_44","i_55","i_66",];

console.log(...arr4);
console.log(arr4);
 

let fx1=(v1,v2,v3)=>{
console.log(v3);
}

fx1(...arr4)

fx1(arr4[0],arr4[1],arr4[2])
console.log("---------------------------");
}
//-----------------------------------------//

//-----------------------------------------\\
{
console.log("distructuring string---------");

let str ="Demo";

let [firstcgar,...restchar]=str;
console.log(...str);
console.log("---------------------------");
}
//-----------------------------------------//

//-----------------------------------------\\
{
    console.log("distructuring object---------");

    console.log("``````````````````````````````")

    let demoObject={
        att1:"attribute1",
        att2:"attribute2",
        att3:"attribute3",
        att4:"attribute4",
        att5:"attribute5",
        att6:"attribute6"
    }

    let {att1,att6,...restAttributes}=demoObject;

    console.log("--Distructuring object using rest")
    console.log(restAttributes);

    console.log("``````````````````````````````")
    console.log("--Deep copy using rest")

    console.log("original object::");
    console.log(demoObject);

    let deepCopy={...demoObject};

    console.log("deep copy::");
    deepCopy.att3="attribute3updated";

    console.log(deepCopy);
    console.log("``````````````````````````````")




    console.log("----------------------------");
    
}
//-----------------------------------------//






