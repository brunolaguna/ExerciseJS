let random = Number.parseInt(Math.floor(Math.random() * 100))
let i = 0

function clicked() {
    i++
    var attempt = document.querySelector('button')
    attempt.textContent = `${i} attempts...`
    let res = document.querySelector('p')
    var n = Number.parseInt(prompt(`What's your guess?`))
    if(n > random) {
        res.innerHTML += `<p>You typed ${n}. My number is <strong>SMALLER</strong></p>`
    }
    
    else if(n < random) {
        res.innerHTML += `<p>You typed ${n}. My number is <strong>BIGGER</strong></p>`
    }
    
    if(n == random){
        attempt.style.opacity = 0
        attempt.onclick=""
        res.innerHTML = `<p style="font-size: x-large;">You got it with <strong>${i}</strong> tries!</p>`
        res.innerHTML += `<p style="font-size: x-large;">The number is <strong>${n}</strong></p>`
    }
}

