let myString = 'practice code'
//console.log(myString.charAt(0).toUpperCase())
//console.log(myString.slice(1))

//console.log(myString.charAt(0).toUpperCase() + myString.slice(1))

//console.log(myString.slice(0, 13).toUpperCase() + myString.slice(13))

function capitalize(str) {
    return str.replace(str.slice(0, 1). str.slice(0, 1).toUpperCase())
}

var result= capitalize('hello world')
console.log(result)