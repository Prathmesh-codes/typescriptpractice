//constructor function to create a class

function Person(name:string,id:number){
    this.name=name
    this.id=id
}

const p1=new Person('Prathmesh',1)
console.log(p1)

//Object literal to create an object
const Persona={
    name:'Person 2',
    age:20

}
console.log(Persona)

//Object.create to create an object

const person3=Object.create({})
person3.name='P3'
person3.age=40
console.log(person3)


//Object creation using class

class person4{
    name:string
    private age:number

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    printinfo(){
        console.log(`name:${this.name}`)
        console.log(`age:${this.age}`)

    }
}

const per=new person4(`abc`,45)
console.log(per)

// per.age=12; //Age can not be modified because it is declared as private

//INHERITANCE
class student extends person4{
    private rn:number

    constructor(rn:number,name:string,age:number){
        super(name,age)
        this.rn=rn
    }

   

}

const s1=new student(1,'student1',12)
s1.printinfo()

//Readonly specifier
class science{
    readonly pi=3.14
}
const m1=new science
// m1.pi=23 can not be modified

//STATIC Properties
//member variable can be called by class.member name

class k{
    static kval=15

}
console.log(`value:${k.kval}`) //Accesed using class name

//Getter and setter

class getset{
    private name:string
    constructor(name:string){
        this.name=name
    }
    setName(name:string){
        this.name=name
    }
    getName(){return this.name}
}
const g1=new getset('Get set 1')
console.log(`name=${g1.getName}`)

//association has-a relationship
class employee{
    name:string
    id:number
    constructor(name:string,id:number){
        this.name=name
        this.id=id
    }
    printinfo()
    {
        console.log(`name=${this.name}`)
        console.log(`id=${this.id}`)
    }
}

class company{
    private employees: employee[] //company has employees
    private name:string 
constructor(name:string){
    this.employees=[]
    this.name=name
}

addemp(id:number,name:string){
    this.employees.push(new employee(name,id))
}

printemp()
{
    console.log(`${this.name} Has following employees`)
    for (const em of this.employees){
        console.log(em)
    }
}
}


const c1:company=new company('C1')

c1.addemp(1,'emp1')
c1.addemp(2,'emp2')

c1.printemp()