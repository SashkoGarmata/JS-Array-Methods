//we will check and apply the most used array methods in this section

//console.log(arr) can be used to check the result on the page 

//--represents the topics covered

//>> represents the examples


                                    //1. METHODS FOR ADDING\DELETING ELEMENTS
// --arr.push(...items) – add elements in the end,
// --arr.pop() – delete last element,
// --arr.shift() – delete first element,
// --arr.unshift(...items) – add elements in the begining.
// --splice(pos, deleteCount, ...items) – starting from the pos index, deletes deleteCount elements and inserts items.
// --concat(...items) – returns a new array: copies all the members of the current array and adds items to it. If any of the items is an array, then its elements are taken.

let arr = ["It's", "time", "to", "learn", "Java"];
arr.pop();
// >> now arr looks like this ["It's", 'time', 'to', 'learn']
arr.push("Javascript");
// >> now arr looks like this ["It's", 'time', 'to', 'learn', 'Javascript']
arr.shift();
// >> now arr looks like this ['time', 'to', 'learn', 'Javascript']
arr.unshift("It is");
// >> now arr looks like this ['It is', 'time', 'to', 'learn', 'Javascript']
arr.splice(0, 5, "We're", "Learning", "Array", "Methods");
// >> starting from index 0 (which is the first element in the array) we deleted 5 elements from the array(which in this case is everything we had in the Array) and added new elements ("We're", " "Learning", "Array", "Methods"). Now array looks like this: ['Learning', 'Array', 'Methods']
let arr1 = ["today", "and", "it's", "very", "easy"];
let arr2 = arr.concat(arr1)
// >> for this one we have creates a new varialbe arr1 that stores an array we will concat with our original array (arr). The output now will be ["We're", 'Learning', 'Array', 'Methods', 'today', 'and', "it's", 'very', 'easy']
console.log(arr2)


                                    //2. METHODS TO SEARCH AMONG ELEMENTS:
// --indexOf/lastIndexOf(item, pos) - Looks for item starting at position pos and returns its index, or -1 if none is found.
// --includes(value) - returns true if the array contains a value element, false otherwise.
// --find/filter(func) - filters elements through a function and returns the first/all values that pass through the function to return true.
// --findIndex is similar to find but returns an index instead of a value.


// >> The arr.indexOf, arr.lastIndexOf, and arr.includes methods have the same syntax and do essentially the same thing as their string counterparts, but operate on elements instead of characters:
let arrSearch = [1, 0, false];
arrSearch.indexOf(0); // 1
arrSearch.indexOf(false); // 2
arrSearch.indexOf(null); // -1
arrSearch.includes(1); // true

//let's check this one on the array we had previously
console.log(arr2.indexOf("and"))//will return 5 as it is the fifth element
console.log(arr2.lastIndexOf("and"))//will return 5 as well by the lase reason
console.log(arr2.includes("React"))//Will return 'false' as there is no such element in the Array

// >> Imagine we have an array of objects. How can we find an object with a certain condition? This is where the arr.find method comes in handy. If the function returns true, the search is aborted and item is returned. If nothing is found, undefined is returned.

let users = [
    {id: 1, name: "Jay"},
    {id: 2, name: "May"},
    {id: 3, name: "Dave"}
  ];
let user = users.find(item => item.id == 1); //for the assigned User variable it will now return "Jay" 
console.log(user.name) 

// >> The arr.findIndex method is essentially the same, but returns the index at which the element was found, not the element itself, and -1 if none was found.

// >> The find method looks for one element on which the callback function will return true.In case there can be many elements found, the arr.filter(fn) method is provided.
let someUsers = users.filter(item => item.id < 3); //for the newly assigned variable we will now have filtered arr of objects with an id less than three. Thus, the output:
// {id: 1, name: 'Jay'} {id: 2, name: 'May'}
console.log(someUsers) 


                                    //3. METHODS TO ITERATE OVER ELEMENTS:
// --The arr.forEach method allows to run a function for each element in an array. 
// >> arr.forEach(function(item, index, array) {
  // ... do smth with item
//});
let parkerFamily = ["Ben Parker", "May Parker", "Peter Parker"];
parkerFamily.forEach((item, index, array) => {
    console.log(`${item} hes the position of ${index} in ${array}`);
  });
//output:
// Ben Parker hes the position of 0 in Ben Parker,May Parker,Peter Parker
// May Parker hes the position of 1 in Ben Parker,May Parker,Peter Parker
// Peter Parker hes the position of 2 in Ben Parker,May Parker,Peter Parker

//4. METHODS TO CONVERT AN ARRAY:
// --map(func) - creates a new array from the results of calling func for each element.
// --sort(func) sorts an array in place and then returns it.
// --reverse() - "in place" reverses the order of the elements and returns the modified array.
// --split/join - converts a string to an array and vice versa.
// --reduce(func, initial) - Calculates one value from the entire array, calling func on each element and passing the intermediate result between calls.

// >> The arr.map method is one of the most useful and commonly used. It calls a function on each element of the array and returns an array of the results of that function.

let lengths = ["Ben Parker", "May Parker", "Peter Parker"].map(item => item.length);
console.log(lengths)//this variation of map method returns each element converted to its length. Output: [10, 10, 12]


// >> arr.sort() sorts the array in place, changing the order of the elements in it. It returns a sorted array, but normally the return value is ignored as arr itself is modified.
let numbers = [1,5,3,15,45,1,2]
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
console.log(numbers.sort(compareNumeric)) //the sort method here will sort numbers by the function we have now written. Output [1, 1, 2, 3, 5, 15, 45]


// >> The arr.reverse method reverses the order of the elements in arr. Let's store our previous result in a variable so we can check it rightaway

let reversable = numbers.sort(compareNumeric)

console.log(reversable.reverse())
//Output [45, 15, 5, 3, 2, 1, 1]


// >> Real life situation. We are writing an application for messaging, and the visitor enters the names of those to whom to send it, separated by commas: Jack, James, Dick. But it is much more convenient for us to work with an array of names than with a single line. How to get it? The str.split(delim) method does just that. It splits the string into an array at the given separator delim.

let names = 'Jack, James, Dick';
let namesArray = names.split(', ', 2);
console.log(namesArray)
//The split method has an optional second numeric argument - a limit on the number of elements in the array. If there are more than specified, then the remainder of the array will be discarded. Output: ['Jack', 'James']. Alternativley, we can exclude the numerica value and just transform strings to an array.


// >> Calling arr.join(glue) does exactly the opposite of split.
let namesString = namesArray.join('; ')
console.log(namesString)// output Jack; James


//>> If we need to iterate over an array, we can use forEach, for or for..of. If we need to loop through an array and return data for each element, we use map. The arr.reduce and arr.reduceRight methods are similar to the methods above, but they are slightly more complex. They are used to calculate some single value based on the entire array.

// SYNTAX
// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
//   }, [initial]);

// previousValue - the result of the previous call to this function, equals initial on the first call (if initial is passed),
// item is the next element of the array,
// index - its index,
// array - the array itself.

let numericArr = [1, 2, 3, 4, 5];

let resultOfReduce = numericArr.reduce((sum, current) => sum + current, 0);
console.log(resultOfReduce)// output: 15
// Let's take a closer look at how it works.
// On the first run, sum is initial (the last argument to reduce), which is 0, and current is the first element of the array, which is 1. So the result of the function is 1.
// On the second run, sum = 1, and we add the second element of the array (2) to it.
// On the third run, sum = 3, to which we add the next element, and so on...


// >>Array.isArray
// Arrays do not form a separate type of language. They are object based. Therefore, typeof cannot distinguish a simple object from an array

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true



//BONUS
//By defenition A JavaScript method is a property of an object that contains a function definition. Thus let's look into some of the JS Array methods "from the inside" and build them on our own so that they can work the same as 

function forEach(arr, func) {
    for (let value of arr){
        func(value)
    }
}

function map(arr, func) {
    let newArr = []
    forEach(arr, function(el){
        newArr.push(func(el))
    }) 
    return newArr
}

function filter(arr, func) {
    let newArr = []
    forEach(arr, function(el){
        if(func(el)){
            newArr.push(el)
        }
    })
return newArr
}
