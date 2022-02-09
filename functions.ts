//parameterless function

function myfunction1()
{
    console.log(`Inside myfunction 1`)
}

myfunction1()

//parameterized function
function add(p1,p2)
{
    console.log('inside add')
    console.log(`p1=${1},p2=${p2}`)
    console.log(`addition=${p1+p2}`)
}
add(10,20)

//anonymous function
const myfun=function(){
    console.log(`inside myfun`)
}
myfun()

const sub=function(p1,p2)

{
    console.log(`p1-p2=${p1-p2}`)
}
sub(20,10)

//lambda function (arrow function)

const my=()=>{
console.log('inside my function')
}
my()


//Function constructor
//-Used to create a function

function a(p1,p2){
    console.log(`${p1}+${p2}=${p1+p2}`)
}
a(15,20)

//using function pbject
const ab=new Function('p1','p2','console.log("inside ab function"); console.log(p1+p2);')
ab(10,20)


//default parameter value

function add3(p1,p2,p3=20) //Default Value
{
    console.log('inside add3')
    console.log(`p1=${1},p2=${p2},p3=${p3}`)
    console.log(`addition=${p1+p2+p3}`)
}
// add3(10,20) not allowed in ts allowed in js tkes undefined values
add3(10,20)

//Rest parameter
function add4(...params)
{
  console.log(params)  
}
add4(10,20,30,40,50)

//optional parameter
//usually added as the last parameter to the function

function abc(p1:number,p2?:number){
    console.log(`p1=${p1}`)
    console.log(`p2=${p2}`) //takes as undefined if not passed 
}
abc(10)

//explicit parameters
function abcd(p1:number,p2:number){
    console.log(`${p1}+${p2}=${p1+p2}`)
}
abcd(10,20) //cannot pass strings anymore








