// 1. Named Function (Function Declaration)
// Use: General-purpose function with a clear, reusable definition.
// When to use: When you need to define a function that can be reused throughout your code.
// Mutable/Immutable: Depends on the operations inside; typically used for calculations or logic without altering external state.
function greet() {
    console.log("Hello! This is a named function.");
  }
  greet(); // Calling the named function
  
  // 2. Anonymous Function (used as a callback)
  // Use: Temporary functions used as arguments for higher-order functions like event handlers or asynchronous operations.
  // When to use: When a function is needed once and doesn't need a name.
  // Mutable/Immutable: Depends on operations inside; often used for non-mutative operations.
  setTimeout(function() {
    console.log("This is an anonymous function, used as a callback.");
  }, 1000);
  
  // 3. Function Expression (can be named or anonymous)
  // Use: Assigns a function to a variable, providing flexibility in function placement (e.g., in callbacks or closures).
  // When to use: When you need to create functions that can be passed as arguments or stored in variables.
  // Mutable/Immutable: Depends on operations inside; commonly non-mutative but can be used for mutable operations.
  const add = function(a, b) {
    return a + b; // Anonymous function assigned to a variable
  };
  console.log("Sum using function expression:", add(3, 5));
  
  // 4. Arrow Function (introduced in ES6, with a shorter syntax)
  // Use: A compact alternative to function expressions with lexical `this` binding, ideal for short functions.
  // When to use: When you need concise functions or when `this` context needs to remain lexically bound.
  // Mutable/Immutable: Usually non-mutative for simple operations; mutability depends on the operations performed.
  const multiply = (a, b) => a * b; // Arrow function with implicit return
  console.log("Product using arrow function:", multiply(4, 6));
  
  // Arrow function with a single parameter (no need for parentheses)
  const square = x => x * x;
  console.log("Square using arrow function:", square(5));
  
  // 5. Immediately Invoked Function Expression (IIFE)
  // Use: Self-executing function, typically used to create isolated scope and avoid polluting the global namespace.
  // When to use: When you need to run a function once immediately and create a separate scope.
  // Mutable/Immutable: Can be both; depends on the logic inside.
  (function() {
    console.log("This IIFE runs as soon as it is defined.");
  })();
  
  // 6. Constructor Function (used to create objects)
  // Use: Defines templates for objects with custom properties and methods, mimicking classes.
  // When to use: When you need to create multiple similar objects with shared properties and methods.
  // Mutable/Immutable: Usually results in mutable changes, as properties of the created objects can be altered.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person1 = new Person("Alice", 30);
  console.log("Person created using constructor function:", person1);
  
  // 7. Generator Function (using function* keyword)
  // Use: Allows the function to pause execution and resume, useful for producing iterables on demand (e.g., data streams).
  // When to use: When you need to control function execution flow and handle sequences of values.
  // Mutable/Immutable: Non-mutative by default but depends on how `yield` is used.
  function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  const iterator = generateNumbers();
  console.log("First value from generator:", iterator.next().value);
  console.log("Second value from generator:", iterator.next().value);
  console.log("Third value from generator:", iterator.next().value);
  
  // 8. Async Function (introduced in ES8, for asynchronous operations)
  // Use: Provides a cleaner way to work with asynchronous code and `Promise` handling, improving code readability.
  // When to use: When dealing with asynchronous operations like fetching data from an API or I/O tasks.
  // Mutable/Immutable: Depends on the operations; typically used for non-mutative tasks but can perform mutative actions if needed.
  async function fetchData() {
    // Simulating a fetch request
    const data = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data successfully");
      }, 2000);
    });
    const result = await data;
    console.log(result);
  }
  fetchData(); // Calling the async function

  
  let i="6l4jk56hbli4";

   