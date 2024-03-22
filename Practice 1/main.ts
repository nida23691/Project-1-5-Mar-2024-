let person_name= "Nida" // This saves the name
console.log(`Hello ${person_name}, would you like to learn some CSS today?`) // This shows the message
// ---------------------------------------------------------------------------------------------------------
let person_name= "Nida" // This saves the name

console.log(person_name.toLowerCase()) // Shows the name in all small letters
console.log(person_name.toUpperCase()) // Shows the name in ALL BIG LETTERS
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()) // Shows the name with the First Letter Big
// ------------------------------------------------------------------------------------------------------------------------------------
console.log('Newtons once said, "For every action ther is an eaqual and opposite reaction."')
// ------------------------------------------------------------------------------------------------
let famous_person= "Newtons"
let message= `${famous_person} once said, "For every action ther is an eaqual and opposite reaction."`

console.log(message)
// ---------------------------------------------------------------------------------------------------------
let person_name= "\t\n Nida \t\n" // This saves the name with whitespace

console.log(person_name) // Shows the name with whitespace
console.log(person_name.trim()) // Shows the name without whitespace
// ---------------------------------------------------------------------------
console.log(5 + 3) // Addition
console.log(10 - 2) // Substraction
console.log(4 * 2) // Multiplication
console.log(16 / 2) // Division
// ---------------------------------------------------------------------------
console.log(5 + 3) // Addition
console.log(23 - 15) // Substraction
console.log(2 * 4) // Multiplication
console.log(32 / 4) // Division
// ---------------------------------------------------------------------------
let favoriteNumber= 4 // This saves your favorite number
console.log(`My favorite number is ${favoriteNumber}.`) // This shows the message with your favorite number
// --------------------------------------------------------------------------------------------------------------
// Nida, 2024-03-05
// This program prints a personal message
let myName= "Nida"
console.log(`Hello ${myName}, would you like to learn some CSS today?`)
// --------------------------------------------------------------------------------------------------------------
let names= ["Mehak", "Nazia", "Sobia"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}
// -----------------------------------------------------------------------------------------------------------------
let names= ["Mehak", "Nazia", "Sobia"]
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some CSS today?`)
}
// --------------------------------------------------------------------------------------------------------------------
let transports= ["Toyota motorcycle", "Yamha car", "bykia bicycle"]

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`)
})
// ----------------------------------------------------------------------------------------------------------------------
let guests= ["Newtons", "John Jackson", "Queen Victoria"]

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
// ----------------------------------------------------------------------------------------------------------------------
let unableToAttend= "Newtons"
console.log(`${unableToAttend} can't make it to dinner.`)

// Replace the guest
let newGuest= "John Jackson"
guests[guests.indexOf(unableToAttend)] = newGuest

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
// ----------------------------------------------------------------------------------------------------------------------
let guests= ["Newtons", "John Jackson", "Queen Victoria"]
console.log("Great news! I found a bigger dinner table!")

// Adding more guests
guests.unshift("Maria Epic")
guests.splice(guests.length / 2, 0, "Olevia David")
guests.push("Eda Yaldis")

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
// ----------------------------------------------------------------------------------------------------------------------
console.log("Unfortunately, I can only invite two people for dinner.")

while (guests.length > 2) {
    let removedGuest = guests.pop()
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`)
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`)
})

guests.splice(0, guests.length)
console.log(guests) // Shows an empty list
// ----------------------------------------------------------------------------------------------------------------------
let places= ["Sigapore", "China", "United States", "United Kingdom", "Island" ]

console.log("Orignal order:", places)

console.log("Alphabetical order:", [...places].sort())

console.log("Orignal order:", places)

console.log("Reverse alphabetical order:", [...places].sort().reverse())

console.log("Orignal order:", places)

places.reverse()
console.log("Reversed order:", places)

places.reverse()
console.log("Original order:", places)

places.sort()
console.log("Alphabetical order:", places)

places.reverse()
console.log("Reverse alphabetical order:", places)
// ----------------------------------------------------------------------------------------------------------------------
let guests= ["Newtons", "John Jackson", "Queen Victoria", "Eda Yaldis", "Olevia Eric"]
console.log(`I am inviting ${guests.length} people to dinner.`)
// ----------------------------------------------------------------------------------------------------------------------
let countries= ["Singapore", "England", "Malayshia", "Europe", "India"]
console.log("Countries I'd like to visit:", countries)
// ----------------------------------------------------------------------------------------------------------------------
let book= { title: string; author: string; yearPublished: number } = {
    title: "The Horror Stories",
    author: "Minhaj Ali Askari",
    yearPublished: 1940
}
console.log(`Book Info: ${book.title} by ${book.author}, published in
${book.yearPublished}`)
// ----------------------------------------------------------------------------------------------------------------------
let friends = ["John", "Eda", "Maria"]

console.log(friends[3]) // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Maria" // Correcting the error by accessing a valid index.
// ----------------------------------------------------------------------------------------------------------------------
let car= 'mehran'

console.log("Is car == 'mehran'? I predict True.")
console.log(car == 'mehran') // True

console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda') // False

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// ----------------------------------------------------------------------------------------------------------------------
// Equality with strings
console.log("Testing equality with strings:");
console.log("orange" == "orange"); // True
console.log("orange" == "orange"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Orange".toLowerCase() == "orange"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(20 > 15); // True
console.log(4 < 3); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["orange", "apple", "papaya"];
console.log("Is 'orange' in fruits?");
console.log(fruits.includes("orange")); // True

// Test whether an item is not in a array
console.log("Is 'watermelon' not in fruits?");
console.log(!fruits.includes("watermelon")); // True
// ----------------------------------------------------------------------------------------------------------------------
let alien_color = "green"
if (alien_color == "green") {
    console.log("You just earned 10 points!")
}

alien_color = "red"
if (alien_color == "green") {
    // No output because the condition is false
}
// ----------------------------------------------------------------------------------------------------------------------
alien_color = "green"
if (alien_color == "green") {
    console.log("You just earned 10 points for shooting the alien!")
} else {
    console.log("You just earned 5 points.")
}

alien_color = "yellow"
if (alien_color == "green") {
    console.log("You just earned 10 points for shooting the alien!")
} else {
    console.log("You just earned 5 points.")
}
// ----------------------------------------------------------------------------------------------------------------------
alien_color = "green"
if (alien_color == "green") {
    console.log("You earned 10 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 5 points.")
} else if (alien_color == "red") {
    console.log("You earned 20 points.")
}

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 10 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 5 points.");
} else if (alien_color == "red") {
    console.log("You earned 20 points.");
}

alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 10 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 5 points.");
} else if (alien_color == "red") {
    console.log("You earned 20 points.");
}
// ----------------------------------------------------------------------------------------------------------------------
let age: number = 28;

if (age < 4) {
    console.log("The person is a baby.");
} else if (age < 8) {
    console.log("The person is a toddler.");
} else if (age < 14) {
    console.log("The person is a kid.");
} else if (age < 24) {
    console.log("The person is a teenager.");
} else if (age < 70) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
// ----------------------------------------------------------------------------------------------------------------------
let favorite_fruits: string[] = ["watermelon", "papaya", "orange"];

for (let i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == "watermelon") {
        console.log("watermelon is available");
    }
    else if (favorite_fruits[i] == "papaya") {
        console.log("papaya is available");
    }
    else if (favorite_fruits[i] == "orange") {
        console.log("orange is available");
    }
    else {
        console.log("that fruit does not available");
    }
}
// ----------------------------------------------------------------------------------------------------------------------
let userNames: string[] = ["admin", "neha", "iqra", "sobia", "laiba"];

userNames.forEach(userNames => {
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userNames}, welcome to my home.`);
    }
});
// ----------------------------------------------------------------------------------------------------------------------
let usernames: string[] = [];

if (usernames.length === 1) {
    console.log("We need to find some users!");
} else {
    // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
// ----------------------------------------------------------------------------------------------------------------------
let current_names: string[] = ["nazia", "admin", "ayeza", "noreen", "rabia"];
let new_names: string[] = ["fiza", "huda", "hadaf", "sadaf", "shibra"];

new_names.forEach(newName => {
    if (current_names.some(currentName => currentName.toLowerCase() === newName.toLowerCase())) {
        console.log(`${newName} will need to enter a new username.`);
    } else {
        console.log(`${newName} is available.`);
    }
});
// ----------------------------------------------------------------------------------------------------------------------
let numbers: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 10) {
        suffix = "st";
    } else if (number === 20) {
        suffix = "nd";
    } else if (number === 30) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
// ----------------------------------------------------------------------------------------------------------------------
let pizzas: string[] = ["fajita", "cheesi pizza", "malai boti"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
// ----------------------------------------------------------------------------------------------------------------------
let animals: string[] = ["duck", "cow", "pigeon"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// ----------------------------------------------------------------------------------------------------------------------
function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("large", "Life is Coding without experience");
// ----------------------------------------------------------------------------------------------------------------------
function make_shirt(size: string = "medium", message: string = "I love CSS") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("small"); // Default message, medium size
make_shirt("large", "Coding is my passion"); // Custom message, small size
// ----------------------------------------------------------------------------------------------------------------------
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Hyderabad");
describe_city("Islamabad");
describe_city("China", "Korea");
// ----------------------------------------------------------------------------------------------------------------------
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("China", "Korea"));
console.log(city_country("London", "Singapore"));
// ----------------------------------------------------------------------------------------------------------------------
function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 44));
// ----------------------------------------------------------------------------------------------------------------------
let magicians: string[] = ["John", "Eda", "Maria"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
// ----------------------------------------------------------------------------------------------------------------------
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Love Ones CSS";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
// ----------------------------------------------------------------------------------------------------------------------
let magicians: string[] = ["John", "Eda", "Maria"];

function make_great(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} The Love Once CSS`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Real magicians:");
show_magicians(magicians); // Shows original names
console.log("Unique magicians:");
show_magicians(greatMagicians); // Shows modified names
// ----------------------------------------------------------------------------------------------------------------------
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("zinger", "kabab");
make_sandwich("japan", "boti", "chicken");
make_sandwich("shimla", "chatpata", "maiyonese", "chilli");
// ----------------------------------------------------------------------------------------------------------------------
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Honda", "Mehran", ["color", "black"], ["year", 2021]));
console.log(make_car("Civics", "Sanobar", ["color", "yellow"], ["sunroof", true]));
// ----------------------------------------------------------------------------------------------------------------------
let laptop = {
    make: "hp",
    model: "4th Generation",
    year: 2022,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
// ----------------------------------------------------------------------------------------------------------------------
let laptops = [
    { make: "hp", model: "4th Generation", year: 2022 },
    { make: "lenovo", model: "3rd Generation", year: 2021 },
    { make: "thinkpad", model: "5th Generation", year: 2020 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
// ----------------------------------------------------------------------------------------------------------------------
let pricesSet1 = [1400, 1700, 1300];
let pricesSet2 = [3000, 1500, 1800];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
// ----------------------------------------------------------------------------------------------------------------------
// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}

// Calls the function with three hobbies
logHobbies("Music", "Playing Games", "My Hard Work");
// ----------------------------------------------------------------------------------------------------------------------
// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Early morning prayer.
2. Each time is about pets time.
3. Recently 12 hours fasting.`;

// Logging the multiline string to the console
console.log(myIdealDay);
// ----------------------------------------------------------------------------------------------------------------------
// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(10, 100)); // Logs the area of the rectangle
// ----------------------------------------------------------------------------------------------------------------------
// Sets up details about a smartphone
let smartphone = {
    make: "OPPO",
    model: "Af17",
    specs: {
        storage: "10GB",
        screenSize: "4.2 inches",
        batteryLife: "14 hours"
    }
};

// Shows what we've set up about the smartphone
console.log(smartphone);
// ----------------------------------------------------------------------------------------------------------------------
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["C++", "Rust", "CSS"],
    frameworks: ["Action", "Singular", "Yahoo"],
    tools: ["Fiverr", "Trick", "Greek"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
// ----------------------------------------------------------------------------------------------------------------------
// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("light", "light-screen");

// Showing the user's choice
console.log(userPreference);
// ----------------------------------------------------------------------------------------------------------------------
// Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5];

// Doubles each number
let doubledNumbers = numbers.map(number => number * 2);

// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
// ----------------------------------------------------------------------------------------------------------------------
// A mixed bag of items
let mixedArray = [1, "orange", 2, "papaya", true, "watermelon"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["orange", "papaya", "watermelon"]
// This line checks each item: if it's a word, it goes into the new list.
// ----------------------------------------------------------------------------------------------------------------------
// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
// ----------------------------------------------------------------------------------------------------------------------
// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
// ----------------------------------------------------------------------------------------------------------------------
// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}

// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
// ----------------------------------------------------------------------------------------------------------------------
// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "Eda";
    let age = 24;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
// ----------------------------------------------------------------------------------------------------------------------
// Making a list (enum) for different types of vehicles
enum VehicleType {
    Car,
    Truck,
    Motorcycle
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
// ----------------------------------------------------------------------------------------------------------------------
// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "Maria",
    age: 19,
    courses: ["Physics", "Social Studies", "English"]
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
// ----------------------------------------------------------------------------------------------------------------------
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 10
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 15,
    height: 25
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
// ----------------------------------------------------------------------------------------------------------------------
