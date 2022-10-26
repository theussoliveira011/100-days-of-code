let s = "hello, world";

s.charAt(0); // -> "h" the first caractere
s.charAt(s.length - 1); // -> "d" the last caractere
s.substring(1, 4); // -> "ell": the 2°, 3° and 4° caractere
s.slice(1, 4); // -> "ell"
s.slice(-3); // -> "rld"
s.indexOf("l"); // -> 2 the position of first letter 'l'
s.lastIndexOf("l"); // -> 10 the last position
s.indexOf("l", 3); // -> 3 the position of first letter
s.split(", "); // -> ["hello", "world"]
s.replace("h", "H"); // -> "Hello World"
s.toUpperCase(); // -> "HELLO WORLD"
s[0]; // -> 'h'
s[s.length-1]; // -> 'd'

// Strings in javascript are immutables, the methods replace() and toUpperCase() return a new string
