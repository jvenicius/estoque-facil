const userName = document.querySelector('#userName');

const defineUserName = () => {
    userName.innerHTML = 'Undefined';
}

window.onload = defineUserName;

let user = document.querySelector('#login');
let passw = document.querySelector('#senha');
let submit = document.querySelector('#submit');

user.addEventListener('change', (e) => {
    user = e.target.value;
    console.log(user);
})

passw.addEventListener('change', (e) => {
    passw = e.target.value;
    console.log(passw)
})

submit.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    const userData = {
        user: user,
        password: passw
    }

    console.log(userData)

    window.location.href = `/pages/home.html`;
})
