// Understanding what is going on
var x = [2,4,6]; // What does this say?  Creating and var called x setting it to an array
console.log(x); // What will this do?    Log out the value of x


// Index
var y = [1,3,4];  // Creating a var called y setting it to an array
console.log(y[0]);  // Logging out the value of y at the 1st index

// Using index to change the array
var z = [5,6,9];
console.log(z);
z[0] = z[2]; // What is this saying?  value of z at 1st index to now = the value of z at the 3rd index
console.log(z); // What will be printed  

// .length

var a = [6,24,50]; // 
var b = a.length; // What is this saying and doing?  var b = the length of the array a
// console.log(b); // What will be printed and why?
// Think of each number as an item in the array not a number

var c = ["Hello", "There", "Houston"]; 
var d = c.length;
console.log(d); // Why does this print 3 as well?  Because if we think of them as items there are 3 items in the array

var e = ["Hello", "I", "am", 42];
var f = e.length;
console.log(f); // What will this print and why?  There are 4 items in the array so as f is asking for the length it will print 4.  It doesn't matter if they are strings or numbers
console.log(e); // This will just print the whole array

var g = [1,3,4,5];   // creating a variable g with an array
var temp = g[g.length-1]; // creating a variable temp and pull out the last index
g[g.length-1] = g[0]; // make the last index = 1st index
console.log(g);

var h = [1,3,4,5];
h.push(24);  // Add a new index to the end.
console.log(h); // [1,3,4,5,24]

// h.pop(); // Takes last index off
console.log(h); // [1,3,4,5]

h.push(24); // Add 24 to the end
h.push(8);  // Add 8 to the end
console.log(h); // [1,3,4,5,24, 8]
h.pop();
console.log(h);  // [1,3,4,5,24]

var counter = 4; // creating var counter setting = 4
if(counter < 10) {  // if counter is less than 10
   console.log('less than 10') // then log 'less than 10'
} else {  // otherwise 
  console.log('greater than or equal to 10') // log 'greater than or equal to 10'
}

var j = [2,5,7,0,6];
var counter = 2;
if(j[counter] > 10) { // if j at index 2 greater 10
  console.log('HI') // log 'HI'
} else { // otherwise
  console.log('Goodbye') // log "Goodbye"
}

var count = 0; 
if(j[count] > 0) { // if j[0] > 0
  console.log('Hello There!');  // Log 'hello there'
  count = count + 1; // count (0) = count(0) + 1
} 
console.log(j[count]); // log j at index of count (0 if the if statement was false otherwise 1)

var count = 2; // Set count to 2
if(j[count] === 0) { // check if j[2] = 0
  console.log('Hello There!'); // log 'Hello there'
  count = count + 1; // increase the count by 1
}
console.log(j[count]) // log j at the index 2

// the above will only print 7 not Hello there becasue when it checked if j[2] was = 0 it was false so then moved on to the next statement

var count = 0; 
if(!j[count] > 0) { // if j[0] is NOT > 0
  console.log('Hello There!');  // skips this as the above is false
  count = count + 1; // 
} 
console.log(j[count]); // log j at index of count (0 if the if statement was false otherwise 1)