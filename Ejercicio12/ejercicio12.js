const words = ["Environmental", "Systems", "Research", "Institute"]

const resultado = words.reduce((acc, current) => {
    if (acc.length > current.length) {
        return acc
    }
    else{
        return current
    }
})

console.log ('la palabra más larga es ' + resultado)