function clicked() {
    let now = new Date 
    let res = document.getElementById('p')
    res.innerHTML = `<p>What I got from the system was <mark>${now}</mark></p>`
}