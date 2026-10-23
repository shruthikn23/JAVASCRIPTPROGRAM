let number=[1,2,3,4]
console.log(number)
console.log(number.length)
console.log(number[2])
number.push(5,6)
console.log(number)
number.pop()
console.log(number)
number.unshift(7)
console.log(number)
number.shift()
console.log(number)
let sliceArray=number.slice(1,4)
console.log(sliceArray)
let spliceArray=number.splice(1,2,1)
console.log(spliceArray)
number.splice(1,1,9)
console.log(number)
for(i=0;i<=number.length;i++)
    {
        console.log(number[i])
    }

