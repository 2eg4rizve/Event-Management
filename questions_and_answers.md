<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

Ans -> A: `{}`
<br>
Here we directly assigning an empty object ' {} ' to a variable called greetign without declaring it using let ,ver , const . But this will not result in an error .
<br>
In this case ,javaScript will implicitly create a global variable called greetign .

<br>

So , the correct ans is Option -> A : {}

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

Ans ->  C: `"12"`

<br>

in sum function we are trying to add a number 1 and a string "2" . the second argument is a string ,so javaScript performs string concatenation ,not addition so, the result is "12"
<br>
basically javaScript converts the number 1 into string and then performs string concatenation.
<br>
So , the correct ans is Option -> C: "12"
<br>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

Ans -> A: `['🍕', '🍫', '🥑', '🍔']`

The food array is not modified when you change the info.favoriteFood property. 
<br>
Since the food and info.favoriteFood variables are pointing to two different objects, changing the value of info.favoriteFood does not change the value of the food
<br>
Therefore, it remains the same with the original values: ["🍕", "🍫", "🥑", "🍔"].
<br>

So , the correct ans is Option -> A: `['🍕', '🍫', '🥑', '🍔']`



</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

Ans -> B: `Hi there, undefined`
<br>

This is because sayHi() function is called without passing any argument ,so the name parameter will have the value undefined.
<br>
when we call 'sayHi()' without passing any argument ,javaScript sets 'name' to 'undefined' beacuse no value was provided .
<br>
As a result , the function return Hi there, undefined .Because is is concatenating the string
"Hi there" with the value of name which is undefined.
<br>
So , the correct ans is Option -> B: Hi there, undefined
<br>
<br>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

Ans -> C: 3

Here count is initialized to 0.
<br>
the nums array contains the values [0,1,2,3].
<br>
The forEach method iterates through each element of the nums array using an arrow function.
<br>
0 is falsy, so count remains 0. <br>
1 is truthy, so count is incremented to 1. <br>
2 is truthy, so count is incremented to 2. <br>
3 is truthy, so count is incremented to 3. <br>

<br>
So , the correct ans is Option -> C: 3
<br>

</p>
</details>
