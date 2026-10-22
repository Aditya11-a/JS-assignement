
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
for (i=1;i<9;i++){
    console.log(i,"people:",150*i);
}

// B]  For Loop (Additional advanced questions)

// Q1.
let temp = [28, 32, 25, 40, 18, 35]
let count = 0;
for (let i=0; i<temp.length; i++){
    if (temp[i]>=30){
        count+=1
    }
}
console.log("Days Hotter than 30°C:",count)

// Q2.
let num = 4729;
let sum = 0;
for (let i=0; i<=num; i++){
    let digit = num%10
    sum+=digit
    num = Math.floor(num/10)
}
console.log("Sum of Digits:",sum)

// Q3.
for (let i=1; i<=100; i++){
    if (i%15==0 && i%7!=0){
        console.log(i)
    }
}

// Q4.
let word = "JavaScript";
for (let i=0; i<word.length; i++){
    if (word[i]!="a"&&word[i]!="e"&&word[i]!="i"&&word[i]!="o"&&word[i]!="u"){
        console.log(word[i])
    }
}

// Q5.
let arr = [23, 55, 21, 66, 42, 63]
let maxNum = 0
for (let i=0; i<arr.length; i++){
    if (arr[i]>maxNum){
        maxNum = arr[i]
    }
}
console.log(maxNum)

// Q6.
let num = 28;
let sum = 0;
for (let i=1; i<28; i++){
    if (num%i==0){
        sum+=i
    }
}
if (sum==num){
    console.log("Perfect Number")
}

// Q7.
let num = 1
let str = ""
for (let i=1; i<=8; i++){
    str+=num+" "
    num*=2
}
console.log(str)

// Q8.
let a = 0;
let b = 1;
for (let i=1; i<=20; i++){
    console.log(a)
    next = a+b
    a=b
    b=next
}

// Q9.
let arr = [45, 78, 90, 32, 56, 88];
let sum = 0;
for (let i=1; i<arr.length; i++){
    sum+=arr[i]
}
let avg = sum/arr.length
console.log("Average:",avg)
let count=0
for (let i=1; i<arr.length; i++){
    if (arr[i]>=avg){
        count+=1
    }
}
console.log(count)

// Q10.
let num = 13;
let binary = ""
for (;num>0; num = Math.floor(num/2)){
    let rem = num%2
    binary+=rem
}
console.log(binary)

// C_A] break inside a for Loop

// Q1.
let arr = [45,5,7,5,2,6,95]
for (let i=0; i<arr.length; i++){
    if (arr[i]==7){
        console.log("Index:",i)
        break
    }
}

// Q2.
let pass = "abc@123"
let upass = "abc@123"
let i=0
for (; i<5; i++){
    if (pass===upass){
        console.log("Access granted")
        break
    }
}
if (i==5){
    console.log("Account Blocked")
}

// Q3.
let sum=0;
for (let i=0; sum<100; i++){
    sum+=i
    if (sum>=100){
        console.log(i-1)
        break
    }
}

// Q4.
let name = ["Vishal", "Grency", "Freya", "Nayan", "Sweni", "Utsav", "Chetan"]
for (let i=0; i<name.length; i++){
    if (name[i][0]=="S"){
        console.log(name[i])
        break
    }
}

// Q5.
for (let i=1; i<=50; i++){
    console.log(i)
    if (i>20 && i**(1/2)===Math.floor(i**(1/2))){
        break
    }
}

// C_B] continue inside a for Loop

// Q1.
for (let i=1; i<=30; i++){
    if (i%4==0){
        continue
    }
    console.log(i)
}

// Q2.
let arr = [-3, 53, -12, 23, 21, -123]
let sum=0
for (let i=1; i<arr.length; i++){
    if (arr[i]<0){
        continue
    }
    sum+=arr[i]
}
console.log(sum)

// Q3.
let str = "Hello World"
for (let i=1; i<str.length; i++){
    if (str[i]==" "){
        continue
    }
    console.log(str[i])
}

// Q4.
for (let i=1; i<=12; i++){
    let num = 6*i
    if (num%5==0){
        continue
    }
    console.log(num)
}

// Q5.
let age=[12, 18, 25, 15, 30, 17, 22]
for (let i=1; i<age.length; i++){
    if (age[i]<18){
        continue
    }
    console.log(age[i])
}







