const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

const button = document.getElementById('togglebutton')
const vessel = document.getElementById('vessel')

const lid = document.getElementById('teapot-lid')
const spout = document.getElementById('teapot-spout')
const base = document.getElementById('teapot-base')
const handle = document.getElementById('teapot-handle')

const h1 = document.getElementById('h1')
const text = document.querySelector('.text')





button.addEventListener('click', () => vesselToggle())

const setTheme = theme => document.documentElement.className = theme;

function vesselToggle(){

    if(vessel.classList.contains('teapot')){
        lid.style.visibility = 'hidden'
        spout.style.visibility = 'hidden'
        base.style.visibility = 'hidden'
        handle.style.visibility = 'hidden'
        button.innerText = 'teapot mode'
        setTheme('water')

    } else {
        lid.style.visibility = 'visible'
        spout.style.visibility = 'visible'
        base.style.visibility = 'visible'
        handle.style.visibility = 'visible'
        button.innerText = 'water'

        h1.innerText = 'Drink Tea'
        text.innerText = 'Select how many cups of tea you have drank'
        setTheme('tea')
    }

    vessel.classList.toggle('teapot')
}

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
        // ^ toggle the last cup

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}`
    }
}


