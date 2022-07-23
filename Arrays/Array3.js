// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log("minimum is : " + ages[0]);
console.log("maximum is : " + ages[ages.length-1]);
//Find the median age(one middle item or two middle items divided by two)
var mid = ages[Math.round((ages.length-1)/2)];
var median = (mid+(mid-1))/2;
console.log("median is : " + median)
//Find the average age(all items divided by number of items)
  var sum =0;
for(var i=0;i<ages.length;i++){
    sum = sum + ages[i];
    
  }
  var len = ages.length;
  var avg = sum/len;
  console.log("average is : "+ avg);
//Find the range of the ages(max minus min)
var range = ages[ages.length-1]-ages[0];
console.log("Range is : " + range);
//Compare the value of (min - average) and (max - average), use abs() method
