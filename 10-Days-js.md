

## 10 Days of JS from [Youtube playlist](https://www.youtube.com/watch?v=dc-2t26Vuhs&list=PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs)  . {#top}

1. [Getting Started(values)](#1)
2. [Functions](#2)
3. [Objects](#3)
4. [Arrays](#4)
5. [Making Decisions](#5)
6. [Higher-Order Functions](#6)
7. [Returning vs Mutating](#7)
8. [Scope & Context](#8)
9. [Misc. Must know information](#9)
10. [Web Browser Practice](#10)

### 1. Getting Started {#1}

Open Google(any browser) and open console. (by right click inspect,then console or shortcut **`Ctrl+Shift+i`** )

> Note: Comment using double slash`//` in JS file

Doing Math:
```js
> 2 + 1
3

> 5 * 5
25
```

Storing Values:
```js
let myNumber = 10;
10 + myNumber; //17

let myName = "John"; // a string is stored
myName //"John"

// Adding/ Concatinating Strings
'Hello, my name is ' + myName + '.'
// "Hello, my name is Sam."

2 + 2 //4
// sum of Numbers 2+2=4

//Sum of strings gives string .i.e. Concating 
'2' + '2' // "22"
```
for strings use  single quote `' '` or double quote `" "`
Change Google page title
>type document, then dot(.) and **tab** to **AutoComplete**
```js
// get the title 
document.title 
// "Google"

//Set the title
document.title = "Javascript"

// Set/ change the Background Color of body
document.body.style.backgroundColor = 'red'
```

`document` is the inbuilt object in the browser like many more.

**let  identifier/label = value[string,number,...]**

we learnt how to create **variables** and **store** numbers/ strings in js

---
> [Top](#top)
### 2. Functions {#2}

why? To write multiple lines of code we use functions. Functions are like words which do certain action like run(), jump() etc..

Coding in https://codepen.io 

Definition:
`function Name( parameter ){ body of the function }`
Run `Name()`;



```js
alert("hello");
// inbuild function in browser

greet("hello");
// we need to create this function

function greet(){
    //body of the function
    alert("hello");
}
// this is just functin definition , to run use fn name

greet() // alerts hello

function greet(x){
    //body of the function
    alert("hello, iam " + x);
}

greet("sam"); //alerts "hello, iam sam

```
We can pass multiple parameters
```js
function greet(name, color){
    //body of the function
    alert("hello, iam " + name +
          " i like " + color + " color");
}

greet("sam", "red")
// Alerts hello, iam sam i like red color

```

Return from function
```js

function tripleMe(x) {
    return 3 * x;
}

let num = tripleMe(2);
alert(num); //6

```
we learnt how to
* create Functions using function definitions
* Runs by function name()
* Passing parameters to functions
* Returning values from Fn

---
> [Top](#top)

### 3. Objects {#3}

```js
let catName = "fluffy";
let catAge = 4;

function meow() {
    alert("Meoooww")'
}
meow()

```

Using object to create above code for better understanding

* the object properties are related, independent/ self contained , organised.

* object  contains **properties** and **methods**
```js
let cat = {
    // Properties
    name: "fluffy",
    age: 4,
    eyeColor: "blue",
    // Methods
    meow(){
        alert("meoowww");
    }
    // or
    meow: function() {
        alert("meoowwww");
    }
}

cat.age //4
cat.name // "fluffy"

```

* when a function is inside an object, we call it as **method**
* No need to code `function meow(){}` inside the object , as coded above use `meow(){..}`
  ```js
  let cat = {
    ...
    function meow(){
        alert("meoowww");
    }
    // Uncaught SyntaxError: Unexpected identifier
    // as function is used

    ```

Object inside object
```js
let cat = {
    name: "fluffy",
    age: 4,
    eyeColor: "blue",

    foods: {
        favorite: "Tuna",
        leastFavorite: "Oranges"
    },

    meow(){
        alert("meoowww");
    }
}

cat.foods.favorite // "Tuna"
cat["foods"]["favorite"] // "Tuna"
```
**Use dot for better readability**
* `cat["foods"]["favorite"] // "Tuna"`
* `cat.foods.favorite // "Tuna"`


##### alert message on body click
* hear to click event
* run function to handle

`document.addEventListener(event, function)`

```js
//CODE
document.addEventListener("click",alertOnClick)

function alertOnClick() {
    alert("Hello, clicked on page")
}

```

---

> [Top](#top)

### 4. Arrays {#4}

Arrays : a collection of items

create array by []
```js
let num = 7
let nums = [2,4,6,8];
let words = ["red", "green", "blue"]
let pets = [{name: "sam", species: "cat"}, {name: "john", speacies: "human"}]

```
##### Accesses array items
```js
nums[1] //4
pets[1].name // "john"
```

##### All arrays have inbuilt methods like push,pop etc
```js
words.push("yellow")
words.pop() // pops last arr ele
```
##### To remove green in array words
`arr.splice(index of item tobe removed ,how many items to removed from given index)`
```js
words.splice(1,1);
```
**Strings also have methods**
```js
let name = "sam"
name.toUpperCase() //SAM    
```
**Numbers methods**
```js
let num = 7.89;
console.log(num.toFixed()) // 8
```


Note: 
* Different types of Data types have diff inbuilt methods

---
> [Top](#top)

### 5. Making Decisions {#5}
* if else: check condition 
if( condition ) {}
<,>,==(check for equality), >= 

* while loop
```js
let numsCount = 20
if (numsCount > 9) {
    document.write("num > 9")
} else {
    document.write("Less than 9");
}
```
**Boolean**
let test = false
let test = true

**Boolean condition**
Based on boolean truthy value
```js
let count = 3;
if( count){
    document.write("Count > 0");
}
```

Run many Times
```
while true:
    do this
```
```js

document.write("1 hello ")
document.write("2 hello")
document.write("3 hello")

let count = 2;

while( count <= 200) {
 document.write(count + " hello<br>");
 count = count+1;
}
```
> [Top](#top)
---
