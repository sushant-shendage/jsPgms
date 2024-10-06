//6th oct,24
//20 tasks

/*
1. **Task**: Write a function that accepts a full name (first and last name) as input and returns the total number of characters in the name, excluding spaces. The function should also return a message like: "Your name has X characters."
*/
//-------------------------------------------------\\
let str1 = "good morning";

function fx1(str) {
    return str.toLocaleUpperCase();
}
let modifiedStr = fx1("good morning");
console.log(modifiedStr);
console.log("---------------------------------------");
//-------------------------------------------------//





/*
2. **Task**: Write a function that accepts a string and returns the third character in that string. If the string is too short (less than three characters), return a message like: "The string is too short."
*/
//-------------------------------------------------\\
function fx2(str) {
    if (str.length >= 3) {

        return str.charAt(2);
    }
    else {
        return "length is too short";
    }
}
console.log(fx2("ab"))
console.log(fx2("xyz"))
console.log("---------------------------------------");

//-------------------------------------------------//


/*
3. **Task**: Write a function that takes a string and returns the Unicode value of the character in the middle of the string. If the string has an even number of characters, return the Unicode value of the character just before the middle.
*/
//-------------------------------------------------\\
function fx3(str) {
    if (str.length % 2 != 0) {
        if (str.length == 1) {
            return `Unicode of ${str.at(0)} : ${str.charCodeAt(0)}`;
        }
        else {

            return `Unicode of ${str.at(str.length / 2)} : ${str.charCodeAt(str.length / 2)}`;
        }
    }
    else if (str.length % 2 == 0) {
        return `Unicode of ${str.at((str.length / 2) - 1)} : ${str.charCodeAt((str.length / 2) - 1)}`;
    }

}

console.log(fx3("1234"));
console.log(fx3("32056"));
console.log(fx3("9"));
console.log("---------------------------------------");

//-------------------------------------------------//

/*
4. **Task**: Create a function that checks if a given file name starts with "Report" (case-sensitive). If it does, return a message like: "This is a report file." If not, return: "This is not a report file."
*/
//-------------------------------------------------\\
function fx4(str) {
    if (str.length < 6 || !str.startsWith("Report")) {
        return `${str} is not a report file`;
    } else {
        return `${str} is  a report file`;
    }
}
console.log(fx4("ReportDemo1"));
console.log(fx4("reportDemo2"));
console.log(fx4("Repor"));
console.log("---------------------------------------");

//-------------------------------------------------//

/*
5. **Task**: Write a function that accepts a string and checks if it ends with ".jpg". If it does, return: "This is an image file." Otherwise, 
return: "This is not an image file."
*/
//-------------------------------------------------\\
function fx5(str) {
    if (!str.endsWith(".jpg")) {
        return ` "${str}" is not a .jpg img file`;
    } else {
        return ` "${str}" is a .jpg img file`;
    }
}
console.log(fx5("flower.jpg"));
console.log(fx5("ironman_jpg"));
console.log(fx5("abc"));
console.log(fx5("abc.JPG"));

console.log("---------------------------------------");

//-------------------------------------------------//

/*
6. **Task**: Write a function that checks if the word "password" is included in a user's input string. If it is found, return: "Your input contains 
a forbidden word." Otherwise, return: "Input accepted."
*/

//-------------------------------------------------\\
function fx6(str) {
    let pStr = str.toLowerCase();
    if (pStr.includes("password")) {
        return ` Your input "${str}" contains forbidden word..!`;
    } else {
        return ` Input "${str}" accepted`;
    }
}
console.log(fx6("cxrd564"));
console.log(fx6("password@1234"));
console.log(fx6("PASSWORD@8765"));
console.log(fx6("PASSword@2343"));
console.log(fx6("PASSdhfajword@2343"));
console.log("---------------------------------------");

//-------------------------------------------------//

/*
7. **Task**: Write a function that searches a paragraph for the first appearance of the word "important" and returns the position (index) of that word.
 If the word isn't found, return a message like: "The word 'important' is not in the paragraph."
*/
//-------------------------------------------------\\
function fx7(str) {
    let arr = str.split(" ");

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == "important") {
            return `the word "important" 1st appear at position ${i + 1} in pragraph`;
        }
    }
    return "The word 'important' is not in the paragraph.";
}


console.log(fx7("Health is crucial, but what's more important is balance. Equally vital are important relationships and pursuing important goals in life."));
console.log(fx7("Health is crucial, but what's more valuable is balance. Equally vital are meaningful relationships and pursuing significant goals in life."));
console.log("---------------------------------------");

//-------------------------------------------------//

/*
8. **Task**: Create a function that takes a sentence and replaces all instances of the word "sad" with "happy." Return the updated sentence.
*/
//-------------------------------------------------\\
function fx8(str) {
    let arr = str.split(" ");

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == "sad") {
            arr[i] = "happy";
        }
    }
    return arr.join(" ");
}//using array

function fx82(str) {
    return str.replaceAll("sad", "happy");
}//using replaceAll function

let sentence = "He had a sad look on his face, and it was sad to watch him sit alone, lost in sad thoughts.";

console.log("modified sentence : " + fx8(sentence));
console.log("modified sentence : " + fx82(sentence));
console.log("---------------------------------------");
//-------------------------------------------------//

/*
9. **Task**: Write a function that takes a long string of text and replaces all occurrences of the word "mistake" with "correction." 
It should replace every instance found and return the updated text.
*/
//-------------------------------------------------\\
function fx91(str) {
    return str.replaceAll("mistake", "correction");
}//using replaceAll function
console.log(fx91("It was a mistake not to correct the mistake earlier, as that mistake led to another mistake, causing a bigger mistake."));
console.log("---------------------------------------");
//-------------------------------------------------//

/*
10. **Task**: Write a function that extracts the first 10 characters from a given string and returns them. 
If the string has fewer than 10 characters, return the entire string.
*/
//-------------------------------------------------\\
function fx10_1(str) {
    if (str.length <= 10) {
        return `"${str}" : "${str}"`;
    } else {
        return `"${str}":"${str.substring(0, 9)}" `;
    }
}
console.log(fx10_1("1234567890"));
console.log(fx10_1("1234567890^%$&"));

console.log("---------------------------------------");
//-------------------------------------------------//


/*
11. **Task**: Write a function that takes a sentence and splits it into an array of individual words. 
Then, return the array and display each word on a new line.
*/
//-------------------------------------------------\\
function fx11_1(str) {
    arr = str.split(" ");
    arr.forEach(i => {
        console.log(i);
    });
}
fx11_1("the quick brown fox jumps over a lazy dog");
console.log("---------------------------------------");
//-------------------------------------------------//







/*
11. **Task**: Write a function that takes a sentence and splits it into an array of individual words. 
Then, return the array and display each word on a new line.
*/
//-------------------------------------------------\\
function fx11_1(str) {
    arr = str.split(" ");
    arr.forEach(i => {
        console.log(i);
    });
}
fx11_1("the quick brown fox jumps over a lazy dog");
console.log("---------------------------------------");
//-------------------------------------------------//




/*
12. **Task**: Create a function that converts a sentence into lowercase letters and returns the new version. 
For example, the input "HELLO WORLD" should be converted to "hello world."
*/
//-------------------------------------------------\\
function fx12_1(str) {
    return str.toLowerCase();
}
console.log(fx12_1("THE QUICK BROWN FOX JUMPS OVER A LAZY DOG !!!"));
console.log("---------------------------------------");
//-------------------------------------------------//



/*
13. **Task**: Write a function that converts all the characters in a string to uppercase and returns the updated string. 
If the input is "good morning", the output should be "GOOD MORNING."
*/
//-------------------------------------------------\\
function fx13_1(str) {
    return str.toUpperCase();
}
console.log(fx13_1("the quick brown fox jumps over a lazy dog !!!"));
console.log("---------------------------------------");
//-------------------------------------------------//


/*
14. **Task**: Write a function that accepts a number and converts it into a string. For example, if the number is 123, the output should be the string "123". 
The function should return the string with a message like: "The number has been converted to a string."
*/
//-------------------------------------------------\\
function fx14_1(num) {
    return `the number ${num} has been converted to "${String(num)}"`;
}
console.log(fx14_1(34));

console.log("---------------------------------------");
//-------------------------------------------------//


/*
15. **Task**: Write a function that removes extra spaces from the start and end of a string. For example, if the input is "  hello world  ", 
the output should be "hello world". The function should return a message like: "Extra spaces have been removed." 
*/
//-------------------------------------------------\\
function fx15_1(str) {
    return `the modified string of string "${str}" is "${str.trim()}"`;
}
console.log(fx15_1("   f3b5     "));

console.log("---------------------------------------");
//-------------------------------------------------//


/*
16. **Task**: Create a function that accepts a string with extra spaces at the start and trims only the leading spaces. 
For example, the input "  learn JavaScript" should return "learn JavaScript", with a message: "Leading spaces have been removed."
*/
//-------------------------------------------------\\
function fx16_1(str) {
    return `"${str}":"${str.trimStart()}"`;
}
console.log(fx16_1("  learn JavaScript"));

console.log("---------------------------------------");
//-------------------------------------------------//




/*
17. **Task**: Write a function that takes a string and trims off any trailing spaces. If the input is "coding is fun   ", 
it should return "coding is fun" with a message: "Trailing spaces have been removed."
*/
//-------------------------------------------------\\
function fx17_1(str) {
    return `"${str}":"${str.trimEnd()}"`;
}
console.log(fx17_1("coding is fun   "));

console.log("---------------------------------------");
//-------------------------------------------------//




/*
18. **Task**: Write a function that takes a string and checks whether it starts with an uppercase letter. If the first letter is capitalized, 
return a message like: "The string starts with an uppercase letter." Otherwise, return: "The string starts with a lowercase letter."
 
*/
//-------------------------------------------------\\
function fx18_1(str) {
    if (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z') {
        console.log(`The string "${str}" starts with an uppercase letter.`);
    } else {
        console.log(`The string "${str}" starts with an lowercase letter.`);
    }
}
fx18_1("Uppercase");
fx18_1("lowwercase");
console.log("---------------------------------------");
//-------------------------------------------------//


/*
19. **Task**: Write a function that accepts a sentence and converts only the first letter of the sentence to uppercase, while the rest of the letters 
are converted to lowercase. For example, "hello WORLD" should become "Hello world." Return the updated sentence with a message.
*/
//-------------------------------------------------\\
function fx19_1(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
}
console.log(fx19_1("tHE BLACK BROWN FOX JUMPS OVER THE LAZZY DOG"))
console.log("---------------------------------------");
//-------------------------------------------------//


/*
20. **Task**: Write a function that takes a sentence and counts how many spaces are in it. The function should return the total 
number of spaces with a message like: "There are X spaces in the sentence."

*/
//-------------------------------------------------\\
function fx20_1(str) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            count++;
        }
    }
    return `There are ${count} spaces in the sentence.`;
}
console.log(fx20_1("the black brown fox jumps over the lazy dog"));
console.log(fx20_1("       7S"));

console.log("---------------------------------------");
//-------------------------------------------------//
