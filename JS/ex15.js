function date() {
    var res = document.querySelector("p")
    let now = new Date()
    let day = now.getDate() //Get just the day
    let month = now.getMonth()
    let year = now.getFullYear()
    let week = now.getDay()
    let hour = now.getHours()
    let min = now.getMinutes()
    let second = now.getSeconds()
    res.innerHTML = `<p>Day: <strong style="color: red;">${day}</strong></p>`
    res.innerHTML += `<p>Month: <strong style="color: red;">${month}</strong></p>`
    res.innerHTML += `<p>Year: <strong style="color: red;">${year}</strong></p>`
    res.innerHTML += `<p>Day of week: <strong style="color: red;">${week}</strong></p>`
    res.innerHTML += `<p>Hour: <strong style="color: red;">${hour}</strong></p>`
    res.innerHTML += `<p>Minutes: <strong style="color: red;">${min}</strong></p>`
    res.innerHTML += `<p>Seconds: <strong style="color: red;">${second}</strong></p>`
}