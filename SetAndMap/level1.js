// 1. create an empty set
const set = new Set()
console.log(set)

// 2. create a set containing 0 to 10 using loop
const numbers = [0,1,2,3,4,5,6,7,8,9,10]
const numberSet = new Set()
for(const num of numbers){
    numberSet.add(num)
}
console.log(numberSet)

// 3. remove an element from set

console.log(numberSet.delete(9))
console.log(numberSet)

// 4. clear a set

numberSet.clear()
console.log(numberSet)

// 5. create a set of 5 string elements from array
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
  'Hindi'
]
const langSet = new Set(languages)
console.log(langSet)

//6. Create a map of countries and number of characters of a country

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 7)
countriesMap.set('Sweden', 6)
countriesMap.set('Norway', 6)
console.log(countriesMap)