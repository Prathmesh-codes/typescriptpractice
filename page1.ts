// //Variable declaration

// //implicit delaration
const n=100
console.log(`num=${n},type=${typeof n}`)

//explicit declaration
const k: number=100
console.log('k=${k},type=${typeof k}')

//data type
const s=10.5

console.log(`s = ${s}, data type = ${typeof s}`)

//String

const namef='Prathamesh'

console.log(`First name = ${namef}, data type = ${typeof namef}`)

//Multiple Lines

const desc=`abc, home,
Mahatma phule Chowk, Pune,
Maharashtra`

console.log(`Address = ${desc}, data type = ${typeof desc}`)

//boolean

const candrive=true
console.log(`Can Drive = ${candrive}, data type = ${typeof candrive}`)

//undefined

let myvar

console.log(`My var= ${myvar}, data type = ${typeof myvar}`)

//Object

const a=null

console.log(`a = ${a}, data type = ${typeof a}`)

//object: collection of key value pairs

const person ={name:'Person 1', address:'Pune'}

console.log(`Person = ${person}, data type = ${typeof person}`)

//Dynamic type casting
const num='AbraKaDabra'
console.log(`num = ${num}, data type = ${typeof num}`)

//Checking Equality
// console.log("50"==50)
// console.log('50'===50)

//function

function greet() //function declaration
{
    console.log("Hello from function") //function defination
}

greet() //function call


//Array

const numbers=[10,20,'a',15]
console.log(`numbers = ${numbers}, data type = ${typeof numbers}`)

// implicit object
const ppl= {
    name:'ppl1',
    age:30

}
console.log(ppl)

//explicit
const ppl2:object={name:'person2',
address:'mumbai'}

console.log(ppl2)

//explicit version2

const per3: {name:string;address:string}={
name:'person3',
'address':'delhi'

}
console.log(per3)

//enum
enum color{
    RED,
    GREEN,
    BLUE
}
const red:color=color.RED
console.log(`color=${color},type=${typeof color}`)

//own datatype that allows string or numbers

type Mytype=string|number

let myVar1:Mytype='test'
let myVar2:Mytype=12

console.log(myVar1+myVar2)


