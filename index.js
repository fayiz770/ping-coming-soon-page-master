const button = document.getElementById('button')
const label = document.getElementById('label')
const email = document.getElementById('email')

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(email.value.trim() === ""){
        email.style.border = '1px solid var(--light-red)'
        email.placeholder = "example@gmail.com"
        label.style.display = 'flex'
    }else {
        alert('Your email submitted')
        email.style.border = '1px solid var(--pale-blue)'
        label.style.display = 'none'
        email.value = ""
    }
})