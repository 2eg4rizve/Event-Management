Project No : 2 .
Project Name : Social Events .
Project Link : https://assingnment-9.web.app

Project features :

• We can see many different kind of Social Events Services. <br>

• They are : Weddings , Birthday Parties , Anniversaries , Engagement Parties ,Retirement Parties,
Baby Shower , Holiday Party ,Corporate Event ,Cultural Event <br>

•We have very beautiful authentication ,registration,logging system.<br>

•User can easily registration using email or using google logging <br>

•User can easily login using email or using google logging.<br>

•User can easily see email name and image in navbar after they are login or register .<br>

•In project there are some private route . so that only authorized
person can see that information.<br>

•We can easily see Frequently Asked Questions by people.<br>

•When people login or register,people see his/her email address and picture in the navbar<br>

•In project there are beautiful banner section. here we see different kind of picture and they come one by one automatically and also have carousel button.<br>

•User can see service details when they are logged in in this site.<br>

•User can easily contact by using Contact Us session <br>

•We have a blog section and this is private route. here people can see different kind of blog and comment.<br>

•We have album section , and only authenticated person see this beautiful section.here different type picture have . and they are divided by category<br>

•In project there are Festive section . where we discuss Foods , Drinks ,Music,Dance ,Fun , Games etc .<br>





...
MCQ TEST




• 1
let greeting;
greetign = {};
console.log(greetign);

Option : 
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Ans -> A: {}

here we directly assigning an empty object ' {} ' to a variable called greetign without declaring it using  let ,ver , const . But this will not result in an error .In this case ,javaScript will implicitly create a global variable called greetign .

So , the correct ans is Option -> A : {} 





• 2
function sum(a, b) {
  return a + b;
}

sum(1, "2");

Option :
A: NaN
B: TypeError
C: "12"
D: 3

Ans -> C: "12"

in sum function we are trying to add a number 1 and a string "2" . the second argument is a string ,so javaScript performs string concatenation ,not addition so, the result is "12"
basically javaScript converts the number 1 into string and then performs string concatenation.

So , the correct ans is Option -> C: "12"



• 3


• 4
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

Option :
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Ans -> B: Hi there, undefined <br>

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


• 5
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

Option :
A: 1
B: 2
C: 3
D: 4

Ans -> C: 3

Here count is initialized to 0.
the nums array contains the values [0,1,2,3].
The forEach method iterates through each element of the nums array using an arrow function.
0 is falsy, so count remains 0.
1 is truthy, so count is incremented to 1.
2 is truthy, so count is incremented to 2.
3 is truthy, so count is incremented to 3.


So , the correct ans is Option -> C: 3


