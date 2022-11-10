# 100-days-of-code

# JavaScript

## Purpose this
This study has been developed in a conjunction with a book "JavaScript - O Guia Definitivo", "Use your head!Javascript" and the MDN Documentation with a purpose to learn more about the using of JavaScript.

### Reserved Words
```shell
 break case catch continue debugger default delete
 do else false finally for function if in instanceof 
 new null return switch this throw true try typeof
 var void while with class const enum export
 extends import super
 ```
### Reserved words in restrict mode
```shell
  implements interface let package
  private protected public static
  yield arguments
```

### `Math` JavaScript
```javascript
  Math.pow(2,53) // 9007199254740992 -> The same thing: 2 ** 53;
  Math.round(.6) // 1 -> around to the int more close.
  Math.ceil(.6) // 1 -> around to the next int
  Math.floor(.6) // 0 -> around to the less int
  Math.abs(-5) // 5 -> absolut value
  Math.max(x, y, z) // return the max value of arguments
  Math.min(x, y, z) // return the min value of arguments
  Math.random() // generate a random number 0 < x < 1.0
  Math.PI // return value of pi
  Math.E // return the base of log
  Math.sqrt(3) // return the square root of 3
  Math.sin(0) // Trigonometry: also -> Math.cos, Math.atan, etc.
  Math.log(10) // Log natural of 10
  Math.log(100)/Math.LN10 // Log of base 10 of 100
  Math.exp(3) // Math.E³
```

### `Strings` JavaScript

```javascript
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
```

### `Date` JavaScript
```javascript
let later = new Date(2010, 0, 1, 17, 10, 30); // The same day, 5:10:30 afternoon, local hour.

later.getFullYear(); // 2010
later.getMonth(); // 0
later.getDate(); // 1
later.getDay(); // 5
later.getHours(); // 17
later.getUTCHours(); // Hour em UTC
later.toString(); // "Fri, 01 Jan 2010 19:10:30 GMT"
later.toUTCString(); // "Fri, 01 Jan 2010 19:10:30 GMT"
later.toLocaleDateString(); // "01/01/2010"
later.toLocaleTimeString(); // "05:10:30 PM"
later.toISOString(); // "2010-01-02T01:10:000Z"
```

### `ParseInt()` and `ParseFloat` 
```javascript
  parseInt("3 blind mice") // => 3
  parseFloat("3.14 meters") // => 3.14
  // parseInt() accept a second argument that is the base
  parseInt("11", 2) // => 3 (1*2+1);
  parseInt("ff", 16) // => 255 (15*16+15);
```

### Convert object in a value primitive
```javascript
  // toString() method.
  ({x:1, y: 2}).toString(); // => "[object Object]"
  [1,2,3].toString() // => "1,2,3"
  (function(x){f(x);}).toString() // => "function(x){\n f(x);\n";
  /\d+/g.toString() // => "/\\d+/g"
  new Date(2010, 0, 1).toString() // => "Sexta-Feira 01 de Janeiro de 2010 00:00:00 GMT-0800 (PST)"
  // valueOf() method
  var d = new Date(2010, 0, 1);
  d.valueOf() // => 126233280000
  
  var now = new Date();
  typeof(now + 1) // => "string": + convert dates to strings
  typeof(now - 1) // => "number": - use convertion of object for number.
  now == now.toString() // => "true": convertions of strings implict and explicit
  now > (now - 1) // => "true": convert a object date in number.
```

### Scope of variables
```javascript
var scope = "global";
function checkScope(){
  var scope = "local";
  return scope; // => return the value local not the global.
}
checkScope(); // => "local"
///////////////////////////////////////////////////////////
var scope = "global scope";
function checkScope(){
  var scope = "local scope";
  function nested(){
    var scope = "nested scope";
    return scope;
  }
  return nested();
}
checkScope(); // => "nested scope"
///////////////////////////////////////////////////////////
var scope = "global";
function f(){
  console.log(scope); // => "undefined"
  var scope = "local";
  console.log(scope); // => "local"
}
///////////////////////////////////////////////////////////
function f(){
  var scope;
  console.log(scope); // => "undefined"
  scope = "local";
  console.log(scope); // => "local"
}
```

### Variables how propriets
```javascript
var truevar = 1; // => don't be exclude with 'delete'

fakevar = 2; // => can be exclude
/*`this` permit specify the object `global`*/
this.fakevar2 = 3; // => make the same thing.

delete truevar // => false
delete fakevar // => true
delete this.fakevar2 // => true
```