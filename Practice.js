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



function sayHello() {
    for (var i =0; i<5 i++){
        console.log(i)
    }
}

sayHello