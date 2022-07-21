// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//let text =
//'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//console.log(words)
//console.log(words.length)

var text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, python.'
console.log(text)

var words=text.replace(/[^\w\s]/gi, "").split(" ");
console.log(words);
console.log(words.length);

// 2.In the following shopping cart add, remove, edit items

//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

const shoppingCart = ['Milk','Coffee','Tea','honey']
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart)
shoppingCart.splice(4,1);
console.log(shoppingCart);
shoppingCart[3]="Green Tea";
console.log(shoppingCart);

// 3. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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

var index = countries.indexOf('Ethiopia');
if(index===-1){
    console.log(countries.push('ethiopia'));
}
else{
    console.log(countries[index].toUpperCase());
}

// 4. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
 
var index = webTechs.indexOf('Sass');
if(index===-1){
    webTechs.push('Sass');
    console.log(webTechs);
}
else{
    console.log('Sass is a CSS preprocess.');
}

// 5. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

