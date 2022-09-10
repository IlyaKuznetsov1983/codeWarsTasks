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

let a = [30, 50, 80, 155, 777, -11];

let b = a.map(function(num) 

{return num * 2;

});

console.log(b);