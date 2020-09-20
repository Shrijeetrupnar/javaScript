// utility of Array.from in JS
// createing some Array with initial length we have two ways 
// first one is use old way new Array() or new way is to use  Array.from()
//Constructor prototype method that lets you create arrays from array like objects and empty arrays from scratch. 

console.dir(Array)

let string="Shrijeet"
console.log([...string]);

let str="Rupnar"
console.log(Array.from(str))

const fromScratch= Array.from({length: 5},(v,i) => v)
console.log(fromScratch)

const fromScratchIndex= Array.from({length: 5},(v,i) => i)
console.log(fromScratchIndex)

const oldWay= new Array(5)
console.log(oldWay.fill(0).map((v,i)=>i))


//get unique elements

const array= [1,1,1,1,1,,2,3]
const unique= Array.from(new Set(array));
console.log(unique)

console.log(...new Set(array))


const func=function(){

    console.log(Array.from(arguments).join('+'))
}

func('s','h','r','i')