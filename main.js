const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close')
const head = document.querySelector('.head')
const dropdown = document.getElementsByClassName('dropdown')
const headDropDown = document.querySelectorAll('.head_dropdown')

hamburger.addEventListener('click', showMenu)
closeIcon.addEventListener('click', showMenu)
for (let dd of headDropDown)
    dd.addEventListener('click', dropEm)

function showMenu() {
    hamburger.classList.toggle('ham_active')
    closeIcon.classList.toggle('close_active')
    head.classList.toggle('head_active')
}

function dropEm(e) {
    let val = e.target.parentElement.children[1]
    val.classList.toggle('dd_active')
}

// console.log(headDropDown)