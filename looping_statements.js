
//  JavaScript Assignment: `for` Loop

// Instructions
//Solve all questions using a `for` loop.
//Use `console.log()` to display the output.
//Do not use arrays or advanced concepts.

//---

// Q1. Counting Numbers 🔢

//A teacher wants students to practice counting. Write a program to print all numbers from 1 to 15.

//**Sample Output:**
```
1
2
3
4
5
...
15
```

//---

/*Q2. Even Numbers 

A school has lockers numbered with even numbers for a special activity. Write a program to print all even numbers from 2 to 40.

Sample Output:*/
```
2
4
6
8
10
...
40
```

/*---

Q3. Odd Numbers 

A fitness coach assigns odd numbers to participants for a special activity. Write a program to print all odd numbers from 1 to 35.

Sample Output:*/
```
1
3
5
7
9
...
35

```
//---

/*Q4. Saving Money 

You save ₹10 on Day 1, ₹20 on Day 2, ₹30 on Day 3, and continue increasing your daily savings by ₹10. Write a program to calculate your total savings after 10 days.

Sample Output:*/
```
Total savings after 10 days: ₹550
```

/*---

Q5. Multiplication Table 📚

You want to practice multiplication. Write a program to print the multiplication table of 12, from 12 × 1 to 12 × 10.

Sample Output:*/
```
12 x 1 = 12
12 x 2 = 24
12 x 3 = 36
12 x 4 = 48
12 x 5 = 60
12 x 6 = 72
12 x 7 = 84
12 x 8 = 96
12 x 9 = 108
12 x 10 = 120
```

//---

/*Q6. Daily Water Intake 💧

You drink 3 glasses of water every day. Write a program to calculate the total number of glasses you drink over 7 days. Print the cumulative total after each day.

Sample Output:
``|
Day 1: 3 glasses
Day 2: 6 glasses
Day 3: 9 glasses
Day 4: 12 glasses
Day 5: 15 glasses
Day 6: 18 glasses
Day 7: 21 glasses

```
---

Q7. Shopping Calculation 🛍️

One chocolate costs ₹15. Write a program to print the total cost of buying 1 to 10 chocolates.

Sample Output:
```
1 chocolate = ₹15
2 chocolates = ₹30
3 chocolates = ₹45
4 chocolates = ₹60
5 chocolates = ₹75
...
10 chocolates = ₹150

```
---

Q8. Sum of Even Numbers ➕

You want to calculate the sum of all even numbers between 2 and 30, including both 2 and 30. Write a program to calculate and print the total.

Sample Output:
```
Sum of even numbers: 240

```
---

Q9. Weekly Exercise 💪

You do 5 push-ups on Day 1, 10 on Day 2, 15 on Day 3, and continue increasing the number by 5 each day. Write a program to print the number of push-ups for each day over 7 days.

Sample Output:

Day 1: 5 push-ups
Day 2: 10 push-ups
Day 3: 15 push-ups
Day 4: 20 push-ups
Day 5: 25 push-ups
Day 6: 30 push-ups
Day 7: 35 push-ups


---

Q10. Movie Tickets 🎬

One movie ticket costs ₹150. Write a program to print the total ticket cost for 1 to 8 people.

Sample Output:

1 person: ₹150
2 people: ₹300
3 people: ₹450
4 people: ₹600
5 people: ₹750
6 people: ₹900
7 people: ₹1050
8 people: ₹1200


---
// ========================================================================
// Answrrs*/

Q1
for (let i=1;i<=15;i++){
console.log(i);}
Q2

for (let i=2;i<=40;i+=2){
    console.log(i)
}
q3
for (let i=1;i<=35;i+=2){
    console.log(i)
}
q4
let sum=0;
for (i=1;i<=10;i+=1){
    sum=sum+i*10
}
console.log(sum)

Q5
let num=12;
for (let i=1;i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`)
}

Q6
let sum=0;
for (let i=1;i<=7;i++){
    sum=sum+3
    console.log(`${i}:${sum}`)
}

Q7
let total=0;
for (let i=1;i<=10;i++){
    total=total+15
    console.log(`${i} chocolate = ${total}`)
}
Q8
let sum = 0;

for (let i = 2; i <= 30; i += 2) {
    sum = sum + i;
}

console.log("Sum of even numbers: " + sum);

q9
for (let i = 1; i <= 7; i++) {
    console.log("Day " + i + ": " + i * 5 + " push-ups");
}
q10
let total=0;
for (let i=1;i<=8;i++){
    total=total+150
    console.log(`${i} person : ${total}`)
}


/* Part B] For Loop (Additional advanced questions)
---
1. Given an array of temperatures `[28, 32, 25, 40, 18, 35]`, use a `for` loop to count how many days were hotter than 30°C.  
2. Write a `for` loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).  
3. Create a `for` loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.  
4. Given the string `"JavaScript"`, use a `for` loop to create a new string that contains only the consonants (remove vowels).  
5. Write a `for` loop that finds the largest number in an array of positive integers without using any sorting method.  
6. Use a `for` loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.  
7. Print the following series using a single `for` loop:  
   `1 2 4 8 16 32 64 128` 
8. Write a `for` loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
9. Given an array of student scores `[45, 78, 90, 32, 56, 88]`, use a `for` loop to calculate the average and also count how many students scored above the average.  
10. Write a `for` loop that converts a decimal number to its binary representation (without using built-in methods like `toString(2)`).

### Note: Question No. 8 & 10 are optional from above.

---*/

// ================================================================================================================

// Q1

let temp=[28,32,25,40,18,35];
let count=0;
for (let i=0; i<=temp.length-1;i++){
    if (temp[i]>30){
        count+=1
    }}
console.log(count);

q2

let n=4729;
let numStr = String(n)
let sum=0;
for (let i=0;i < numStr.length;i++){
    let digit=n%10;
    sum=sum+digit;
    n=Math.floor(n/10)   
}
console.log(sum)

q3

for (let i=0;i<=100;i++){
    if (i%3==0 && i%5==0 && i%7!=0){
        console.log(i)
    }
}
Q4
let s="javascript";
t="";
for (let i=0;i<s.length;i++){
    if ("aeiou".includes(s[i])) {
        continue;
    }
    t=t+s[i]
}
console.log(t)

Q5

let arr=[10,20,50,60,78,67];
let greater=0;
for (let i=0;i<arr.length;i++){
    if (arr[i]>greater){
        greater=arr[i]
    }
}
console.log(greater)

Q6
let n=28;
let sum=0;
for (let i=0;i<n;i++){
    if (n%i==0){
        sum=sum+i
    }

}
if (sum==n){
    console.log("Perfect number")
}else{
    console.log("Not a perfect number")
}

Q7

let num = 1;

for (let i = 1; i <= 8; i++) {
    console.log(num);
    num = num * 2;
}

q8
let a=0;
let b=1;
for (let i=0;i<=20;i++){
    console.log(a);
    let next=a+b
    a=b
    b=next
}

Q9

let scores = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

let average = sum / scores.length;
let count = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        count++;
    }
}

console.log("Average:", average);
console.log("Students above average:", count);

q10










