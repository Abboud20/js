/* Tesk One */

// Variables
let firstName = "mitchell";
let lastName = "Samuel";
let age = 25;
let petName = "Fluffy";
let hobby = "football";
let favFood = "curd";
let occupation = "Software Developer";

/* Required Output
The new student of our javascript class is mitchel samuel. He is 25 years old and he has one pet named Fluffy. He likes to play football in the weekends and his fav food item is curd. Last but not least he is a software developer;
perform this task both in using template literal and in plane javascript
*/


/* Using Template Literals: */
console.log(`The new student of our JavaScript class is ${firstName} ${lastName}. He is ${age} years old and he has one pet named ${petName}. He likes to play ${hobby} on the weekends and his favorite food item is ${favFood}. Last but not least, he is a ${occupation}.`);

/* And we can use this way to output */

let output = `The new student of our JavaScript class is ${firstName} ${lastName}. He is ${age} years old and he has one pet named ${petName}. He likes to play ${hobby} on the weekends and his favorite food item is ${favFood}. Last but not least, he is a ${occupation}.`;

console.log(output);


//Using Plain JavaScript (Concatenation):

console.log("The new student of our JavaScript class is " + firstName + " " + lastName + ". He is " + age + " years old and he has one pet named " + petName + ". He likes to play " + hobby + " on the weekends and his favorite food item is " + favFood + ". Last but not least, he is a " + occupation + ".");

/* And we can use this way to output */

let output1 = "The new student of our JavaScript class is " + firstName + " " + lastName + ". He is " + age + " years old and he has one pet named " + petName + ". He likes to play " + hobby + " on the weekends and his favorite food item is " + favFood + ". Last but not least, he is a " + occupation + ".";

console.log(output1);



/* Tesk Two */

/* Define variables for name, favoriteColor, dreamJob, and city and log in console using both plane js and using template literals.  */

// Variables
let name = "Alice";
let favoriteColor = "blue";
let dreamJob = "astronaut";
let city = "Paris";

/* Required output
"Hello! My name is [name]. I live in [city], my favorite color is [favoriteColor], and I want to be a [dreamJob] one day!" */  


//Using Template Literals:

console.log(`Hello! My name is ${name}. I live in ${city}, my favorite color is ${favoriteColor}, and I want to be a ${dreamJob} one day!`);

/* And we can use this way to output */

let output2 = `Hello! My name is ${name}. I live in ${city}, my favorite color is ${favoriteColor}, and I want to be a ${dreamJob} one day!`;

console.log(output2);


// Using Plain JavaScript (Concatenation):

console.log("Hello! My name is " + name + ". I live in " + city + ", my favorite color is " + favoriteColor + ", and I want to be a " + dreamJob + " one day!");

/* And we can use this way to output */

let output3 = "Hello! My name is " + name + ". I live in " + city + ", my favorite color is " + favoriteColor + ", and I want to be a " + dreamJob + " one day!";

console.log(output3);



/* Tesk Three */

/* Define variables for productName, brand, price, and discount and log in console using both plane js and using template literals. */

// Variables
var productName = "Smartphone";
var brand = "TechCorp";
var price = 999;
var discount = 20;

/* Required output
"Check out our new [brand] [productName]! Originally priced at $[price], now with a [discount]% discount!" */

// Using Template Literals:
console.log(`Check out our new ${brand} ${productName}! Originally priced at $${price}, now with a ${discount}% discount!`);

/* And we can use this way to output */

let output4 = `Check out our new ${brand} ${productName}! Originally priced at $${price}, now with a ${discount}% discount!`;

console.log(output4);

// Plain JS (concatenation):
console.log("Check out our new " + brand + " " + productName + "! Originally priced at $" + price + ", now with a " + discount + "% discount!");

/* And we can use this way to output */

let output5 = "Check out our new " + brand + " " + productName + "! Originally priced at $" + price + ", now with a " + discount + "% discount!";

console.log(output5);



/* Tesk Four */

/* Step 1: Define variables for length and width */

// Variables
let length = 10;  // You can change this value
let width = 5;    // You can change this value

/* Step 2: Calculate the area using the formula: length * width. */

// Variables
let area = length * width;

/* Step 3: Calculate the perimeter using the formula: 2 * (length + width). */

// Variables
let perimeter = 2 * (length + width);

/* log the output in console as below
"The area of the rectangle is [area] and the perimeter is [perimeter]." */

// Using Template Literals:
console.log(`The area of the rectangle is ${area} and the perimeter is ${perimeter}.`);

/* And we can use this way to output */

let output6 = `The area of the rectangle is ${area} and the perimeter is ${perimeter}.`;

console.log(output6);

// Plain JS (concatenation):
console.log("The area of the rectangle is " + area + " and the perimeter is " + perimeter+ ".");

/* And we can use this way to output */

let output7 = "The area of the rectangle is " + area + " and the perimeter is " + perimeter+ ".";

console.log(output7);