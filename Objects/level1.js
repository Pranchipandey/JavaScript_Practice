const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: 0 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: 0 },
]

// 1. Use forEach to console.log each country in the countries array.
countries.forEach((names)=>console.log(names))

// 2. Use forEach to console.log each name in the names array.
names.forEach((name)=>console.log(name))

// 3.Use forEach to console.log each number in the numbers array.
numbers.forEach((names)=>console.log(names))

// 4.Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpper = countries.map((name)=>name.toUpperCase())
console.log(countriesUpper)

// 5. Use map to create an array of countries length from countries array.
const length = countries.map((word)=> word.length)
console.log(length)

// 6.Use map to create a new array by changing each number to square in the numbers array
const square = numbers.map((sq)=>sq*sq)
console.log(square)

// 7. Use map to change to each name to uppercase in the names array
const nameUpper = names.map((name)=>name.toUpperCase())
console.log(nameUpper)

// 8.Use filter to filter out countries containing land.
const countriesContainsLand = countries.filter((country)=>country.includes('land'))
console.log(countriesContainsLand)

// 9.Use filter to filter out countries having six character.
const countriesLength = countries.filter((country)=>country.length===6)
console.log(countriesLength)

//10.Use filter to filter out countries containing six letters and more in the country array.
const countryLength = countries.filter((country)=>country.length>=6)
console.log(countryLength)

// 11. Use filter to filter out country start with 'E';
const countryStarts = countries.filter((country)=>country.startsWith("F"))
console.log(countryStarts)

// 12. Use filter to filter out only prices with values.
const prices = products.filter((price)=>price.price>=9)
console.log(prices)
//const scoresGreaterEight = products.filter((score) => score.price > 8)
//console.log(scoresGreaterEight)

// 13. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists=(arr)=>{
     arr = ["apple","banana","guava"]
var c =arr.toString()
console.log(c)
    
}
getStringLists()

// 14.Use reduce to sum all the numbers in the numbers array.
const sumArray = numbers.reduce((acc,cur)=>acc+cur,0)
console.log(sumArray)

// 15.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concateArray = countries.reduce((acc,cur)=>acc+", "+ cur)
console.log(concateArray + " are north European countries")

// 16.Use some to check if some names' length greater than seven in names array
 const areSomeLength = names.some((l)=>l.length>=7)
 console.log(areSomeLength)

 // 17. Use every to check if all the countries contain the word land
 const country = countries.every((cont)=>cont.includes('land'))
console.log(country)

// 18.Use find to find the first country containing only six letters in the countries array
const cont = countries.find((cont)=>cont.length===6)
console.log(cont)

// 19.Use findIndex to find the position of the first country containing only six letters in the countries array
const index = countries.findIndex((cont)=>cont.length===6)
console.log(index)

// 20. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
