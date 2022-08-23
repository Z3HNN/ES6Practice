const names = ['james', 'jess', 'lily', 'sevy']
names.forEach((name) => console.log(name))

const myForEach (arr, cb) => {
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        cb(element)
    }
}

myForEach(names, (name) => {

    console.log(name)
})