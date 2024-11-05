# INTERMEDIATE JavaScript

---

## JavaScript Versions

### ES5 (ECMAScript 5)
- Introduced in 2009.
- `var` is used for variable declarations.

### ES6 (ECMAScript 6 / ES2015)
- Introduced in 2015.
- `let` and `const` were added for variable declarations, providing block scope and improved variable handling.

---

## Difference Between `var`, `let`, and `const`

### `var`
- `var` is function-scoped (it can be used anywhere within its parent function).
- Variables declared with `var` are added to the `window` object (e.g., `var a = 12` will add `a = 12` to the window object).

### `let`
- `let` is block-scoped (it can only be used within the curly braces `{}` where it is declared).
- Variables declared with `let` do not add themselves to the `window` object.

---

## Window Object
The `window` object provides many features that JavaScript alone cannot offer. JavaScript accesses these features through the browser, allowing us to use them. Some examples include `alert`, `console`, `document`, `length`, etc.

---

## Browser Context API
The Browser Context API has three main elements:
1. **Window Object**
2. **Call Stack**
   - Manages the order of function executions and maintains scope and context.
3. **Heap Memory**
   - Stores intermediate values during execution.
   - Example: For `1 + 2 + 3 + 4 + 5`, `1 + 2 = 3` (step-1), `3 + 3 = 6` (step-2); here, `3` and `6` are intermediate values stored in heap memory.

---

## Execution Context
- The **Execution Context** is a container where a function's code is executed and is created when a function is called.
- It includes:
  1. **Variables**
  2. **Functions**
  3. **Lexical Environment**

---

## Lexical Environment
A **Lexical Environment** acts as a chart defining what each function can and cannot access, essentially holding its scope and scope chain.

---

## Truthy vs. Falsy

In JavaScript, every value is either truthy or falsy.

- **Falsy Values**: `0`, `false`, `undefined`, `null`, `NaN`, `document.all`
- **Truthy Values**: All values except falsy values are considered truthy.

---

## Loops (forEach, for...in, do...while)

### `forEach`
- `forEach` is used exclusively for arrays.
- It iterates over every element in the array.
- Returns `undefined`.
- Does not modify the array by default; it makes temporary changes.

---

## Callback Functions
A **callback function** is a function that is passed as an argument to another function and is executed after the main function has completed its task.

---

## First-Class Functions
JavaScript allows functions to be used as variables. This concept is known as **first-class functions**.
- Example: `var a = function() {}` or `var b = () => {}`

---
