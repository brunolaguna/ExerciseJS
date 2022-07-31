function calc() {
    var name = prompt(`What is the student's name?`)
    while(!isNaN(name)) {
        alert(`You typed the wrong name!`)
        var name = prompt(`What is the student's name?`)
    }

    var n1 = Number(prompt(`What was ${name}'s first grade?`))
    while(isNaN(n1)){
        alert(`You entered a wrong value!`)
        var n1 = Number(prompt(`What was ${name}'s first grade?`))
    }

    var n2 = Number(prompt(`Besides 10, what was ${name}'s other grade?`))
    while(isNaN(n2)){
        alert(`You entered a wrong value!`)
        var n2 = Number(prompt(`Besides 10, what was ${name}'s other grade?`))
    }
    average = (n1 + n2) / 2
    out = document.getElementById('p')
    out.innerHTML = `<p>Calculating the final average of ${name}.</p>`
    out.innerHTML += `<p>The grades obtained were ${n1} and ${n2}.</p>`
    out.innerHTML += `<p>The final average will be ${average}.</p>`
    if(average >= 7) {
        out.innerHTML += `<p><strong style='color:red;'>Congratulations</strong> ${name}!</p>`
    } else {
        out.innerHTML += `<p>Student failed.</p>`
    }
} 