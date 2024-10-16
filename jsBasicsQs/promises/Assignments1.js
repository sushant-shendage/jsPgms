// // // ### 1. **Create a Simple Promise**
// // //    - Create a promise that resolves with the message “Data loaded successfully”.
// // //    - Use `.then()` to log the result when the promise resolves.

// // //    **Example Goal**: You should see “Data loaded successfully” in the console when the promise resolves.


// // let p1 = new Promise((resolve, reject) => {
// //     resolve();
// // });

// // p1.then((val) => {
// //     console.log("Data loaded successfully..!");
// // });
// // //--------------------------------------------------------------------------------------------------------------------------------------------------


// // // ### 2. **Basic Promise Rejection**
// // //    - Write a promise that rejects with an error message “Error: Failed to load data”.
// // //    - Use `.catch()` to handle the rejection and log the error message to the console.

// // //    **Example Goal**: The console should show the error message “Error: Failed to load data” when the promise rejects.
// // let p2 = new Promise((resolve, reject) => {
// //     reject();
// // });

// // p2.catch(() => {
// //     console.log("Error: Failed to load data..!");
// // });



// // //--------------------------------------------------------------------------------------------------------------------------------------------------



// // // ### 3. **Promise with `.then()` for Math Operations**
// // //    - Create a promise that resolves with the number `10`.
// // //    - In the `.then()` block, multiply the number by 2 and log the result.

// // //    **Example Goal**: The console should show `20` as the final result after the promise resolves.


// // let p3 = new Promise((resolve, reject) => {
// //    resolve(10);

// // });
// // p3.then((val) => {
// //     console.log(val * 2);
// // })

// // //--------------------------------------------------------------------------------------------------------------------------------------------------


// // // ### 4. **Chain Multiple `.then()` Calls**
// // //    - Create a promise that resolves with the number `5`.
// // //    - Chain two `.then()` blocks. In the first block, add `3` to the number. In the second block, multiply the result by `2`.
// // //    - Log the final result after all `.then()` blocks have executed.

// // //    **Example Goal**: The final result logged to the console should be `16`.

// // let p4= new Promise((resolve, reject) => {
// //     resolve(5);
// //  });
// //  p4.then((val) => {
// //      return (val+3);
// //  }).then((val2)=>{
// //  console.log((val2*2));
// //  });
// // //--------------------------------------------------------------------------------------------------------------------------------------------------

// // // ### 5. **Fetch Data from an API**
// // //    - Use `fetch` to retrieve data from the API `https://jsonplaceholder.typicode.com/posts/1`.
// // //    - In the `.then()` block, convert the response to JSON and log the post title to the console.

// // //    **Example Goal**: The console should display the title of the post you fetched.



// // fetch("https://jsonplaceholder.typicode.com/posts/1").then((val)=>{return val.json()}).then((data)=>{console.log(`TITLE :${data.title}`)}).catch((err)=>{console.log("something went wrong...!",err)})


// // //--------------------------------------------------------------------------------------------------------------------------------------------------

// // // ### 6. **Handle Fetch Errors**
// // //    - Use `fetch` to request data from a non-existent API endpoint (e.g., `https://jsonplaceholder.typicode.com/nonexistent`).
// // //    - In the `.catch()` block, log an error message to the console, such as “Error: Could not retrieve data.”

// // //    **Example Goal**: You should see “Error: Could not retrieve data” logged to the console if the request fails.


// // fetch(`https://jsonplaceholder.typicoonexistent`).then((val)=>{return val.json()}).then((data)=>{console.log(data.title)}).then((data)=>{console.log(`TITLE :${data.title}`)}).catch((err)=>{console.log("Error: Could not retrieve data...!",err)})



// // //--------------------------------------------------------------------------------------------------------------------------------------------------



// // // ### 7. **Conditional Promise Resolution**
// // //    - Create a promise that uses a random number (between 0 and 1) to decide whether to resolve or reject.
// // //    - If the number is greater than 0.5, resolve with the message “Success!”.
// // //    - If the number is less than or equal to 0.5, reject with “Failure!”.
// // //    - Handle both cases using `.then()` and `.catch()`.

// // //    **Example Goal**: Depending on the random number, you should either see “Success!” or “Failure!” in the console.
// // let p5= new Promise((resolve, reject) => {
// //     let randomNum=Math.random();
// //     if (randomNum<=0.5) {
// //         reject();
// //     } else {
// //         resolve("Failure!")
// //     }
// //  });
// //  p5.then(() => {
// //     console.log('Success!');
// //  });
// //  //-------------------------------------

// // // ### 8. **Fetch and Convert Response to JSON**
// // //    - Use `fetch` to get data from `https://jsonplaceholder.typicode.com/users`.
// // //    - In the `.then()` block, convert the response to JSON and log the full JSON object to the console.

// // //    **Example Goal**: The console should display the list of users in JSON format.


// // fetch('https://jsonplaceholder.typicode.com/users').then((val)=>{return val.json()}).then((data)=>{console.log(data)}).catch((err)=>{console.log("something went wrong...!",err)})

// // //--------------------------------------------------------------------------------------------------------------------------------------------------


// // // ### 9. **Chain Fetch Requests**
// // //    - Use `fetch` to retrieve a post from `https://jsonplaceholder.typicode.com/posts/1`.
// // //    - Once you get the post’s `userId`, use another `fetch` request to get the details of the user from `https://jsonplaceholder.typicode.com/users/{userId}`.
// // //    - Chain both fetch requests using `.then()` and log both the post and user details.

// // //    **Example Goal**: The console should first show the post data, then the user details associated with that post.
// //  // Fetch the post with ID 1
// // fetch('https://jsonplaceholder.typicode.com/posts/1')
// // .then((response) => {
// //     return response.json(); // Convert the response to JSON
// // })
// // .then((post) => {
// //     console.log('Post:', post); // Log the post data

// //     // Fetch the user details using the post's userId
// //     return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
// // })
// // .then((response) => {
// //     return response.json(); // Convert the user response to JSON
// // })
// // .then((user) => {
// //     console.log('User:', user); // Log the user details
// // })
// // .catch((error) => {
// //     console.error('Error:', error); // Handle any errors
// // });


// // //--------------------------------------------------------------------------------------------------------------------------------------------------



// // ### 10. **Promise that Resolves or Rejects Based on Input**
// //    - Create a promise that accepts a number as input.
// //    - If the number is greater than `5`, resolve with “Valid number!”.
// //    - If the number is less than or equal to `5`, reject with “Invalid number!”.
// //    - Handle both success and error cases using `.then()` and `.catch()`.
// //    **Example Goal**: If you input a number greater than 5, you should see “Valid number!”. Otherwise, “Invalid number!” will appear.


// let p100= new Promise((resolve, reject) => {
//         let num=5;
//         if (num<=5) {
//             reject();
//         } else {
//             resolve();
//         }
//      });
//      p100.then(() => {
//         console.log('Valid number!');
//      }).catch(()=>{
//         console.log('Invalid number!');
//      });

// //--------------------------------------------------------------------------------------------------------------------------------------------------


// // ### 11. **Propagate Errors Through Multiple `.then()`**
// //    - Create a promise that either resolves or rejects based on a random number.
// //    - If it rejects, log an error message and propagate the error to the next `.then()` block.
// //    - Continue propagating the error and handle it in a final `.catch()` block.

// //    **Example Goal**: The console should display the error message, and it should be handled correctly at the end.
// const randomPromise = new Promise((resolve, reject) => {
//     Math.random() > 0.5 ? resolve("Success!") : reject("Error!");
// });

// randomPromise
//     .then((message) => console.log(message))
//     .catch((error) => {
//         console.error("Caught:", error);
//         throw error; // Propagate the error
//     })
//     .then(() => console.log("This won't run on error"))
//     .catch((error) => console.error("Handled:", error));

// //--------------------------------------------------------------------------------------------------------------------------------------------------
// // ### 12. **Transform Fetched Data**
// //    - Use `fetch` to get a list of users from `https://jsonplaceholder.typicode.com/users`.
// //    - In the `.then()` block, transform the data to only include usernames.
// //    - Log the array of usernames to the console.

// //    **Example Goal**: The console should display an array of usernames, extracted from the fetched user data.
// // Fetch data from the provided URL
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json()) // Convert the response to JSON
//     .then((users) => {
//         const usernames = users.map(user => user.username); // Extract the usernames
//         console.log(usernames); // Log the array of usernames
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error); // Handle any errors
//     });


// //--------------------------------------------------------------------------------------------------------------------------------------------------
// // ### 13. **Resolve or Reject Based on Boolean**
// //    - Create a promise that uses a Boolean flag (e.g., `true` or `false`) to decide whether to resolve or reject.
// //    - If the flag is `true`, resolve with “Action successful!”.
// //    - If the flag is `false`, reject with “Action failed!”.
// //    - Handle both cases using `.then()` and `.catch()`.

// //    **Example Goal**: Depending on the flag value, you should see either “Action successful!” or “Action failed!” in the console.
// const flag = true; // Change this to false to trigger rejection

// const booleanPromise = new Promise((resolve, reject) => {
//     if (flag) {
//         resolve("Action successful!");
//     } else {
//         reject("Action failed!");
//     }
// });

// booleanPromise
//     .then((message) => console.log(message)) // Handle success
//     .catch((error) => console.error(error)); // Handle failure

// //--------------------------------------------------------------------------------------------------------------------------------------------------
// // ### 14. **Fetch and Return Specific Data**
// //    - Use `fetch` to get a list of posts from `https://jsonplaceholder.typicode.com/posts`.
// //    - In the `.then()` block, return only the title of the first post and log it to the console.

// //    **Example Goal**: The console should display the title of the first post.
// // Fetch data from the provided URL
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json()) // Convert the response to JSON
//     .then((posts) => {
//         const firstPostTitle = posts[0].title; // Get the title of the first post
//         console.log(firstPostTitle); // Log the title to the console
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error); // Handle any errors
//     });

// //--------------------------------------------------------------------------------------------------------------------------------------------------
// // ### 15. **Chain Fetch Requests with User and Posts**
// //    - Fetch user data from `https://jsonplaceholder.typicode.com/users/1`.
// //    - Once you get the user’s ID, fetch the posts of that user from `https://jsonplaceholder.typicode.com/posts?userId=1`.
// //    - Chain both fetch requests and log both the user details and the user’s posts.

// //    **Example Goal**: The console should first display the user data, followed by the posts associated with that user.
// // // Fetch user data for user with ID 1
// // fetch('https://jsonplaceholder.typicode.com/users/1')
// //     .then((response) => response.json()) // Convert the response to JSON
// //     .then((user) => {
// //         console.log('User:', user); // Log the user details

// //         // Fetch posts for the user with the fetched userId
// //         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
// //     })
// //     .then((response) => response.json()) // Convert the response to JSON
// //     .then((posts) => {
// //         console.log('Posts:', posts); // Log the user's posts
// //     })
// //     .catch((error) => {
// //         console.error('Error:', error); // Handle any errors
// //     });

// //--------------------------------------------------------------------------------------------------------------------------------------------------

// // /

fetch("https://api.github.com/users").then((res)=>{
return res.json();
}).then((data)=>{
    data.map((val)=>{
        console.log(val.login);
    })
})