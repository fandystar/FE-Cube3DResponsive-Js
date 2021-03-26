
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4')

function clickForm() {
    const input = document.querySelector('#input')
    input.classList.toggle('visible')
    p1.innerHTML = 'No Data'
    p2.innerHTML = ''
    p3.value = ''
    p4.value = ''
}

function getName(value) {
    p1.innerHTML = value
}

function getEmail(value) {
    p2.innerHTML = value
}

console.log(p3)
console.log(p4)