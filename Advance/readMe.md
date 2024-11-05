
# Advanced JavaScript Concepts

## 1. Higher-Order Functions

**Definition**: Higher-order functions accept another function as a parameter, return a function, or both.

### Example:
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number * 2);
});
```

In this example, `forEach` accepts an anonymous function that multiplies each array element by 2.

## 2. Constructor Functions

Constructor functions are functions that, when called with the `new` keyword, return an object with properties and methods defined within them.

### Example:
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
```

## 3. First-Class Functions

JavaScript treats functions as first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.

### Example:
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

function greetUser(greetFunction, userName) {
    console.log(greetFunction(userName));
}

greetUser(greet, "Bob"); // Output: Hello, Bob!
```

## 4. `new` Keyword

The `new` keyword creates a new object with properties and methods defined by a constructor function.

### Example:
```javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand); // Output: Toyota
```

## 5. IIFE (Immediately Invoked Function Expression)

An IIFE is a function that is executed immediately after its definition. It allows the creation of private variables that aren't accessible outside the function scope.

### Example with Getter and Setter:
```javascript
const counter = (function() {
    let count = 0; // private variable

    return {
        get value() {
            return count;
        },
        set value(val) {
            if (typeof val === 'number' && val >= 0) {
                count = val;
            } else {
                console.log("Please provide a non-negative number.");
            }
        },
        increment() {
            count++;
        }
    };
})();

console.log(counter.value); // Output: 0
counter.increment();
console.log(counter.value); // Output: 1
counter.value = 10;
console.log(counter.value); // Output: 10
counter.value = -5; // Output: Please provide a non-negative number.
```

In this example:
- `count` is a private variable, not accessible directly outside the IIFE.
- The `get value` and `set value` methods control access to `count`.

## 6. Prototype

JavaScript objects have a `[[prototype]]` containing helper methods, such as `.length` for arrays. These prototype properties and methods are predefined by JavaScript and accessible on every object.

## 7. Prototypal Inheritance

Inheritance in JavaScript is done through the prototype chain, where child objects inherit properties and methods from parent objects via their prototypes.

### Syntax:
```javascript
Child.__proto__ = Parent;
```
Here, `Child` inherits properties from `Parent`.

## 8. Understanding `this`, `call`, `apply`, and `bind`

JavaScript provides several tools (`this`, `call`, `apply`, and `bind`) to control the context of a function.

### `this` Keyword

`this` refers to the object that "owns" the function being executed.

### Example:
```javascript
console.log(this); // In global scope, refers to `window` object.
```

### `call` Method

The `call` method lets you run a function with a specific `this` value.

### Example:
```javascript
function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = { name: 'Alice' };
greet.call(person, 'Hello'); // Outputs: Hello, Alice
```

### `apply` Method

The `apply` method is similar to `call`, but it takes arguments as an array.

### Example:
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };
greet.apply(person, ['Hello', '!']); // Outputs: Hello, Alice!
```

### `bind` Method

The `bind` method creates a new function with `this` permanently set to a provided value.

### Example:
```javascript
function greet() {
  console.log('Hello, ' + this.name);
}

const person = { name: 'Alice' };
const greetPerson = greet.bind(person);
greetPerson(); // Outputs: Hello, Alice
```

With `bind`, `greetPerson` is a new function where `this` always refers to `person`, so calling `greetPerson()` outputs "Hello, Alice."



## `pure` function 

- It should always return same output for same input.
- It will never change/update the value of a global variable.

### Example 
```javascript
function calc(val){
    return val+2
}
```

