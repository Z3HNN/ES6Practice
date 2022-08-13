 /* class Person{
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }
        printNameFunction() {
            setTimeout(function() {
                console.log('Function: ' + this.name)
            }, 100)
    }
}

let person = new Person ('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name) */

//var -> function 
//let -> block
//const -> also block


const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    },
};
person.walk();

 const walk = person.walk.bind(person);
 walk(); 



 const square = (number) => number * number

 console.log(square(5))

 const jobs = [
    {id: 1, isActive: true},
    {id: 1, isActive: true},
    {id: 1, isActive: true},
 ];


  const activeJobs = jobs.filter(job => job.isActive)


 const colors = ['red', 'green', 'blue'];
 const items = colors.map( color => "<li>" + color + '</li>')

 const address = {
    street: '' ,
    city: '' ,
    Country: '' 
    
 };

 const street = address.street;
 const sity = address

 const { street: st } = address;

 const first = [1, 2, 3];
 const second = [4, 5, 6];

 const combined = first.concat(second)

 const combines = [...first, ...second]

 const first = { name: 'mosh'}
 const second = { name: 'Instructor'}

 const combined = {...first, ...second}