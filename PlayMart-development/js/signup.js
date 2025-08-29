const togglePassword1 = document.querySelector('.togglePass1');
const password1 = document.querySelector('.pass1');
const togglePassword2 = document.querySelector('.togglePass2');
const password2 = document.querySelector('.pass2');

togglePassword1.addEventListener('click', function(e) {
    let type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function(e) {
    let type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});