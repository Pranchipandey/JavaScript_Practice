// 1. Declare a function fullName and it print out your full name.

function fullName(){
    let Name= "Pranchi Pandey"
    return Name
}
console.log(fullName())

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const flName = (first,last)=>{
    let space = " "
    return first+space +last
}
console.log(flName('Pranchi','Pandey'))

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (a,b)=>{
    return a+b
}
console.log(addNumbers(7,5))

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(l,b){
    let area = l*b
    return area
}
console.log(areaOfRectangle(2,2))

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle=(l,b)=>{
    let perimeter=2*(l+b)
    return perimeter
}
console.log(perimeterOfRectangle(3,4))

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
 const volume = (l,w,h)=>{
    let vol = l*w*h 
    return vol
 }
 console.log(volume(2,3,4))

 // 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle=(r)=>{
    let area = Math.PI*r*r 
    return area
}
console.log(areaOfCircle(2))

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r){
    let circum = 2*Math.PI*r 
    return circum
}
console.log(circumOfCircle(3))

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass,vol){
    let den = mass/vol 
    return den
}
console.log(density(300,15))

// 10. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function BMI(w,h){
    let bmi = w/(h*h)
    console.log(bmi)
    if(bmi<18.5){
        console.log('underweight')
    }
    else if(bmi>=18.5 && bmi<24.9){
        console.log('normal weight')
    }
    else if(bmi>=25 && bmi<29.9){
        console.log('Overweight')
    }
    else if(bmi>=30){
        console.log('obese')
    }
    else{
        console.log('not defined')
    }
}
(BMI(800,6))

// 11.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){
    console.log(month)
    switch(month){
        case 12:
        case 1:
        case 2:
            console.log("winter")
            break;
        case 3:
        case 4:
        case 5:
            console.log("spring")
            break;
        case 6:
        case 7:
        case 8:
            console.log("summer")
            break;
        case 9:
        case 10:
        case 11:
            console.log("autumn")
            break;
        default:
            console.log("invalid month number")
            break;

    }
}
checkSeason(5)

// 12. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a,b,c){
     let max = Math.max(a,b,c)
     return max

    }
    console.log(findMax(9,11,3))