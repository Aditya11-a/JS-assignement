# Assignment : Introduction to Variables and Datatypes
---
## Part I : Variables (let, var, const)

### Part a — 4 Questions

**1. Personal Information**<br>
Declare variables for `name`, `age`, and `city` using appropriate variable keywords. Assign values and print all three variables.
<br>
Ans==>>>
let name = Aditya;
let age = 19;
let city = "Ghandhinagar";

console.log(name);
console.log(age);
console.log(city);
**2. Change the Score**
Create a variable `score` with the value `50`. Change its value to `80` and print the final value. Use the appropriate keyword for a value that can change.
<br> 
Ans==>>
let score = 50;

score = 80;

console.log(score);

**3. Constant Value**
Create a constant variable `PI` with the value `3.14`. Print its value. Do not try to change the value.<br>
Ans==>>
let PI=3.14;
console.log(PI);
**4. Uninitialized Variables**
Declare one variable having name `num1` using `var` and one having name `num2` using `let` without assigning values. Print both variables. Then assign values to them and print the values again.<br>
Ans===>>>
var num1;
let num2;

console.log(num1);
console.log(num2);

num1 = 10;
num2 = 20;

console.log(num1);
console.log(num2);

### Part b — 4 Questions

**5. Choose the Correct Keyword**
Create the following variables using the most appropriate keyword:

* `studentName` — the value will not change
* `marks` — the value may change
* `schoolName` — the value will not change

Assign values to all three variables. Change `marks` and print all variables.
<br>
Ans===>>>>
let studentName= "Aditya";
var marks= 40;
const schoolName="codinggita";
console.log(studentName);
console.log(marks);
console.log(schoolName);

**6. Understand Scope**
Write a program where `var`, `let`, and `const` variables are declared inside an `if` block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.<br>
Ans==>>>
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); 
console.log(c); 

**7. Test Re-declaration**
Declare a variable named `user` using `var` and declare it again with a different value. Then perform the same experiment using `let`. Observe what happens and identify which declaration allows re-declaration.<br>
Ans==>>
var user="Aditya";
var user="Nishu";
console.log(user);
let user="Aditya";
let user="Nishu";
console.log(user);

**8. Test Re-assignment**
Create three variables using `var`, `let`, and `const`. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.<br>
Ans==>>>
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
### Part c — 2 Questions

**9. Predict and Explain**
Without running the code, predict the output of each `console.log()` and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.

```javascript
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
```
<br>
### Answer:=
The var is a functional scope but let and const are block scope thst's why only x will print and let and const will give error

**10. Fix the Program**
The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for **initialization, re-declaration, re-assignment, and scope**.

```javascript
const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;
```
<br>
Ans:-
const name = "Aditya";

let age = 20;
age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
    console.log(country);
}

console.log(city);

let score = 50;
score = 80;

console.log(name);
console.log(age);
console.log(city);
console.log(score);

Part d — 2 Question
11. Predict the Hoisting Behavior
Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of hoisting for var, let, and const.

console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;

OUTPUT:-
undefine 
reference error
reference error
12. Fix the Hoisting Errors
The following program contains errors related to hoisting. Fix the code so that it runs correctly without any errors. Make sure your solution follows the rules of hoisting for var, let, and const (you may reorder declarations/assignments or change keywords only where necessary to make it work properly).

console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
let y = "World";
const z = "!";

console.log(x + " " + y + z);
SOLUTION:-
var x = "Hello";
let y = "World";
const z = "!";

console.log(x);
console.log(y);
console.log(z);
console.log(x + " " + y + z);


# JavaScript Primitive Types Exercises

## Part e — Basic Identification (4 Questions)

### 1. Classify the Types

**Question:** Declare one variable of each of the following types and print both the value and its type using `typeof`: A whole number, A decimal number, A piece of text, A true/false value.

**Answer:**

```
let wholeNumber = 42;
let decimalNumber = 3.14;
let text = "Hello, world!";
let isTrue = true;

console.log(wholeNumber, typeof wholeNumber);       // 42 'number'
console.log(decimalNumber, typeof decimalNumber);   // 3.14 'number'
console.log(text, typeof text);                     // Hello, world! 'string'
console.log(isTrue, typeof isTrue);                 // true 'boolean'

```

*(Note: In JavaScript, both whole numbers and decimals fall under the same `number` data type.)*

### 2. Undefined vs Null

**Question:** Declare two variables: `a` using let without assigning any value, `b` and intentionally assign null to it. Print both variables and their `typeof` results. Explain the difference between undefined and null.

**Answer:**

```
let a;
let b = null;

console.log(a, typeof a); // undefined 'undefined'
console.log(b, typeof b); // null 'object'

```

**Explanation:**

* `undefined` means a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.

* `null` is an assignment value that represents the intentional absence of any object value. It means "empty" or "nothing".

* *(Note: `typeof null` returning `"object"` is a well-known, historical bug in JavaScript, but it is fundamentally a primitive value).*

### 3. Number Special Values

**Question:** Create variables for the following and print each value along with its type: Positive Infinity, Negative Infinity, Not-a-Number (NaN), A large number written with scientific notation, A number written with underscores for readability.

**Answer:**

```
let posInf = Infinity;
let negInf = -Infinity;
let notANumber = NaN;
let scientific = 2.5e3;
let readableNum = 1_000_000;

console.log(posInf, typeof posInf);       // Infinity 'number'
console.log(negInf, typeof negInf);       // -Infinity 'number'
console.log(notANumber, typeof notANumber); // NaN 'number'
console.log(scientific, typeof scientific); // 2500 'number'
console.log(readableNum, typeof readableNum); // 1000000 'number'

```

### 4. String Styles

**Question:** Create three string variables using: Single quotes, Double quotes, Template literals (backticks) that include another variable. Print all three strings.

**Answer:**

```
let name = "Alice";

let singleQuoteStr = 'This is a single quote string.';
let doubleQuoteStr = "This is a double quote string.";
let templateLiteralStr = `Hello, ${name}! This is a template literal.`;

console.log(singleQuoteStr);
console.log(doubleQuoteStr);
console.log(templateLiteralStr);

```

## Part f — Advanced Primitive Types (3 Questions)

### 5. Symbol Uniqueness

**Question:** Create two Symbols with the same description ('id'). Compare them using `===` and print the result. Then use both Symbols as keys in an object and retrieve the values. Explain why the comparison returns false.

**Answer:**

```
let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false

let myObject = {
  [sym1]: "Value for first symbol",
  [sym2]: "Value for second symbol"
};

console.log(myObject[sym1]); // "Value for first symbol"
console.log(myObject[sym2]); // "Value for second symbol"

```

**Explanation:**
Every time you call `Symbol()`, it creates a completely unique identifier, even if the description (the string inside the parentheses) is identical. The description is just for debugging purposes. Therefore, `sym1` and `sym2` are entirely different values in memory, which is why the comparison returns `false`.

### 6. BigInt Precision

**Question:** Create a regular number with the value 9007199254740991 (Number.MAX_SAFE_INTEGER). Add 1, 2, and 3 to it and print the results. Now create the same value as a BigInt and perform the same additions. Print the results and explain the difference.

**Answer:**

```
// Using standard Number
let maxSafeNum = 9007199254740991;
console.log(maxSafeNum + 1); // 9007199254740992
console.log(maxSafeNum + 2); // 9007199254740992 (Precision lost!)
console.log(maxSafeNum + 3); // 9007199254740994 (Precision lost!)

// Using BigInt
let bigIntNum = 9007199254740991n;
console.log(bigIntNum + 1n); // 9007199254740992n
console.log(bigIntNum + 2n); // 9007199254740993n (Accurate)
console.log(bigIntNum + 3n); // 9007199254740994n (Accurate)

```

**Explanation:**
JavaScript standard `Number` uses 64-bit floating-point format. It can only safely represent integers up to `9007199254740991`. Beyond this limit, it rounds values to the nearest even number, losing precision. `BigInt` allows you to store and operate on integers of arbitrary length without losing any precision.

### 7. Choose the Correct Type

**Question:** For each description below, write the most appropriate primitive data type and give an example declaration.

**Answer:**

* **A unique identifier that is never equal to another value with the same description:** `Symbol`

  * *Example:* `let userId = Symbol("user_id");`

* **A very large integer that must keep exact precision:** `BigInt`

  * *Example:* `let distance = 999999999999999999999n;`

* **A variable that has been declared but not yet given a value:** `Undefined`

  * *Example:* `let pendingData;`

* **An intentional empty value:** `Null`

  * *Example:* `let activeUser = null;`

## Part g — Prediction & Fixing (3 Questions)

### 8. Predict the Output

**Question:** Without running the code, predict what each `console.log` will print (value + type). Explain your reasoning.

**Predictions:**

* `console.log(typeof a, a);` -> **`"undefined" undefined`**
  *(Reason: `a` is declared but uninitialized, so its default value and type are both `undefined`.)*

* `console.log(typeof b, b);` -> **`"object" null`**
  *(Reason: `b` is assigned `null`. The value is `null`, but due to a historical JavaScript bug, `typeof null` returns `"object"`.)*

* `console.log(typeof c, c);` -> **`"number" 42`**
  *(Reason: 42 is an integer, which falls under the primitive `number` type.)*

* `console.log(typeof d, d);` -> **`"string" Hello`**
  *(Reason: Text wrapped in quotes is a `string`.)*

* `console.log(typeof e, e);` -> **`"boolean" true`**
  *(Reason: `true` is a `boolean` primitive.)*

* `console.log(typeof f, f);` -> **`"symbol" Symbol(key)`**
  *(Reason: `Symbol()` creates a primitive `symbol` type. It logs out its definition including the description.)*

* `console.log(typeof g, g);` -> **`"bigint" 123n`**
  *(Reason: The `n` suffix denotes a `BigInt` literal.)*

### 9. Fix the Code

**Question:** The following program has mistakes related to primitive types. Fix it so that it runs correctly and prints meaningful values.

**Original (Broken) Code:**

```
let num = 10;
let text = Hello;
let flag = True;
let empty;
let nothing = Null;
let unique = symbol("id");
let big = 9007199254740991;

```

**Fixed Code:**

```
let num = 10;
let text = "Hello";              // FIX: Added quotes to make it a string
let flag = true;                 // FIX: Lowercase 't' for boolean literal
let empty;                       // This is fine (undefined)
let nothing = null;              // FIX: Lowercase 'n' for null keyword
let unique = Symbol("id");       // FIX: Capital 'S' for the Symbol constructor
let big = 9007199254740991n;     // OPTIONAL FIX: Added 'n' to ensure precision for very large numbers

console.log(num, text, flag, empty, nothing, unique, big);

```

### 10. Primitive vs Non-Primitive

**Question:** Answer the following questions in your own words and give one example for each.

**Answers:**

**a) What is the main difference between Primitive and Non-Primitive data types?**
The main difference lies in how they are stored and modified in memory. Primitive types are **immutable** (they cannot be altered once created) and are stored **by value** (copying a variable creates a brand new, independent value). Non-Primitive types are **mutable** (their contents can be changed) and are stored **by reference** (copying the variable just copies the pointer to the same location in memory).

**b) Why are Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt called Primitive?**
They are called primitive because they are the most basic building blocks of the language. They represent a single, simple data value and have no properties or methods inherently attached to them (JavaScript temporarily wraps them in objects when you try to access methods, like `"text".toUpperCase()`, but the underlying primitive value itself remains simple and immutable).

**c) Give one example of a Non-Primitive data type and explain why it is considered Non-Primitive.**
**Example:** An `Object` (e.g., `let user = { name: "John", age: 30 };`) or an `Array`.
It is considered non-primitive because it is a complex data structure capable of holding multiple values (collections of properties or elements). It is stored by reference, meaning if I assign `let user2 = user`, changing `user2.name` will also change `user.name` because they both point to the same memory space.