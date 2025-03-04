// ### DOM Manipulation Tasks:

//----------------------------------------------------------------------------------\\

// 1. **Change Background Color:**
//    - Create a button with a label like “Change Background”. Write a function that will change the background color of the entire page when this button is clicked. You can allow the user to choose a random color or pick a predefined color.
const {body}=document;
let bgColorchangingBtn=document.createElement('button')
bgColorchangingBtn.textContent="click me to change color"
// console.log(bgColorchangingBtn)


bgColorchangingBtn.addEventListener('click', function() {
    const colorArray = [
        'red', 'blue', 'green', 'yellow', 'orange',
        'purple', 'pink', 'brown', 'black', 'white',
        'cyan', 'magenta', 'lime', 'indigo', 'violet'
      ];

      let color=Math.round(Math.random()*100)%colorArray.length;
       
      body.style.backgroundColor=colorArray[color];
});
//  bgColorchangingBtn.on
body.appendChild(bgColorchangingBtn);
//----------------------------------------------------------------------------------//



let hr1=document.createElement('hr');
body.appendChild(hr1);
//----------------------------------------------------------------------------------\\


// 2. **Text Update:**
//    - Add a paragraph element to your HTML with some initial text (e.g., “Click the button to change this text.”). Create a button labeled “Update Text”. Write a function that, when the button is clicked, changes the paragraph text to something else (e.g., “Text updated!”).
let btn2=document.createElement('button');
btn2.textContent='update paragraph'
let paragraph1=document.createElement('p');
paragraph1.textContent="this is paragraph"
 

btn2.addEventListener('click', function() {
    paragraph1.textContent="updated paragraph"     
});

body.appendChild(paragraph1);
body.appendChild(btn2);

//----------------------------------------------------------------------------------//
let hr2=document.createElement('hr');
body.appendChild(hr2);


//----------------------------------------------------------------------------------\\
// 3. **Hide/Show Element:**
//    - Add a div with some content and a button labeled “Hide/Show”. Write a function that hides the div when the button is clicked for the first time, and shows it again when clicked the second time. Use a boolean or toggle to keep track of whether the div is visible or hidden.

let div1=document.createElement('div')
div1.textContent="this is div content";

let btn3=document.createElement('button');
btn3.textContent="hide"
 var flag=0;
btn3.addEventListener('click', function() {
 
    if (flag==1) {
        div1.textContent="this is div content";
        btn3.textContent="hide"
        flag=0;
    } else {
        div1.textContent="...";
        btn3.textContent="show"
        flag=1;
    }
});
body.appendChild(btn3)
body.appendChild(div1)
//----------------------------------------------------------------------------------//
let hr3=document.createElement('hr');
body.appendChild(hr3);

//----------------------------------------------------------------------------------\\

// 4. **Add New Item to List:**
//    - Create an input field and an empty unordered list (ul) in your HTML. Below the input, add a button labeled “Add Item”. Write a function that, when the button is clicked, adds the value from the input field as a new list item (li) to the unordered list. Make sure to clear the input field after adding the item.
 let ul1=document.createElement('ul');
 ul1.textContent="unordered list1"
 body.appendChild(ul1);

 let inputField1=document.createElement('input');
 inputField1.placeholder='enter list item';
 body.appendChild(inputField1);

 let btn4=document.createElement('button');
 btn4.textContent="add list item"
 btn4.addEventListener('click', function() {
 
    const newItem = inputField1.value;
console.log(newItem);

    if (newItem !=null) {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;

        var lastListitem=listItem;

        ul1.appendChild(listItem);
        inputField1.value = ''; // Clear input field after adding the item
    }
});
 body.appendChild(btn4)

 
//----------------------------------------------------------------------------------//
let hr4=document.createElement('hr');
body.appendChild(hr4);
//----------------------------------------------------------------------------------\\

let btn5=document.createElement('button');
btn5.textContent="remove last  list item"
btn5.addEventListener('click', function() {

   const newItem = inputField1.value;
console.log(newItem);

   if (newItem !==null) {
        
       ul1.removeChild(ul1.lastChild);
 
   }
});
body.appendChild(btn5)
// 5. **Remove Last Item from List:**
//    - Add an unordered list with a few predefined list items (li). Below the list, add a button labeled “Remove Last Item”. Write a function that, when the button is clicked, removes the last item from the list. Make sure the function works even when the list is empty (i.e., it shouldn’t break).
//----------------------------------------------------------------------------------//
let hr5=hr4;
body.appendChild(hr5);
//----------------------------------------------------------------------------------\\

// 6. **Toggle Class:**
//    - Create a div element with some initial style, like a background color or border. Add a button labeled “Toggle Style”. Write a function that toggles a specific class on the div when the button is clicked. The class should change the div’s appearance (e.g., different color or border style).

let div3=document.createElement('div');
div3.textContent="this is div 3"
div3.style.backgroundColor="red";
div3.style.border='2px solid black'
body.appendChild(div3);

let btn6=document.createElement('button');
btn6.textContent="change div style"
body.appendChild(btn6);
let style=0;
btn6.addEventListener('click', function() {
 
    if (style==0) {
        style=1;
         div3.style.backgroundColor="red";
div3.style.border='2px solid black'
        
    } else {
        div3.style.backgroundColor="green";
div3.style.border='2px solid yellow'
style=0;
    }
})
//----------------------------------------------------------------------------------//
let hr6=document.createElement('hr');
body.appendChild(hr6);





// 7. **Change Image Source:**
//    - Add an image element with an initial source. Below the image, add two buttons labeled “Change to Image 1” and “Change to Image 2”. Write functions for both buttons that change the image’s source to a different URL when clicked.
//----------------------------------------------------------------------------------\\
let btn7=document.createElement('button');
let img1=document.createElement('img');
img1.alt="img not loaded";
img1.style.width="100px";
body.appendChild(img1);
btn7.textContent="change image"
body.appendChild(btn7);
let im=0;
btn7.addEventListener('click', function() {
 
    if (im==0) {
        im=1;
         img1.src="https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/03/18/1402031814224368127735594.jpg"
    } else {
        img1.src="https://www.buzzwebzine.fr/wp-content/uploads/2022/09/Night-cafe-1.jpg";
im=0;
    }
})

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\
let hr7=document.createElement('hr');
body.appendChild(hr7);

// 8. **Create Elements Dynamically:**
//    - Add a button labeled “Add Paragraph”. Write a function that, when the button is clicked, creates a new paragraph element and appends it to the document body. The paragraph should contain some text (e.g., “This is a new paragraph!”).
let btn8=document.createElement('button');
btn8.textContent='add paragraph'
body.appendChild(btn8)
btn8.addEventListener('click',
function(){
let paraEle=document.createElement('p');
paraEle.textContent="this para"
body.appendChild(paraEle)
}
)
//----------------------------------------------------------------------------------//


let hr8=document.createElement('hr');
body.appendChild(hr8);
//----------------------------------------------------------------------------------\\

// 9. **Disable Button After Click:**
//    - Add a button labeled “Click Me”. Write a function that disables the button (i.e., makes it unclickable) after it’s been clicked once. You can change the button’s text to indicate that it’s been disabled (e.g., “Button Disabled”).

let btn9=document.createElement('button');
btn9.textContent="click me"
body.appendChild(btn9);

btn9.addEventListener('click',
    function(){
        btn9.textContent="button is disabled";
        btn9.disabled=true;
    }
)
//----------------------------------------------------------------------------------//



let hr9=document.createElement('hr');
body.appendChild(hr9);
//----------------------------------------------------------------------------------\\

// 10. **Display Input Text:**
//     - Create an input field and a div below it. Write a function that, as the user types into the input field, displays the same text in the div In real-time. This can be achieved by listening for the input event and updating the div’s inner text with the input’s current value.

let inputField2=document.createElement('input');
inputField2.id='ipf2'
body.appendChild(inputField2);
let div4=document.createElement('div');
body.appendChild(div4);
  
inputField2.addEventListener('input', function() {
    div4.textContent = inputField2.value;  // Update div content in real-time
});
 
//----------------------------------------------------------------------------------//


let hr10=document.createElement('hr');
body.appendChild(hr10);
//----------------------------------------------------------------------------------\\

// 11. **Change Text Color on Hover:**
//     - Add a paragraph element with some text. Write a function that changes the text color when the mouse hovers over the paragraph and reverts the color back to its original state when the mouse leaves.
let paraEle2=document.createElement('p');
paraEle2.textContent="these are the text with hover effect";
paraEle2.addEventListener('mouseover', function() {
    paraEle2.style.color = 'blue';  
});

 
paraEle2.addEventListener('mouseout', function() {
    paraEle2.style.color = 'black';  
});
body.appendChild(paraEle2);

//----------------------------------------------------------------------------------//

let hr11=document.createElement('hr');
body.appendChild(hr11);

//----------------------------------------------------------------------------------\\

// 12. **Display Current Date and Time:**
//     - Add a button labeled “Show Date and Time”. Write a function that, when the button is clicked, displays the current date and time in a div below the button. You can use JavaScript’s `Date` object to get the current date and time.

let preText1=document.createElement('pre');
let dateAndTimeInfo=new Date();
body.appendChild(preText1);
let btn10=document.createElement('button');
btn10.textContent="show date and time"
body.appendChild(btn10);
let div5=document.createElement('div');
div5.textContent="--"
body.appendChild(div5);
btn10.addEventListener('click',function(){
 div5.textContent=new Date();
});
//----------------------------------------------------------------------------------//


let hr12=document.createElement('hr');
body.appendChild(hr12);


//----------------------------------------------------------------------------------\\

// 13. **Remove Element:**
//     - Add a div or any other element with some content. Below it, add a button labeled “Remove Element”. Write a function that removes the element from the DOM when the button is clicked.
let div6=document.createElement('div');
div6.textContent="this id"
div6.style.backgroundColor="black";
div6.style.color="white";
div6.style.width='500px';
div6.style.borderRadius='5px'
div6.textContent='center'
body.appendChild(div6);

let btn11=document.createElement('button');
btn11.textContent="remove above element"
body.appendChild(btn11);
btn11.addEventListener('click',
    function(){
        div6.remove();
    }
)

//----------------------------------------------------------------------------------//


let hr13=document.createElement('hr');
body.appendChild(hr13);
//----------------------------------------------------------------------------------\\

// 14. **Count Button Clicks:**
//     - Create a button labeled “Click Counter”. Below the button, add a paragraph that displays the number of times the button has been clicked (e.g., “Button clicked 0 times”). Write a function that increments the count every time the button is clicked.
let btn12=document.createElement('button');
btn12.textContent="count clicks"
body.appendChild(btn12);
let div7=document.createElement('div');
div7.textContent="..."
body.appendChild(div7);
let count=0;
btn12.addEventListener('click',
    function(){
        div7.textContent=`clicks :: ${++count}`
    }
)
//----------------------------------------------------------------------------------//


let hr14=document.createElement('hr');
body.appendChild(hr14);
//----------------------------------------------------------------------------------\\

// 15. **Display Window Width:**
//     - Add a div that will display the current window width. Write a function that updates the width in the div whenever the user resizes the window. You can listen for the `resize` event and use `window.innerWidth` to get the current width.
let btn13=document.createElement('button');
btn13.textContent="show current window width "
body.appendChild(btn13);
let div8=document.createElement('div');
div8.textContent="..."
body.appendChild(div8);
 
btn13.addEventListener('click',
    function(){
         div8.textContent=window.innerWidth;
    }
)
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 16. **Add Class to All Elements:**
//     - Add a few paragraph elements to the page. Below them, add a button labeled “Add Class”. Write a function that, when the button is clicked, 
//adds a specific class (e.g., a class that changes the text color) to all the paragraph elements on the page.
let paraEle3=document.createElement('p');
paraEle3.textContent="this is paragraph1"
body.appendChild(paraEle3);

let paraEle4=document.createElement('p');
paraEle4.textContent="this is paragraph2"
paraEle3.class="4paracommomClass"

body.appendChild(paraEle4);


let paraEle5=document.createElement('p');
paraEle5.textContent="this is paragraph3"

body.appendChild(paraEle5);


let paraEle6=document.createElement('p');
paraEle6.textContent="this is paragraph4"
body.appendChild(paraEle6);

let allParas=document.querySelectorAll('p'); 

let btn14=document.createElement('button');
btn14.textContent="add color changing class"
body.appendChild(btn14);
 

 const style2 = document.createElement('style');
style2.textContent = `
    .highlight {
        color: blue;
    }
`;
document.head.appendChild(style2);

btn14.addEventListener('click',
    function(){
        allParas.forEach(paragraph => {
            paragraph.classList.add('highlight');
        });

    }
)

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 17. **Input Validation:**
//     - Create a form with a text input field and a submit button. Write a function that validates the input field when the form is submitted. If the field is empty, display an 
//error message below the form and prevent the form from being submitted. 

 

 let inputField3=document.createElement('input');
 inputField3.placeholder='enter input';
 body.appendChild(inputField3);

 

 let btn15=document.createElement('button');
 btn15.textContent="submit validation"
 body.appendChild(btn15)


 let div9=document.createElement('div');
div9.textContent="..."
body.appendChild(div9);



 btn15.addEventListener('click', function() {
    const newItem = inputField3.value;
    
        if (newItem !=null) {
            div9.textContent="not given any input..."
    
            
            inputField3.value = ''; 
        }
    
});
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 18. **Change Font Size:**
//     - Add a paragraph with some text. Below the paragraph, add a button labeled “Increase Font Size”. Write a function that increases the font size of the paragraph by 2px every time the button is clicked.

let btn16=document.createElement('button');
btn16.textContent='increse font by 2px'
let paraEle7=document.createElement('p');
paraEle7.textContent="this is paragraph"
body.appendChild(paraEle7);
 

btn16.addEventListener('click', function() {
    
        //const currentSize = ; // Get current font size
       // const newSize = ; // Increase font size by 2px
       paraEle7.style.fontSize = parseFloat(window.getComputedStyle(paraEle7).fontSize) + 2 + 'px'; // Set new font size
    });  
 

body.appendChild(btn16);

//----------------------------------------------------------------------------------//


// ### Event Handling Tasks:
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 21. **Button Hover Event:**
//     - Add a button labeled “Hover Me”. Write a function that changes the background color of the button when the user hovers over it and reverts the color when the mouse leaves.
let btn17=document.createElement('button');
btn17.textContent="Hover me";
btn17.addEventListener('mouseover', () => {
    btn17.style.backgroundColor = 'green'; 
});

btn17.addEventListener('mouseout', () => {
    btn17.style.backgroundColor = 'red'; 
});
body.appendChild(btn17);
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 22. **Form Submission Event:**
//     - Create a simple form with an input field and a submit button. Write a function that prevents the form from being submitted if the input is empty, and display an error message below the form. Use `event.preventDefault()` to prevent form submission.
  let inputField4=document.createElement('input');
  inputField4.placeholder="enter input";
  body.appendChild(inputField4);
  let btn18=document.createElement('button');
  btn18.textContent='submit';
  btn18.addEventListener('click',function(event ){
    console.log(inputField4.value);
      if (inputField4.value.trim()=="") {
        event.preventDefault();
         
   alert("input field can't be empty..!")
    }else{

        btn18.textContent=inputField4.value;
    }
  }

  )
  body.appendChild(btn18);

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 23. **Keyboard Event:**
//     - Add an input field. Write a function that listens for the “Enter” key and triggers an alert when it’s pressed inside the input field. Make sure the function only works for the “Enter” key.

let inputField5=document.createElement('input');
inputField5.placeholder="enter input";
body.appendChild(inputField5);
let btn19=document.createElement('button');
btn19.textContent='submit';
body.appendChild(btn19);
inputField5.addEventListener('keydown',function( event ){
 
    if (event.key==="Enter") {
 alert("you entered enter key on keybord..!")
  }else{

  }
}

)
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 24. **Double-Click Event:**
//     - Create a div with some content and write a function that changes its background color when it’s double-clicked. The background should change every time a double-click event occurs.

let div10=document.createElement('div');
div10.textContent="double click to change color..!"
div10.style.backgroundColor="yellow"
div10.style.cursor="pointer"
body.appendChild(div10);
const colorArray = ["red","blue", "green","yellow"]
div10.addEventListener('dblclick',function(){
let color=Math.round(Math.random()*10)%colorArray.length;
div10.style.backgroundColor=colorArray[color];
})


//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 25. **Key Press Counter:**
//     - Add an input field and a paragraph that displays the number of times a key has been pressed inside the input field. Write a function that increments the count with every keypress and updates the paragraph.
let inputField6=document.createElement('input');
inputField6.placeholder="enter input";
body.appendChild(inputField6);

let paraEle8=document.createElement('p');
paraEle8.textContent=" - - - "
body.appendChild(paraEle8);
let count2=0;
inputField6.addEventListener('keydown',function( event ){
count2++;
    paraEle8.textContent=`${count2}`;
}

)


//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 26. **Mouse Movement Tracker:**
//     - Write a function that tracks the mouse’s position on the page in real-time and displays the current x and y coordinates in a div. Update the coordinates every time the mouse moves.


let div11=document.createElement('div');
div11.style.backgroundColor="purple"
body.appendChild(div11);
document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the X coordinate
    const y = event.clientY; // Get the Y coordinate
    div11.textContent = `X: ${x}, Y: ${y}`; // Update the div content
});
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 27. **Right-Click Event:**
//     - Add an element to your page, like a button or div. Write a function that triggers an alert when the user right-clicks on the element. Use the `contextmenu` event to handle the right-click.
 
let div12=document.createElement('div');
div12.style.backgroundColor="indigo"
div12.textContent="right click here..!"
body.appendChild(div12);
div12.addEventListener('contextmenu', (event) => {
    event.preventDefault();  
    alert('Right-click detected!');  
});

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 28. **Mouse Over Event:**
//     - Create a div or paragraph with some text. Write a function that changes its text or color when the mouse is moved over the element and changes it back when the mouse leaves.

let div13=document.createElement('div');
div13.style.backgroundColor="pink"
div13.textContent="over mouse here..!"
body.appendChild(div13);
div13.addEventListener('mouseover', (event) => {
    event.preventDefault();  
    alert(' mouse is here..!');  
});
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------\\

// 29. **Focus Event:**
//     - Add an input field. Write a function that changes the input field’s border color when it gains focus and reverts the color when it loses focus. Use the `focus` and `blur` events for this.
const inputField7 = document.createElement('input');
 body.appendChild(inputField7)
 inputField7.borderColor='3px solid black'

inputField7.addEventListener('focus', () => inputField7.style.borderColor = 'lightblue');
inputField7.addEventListener('blur', () => inputField7.style.borderColor = 'blue');