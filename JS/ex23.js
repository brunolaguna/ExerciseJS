function count() {
    let i = 2
    let title = document.querySelector('p')
    title.innerHTML = `<h2>Even numbers from 1 to 10</h2>`
    while(i<=10) {
        title.innerHTML += `${i} &#128073;`
        i+=2
    }
    title.innerHTML += `&#x1F3C1;`
}