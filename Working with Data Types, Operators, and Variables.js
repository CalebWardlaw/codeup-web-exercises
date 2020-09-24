var a = 1;
// logging a returns 1
var b = a++;
//logging b returns 1
//logging a again will return 2 due to post incrementation(a is modified after being called)
var c = ++a;
//logging c returns 3, incrementation is done pre variable call

var d = "hello"
var e = false;

d++;
//returns NaN, string cannot be incremented
e++;
//returns zero, might have force converted

var perplexed; // undefined
perplexed + 2;
// NaN

var price = 2.7;
price.toFixed(2);

isNaN(0)
//returns false because zero is always considered false
isNaN("")
//also returns false? why is this?
//returns it because it empty space is considered zero

var sample = "Hello Codeup";
sample.length;
//used to find the length of string
sample.toUpperCase();
//returns everything to uppercase
var add = " Students";
sample.concat(add);

//when replacing components of a variable, a new variable must be established to house the changes
//for .indexOf you must put the variable name prior to the dot to index it
var mermaid = 3;
var bear = 5;
var hercules = 1;
var total = (mermaid + bear + hercules) * 3;

var google = 400;
var amazon = 380;
var facebook = 350;
var week = (6 * google) + (4 * amazon) + (10 * facebook)

var x = "Class has space."
var y = " Schedule has space."
var enroll = x + y

offer applied = items purchased > 2 and offer is current

var items = (x>2)
var apply =