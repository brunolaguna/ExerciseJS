function result() {
    let n1 = Number(prompt(`Enter a number:`))
    let n2 = Number(prompt(`Enter another number:`))
    let res = document.getElementById('p')
    if(n1 > n2) {
        res.innerHTML = (`Analyzing the values ${n1} and ${n2}, the biggest value is ${n1}.`)
    } else if (n1 === n2) {
        res.innerHTML = (`Analyzing the values ${n1} and ${n2}, the values are the same.`)
    } else {
        res.innerHTML = (`Analyzing the values ${n1} and ${n2}, the biggest value is ${n2}.`)
    }
}