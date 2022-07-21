
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
// 1. Declare an empty array.
const arr= Array();
const a = [];
console.log(a);
console.log(arr);

// 2. declare an array  with more than 5 number of elements.

const webTechs = ["HTML","CSS","JS","React","Redux","Node","MongoDB"]
console.log(webTechs);

// 3. length of array
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[webTechs.length-1]);
var mid = webTechs[Math.round((webTechs.length-1)/2)];
console.log(mid);

// 5. Declare an array called mixedDataTypes, put different data types in the array 
//and find the length of the array. The array size should be greater than 5

const brr =[
     1,
     true,
     "Pranchi",
     {city:"Mathura",State:"UP"},
     {skills:['HTML','CSS','JS']}
]
console.log(brr);
console.log(brr.length);

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple,
// IBM, Oracle and Amazon

var Companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// 7. Print array using console.log().
console.log(Companies);

// 8. print the number of Companies in the array.
console.log(Companies.length) 

// 9. Print the first company ,middle and last company.

console.log(Companies[0]);
console.log(Companies[Companies.length-1]);
let middle = Companies[Math.round((Companies.length-1)/2)];
console.log(middle);

// 10. Print out each company

for(var i=0;i<Companies.length;i++){
  console.log(Companies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
 console.log(Companies.toString().toUpperCase());

 // 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 console.log(Companies.toString() + " are big IT companies.")

 // 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = Companies.indexOf('Facebook');
if(index===-1){
    console.log("not exist");
}
else{
    console.log(Companies[index]);
}
// 14. Filter out companies which have more than one 'o' without the filter method.

// 15. Sort the array using sort() method
console.log(Companies.sort());

//16. Reverse the array using reverse() method
console.log(Companies.reverse());

//17. Slice out the first 3 companies from the array
console.log(Companies.slice(0,3));

//18. Slice out the last 3 companies from the array
console.log(Companies.slice(4,Companies.length));

//19. Slice out the middle IT company or companies from the array
console.log(Companies.slice(1,6));

// 20. Remove the first IT company from the array
console.log(Companies.shift());
console.log(Companies);

// 21. Remove the middle IT company or companies from the array.
Companies.splice(1,4);
console.log(Companies);

// 22. Remove the last IT company from the array
Companies.pop();
console.log(Companies);

// 23. Remove all IT companies
//Companies.splice();
console.log(Companies.splice());