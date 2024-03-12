var person_name = "Nida"; // This saves the name
console.log("Hello ".concat(person_name, ", would you like to learn some CSS today?")); // This shows the message
// ---------------------------------------------------------------------------------------------------------
var person_name = "Nida"; // This saves the name
console.log(person_name.toLowerCase()); // Shows the name in all small letters
console.log(person_name.toUpperCase()); // Shows the name in ALL BIG LETTERS
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()); // Shows the name with the First Letter Big
// ------------------------------------------------------------------------------------------------------------------------------------
console.log('Newtons once said, "For every action ther is an eaqual and opposite reaction."');
// ------------------------------------------------------------------------------------------------
var famous_person = "Newtons";
var message = "".concat(famous_person, " once said, \"For every action ther is an eaqual and opposite reaction.\"");
console.log(message);
// ---------------------------------------------------------------------------------------------------------
var person_name = "\t\n Nida \t\n"; // This saves the name with whitespace
console.log(person_name); // Shows the name with whitespace
console.log(person_name.trim()); // Shows the name without whitespace
// ---------------------------------------------------------------------------
console.log(5 + 3); // Addition
console.log(10 - 2); // Substraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// ---------------------------------------------------------------------------
console.log(5 + 3); // Addition
console.log(23 - 15); // Substraction
console.log(2 * 4); // Multiplication
console.log(32 / 4); // Division
// ---------------------------------------------------------------------------
var favoriteNumber = 4; // This saves your favorite number
console.log("My favorite number is ".concat(favoriteNumber, ".")); // This shows the message with your favorite number
// --------------------------------------------------------------------------------------------------------------
// Nida, 2024-03-05
// This program prints a personal message
var myName = "Nida";
console.log("Hello ".concat(myName, ", would you like to learn some CSS today?"));
// --------------------------------------------------------------------------------------------------------------
var names = ["Mehak", "Nazia", "Sobia"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// -----------------------------------------------------------------------------------------------------------------
var names = ["Mehak", "Nazia", "Sobia"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some CSS today?"));
}
// --------------------------------------------------------------------------------------------------------------------
let transports= ["Toyota motorcycle", "Yamha car", "bykia bicycle"]
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`)
})
// ----------------------------------------------------------------------------------------------------------------------
var guests = ["Newtons", "John Jackson", "Queen Victoria"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// ----------------------------------------------------------------------------------------------------------------------
var unableToAttend = "Newtons";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "John Jackson";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
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
var places = ["Sigapore", "China", "United States", "United Kingdom", "Island"];
console.log("Orignal order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Orignal order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Orignal order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
// ----------------------------------------------------------------------------------------------------------------------
let guests= ["Newtons", "John Jackson", "Queen Victoria", "Eda Yaldis", "Olevia Eric"]
console.log(`I am inviting ${guests.length} people to dinner.`)
// ----------------------------------------------------------------------------------------------------------------------
let countries= ["Singapore", "England", "Malayshia", "Europe", "India"]
console.log("Countries I'd like to visit:", countries)
// ----------------------------------------------------------------------------------------------------------------------
var book = (_a = {
    title: "The Horror Stories",
    author: "Minhaj Ali Askari",
    yearPublished: 1940
}, string = _a.title, string = _a.author, number = _a.yearPublished, _a);
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in\n").concat(book.yearPublished));
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
var fruits = ["orange", "apple", "papaya"];
console.log("Is 'orange' in fruits?");
console.log(fruits.includes("orange")); // True
// Test whether an item is not in a array
console.log("Is 'watermelon' not in fruits?");
console.log(!fruits.includes("watermelon")); // True
// ----------------------------------------------------------------------------------------------------------------------
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 10 points!");
}
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
// ----------------------------------------------------------------------------------------------------------------------
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 10 points for shooting the alien!");
}
else {
    console.log("You just earned 5 points.");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 10 points for shooting the alien!");
}
else {
    console.log("You just earned 5 points.");
}
// ----------------------------------------------------------------------------------------------------------------------
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 10 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 5 points.");
}
else if (alien_color == "red") {
    console.log("You earned 20 points.");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 10 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 5 points.");
}
else if (alien_color == "red") {
    console.log("You earned 20 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 10 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 5 points.");
}
else if (alien_color == "red") {
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
var userNames = ["admin", "neha", "iqra", "sobia", "laiba"];
userNames.forEach(function (userNames) {
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", welcome to my home."));
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
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 10) {
        suffix = "st";
    }
    else if (number === 20) {
        suffix = "nd";
    }
    else if (number === 30) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
// ----------------------------------------------------------------------------------------------------------------------
