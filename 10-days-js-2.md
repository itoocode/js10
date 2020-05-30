### ... {#top}
6. [Higher-Order Functions](#6) 
7. [Returning vs Mutating](#7)
8. [Scope & Context](#8)
9. [Misc. Must know information](#9)
10. [Web Browser Practice](#10)


### 6. Higher-Order Function {#6}

A higher-order function is a function that either:
* Accepts a function as an argument
* Retruns a function

examples:
**A function that accepts another function as argument**

```js
document.addEventListener("click", ourFunction)

function ourFunction() {
    console.log("clicked");
}
```
We can say that `addEventListener` method is a higher-order function as it expects **second argument as a function**

**ex: function that returns a fn**

```js
function doubleMe(x) {
    return x * 2; //returns a  num
}

console.log(doubleMe(3) ); //6

function tripleMe(x) {
    return x * 3; //returns a  num
}

console.log(tripleMe(3) ); //9

```
// Lets create a higher-order fn
* `createMultiplier()` function returns a function
* we can return a func from a func and also we can assign a func to a variable 
* yes, in JS we can set a variable with function just like nums, strings, arr, obj
* functions are first class objects, we can pass as args or return
```js
function createMultiplier(multiplier) {
    return function(x) {  //returning a func
        return x * multiplier;  
    }
}

let doubleMe = createMultiplier(2);  // assigning a func to variable
let tripleMe = creteMultiplier(3);
let quadruple = createMultiplier(4);
```

More examples of hof 
* All arrays have **forEach()**- which takes in a  func and applies it each arr item.

* forEach() is a Higher-Order Func that is part of core javascript features.

* Two more mostly used HOF in arrayS are **map() and filter()**

```js
let colors = ['red', 'green', 'blue'];

colors.forEach(printColor);

function printColor(color) {
    console.log("the color "+ color + " is great color" );
}
```

> [Top](#top)
---

### 7. Returning vs Mutating {#7}

* Mutating means changing or modifying
* push methods modifies/ mutates the array and returns the no. of elements


```js
let pets = [
        {name: "Meowsalot", species: "cat", age: 2},
        {name: "Barksalot", species: "dog", age: 3},
        {name: "Purrsloud", species: "cat", age: 8}  
    ];

// arrys have access to methods

pets.push({name: "Puppster", species: "dog", age: 1});
```

* we can say push methods lives a double life: performs operation i.e. modifies arr and returns arr length
* Two array methods (map/filter)  that only **return a value not mutate**

Map is a HOF, does not mutate or change, just returns brand new arry.



```js
// printing just values in obj usng map

let pets = [
        {name: "Meowsalot", species: "cat", age: 2},
        {name: "Barksalot", species: "dog", age: 3},
        {name: "Purrsloud", species: "cat", age: 8}  
    ];

pets.push({name: "Puppster", species: "dog", age: 1});
//pushes new obj and returns length

let ourTest = pets.map(nameOnly)
//map returns a new array with four ele of "hello"
function nameOnly(x) {
    return "hello";
}


let ourTest = pets.map(nameOnly)
//map returns a new array with four ele of pet names

function nameOnly(pet) {
    // return "hello";
    return pet.name
}

console.log(ourTest);
//["Meowsalot", "Barksalot", "Purrsloud", "Puppster"]

```

Using **filter** method to get pets that are dog
* Filter also doesn't mutate, it **returns** a new arry

```js
let pets = [
        {name: "Meowsalot", species: "cat", age: 2},
        {name: "Barksalot", species: "dog", age: 3},
        {name: "Purrsloud", species: "cat", age: 8}  
    ];

pets.push({name: "Puppster", species: "dog", age: 1});

function nameOnly(pet){
  return pet.name;
}

let dogs = pets.filter(onlyDogs)

function onlyDogs(pet) { 
    return pet.species == "dog";
}

console.log(dogs)
// gives arr of two objs that are of dog species

function onlyBabies(pet) {
    return pet.age < 3;
}

let babyDogNames = pets.filter(onlyDogs) //filters/checks condition n returns dogs species
                       .filter(onlyBabies) // returns true if arr ele.age < 3
                       .map(nameOnly);

console.log(babyDogNames);
// ["Puppster"]

```

#### we learnt 
* push and pop methods in **array modify or mutate the array as well as return**
* push adds the ele and returns the length of arr, pop() removes the ele and returns the popped ele ie. the last array ele
* The filter and map methods only return new arrays based on the function passed;
* the map, maps every arr ele to the given func and returns a new array
* the filter, also maps through every ele but only returns the elems which satisfy the condition(truthy)

---

> [Top](#top)

## 8. Scope & Context {#8}

* **Scope** is the biggest source of confusion regarding **variables**.
* **Context** is the biggest source of confusion regarding **objects**.


##### Lets know about SCOPE >
```js
let myName = "Brad";

function printName(){
    console.log(myName);
}
printName();

```
The above code prits the name "Brad"

Lets make some changes to above code 
```js
function printName() {
    let myName = "Brad";
}

printName();

console.log(myName);

```
we can and error `Uncaught ReferenceError: myName is not defined`
* the var `myName` is in function scope , so we can't access outside i.e. the global scope
* Scope is like one way street, traffic flows in only one directin
* Code can reach **outwards** to access a variable but it cannot reach inwards

ex:
* looks in current scope, if not found goes above
* Note that the vaiables not updated, they are defined in each block scope
* `myName` is same identifier, but is of 3 diff scoped variables in each block
```js
let myName = "Brad";

function printName(){
    let myName = "b";
    // let says to create a new variable in this scope
    if(2 + 2 == 4) { 
        let myName = "john";
        console.log("inside if " + myName); // checks myName in if block
    }
    console.log("inside func scope " + myName);
}
printName();
console.log("inside global scope " + myName);

// o/p
// inside if john
// inside func scope b
// inside global scope Brad

```

To update a varialbe
```js
let myName = "Brad";

function printName(){
    if(2 + 2 == 4) { 
        myName = "Brad j";
        // just remove let to update the global var;
    }
}
printName();
console.log("inside global scope " + myName); 
```

Before let, we had `var`
Difference
* let uses block scope.
* **var uses function scope**.

```js
let myName = "Brad";

function printName() {
    if(2 + 2 == 4) { 
       let myName = "Brad j"; 
       // cant access in func scope
       // as let is block scope {}
       var myNmae = "aj";
       //can be accessed in func scope
    } 
}
printName();
console.log("inside global scope " + myName); 

```

Always use `let`, no `var`.

```js
let myName = "Brad";

function printName(){
    var myName = "b";
    if(2 + 2 == 4) { 
        var myName = "john";
        console.log("inside if " + myName); // checks myName in if block
    }
    console.log("inside func scope " + myName);
}
printName();
console.log("inside global scope " + myName);

//  o/p
// "inside if john"
// "inside func scope john"
// "inside global scope Brad"
```

##### Lets know about Context >

scope is about variables, Context is about objects

```js
let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        console.log(this.firstName + " " + this.lastName + " is driving car")
    }
}

john.driveCar()
// "John Doe is driving car"
```
* Above `this` keyword is referring to john object

lets change some code
```js
let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {

        function aMethod() {
            console.log(this);
        }
        aMethod(); // gives the global window object

        console.log(this.firstName + " " + this.lastName + " is driving car")
    }
}
john.driveCar() // "John doe ..."

```
NOTE:
* the this keyword does not point towards the **enclosing object** i.e. as in the john objects func, it points to window object .
* The **this** keyword points towards the **object** that is **executing** the current function.
  ```js
  aMethod();
  john.drive();
  ```

##### Why `this`
Imagine if there are 500 object and we want a method common to all objects, we have to write that func in every obj but we can use other method.

* lets use breathe func in john obj 
* In js fun is an object, and object has a method call
  `breathe.call(object)`

```js
let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {

        function aMethod() {
            console.log(this);
        }
        aMethod(); // gives the global window object

        console.log(this.firstName + " " + this.lastName + " is driving car")
    }
}
john.driveCar()

// its a standalone func
function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled")
}

// to use breathe func in john obj
// in js fun is an object, and object has a method call
breathe.call(john)

```
---

### 9. Misc. Must know information

* **Annonymous Function**
No function name ex: `function(){}`
lets use anonymous func which on body click gives msg

```js
document.addEventListener("click", function() {
    alert("body clicked")
})

```

* **Arrow Function**
() => {}
* we need paranthesis if no parameter or multiple params

```js
document.addEventListener("click", () => {
    alert("body clicked")
})

//if only one return
document.addEventListener("click", () =>  alert("body clicked"))

```

```js

let myNums = [10, 30, 50]

let doubledNums = myNums.map(function(x) {
    return x * 2
})

//single line
let doubledNums = myNums.map(x => return x * 2)

console.log(doubledNums)
// [20, 60, 100]

```
* Arrow function do not have their own new this keyword
* they use variable scope to find this , so john object is pointed

```js
let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {

        let aMethod = () => console.log(this); // gives john object
        aMethod();

        console.log(this.firstName + " " + this.lastName + " is driving car")
    }
}
john.driveCar() // "John doe ..."

```

**Function Hoisting**
* function is hoisted to top with names
* variables are not hoisted
```js
cool() // by func hoisting prints
function cool() {
    console.log("this is cool")
}
//--------

cool()// not hoisted error
let cool = function() {
    console.log("cool");
}
cool() // runs


// variables are not hoisted
console.log(count); //error
let count = 10;

```
**Template literals** ${expression}

```js
let name = "sam"

console.log("My name is " + sam + " from LA".)

console.log(`My name is ${name} from LA`.)
```
**Semi-colons**
Has automatic semicolons at end of line