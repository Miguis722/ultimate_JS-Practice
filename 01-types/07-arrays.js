let singers = ['Fleetwood', 'Childish'];

console.log(singers);
console.log(singers[0]);
console.log(singers[1]);

// If we are going to add a new data inside of the group
singers[2] = 'Weeknd';
console.log(singers)

//  Array inside of JS acts like a objects
console.log(typeof singers);

// How many elements contents an array
console.log(singers.length)

// For use the example of behind, im going to do a new situation
// In this situation i add a new singer, but in the position 10.

singers[10] = 'Joji';
console.log(singers)

// The console gonna give us, the sign that the array contains 7 empty slots (without information).
// but in the position 10, gonna be the singer that i add.

/*
When we expand the console to see the array of singers, we are going to see in the correct order
0: Fleetwood
1: Childish
2: Weeknd
10: Joji*/
console.log(singers.length)