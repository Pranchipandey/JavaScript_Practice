// 1. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const arr = [1,2,3,4,5]
function printArray(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printArray(arr);

// 2. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()+1
    const year = newDate.getFullYear()
    const hours = newDate.getHours()
    const min = newDate.getMinutes()

    console.log('Todays Date is : '+ `${date}/${month}/${year} ${hours}:${min}`)
    
}
showDateTime()

// 3. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a,b){
    let temp
    temp=a
    a=b
    b= temp
   console.log(a,b)
}
swapValues(2,3)

// 4. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = ["A","B","C"]
var b = reverseArr(a);
console.log(b)

// 5. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const names=['apple','banana','mango','grapes']
//const names = ['Ali', 'Atta', 'Alex', 'John'];

const upperCased = names.map(name => name.toUpperCase());

console.log(upperCased);

// 6. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


function addItem(a){
    var a = [1,2,3,4,5]
    a.push(6)
    console.log(a)
  
}
addItem(a)

// 7. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(a){
    var a =[1,2,3,4,5]
    a.pop()
    console.log(a)
}
removeItem(a)
