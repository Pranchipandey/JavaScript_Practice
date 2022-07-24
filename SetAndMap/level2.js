//1. find a union b
var a= [1,2,3,4,5]
var b = [3,4,5,6,7]
var c=[...a,...b]
var A = new Set(a)
var B = new Set(b)
var C = new Set(c)
console.log(C)

// 2. find a intersection b

let aa= [1,2,3,4,5]
let bb = [3,4,5,6,7]
let AA = new Set(aa)
let BB = new Set(bb)
let cc = a.filter((num)=>BB.has(num))
let CC = new Set(cc)
console.log(CC) 