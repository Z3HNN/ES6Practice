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

 const square = function(number) {
    return number * number
 }

 const square = (number) => number * number