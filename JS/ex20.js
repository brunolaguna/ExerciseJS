function discover() {
    let month = prompt('Digite o mês:')
    let season
    switch (month.toUpperCase()) {
        case 'JANUARY': case 'FEBRUARY': case 'MARCH':
            season = 'WINTER'            
            break
        case 'APRIL': case 'MAY': case 'JUNE':
            season = 'SPRING'
            break
        case 'JULY': case 'AUGUST': case 'SEPTEMBER':
            season = 'SUMMER'
            break
        case 'OCTOBER': case 'NOVEMBER': case 'DECEMBER':
            season = 'AUTUMN'
            break    
        default:
            season = 'UNDEFINED'
            break
        }
        
        let res = document.querySelector('p')
        res.innerHTML = `In the month of <strong>${month}</strong>, we are in the <strong>${season}</strong> season.`
}