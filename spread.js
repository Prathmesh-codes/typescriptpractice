//SPREAD OPERATOR 
function summation(a,b,c)
{
    console.log(a+b+c)

}
summation(1,2,3)

var arrval =[1,2,5];
//spread operator replaces the apply 
summation.apply(null,arrval)

//with spread operator
summation(...arrval);

//spread operator replaces concat

let arr1=[1,2,3]
let arr2=[4,5,6]

arr1=arr1.concat(arr2);
console.log(arr1)

//WITH SPREAD

arr1=[...arr1, ...arr2];
console.log(arr1)

