// let heading1=document.getElementById("heading1");
//  console.log( heading1)
// heading1.title="title from js"
// heading1.style.background="green"
//  console.log( heading1)


 //id behaviour
 //why script tag should be written at the end of html document


//-------------------------------------------------------

//  let input=document.getElementsByTagName('input');
// console.log('input');

// input[0].title="input 1";
 
 


//-------------------------------------------------------
// let input=document.querySelector(".userInput");
// console.log(input)
//-------------------------------------------------------

// let input=document.querySelectorAll(".userInput");
// console.log(input)


//-------------------------------------------------------
// let myDiv=document.querySelector('div');
// console.log('div');
// myDiv.setAttribute('class',"myDivclass")
// console.log(myDiv)
// myDiv.removeAttribute('class',"myDivclass")
// console.log(myDiv)


//-------------------------------------------------------
 let myDiv=document.createElement('div');
 console.log(myDiv);


 let {body}=document;
 let myDiv1=document.querySelector('div');
console.log('div');
myDiv.setAttribute('class',"myDivclass")
console.log(myDiv)
 myDiv.textContent="text from js"
 body.append(myDiv)