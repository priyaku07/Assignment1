//Assignment 1: Array Operations

//1. Create an empty array called "fruits".
//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange"
let fruits = [ "apple", "banana", "orange"]; 
console.log(fruits);   //     Output -["apple","banana","orange"]

//3. Remove the first fruit from the array
fruits.shift();
console.log(fruits);  //Output - ['banana', 'orange']

//4. Add "grape" to the end of the array
fruits.push('grape');
console.log(fruits);   //Output - ['banana', 'orange', 'grape']

//5.Update the second fruit in the array to "pear"
fruits[1]= 'pear';
console.log(fruits);  // Output -  ['banana', 'pear', 'grape']

//6.Print the final "fruits" array after performing the above operations -  Output -  ['banana', 'pear', 'grape']


//Assignment 2: Object Operations

//1. Create an empty object called "person"
let person = {
    name: "John",
    age: 30,
    city: "New York",
}
console.log(person);   //Output - {name: 'John', age: 30, city: 'New York'}

//3. Remove the "age" property from the "person" object
delete person.age;
console.log(person);   // Output - {name: 'John', city: 'New York'}

//4. Add a new property called "job" with the value "Engineer" to the "person" object
person.job = "Engineer";
console.log(person);   // Output - {name: 'John', city: 'New York', job: 'Engineer'}

//5.  Update the "city" property of the "person" object to "San Francisco"
person.city="San Francisco";
console.log(person);   //Output - {name: 'John', city: 'San Francisco', job: 'Engineer'}

//6.Print the final "person" object after performing the above operations - /Output - {name: 'John', city: 'San Francisco', job: 'Engineer'}

//Assignment 3: Array of Objects Operations

//1. Create an empty array called "cars"
let cars=[];

//2. Add three car objects to the "cars" array. Each car object should have the following properties:
cars.push(
{
    make: "Toyota",
    model: "Camry",
    year: 2018

},{
    make: "Ford",
    model: "Mustang",
    year: 2019
},{
    make: "Honda",
    model: "Accord",
    year: 2020
}
);
console.log(cars); // Output - 0 {make: 'Toyota', model: 'Camry', year: 2018} 1: {make: 'Ford', model: 'Mustang', year: 2019} 2: {make: 'Honda', model: 'Accord', year: 2020}

//3. Remove the first car object from the "cars" array
cars.shift();
console.log(cars); // Output  - 0: {make: 'Ford', model: 'Mustang', year: 2019} 1: {make: 'Honda', model: 'Accord', year: 2020}

//4.Add a new car object to the "cars" array with the following properties:- make: "Honda" - model: "Civic"- year: 2020
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
})
console.log(cars); // Output- 0: {make: 'Ford', model: 'Mustang', year: 2019} 1: {make: 'Honda', model: 'Accord', year: 2020} 2: {make: 'Honda', model: 'Civic', year: 2020}

//5. Update the "model" property of the second car object in the array to "Accord
cars[1].model="Accord";
console.log(cars); // Output - 0: {make: 'Ford', model: 'Mustang', year: 2019} 1: {make: 'Honda', model: 'Accord', year: 2020} 2: {make: 'Honda', model: 'Civic', year: 2020}

//6. Print the final "cars" array after performing the above operations --output - 0: {make: 'Ford', model: 'Mustang', year: 2019}1: {make: 'Honda', model: 'Accord', year: 2020}2: {make: 'Honda', model: 'Civic', year: 2020}