// Create a var to store name

var name = prompt("What is your name?");

// slice the first letter

var firstChar = name.slice(0,1);

// capitalize first letter

var upperCaseFirstChar = firstChar.toUpperCase();

// isolate rest of name

var restOfName = name.slice(1,name.length);

// lowercase restOfName

var lowerCaseRestOfName = restOfName.toLowerCase();

// concatenate the fristChar and restOfName

var capitalizedName = upperCaseFirstChar + lowerCaseRestOfName;

// log the result

alert("Hello, " + capitalizedName);



// ----------------------------------------------------------------

// Creating a Variable

var name = prompt("What is your name?");

// alert Hello, Name.

alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,).toLowerCase()+".")