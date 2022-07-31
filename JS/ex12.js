function evenOdd() {
    var n = Number(prompt(`Enter a number:`))
    let res = document.getElementById('p')

    while(isNaN(n) || !Number.isInteger(n)) {
        alert(`You entered a wrong value!`)
        var n = Number(prompt(`Enter a number:`))
    }

    if(n % 2 == 0) {
        res.innerHTML = `The number ${n} was typed is <strong>EVEN!</strong>`
    } else {
        res.innerHTML = `The number ${n} was typed is <strong>ODD!</strong>`
    }
}