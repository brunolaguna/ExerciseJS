function count() {
    let res = document.querySelector('p')
    for(i=10; i>0; i--){
        res.innerHTML += `${i} &#128073;`
    }
    res.innerHTML += `&#x1F3C1;`
}