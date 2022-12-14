const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.onclick = function () {
  const code = input.value;
  para.textContent = eval(code);
};

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function () {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  let string =
    this.name.first + " " + this.name.last + " is " + this.age + " years old. ";
  // define a variable that will contain the pronoun part of
  // the second sentence
  let pronoun;

  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    pronoun = "He likes ";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    pronoun = "She likes ";
  } else {
    pronoun = "They like ";
  }

  // add the pronoun string on to the end of the main string
  string += pronoun;

  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if (this.interests.length === 1) {
    string += this.interests[0] + ".";
  } else if (this.interests.length === 2) {
    string += this.interests[0] + " and " + this.interests[1] + ".";
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for (let i = 0; i < this.interests.length; i++) {
      if (i === this.interests.length - 1) {
        string += "and " + this.interests[i] + ".";
      } else {
        string += this.interests[i] + ", ";
      }
    }
  }

  // finally, with the string built, we alert() it
  alert(string);
};

Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};

Person.prototype.farewell = function () {
  alert(this.name.first + " has left the building. Bye for now!");
};

let person1 = new Person("Tammi", "Smith", 17, "female", [
  "music",
  "skiing",
  "kickboxing",
]);

///////////////// START FROM HERE //////////////////////
// Legacy object with arguments

// Much work
/*function Teacher(first, last, age, gender, interests, subject){
   this.name = {
     first, 
     last
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
   this.subject = subject; 
  }
*/

// Less work, more eficience to read the code.
function Teacher(first, last, age, gender, interests, subject) {
  //call() permit call a function definite in other scope, but in the  current scope.

  Person.call(this, first, last, age, gender, interests);
  // ********First argument `this` specific the value of a function. The rest must be call.
  this.subject = subject;
}

/* Define a prototip and reference of constructor of Teacher()*/

// Create a object `Person` with the same value of `Teacher` Object.

// The proprierties of `constructor` of `Teacher.prototype` now is equal  `Person()`
Teacher.prototype = Object.create(Person.prototype);

//In console `Teacher.prototype.constructor` return `Person()`
Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false, // so that it does not apper in 'for in' loop
  writable: true,
});
// In console `Teacher.prototype.constructor` return `Teacher()`

// Gift a Teacher() a new function greeting()

Teacher.prototype.greeting = () => {
  let prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My Name is " +
      prefix +
      " " +
      this.name.first +
      ", and I teach" +
      this.subject +
      "."
  );
};

// Create a instance of Teacher()
let teacher1 = new Teacher(
  "Dave",
  "Griffiths",
  31,
  "male",
  ["football", "cookery"],
  "mathematics"
);

// Practice

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

// The property `constructor` now is the same of `Person` 
Student.prototype = Object.create(Person.prototype);

// Define property `constructor` of `Student` 
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false, // so that it does not apper in 'for in' loop
  writable: true,
});

Student.prototype.greeting = () => {
  let prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "He calls";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "She calls";
  } else {
    prefix = "Calls";
  }

  alert(prefix + " " + this.name.first);
};

let student1 = new Student("Dave", "Griffiths", 31, "male", [
  "football",
  "cookery",
]);
