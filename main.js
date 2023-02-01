const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const number = document.querySelector('#num')


myForm.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.preventDefault()



        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value} : ${number.value}`))
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value= ''
        number.value=''
    }
// }
