let myString = 'practice code'
//console.log(myString.charAt(0).toUpperCase())
//console.log(myString.slice(1))

//console.log(myString.charAt(0).toUpperCase() + myString.slice(1))

//console.log(myString.slice(0, 13).toUpperCase() + myString.slice(13))

function capitalize(str) {
    return str.replace(str.slice(0, 1). str.slice(0, 1).toUpperCase())
}

var capResult= capitalize('thank you')
console.log(capResult)

function repeatString(str, count) {
    if ((str === null) || (count === null) ||
     (count === Inifity) || (count < 0)
     ) {
        return 'Error in string or count'
     } else {
        //return str.repeat(count)

        //let text = ''

        let text = []
        for (let i = 0; i < count; i++) {
            text.push(str)
        }
        return text.join('')
     }
}

let result = repeatString('a', 8)
console.log(result)

const numbers = [
    2, 4, 43, 46, 34, 26, 12, 32, 42, 9, 35
]

function sumArrayOfNumbers(numbersArray) {
    let total = 0
}