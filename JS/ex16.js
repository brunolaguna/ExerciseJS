function over() {
    let calendar = document.querySelector('p')
    calendar.innerHTML = `<p style="width: 360px; margin-left: -28px; font-size: 27px;">What year were you born?</p>`
}
function vac() {
    let now = new Date
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()

    var res = document.getElementById('cal').value
    var [ano, mes, dia] = res.split('-').map(Number)
    let [ageY, ageM, ageD] = [year - ano, month - (mes-1), day - dia]

    let result = document.querySelector('.r')

    if(ano > year) {
        result.innerHTML = `<p>Incorrect value or you are not born yet! Please, try again!&#128512</p>` 
    } else {
        result.innerHTML = `<p>You are ${ageY} years, ${ageM} months and ${ageD} days old!</p>`
    }
}