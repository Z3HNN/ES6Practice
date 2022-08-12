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
 colors.map(function(color)
     '<li>' + color + '</li>'
 )