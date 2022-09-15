// sum of two variables


// let a = 1;
// let b = 2;

 
//     let c = a + b ;


// console.log(c);


//.................................................................................

// multiplication of two variables

// let a = 100;
// let b = 33;
// let c = (a * b);
// console.log(c);


//.......................................................................................
//array addition
//Reduce



// let arr = [30, 50, 80, 155, 777];

// let result = arr.reduce(function(sum, elem)
// {
// return sum+elem;}, 0
// );

// console.log(result);


//.........................................................................................

//removing the first element of an array
 // Shift
 

// let arr = [30, 50, 80, 155, 777];

// arr.shift();

// console.log(arr);


//..........................................................................................

//adding an element to the end of an array

//Push



// let arr = [30, 50, 80, 155, 777];

// arr.push(333, 555)

// console.log(arr);


//....................................................................................

//adding an element to the beginning of an array


// let arr = [30, 50, 80, 155, 777];

// arr.unshift('Luk', 'Skywoker')

// console.log(arr);


//...........................................................................
// array method 
// map

// let a = [30, 50, 80, 155, 777, -11];

// let b = a.map(function(num) 

// {return num * 2;

// });

// console.log(b);

//..........................................
// cycle For


// let a = [30, 50, 80, 155, 777, -11];
// for (let i=0; i<a.length; i++){
//     a[i] = a[i] *2;
// }
//  console.log(a);


//...............................................
 
// This

// function Person(fn, ln) {
// 	this.first_name = fn;
// 	this.last_name = ln;

// 	this.displayName = function() {
// 		console.log(`Name: ${this.first_name} ${this.last_name}`);
// 	}
// }

// let person = new Person("John", "Reed");
// person.displayName();  // Prints Name: John Reed
// let person2 = new Person("Paul", "Adams");
// person2.displayName();  // Prints Name: Paul Adams
 

// TypeOf

function typeOfSum(a, b) {
	
	return typeof(a + b);

}
