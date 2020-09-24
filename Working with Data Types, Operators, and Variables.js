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

var mermaid = 3;
var bear = 5;
var hercules = 1;
var total = (mermaid + bear + hercules) * 3;

var google = 400;
var amazon = 380;
var facebook = 350;
var week = (6 )