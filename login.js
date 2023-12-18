function changeToRegister() {
    const changeToRegisterBtn = document.querySelector('#changeToRegister');
    const changeToLogin = document.querySelector('#changeToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToRegisterBtn.addEventListener('click', () => {
        loginForm.classList.remove('active')
        registerForm.classList.add('active')
    })
}
changeToRegister();


function changeToLogin() {
    const changeToLoginBtn = document.querySelector('#chnageToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToLoginBtn.addEventListener('click', () => {
        loginForm.classList.add('active')
        registerForm.classList.remove('active')
    })
}
changeToLogin();


function activeInput(event) {
    if (screen.width > 600) {
        let input = event;
        input.style.border = '1px solid #4054D2';
    }
}
activeInput()

function login() {

    var username = document.getElementById('username-login').value;
    var password = document.getElementById('password-login').value;

    if (username === 'user' && password === 'pass') {
      window.location.href = 'pages-html/index.html';
    } else {
      alert('Login failed. Please check the information again.');
    }
  }

  function register() {

    var username = document.getElementById('username-register').value;
    var mail = document.getElementById('mail-register').value;
    var phone = document.getElementById('phone-register').value;
    var password = document.getElementById('password-register').value;
    var confirmPassword = document.getElementById('confirm-password').value;


    if((username === "")  (mail === "")  (phone === "")  (password === "")  (confirmPassword === "")){
        alert('Please enter all fields.');
    }else{
        if (password === confirmPassword) {
            window.location.href = 'index.html';
          } else {
            alert('Confirm passwords do not match. Please check again.');
          }
    }


  }

// Simulate a login check by comparing the email and password with hardcoded values
async function checkLogin(email, password) {
    const hardcodedCredentials = [
        { email: 'admin@gmail.com', password: 'admin' },
    ];

    return hardcodedCredentials.some(user => user.email === email && user.password === password);
}

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    loginUser();
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

