// Assignment : JavaScript Operators



/*## A] Arithmetic Operators

### 1. Addition `+`

1. A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.  
2. A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.  
3. A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.  
4. Predict the output:
   ```js
   let a = "10";
   let b = 5;
   let result = a + b;
   console.log(result);
   ```
5. Predict the output:
   ```js
   let x = 5;
   let y = "3";
   let result = x + y;
   console.log(result);
   ```
6. What is the output of `15 + 27`?  
7. Calculate the total price if a book costs ₹350 and a pen costs ₹45.  
8. What is the result of `"25" + 10` and why?  
9. A person has ₹2000 in their wallet. They buy items worth ₹750 and ₹320. Write an expression using `+` to find the total spent, then calculate the remaining balance.  
10. Predict the outputs and explain:  
    ```js
    console.log(5 + "5" + 5);
    console.log(5 + 5 + "5");
    console.log("5" + 5 + 5);
    ```*/

///ANSWERS=======>>>>>>>>>>>>>>>




question -1

let collectionFromFirstClass=15000
let collectionFromSecondClass=12500
let totalCollection=collectionFromFirstClass+collectionFromSecondClass
console.log("Total Collection=",totalCollection)

Question -2

let pagesReadInMorning = 18
let pagesReadInEvening = 25
let totalPages = pagesReadInMorning+pagesReadInEvening
console.log("Total Pages=",totalPages)

Question -3

let itemsSoldOnMonday = 125
let itemsSoldOnTuesday = 178
let toldSold=itemsSoldOnMonday+itemsSoldOnTuesday
console.log("Total Sold=",toldSold)

Question -4

105

Question -5
53

// Question -6
42
// Question -7
let costOfBook=350
let costOfPen=45
let totalCost=costOfBook+costofPen
console.log("Total Cost=",totalCost)

// Question -8

Result:2510
//reason when js sees string it perform concatenation instead of addition

// Question -9

let amountInWallet=2000
let amountSpendOnFirstItem=750
let amountSpendOnsecondItem=320
let remaingAmount=amountInWallet-(amountSpendOnFirstItem+amountSpendOnSItem)
console.log("REmaining Amount=",remainingAmount)

// Question -10
console.log(5 + "5" + 5);//===> output=555 , As js  perform concatenation instead of addition

console.log(5 + 5 + "5");//===>>output =105
console.log("5" + 5 + 5); //===>>output = 555

// ### 2. Subtraction `-`

// 1. A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.  
// 2. A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.  
// 3. A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.  
// 4. Predict the output:
//    ```js
//    let a = "10";
//    let b = 3;
//    let result = a - b;
//    console.log(result);
//    ```
// 5. Predict the output:
//    ```js
//    let x = "20";
//    let y = "5";
//    let result = x - y;
//    console.log(result);
//    ```
// 6. What is the output of `100 - 37`?  
// 7. A tank has 500 litres of water. After using 175 litres, how much water is left?  
// 8. What is the result of `"50" - 20` and `"50" - "20"`? Explain any difference.  
// 9. A shopkeeper had 240 apples. He sold 95 in the morning and 67 in the evening. Write expressions to find how many apples are left.  
// 10. Predict and explain the outputs:  
//     ```js
//     console.log("100" - 50);
//     console.log("abc" - 10);
//     console.log(10 - "5" - "2");
//     console.log("10" - "5" - "2");
//     ```

// ---
// ANSWER===========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Question -1

let totalSeats=80
let occupiedSeats=53
let emptySeats=80-53
console.log("Empty seats=",emptySeats)

// Question-2

let totalMarks=500
let marksLoses=35
let finalMarks=totalMarks-marksLoses
console.log("final marks=",finalMarks)

Question-3

let totalBoxes=2500
let boxesSend=875
let remainingBoxes=totalBoxes-BoxesSend
console.log("Remaining Boxes=",remainingBoxes)

Question-4

7

Question -5

15

Question-6
67

question-7
let totalCapacity=500
let usedCapacity=175
let quantityLeft=totalCapacity-usedCapacity
console.log("Quantity left =",quantityLeft)

Question-8
//both will give 30mas output as - converts string into number

Question-9

let totalApples=240
let applesSoldInMorning=95
let applesSoldInEvening=67
let applesLeft=totalApples-(applesSoldInMorning+applesSoldInEvening)

Question-10
/*"100" - 50 → "100" converts to 100 → 100 - 50 = 50
"abc" - 10 → "abc" cannot convert to a number → NaN (Not a Number)
10 - "5" - "2" → strings convert to numbers → 10 - 5 - 2 = 3
"10" - "5" - "2" → all strings convert to numbers → 10 - 5 - 2 = 3*/

/*### 3. Multiplication `*`

1. One notebook costs ₹45. Calculate the cost of buying 8 notebooks.  
2. A machine produces 120 bottles per hour. Calculate its production in 6 hours.  
3. A garden has 7 rows with 15 plants in each row. Find the total number of plants.  
4. Predict the output:
   ```js
   let a = "5";
   let b = 4;
   let result = a * b;
   console.log(result);
   ```
5. Predict the output:
   ```js
   let x = "10";
   let y = "2";
   let result = x * y;
   console.log(result);
   ```
6. What is the output of `12 * 8`?  
7. One pizza costs ₹299. What is the total cost of 4 pizzas?  
8. What is the result of `"7" * 6` and `"7" * "6"`?  
9. A factory produces 45 units per hour. How many units does it produce in 8 hours? Write the expression and calculate.  
10. Predict and explain the outputs:  
    ```js
    console.log("5" * 3 * "2");
    console.log("abc" * 4);
    console.log(10 * "2.5");
    console.log("10" * "2.5" * "0");
    ```

---*/



// 1
console.log(45 * 8); // 360

// 2
console.log(120 * 6); // 720

// 3
console.log(7 * 15); // 105

// 4
let a = "5";
let b = 4;
let result = a * b;
console.log(result); // 20

// 5
let x = "10";
let y = "2";
let result2 = x * y;
console.log(result2); // 20

// 6
console.log(12 * 8); // 96

// 7
console.log(299 * 4); // 1196

// 8
console.log("7" * 6);     // 42
console.log("7" * "6");   // 42

// 9
console.log(45 * 8); // 360

// 10
console.log("5" * 3 * "2");       // 30
console.log("abc" * 4);           // NaN
console.log(10 * "2.5");           // 25
console.log("10" * "2.5" * "0");  // 0

/*### 4. Division `/`

1. A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives.  
2. A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour.  
3. A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department.  
4. Predict the output:
   ```js
   let a = "20";
   let b = 4;
   let result = a / b;
   console.log(result);
   ```
5. Predict the output:
   ```js
   let x = "100";
   let y = "5";
   let result = x / y;
   console.log(result);
   ```
6. What is the output of `144 / 12`?  
7. 360 students are to be divided equally into 9 classrooms. How many students per classroom?  
8. What is the result of `"100" / 4` and `"100" / "4"`?  
9. A total bill of ₹2400 is to be shared equally among 6 friends. Write the expression and find each person’s share.  
10. Predict and explain the outputs:  
    ```js
    console.log(10 / 0);
    console.log(-10 / 0);
    console.log(0 / 0);
    console.log("20" / "4" / 2);
    console.log("abc" / 5);
    ```

---

ANSWERS=============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


// Question 1
console.log(144 / 12); // 12 pencils

// Question 2
console.log(360 / 6); // 60 km per hour

// Question 3
console.log(72000 / 9); // ₹8000

// Question 4
let a = "20";
let b = 4;
let result = a / b;
console.log(result); // 5

// Question 5
let x = "100";
let y = "5";
let result2 = x / y;
console.log(result2); // 20

// Question 6
console.log(144 / 12); // 12

// Question 7
console.log(360 / 9); // 40 students

// Question 8
console.log("100" / 4);   // 25
console.log("100" / "4"); // 25

// Question 9
console.log(2400 / 6); // ₹400

// Question 10
console.log(10 / 0);          // Infinity
console.log(-10 / 0);         // -Infinity
console.log(0 / 0);           // NaN
console.log("20" / "4" / 2);  // 2.5
console.log("abc" / 5);       // NaN

/*### 5. Modulus `%`

1. A teacher has 53 students and forms groups of 5. Find the number of students left over.  
2. A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.  
3. A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.  
4. A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.  
5. Predict the output:
   ```js
   let a = 10;
   let b = 0;
   let result = a % b;
   console.log(result);
   ```
6. What is the output of `29 % 5`?  
7. There are 23 chocolates to be packed in boxes of 4. How many chocolates will be left over?  
8. What is the result of `0 % 7` and `15 % 0`? Explain.  
9. A number of pages (47) needs to be printed on sheets that hold 6 pages each. How many full sheets are needed and how many pages will be left over? Write expressions using `%` and `/`.  
10. Predict and explain the outputs (especially the signs):  
    ```js
    console.log(17 % 5);
    console.log(-17 % 5);
    console.log(17 % -5);
    console.log(-17 % -5);
    console.log(10 % 0);
    ```
*/



///ANSWERS===========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Question 1
console.log(53 % 5); // 3 students left

// Question 2
console.log(128 % 10); // 8 candies left

// Question 3
console.log(237 % 6); // 3 toys left

// Question 4
console.log(185 % 40); // 25 people left

// Question 5
let a = 10;
let b = 0;
let result = a % b;
console.log(result); // NaN

// Question 6
console.log(29 % 5); // 4

// Question 7
console.log(23 % 4); // 3 chocolates left

// Question 8
console.log(0 % 7);  // 0
console.log(15 % 0); // NaN

// Question 9
console.log(Math.floor(47 / 6)); // 7 full sheets
console.log(47 % 6);             // 5 pages left

// Question 10
console.log(17 % 5);    // 2
console.log(-17 % 5);   // -2
console.log(17 % -5);   // 2
console.log(-17 % -5);  // -2
console.log(10 % 0);    // NaN

/*### 6. Exponentiation `**`

1. Find the volume of a cube with a side length of 6 cm using `side ** 3`.  
2. Calculate the total number of cells in a square arrangement with 9 cells on each side using `side ** 2`.  
3. Find the value of \( 5^4 \) (5 raised to the power 4) using the exponentiation operator.  
4. A digital image has 1,024 pixels on each side (square image). Find the total number of pixels using `pixels ** 2`.  
5. Predict the output:
   ```js
   let base = 2;
   let power = -1;
   let result = base ** power;
   console.log(result);
   ```
6. What is the output of `3 ** 4`?  
7. Calculate the area of a square whose side is 9 units using the exponentiation operator.  
8. What is the result of `2 ** 5` and `5 ** 2`? Are they the same?  
9. Predict and explain the outputs (and any errors):  
   ```js
   console.log(2 ** 3 ** 2);          // right-associative
   console.log((2 ** 3) ** 2);
   console.log(2 ** -3);
   // console.log(-2 ** 2);           // Remember: Syntax error
   console.log((-2) ** 2);
   console.log(4 ** 0.5);
   ```
10. Predict the output:
    ```js
    let a = 10;
    let b = 0;
    let result = a ** b;
    console.log(result);
    ```


ANSWERS=================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   Question -1*/

// 1. Find the volume of a cube with a side length of 6 cm using side ** 3.

let side1 = 6;
let volume = side1 ** 3;
console.log(volume);
// Answer: 216


// 2. Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.

let side2 = 9;
let cells = side2 ** 2;
console.log(cells);
// Answer: 81


// 3. Find the value of 5^4 using the exponentiation operator.

let result3 = 5 ** 4;
console.log(result3);
// Answer: 625


// 4. A digital image has 1,024 pixels on each side. Find the total number of pixels using pixels ** 2.

let pixels = 1024;
let totalPixels = pixels ** 2;
console.log(totalPixels);
// Answer: 1048576


// 5. Predict the output.

let base = 2;
let power = -1;
let result5 = base ** power;
console.log(result5);
// Answer: 0.5


// 6. What is the output of 3 ** 4?

console.log(3 ** 4);
// Answer: 81


// 7. Calculate the area of a square whose side is 9 units.

let side7 = 9;
let area = side7 ** 2;
console.log(area);
// Answer: 81


// 8. What is the result of 2 ** 5 and 5 ** 2? Are they the same?

console.log(2 ** 5);
console.log(5 ** 2);
// Answer:
// 32
// 25
// They are not the same.


// 9. Predict and explain the outputs.

console.log(2 ** 3 ** 2);
console.log((2 ** 3) ** 2);
console.log(2 ** -3);
// console.log(-2 ** 2);  // SyntaxError
console.log((-2) ** 2);
console.log(4 ** 0.5);

// Answer:
// 512
// 64
// 0.125
// SyntaxError
// 4
// 2


// 10. Predict the output.

let a = 10;
let b = 0;
let result10 = a ** b;
console.log(result10);
// Answer: 1

/*## B] Assignment Operators

### 1. Simple Assignment `=`
1. Store a student’s name as `"Priya"` and marks as `92` using the assignment operator.  
2. Create a variable `score` and assign it the value `0`.  
3. Assign the value `50` to three variables `a`, `b` and `c` using a single chained assignment.  
4. Predict the output:
   ```js
   let x;
   x = 100;
   console.log(x);
   ```
5. Predict the output:
   ```js
   let p = 15;
   let q = p;
   q = 30;
   console.log(p, q);
   ```

---*/
// #Question -1
// let name="priya"
// let marks=90
// console.log(name)
// console.log(marks)

// #question -2
// let score=0
// console.log(score)

// # question-3

// let a=b=c=50;
// console.log(a)
// console.log(b)
// console.log(c)

// # question 4
// 100

// # question 5

// 15 30


   ### 2. Add and Assign `+=`
1. A player’s score is `80`. He scores `25` more points. Update the score using `+=`.  
2. A wallet has ₹1500. Cashback of ₹120 is added. Update the balance using `+=`.  
3. Predict the output:
   ```js
   let count = 10;
   count += 5;
   console.log(count);
   ```
4. Predict the output:
   ```js
   let msg = "Good";
   msg += " Morning";
   console.log(msg);
   ```
5. What is the final value after `let n = 20; n += "5";`? Explain.

---
// question-1

// let score=80;
// score+=25;
// console.log(score)

// Question -2 

// let walletBalance=1500
// walletBalance+=120;
// console.log(walletBalance)

// # question- 3

// 15

// Question -4

// Good Morning

// Question -5

// output will be 25

// js convert "5" into number and then they will addEventListener

### 3. Subtract and Assign `-=`
1. Health is `100`. Player takes `35` damage. Update health using `-=`.  
2. Stock of 300 items is reduced by 45 after a sale. Update using `-=`.  
3. Predict the output:
   ```js
   let lives = 5;
   lives -= 2;
   console.log(lives);
   ```
4. Predict the output:
   ```js
   let num = "40";
   num -= 15;
   console.log(num);
   ```
5. What is the result of `let x = "abc"; x -= 5;`? Explain.

---

// [3.] SUbtract and assign

// Question -1

// let health=100
// health-=35
// console.log(health)

// Question -2

// let stockValue=300
// stockValue-=45
// console.log(stockValue)

// Question -3

// 3
// Questin-4

// 25

// Question-5

// output will be NaN , as "abc" is not a number 

### 4. Multiply and Assign `*=`
1. Price of an item is ₹500. Apply 18% GST using `*= 1.18`.  
2. A quantity of 8 is tripled. Update using `*=`.  
3. Predict the output:
   ```js
   let amount = 200;
   amount *= 1.1;
   console.log(amount);
   ```
4. Predict the output:
   ```js
   let val = "7";
   val *= 3;
   console.log(val);
   ```
5. What is the result of `let y = "hello"; y *= 2;`? Explain.

---
// [4.] Multiply and assign

// Question-1

// let price=500;
// price*=1.18;
// console.log(price)

// # question -2 

// let quantity=8;
// quantity*=3;
// console.log(quantity)

// Questipon-3
//  220

// Question -4
// 21
// Question -5
// NaN, as "abc" is not a number so we can't multiply 

### 5. Divide and Assign `/=`
1. Total of 180 chocolates is shared among 6 children. Update using `/=`.  
2. Distance of 300 km is covered in 5 hours. Find average speed using `/=`.  
3. Predict the output:
   ```js
   let total = 400;
   total /= 8;
   console.log(total);
   ```
4. Predict the output:
   ```js
   let num = "100";
   num /= 4;
   console.log(num);
   ```
5. What is the result of `let z = 50; z /= 0;`? Explain.

---
 // [5.] Divide and assign

// # question -1

// let chocolates=180;
// chocolates/=8;
// console.log(chocolates)

// Question-2

// let speed=300;
// speed/=5;
// console.log(speed)

// Question -3

// 50

// // Question -4
// 25

// // question -5
//  it will give infinity as any +ve no. when divided by 0 gives infinity

### 7. Exponentiation and Assign `**=`
1. Side of a cube is 5. Update it to get the volume using `**= 3`.  
2. Number 4 needs to be squared. Use `**= 2`.  
3. Predict the output:
   ```js
   let base = 2;
   base **= 5;
   console.log(base);
   ```
4. Predict the output:
   ```js
   let n = 4;
   n **= 0.5;
   console.log(n);
   ```
5. What is the result of `let p = 2; p **= -1;`? Explain.

---
[7.] Exponentitation and assign

// Question-1

// let sideOfCube=5;
// sideOfCube**=3;
// console.log(sideOfCube)

// Question -2 
// let num=4
// num**=2
// console.log(num)

// Question -3
// 128

// Question -4
// 2
// Question -5
0.5 , power -1 means 1/2=0.5

## C] Comparison Operators

### 1. Loose Equality `==`
1. Check whether the string `"25"` is loosely equal to the number `25`.  
2. Check if `0 == false` returns true or false.  
3. Predict the output:
   ```js
   console.log(10 == "10");
   console.log(null == undefined);
   ```
4. Predict the output:
   ```js
   console.log("" == 0);
   console.log([] == false);
   ```
5. Why does `NaN == NaN` return `false`?

// C] Comparison Operators

// q1.
console.log("25" == 25); // true

// q2. 
console.log(0 == false); // true

// q3. 
console.log(10 == "10");        // true
console.log(null == undefined); // true

// qy4. 
console.log("" == 0);     // true
console.log([] == false); // true

//qu 5. 
console.log(NaN == NaN); // false
// NaN is not equal to any value, including itself.

### 2. Loose Inequality `!=`
1. Check whether `"18" != 18` returns true or false.  
2. A password is stored as `"1234"`. User enters `1234` (number). Will `!=` return true?  
3. Predict the output:
   ```js
   console.log(5 != "5");
   console.log(0 != false);
   ```
4. Predict the output:
   ```js
   console.log(null != undefined);
   console.log("" != 0);
   ```
5. What does `NaN != NaN` return? Explain.

---


// C] Comparison Operators
// 2. Loose Inequality (!=)

//q 1.
console.log("18" != 18); // false

// q2. 
let password = "1234";
let enteredPassword = 1234;
console.log(password != enteredPassword); // false

//q 3.
console.log(5 != "5");  // false
console.log(0 != false); // false

// q4.
console.log(null != undefined); // false
console.log("" != 0);           // false

// q5. 
console.log(NaN != NaN); ===... true
// NaN is not equal to any value, including itself.

### 3. Strict Equality `===`
1. Check whether `"25" === 25` returns true or false. Explain why.  
2. Check if `0 === false` and `null === undefined`.  
3. Predict the output:
   ```js
   console.log(10 === "10");
   console.log(true === 1);
   ```
4. Predict the output:
   ```js
   console.log("" === 0);
   console.log([] === false);
   ```
5. Why is `===` preferred over `==` in most real-world code?

---

// C] Comparison Operators
// // 3. Strict Equality (===)

// // 1. Check whether "25" === 25
// console.log("25" === 25); // false
// // Explanation: The values have different data types (string and number).

// // 2. Check if 0 === false and null === undefined
// console.log(0 === false);          // false
// console.log(null === undefined);   // false

// // 3. Predict the output
// console.log(10 === "10"); // false
// console.log(true === 1);  // false

// // 4. Predict the output
// console.log("" === 0);     // false
// console.log([] === false); // false

// 5. Why is === preferred over ==?
// === checks both value and data type without type conversion.
// It helps avoid unexpected results and makes code more predictable.


### 4. Strict Inequality `!==`
1. Check whether `"18" !== 18` returns true or false.  
2. Check if `0 !== false` and `null !== undefined`.  
3. Predict the output:
   ```js
   console.log(5 !== "5");
   console.log(true !== 1);
   ```
4. Predict the output:
   ```js
   console.log("" !== 0);
   console.log(NaN !== NaN);
   ```
5. Write a condition that checks if a variable `input` is strictly not equal to the string `"0"`.

Answer==>>
Q-1
   console.log("18" !== 18); 

q-2

console.log(0 !== false);     true    
console.log(null !== undefined); true


Q-3

true ,true
Q-4

true
true
Q-5



## Part C] Relational Operator

### 5. Greater Than `>`
1. A student’s marks are 78. The passing marks are 40. Check whether the student has scored more than the passing marks.  
2. Temperature today is 35°C and yesterday it was 28°C. Check if today is hotter.  
3. Predict the output:
   ```js
   console.log(15 > 10);
   console.log(10 > 15);
   console.log(10 > 10);
   ```
4. Predict the output:
   ```js
   console.log("20" > 15);
   console.log("5" > "10");
   console.log("abc" > 10);
   ```
5. What is the result of `null > 0` and `undefined > 0`? Explain.  
6. A shop has 120 items in stock. A customer wants to buy 85 items. Write a condition using `>` to check if stock is sufficient.  
7. Predict and explain:
   ```js
   console.log(true > false);
   console.log("10" > "2");
   console.log(NaN > 5);
   ```


PART-c ANSWER===========>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1. 
console.log(78 > 40); // true

// Q2.
console.log(35 > 28); // true

// Q3. 
console.log(15 > 10); // true
console.log(10 > 15); // false
console.log(10 > 10); // false

// Q4.
console.log("20" > 15);  // true
console.log("5" > "10"); // true
console.log("abc" > 10); // false

// Q5.
console.log(null > 0);      // false
console.log(undefined > 0); // false

reason:==
null converts to 0, so 0 > 0 is false.
undefined converts to NaN, so the comparison is false.

// Q6. 
let stock = 120;
let customerWants = 85;
console.log(stock > customerWants); // true

// Q7. 
console.log(true > false); // true
console.log("10" > "2");   // false
console.log(NaN > 5);      // false

============================================================================================================
### 6. Less Than `<`
1. A box can hold maximum 50 kg. Current weight is 42 kg. Check if more items can still be added.  
2. Age of a person is 16. Minimum age required is 18. Check if the person is underage.  
3. Predict the output:
   ```js
   console.log(8 < 12);
   console.log(20 < 10);
   console.log(7 < 7);
   ```
4. Predict the output:
   ```js
   console.log("8" < 10);
   console.log("20" < "3");
   console.log("hello" < 5);
   ```
5. What is the result of `null < 0` and `undefined < 0`? Explain.  
6. A tank capacity is 500 litres. Current water level is 375 litres. Write a condition using `<` to check if it is not full.  
7. Predict and explain:
   ```js
   console.log(false < true);
   console.log("5" < "15");
   console.log(NaN < 10);
   ```
ANSwer:======================================================================================......>>>>>>>>>>>>>>>>>>>>>>


// Q1. 
console.log(42 < 50); // true

// Q2.
console.log(16 < 18); // true

// Q3. 
console.log(8 < 12); // true
console.log(20 < 10); // false
console.log(7 < 7);  // false

// Q4.
console.log("8" < 10);       // true
console.log("20" < "3");     // true
console.log("hello" < 5);    // false

// Q5. 
console.log(null < 0);      // false
console.log(undefined < 0); // false

reason:
null converts to 0, so 0 < 0 is false.
undefined converts to NaN, so the comparison is false.

// Q6. 
let capacity = 500;
let water = 375;
console.log(water < capacity); // true

// Q7. 
console.log(false < true); // true
console.log("5" < "15");   // false
console.log(NaN < 10);     // false

============================================================================================================================
   ### 7. Greater Than or Equal To `>=`
1. Minimum marks required for distinction is 75. A student scored 75. Check if the student gets distinction.  
2. Ticket price is ₹300. A person has ₹300. Check if they can buy the ticket.  
3. Predict the output:
   ```js
   console.log(25 >= 25);
   console.log(30 >= 25);
   console.log(20 >= 25);
   ```
4. Predict the output:
   ```js
   console.log("25" >= 25);
   console.log("10" >= "2");
   console.log(null >= 0);
   ```
5. What is the result of `undefined >= 0`? Explain.  
6. A lift can carry maximum 8 people. Currently 8 people are inside. Write a condition using `>=` to check if the lift is full or overloaded.  
7. Predict and explain:
   ```js
   console.log(true >= 1);
   console.log("" >= 0);
   console.log(NaN >= NaN);
   ```
Answer:======================================================================================================================

   
// Q1. 
console.log(75 >= 75); // true

// Q2. 
console.log(300 >= 300); // true

// Q3. 
console.log(25 >= 25); // true
console.log(30 >= 25); // true
console.log(20 >= 25); // false

// Q4.
console.log("25" >= 25);  // true
console.log("10" >= "2"); // false
console.log(null >= 0);   // true

// Q5.
console.log(undefined >= 0); // false

reason:
undefined converts to NaN.
Comparisons involving NaN always returns false.

// Q6. 
let people = 8;
let capacity = 8;
console.log(people >= capacity); // true

// Q7. 
console.log(true >= 1);    // true     //true converts to 1.
console.log("" >= 0);      // true      // "" converts to 0 .
console.log(NaN >= NaN);   // false    //comparisons involving NaN always return false
   
========================================================================================================================

### 8. Less Than or Equal To `<=`
1. Maximum speed limit is 60 km/h. A vehicle is travelling at 60 km/h. Check if it is within the limit.  
2. A student needs at least 40 marks to pass. He scored 39. Check if he has failed.  
3. Predict the output:
   ```js
   console.log(15 <= 20);
   console.log(20 <= 15);
   console.log(15 <= 15);
   ```
4. Predict the output:
   ```js
   console.log("15" <= 20);
   console.log("30" <= "5");
   console.log(null <= 0);
   ```
5. What is the result of `undefined <= 0`? Explain.  
6. A bag can hold maximum 10 books. Currently it has 10 books. Write a condition using `<=` to check if more books can be added.  
7. Predict and explain:
   ```js
   console.log(false <= 0);
   console.log("" <= 0);
   console.log(NaN <= 5);
   ```
answer===================================================================================================================



// Q1.
console.log(60 <= 60); // true

// Q2. 
console.log(39 < 40); // true (Failed)

// Q3. 
console.log(15 <= 20); // true
console.log(20 <= 15); // false
console.log(15 <= 15); // true

// Q4.
console.log("15" <= 20);  // true
console.log("30" <= "5"); // true
console.log(null <= 0);   // true

// Q5. 
console.log(undefined <= 0); // false

reason:
undefined converts to NaN.
Comparisons involving NaN return false.

// Q6. 
let books = 10;
let capacity = 10;
console.log(books < capacity); // false (No space left)

// Q7. 
console.log(false <= 0); // true
console.log("" <= 0);    // true
console.log(NaN <= 5);   // false


================================================================================================================================


   ### Mixed Practice (>, <, >=, <=)
1. Write expressions to check:
   - Whether age `18` is greater than or equal to voting age `18`.
   - Whether temperature `32` is less than `35`.
   - Whether score `90` is greater than `85`.
2. Predict the outputs:
   ```js
   console.log(10 > 5 && 5 < 10);
   console.log("10" >= 10);
   console.log(null <= undefined);
   console.log("5" < "10" && 5 > 2);
   ```
3. A product costs ₹499. A customer has ₹500. Write conditions using `>=` and `<` to decide if the customer can buy it and if any change will be left.  
4. Explain why `"10" > "2"` is `false` but `10 > 2` is `true`.

answer==========================================================================================================


  
// Q1.
// a) 
console.log(18 >= 18); // true

// b) 
console.log(32 < 35); // true

// c) 
console.log(90 > 85); // true


// Q2. 

console.log(10 > 5 && 5 < 10);       // true
console.log("10" >= 10);             // true
console.log(null <= undefined);      // false
console.log("5" < "10" && 5 > 2);    // false


// Q3. 

let price = 499;
let money = 500;


console.log(money >= price); // true

 
console.log(money > price); // true


console.log(money - price); // 1


// Q4. 

console.log("10" > "2"); // false
console.log(10 > 2);     // true

reason:
"10" and "2" are strings, so they are compared
by ascii value , character by character.
The first character "1" comes before "2", so false.

10 and 2 are numbers, so their numerical values
are compared. Since 10 is greater than 2, so it is  true.

   // =============================================================================================================


   ## Part E]: Increment / Decrement Operators (`++` / `--`)

### Part a:

1. A counter starts at `5`. Use the increment operator to increase it by 1 and print the new value.  
2. A player has `3` lives. Use the decrement operator to reduce one life and print the remaining lives.  
3. Start with `score = 10`. Increase the score using `++` and print it.  
4. Start with `items = 8`. Decrease the items using `--` and print it.  
5. Declare `count = 0`. Increment it twice and print the final value.
// Answers===============================================================================================================
// q1.
//    let counter = 5;
// counter++;
// console.log(counter);  //6

//    Q2.
//    let live = 3;
// live--;
// console.log(live)   //2


//    Q3. 
//    let score=10;
// score++;
// console.log(score)   //11

//    Q4.
//    let items=8;
// items--;
// console.log(items)  //7

// Q5.
//    let count=0;
// count++;
// count++;
// console.log(count)
================================================================================================================
### Part b:

6. Start with `x = 5`.  
   - Create `y = x++`  
   - Print both `x` and `y`.  
   Explain why the values are different.

7. Start with `a = 5`.  
   - Create `b = ++a`  
   - Print both `a` and `b`.  
   Explain the difference from the previous question.

8. Start with `lives = 3`.  
   - Use post-decrement (`lives--`) and store the result in `previousLives`.  
   - Print both variables.

9. Start with `attempts = 0`.  
   - Use pre-increment (`++attempts`) and store the result in `currentAttempts`.  
   - Print both variables.

10. Start with `points = 100`.  
    - Increase it using `++`  
    - Then decrease it using `--`  
    - Print the final value.
Answer==============================================================================================
   Q6.
let x = 5;
let y = x++;

console.log(x);
console.log(y);
reason==
   — x starts at 5.
— first, the current value of x (5) is assigned to y.Then, x increases by 1, becoming 6

Q7.
   let a = 5;
let b = ++a;

console.log(a);
console.log(b);

Q8.
   let lives = 3;
let previousLives = lives--;

console.log(lives);
console.log(previousLives);

Q9.
   let attempts = 0;
let currentAttempts = ++attempts;

console.log(attempts);
console.log(currentAttempts);

Q10.
   let points = 100;

++points;
--points;

console.log(points);

==================================================================================================================
### Part c:

11. Predict the output:
    ```js
    let x = 10;
    let y = x++;
    let z = ++x;
    console.log(x, y, z);
    ```

12. Predict the output:
    ```js
    let a = 5;
    let b = a-- + ++a;
    console.log(a, b);
    ```

13. Predict the output:
    ```js
    let m = 7;
    let n = --m + m++;
    console.log(m, n);
    ```

14. Predict the output:
    ```js
    let p = 3;
    let q = p++ + ++p + p;
    console.log(p, q);
    ```

15. Predict the output:
    ```js
    let val = 0;
    val = val++ + ++val;
    console.log(val);
    ```

---
   Answer=============================================================================================================
   Q11.
   
let x = 10;
let y = x++;
let z = ++x;
console.log(x, y, z); // 12,10,12


Q12.
   let a = 5;
let b = a-- + ++a;
console.log(a, b); // 5,10

Q13.
   let m = 7;
let n = --m + m++;
console.log(m, n); // 7,13

   Q14.
      let p = 3;
let q = p++ + ++p + p;
console.log(p, q);   // 5,13

Q15.
   let val = 0;
val = val++ + ++val;
console.log(val);    //2

 // ==================================================================================================================
    ## Part F]: Logical Operators

***

### 1. Logical AND `&&`

Write a JavaScript program for each:

1. Stored username is `"admin"` and password is `1234`. Check if both are valid using `&&` and print the result.  
2. A user is logged in (`isLoggedIn = true`) and has permission (`hasPermission = true`). Check if they can access a page using `&&`.  
3. A product is in stock (`inStock = true`) and its price is less than ₹1000 (`price = 800`). Check if it can be bought using `&&`.  
4. A student has marks `75` and attendance `80`. Passing requires marks greater than `65` **and** attendance greater than `70`. Check using `&&`.  
5. Two conditions: `isWeekend = true` and `isHoliday = false`. A party happens only if both are true. Check using `&&`.
// Answers===========================================================================================
   
// Q1.
//    let username = "admin";
// let password = 1234;
// console.log(username === "admin" && password === 1234);   //true

   Q@
let isLoggedIn=true;
let hasPermission=true;
let isAccess=isLoggedIn && hasPermission
console.log(isAccess)  // teur

Q3.
   let inStock=true;
let price=800;
let canBought=inStock&&(price>=1000);
console.log(canBought);  // false

Q4
let marks = 75;
let attendance = 80;

console.log(marks > 65 && attendance > 70);  //true


Q5.
   let isWeekend = true;
let isHoliday = false;

console.log(isWeekend && isHoliday); //false

// ==============================================================================================================

### Additional Questions (Logical AND `&&`)

6. Predict the output:
   ```js
   let a = 0;
   let b = 10;
   let result = a && b;
   console.log(result);  ===>>>>>>> 0
   ```

7. Predict the output:
   ```js
   let x = 5;
   let y = 10;
   let result = (x > 3 && y) || 0;
   console.log(result);  =========>>>> 10
   ```

8. Predict the output:
   ```js
   let p = "Hello";
   let q = "";
   let r = "World";
   let result = p && q && r;
   console.log(result);   ==========>>>>>>>>""
   ```

9. Predict the output:
   ```js
   let val = 5;
   let condition = val && (val = 0);
   console.log(condition); ===========>>>> 0
   console.log(val);    ===========>>>> 0
   ```

10. Predict the output:
    ```js
    let x = 10;
    let y = 20;
    let result = (x && y) && (x > y);
    console.log(result);   ========>>>>> false
    ```

***
// =================================================================================================================
### 2. Logical OR `||`

Write a JavaScript program for each:

1. A user can login with either a correct password (`passwordCorrect = true`) or a valid OTP (`otpValid = false`). Check if login is allowed using `||`.  
2. A discount applies if the user is a member (`isMember = false`) or has a coupon (`hasCoupon = true`). Check using `||`.  
3. Entry is allowed if age is above `18` (`age = 16`) **or** height is above `150` cm (`height = 155`). Check using `||`.  
4. A form is valid if either email is given (`emailGiven = true`) or phone is given (`phoneGiven = false`). Check using `||`.  
5. A game level opens if score is above `1000` (`score = 900`) **or** time bonus is collected (`timeBonus = true`). Check using `||`.

// =============================================================================================================
Q1.
   let passwordCorrect = true;
let otpValid = false;

console.log(passwordCorrect || otpValid);  // true
Q2.
   let isMember = false;
let hasCoupon = true;
let isDiscountApplied=isMember||hasCoupon;
console.log(isDiscountApplied)       // true

Q3.
   let age = 16;
let height = 155;

console.log(age > 18 || height > 150); //true

Q4.
   
   let emailGiven = true;
let phoneGiven = false;

console.log(emailGiven || phoneGiven);

q5
let score = 900;
let timeBonus = true;

console.log(score > 1000 || timeBonus);

// =================================================================================================================

### Additional Questions (Logical OR `||`)

6. Predict the output:
   ```js
   let a = 0;
   let b = false;
   let c = "";
   let d = null;
   let e = 42;
   let result = a || b || c || d || e;
   console.log(result);    ===============>>>>>>>>> 42
   ```

7. Predict the output:
   ```js
   let x = "Hello" || 0;
   let y = 0 || "Hi";
   console.log(x, y); ============>>>>>>>> hello hi
   ```

8. Predict the output:
   ```js
   let a = 10;
   let b = 20;
   let result = (a < 5) || (b > 15);
   console.log(result); ============>>>>>> true
   ```

9. Predict the output:
   ```js
   let val = 5;
   let condition = val || (val = 0);
   console.log(condition);============>>>>>> 5
   console.log(val);==========>>>>>>>>>>>> 5
   ```

10. Predict the output:
    ```js
    let x = "" || 0 || false || null || undefined || "OK";
    console.log(x);============>>>>>> OK
    ```

***

// ============================================================================================================

      ### 3. Logical NOT `!`

Write a JavaScript program for each:

1. A user is not banned (`isBanned = false`). Check if they can login by negating `isBanned` using `!`.  
2. A task is not completed (`isCompleted = false`). Check if it is still pending using `!`.  
3. A light is on (`isOn = true`). Check if it is off using `!`.  
4. A subscription is not active (`isActive = false`). Check if the user cannot access premium content using `!`.  
5. A file is not read‑only (`isReadOnly = false`). Check if it can be edited using `!`.

   // ==========================================================================================================

   Q1.
   let isBanned = false;

console.log(!isBanned);  ===>. true

Q2.
   let isCompleted = false;
console.log(!isCompleted);
q3.
   
let isOn = true;

console.log(!isOn);

q4.
   let isActive = false;

console.log(!isActive);

Q5.
   let isReadOnly = false;

console.log(!isReadOnly);

// ==============================================================================================================
### Additional Questions (Logical NOT `!`)

6. Predict the output:
   ```js
   let a = 0;
   let b = 1;
   console.log(!a, !b);   =======>>>>>> true false
   ```

7. Predict the output:
   ```js
   let x = "Hello";
   let y = "";
   console.log(!x, !y);  ============>>>>>>>>> false true
   ```

8. Predict the output:
   ```js
   let val = 5;
   let result = !val;
   console.log(result); ==========>>>>>>>>>false
   ```

9. Predict the output:
   ```js
   let a = 10;
   let b = 20;
   let result = !(a && b);
   console.log(result);  ===========>>>>>>>>>false
   ```

10. Predict the output:
    ```js
    let x = 0;
    let y = 1;
    let result = !(x || y);
    console.log(result);   ==========>>>>>>false
    ```

***
// ===========================================================================================================

       ## Part G]: `typeof` Operator
----
### Part a: 

1. Declare a variable `name = "Rahul"` and print its type using `typeof`.  
2. Declare a variable `age = 25` and print its type.  
3. Declare a variable `isStudent = true` and print its type.  
4. Declare a variable `city` (without assigning a value) and print its type.  
5. Print the type of the value `null`.

  // Answer================================================================================================
q1.
   let name="Rahul";
console.log(typeof(name)); // string
// Q2
let age = 25;
console.log(typeof age); // number

// Q3
let isStudent = true;
console.log(typeof isStudent); // boolean

// Q4
let city;
console.log(typeof city); // undefined

// Q5
console.log(typeof null); // object
// ===================================================================================================

### Part b:

6. Predict the output:
   ```js
   console.log(typeof 42);  ====>>>. number
   console.log(typeof "Hello");   =============>>>> string
   console.log(typeof true);============>>>>>>> boolean
   console.log(typeof undefined); =======>>> undefined
   ```

7. Predict the output:
   ```js
   console.log(typeof null); =======>>>> object
   console.log(typeof {});  =====>>> object
   console.log(typeof []);  ====>>> object
   ```

8. Predict the output:
   ```js
   console.log(typeof NaN);  =====>>>> number
   console.log(typeof Infinity); ===>>> number
   console.log(typeof function(){});===>>> function
   ```

9. Create three variables:
   - `price = 99.99`  ====>>>> number
   - `message = "Welcome"`===>>> string
   - `isActive = false`  ===>>> boolean
   Print the type of each variable with a clear message.

10. Predict the output:
    ```js
    let value = null; 
    console.log(typeof value);===>>>> object
    console.log(typeof value === "object"); truee
    ```
// ===========================================================================================================

### Part c:

11. Predict the output:
    ```js
    console.log(typeof typeof 100);===>>> string
    console.log(typeof typeof "Hi");====>>> string
    console.log(typeof typeof true);====>>> string
    ```

12. Predict the output:
    ```js
    let a = 10;
    let b = "10";
    console.log(typeof a === typeof b);   // false
    console.log(typeof a == typeof b);     // true
    ```

13. Predict the output:
    ```js
    console.log(typeof null === "object");====>>> true
    console.log(typeof [] === "object");===>>> true
    console.log(typeof {} === "object");====>>>> true
    ```

14. Predict the output:
    ```js
    let x;
    console.log(typeof x);  // undefined
    x = null;
    console.log(typeof x);  ===>> object
    x = 0;
    console.log(typeof x);===>> number
    ```

15. Predict the output:
    ```js
    console.log(typeof NaN === "number");  ===>> false
    console.log(typeof Infinity === "number");===>>> true
    console.log(typeof (1 / 0));===>>> number
    ```

---
// =====================================================================================
  ## Part H]: Type Coercion

### Part a:

1. Convert the string `"25"` into a number using `Number()` and add `10` to it. Print the result.  
2. Convert the number `100` into a string using `String()` and join it with `" rupees"`. Print the result.  
3. Convert the value `0` into a boolean using `Boolean()` and print it.  
4. Convert the value `"Hello"` into a boolean and print it.  
5. Use the unary `+` operator to convert `"50"` into a number and multiply it by `2`
// =====================================================================================================

let string="25";
let y=Number(string);
console.log(y+10)
// q2.
   let number=100;
let y=String(number);
console.log(y+"rupees")
// Q3
let c = Boolean(0);
console.log(c); // false

// Q4
let d = Boolean("Hello");
console.log(d); // true

// Q5
let e = +"50";
console.log(e * 2); // 100\

// ============================================================================================

### Part b:

6. Predict the output:
   ```js
   console.log("10" - 5);  //5
   console.log("10" + 5);   //105
   console.log("10" * 2); //20
   console.log("10" / 2);  //5
   ```

7. Predict the output:
   ```js
   console.log("5" - "2");  // 3
   console.log("5" + "2");   //52
   console.log("5" * "2");   //10
   console.log("5" / "2");   //2.5
   ```

8. Predict the output:
   ```js
   console.log(Number("123"));  // 123
   console.log(Number("123abc"));  //NaN
   console.log(Number(true));  // 1
   console.log(Number(false));  //0
   console.log(Number(null));   // 0
   console.log(Number(undefined)); // NaN
   ```

9. Predict the output:
   ```js
   console.log(Boolean(0));  // false
   console.log(Boolean(""));  //false
   console.log(Boolean("0")); // true
   console.log(Boolean([])); //true
   console.log(Boolean({})); //true
   console.log(Boolean(null)); // false
   ```

10. Predict the output:
    ```js
    console.log(String(100));   // 100
    console.log(String(true)); // true
    console.log(String(null)); // null
    console.log(String(undefined)); //undefined
    console.log(100 + "");  // 100
    ```

// =======================================================================================================

### Part c:

11. Predict the output:
    ```js
    console.log("5" + 3 + 2);  //532
    console.log(5 + 3 + "2"); // 82
    console.log("5" - 3 + 2);  // 4
    console.log(5 - "3" + "2"); //22
    ```

12. Predict the output:
    ```js
    console.log(true + true);  // 2
    console.log(true + false);   // 1
    console.log(true + "false");  // truefalse
    console.log(false + "true");   //falsetrue
    ```

13. Predict the output:
    ```js
    console.log(null + 5);   // 5
    console.log(undefined + 5);  // NaN
    console.log(null + "5");   // null5
    console.log(undefined + "5");  // undefined5
    ```

14. Predict the output:
    ```js
    console.log([] + []); // empty
    console.log([] + {});  [object object]
    console.log({} + []);  [object object]
    console.log({} + {});  [object object][object object]
    ```

15. Predict the output:
    ```js
    let a = "10";
    let b = 5;
    let c = a + b;
    let d = a - b;
    let e = +a + b;
    console.log(c, typeof c);  // 105 string
    console.log(d, typeof d);   // 5 number
    // console.log(e, typeof e);   // 15 number                                                   ********
    ```

16. Predict the output:
    ```js
    console.log(!!"Hello");  // true
    console.log(!!"");     //false
    console.log(!!0);    // false
    console.log(!!1);  // true
    console.log(!!null);   // false
    console.log(!!undefined);   // false
    ```

17. Predict the output:
    ```js
    console.log(Number(""));   // 0
    console.log(Number(" "));  //0
    console.log(Number("0"));  //0
    console.log(Number("  25  "));  // 25
    console.log(Number("25px"));  //NaN
    ```

18. Predict the output:
    ```js
    let val1 = "5";  // 
    let val2 = 2;
    console.log(val1 + val2);  // 52
    console.log(+val1 + val2);  // 7
    console.log(val1 - val2);  // 3
    console.log(val1 * val2);  //10
    console.log(val1 / val2);  //2.5
    ```

---

   // =====================================================================================================

   # Bonus Mixed Practice Questions:

19. Predict the output:
    ```js
    let count = 5;
    console.log(typeof count++);   number
    console.log(count);     // 6
    console.log(typeof ++count);   // number
    console.log(count); 7
    ```

20. Predict the output:
    ```js
    let x = "10";   // 
    let y = ++x;
    console.log(x, y, typeof x, typeof y);   // 11,11. number, number
    ```

21. Predict the output:
    ```js
    let a = "5";   
    let b = a++;
    console.log(a, b, typeof a, typeof b);   // 6 5 number number
    ```

22. Predict the output:
    ```js
    console.log(typeof (1 + "2"));  // 3
    console.log(typeof (1 - "2"));  // -1
    console.log(typeof (1 * "2"));  // 2
    console.log(typeof (1 / "2"));  //0.5
    ```

23. Predict the output:
    ```js
    let val = null;
    console.log(typeof val);   // object
    console.log(val + 1);      // 1
    console.log(val - 1);    // -1
    console.log(val * 1);   // 0
    console.log(Boolean(val));   // false
    ```

---

   // =========================================================================================

   


