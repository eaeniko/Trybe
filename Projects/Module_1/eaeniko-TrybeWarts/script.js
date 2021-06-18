const trybeEmail = document.getElementById('trybe-email');
const trybePassword = document.getElementById('trybe-password');
const loginBtn = document.getElementById('login-btn');
const checkAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function validateLogin() {
  if (
    trybeEmail.value !== 'tryber@teste.com'
    || trybePassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function validateAgreement() {
  if (submitBtn.checked !== false) {
    submitBtn.disabled = false;
  }
}

window.onload = function main() {
  loginBtn.addEventListener('click', validateLogin);
  checkAgreement.addEventListener('click', validateAgreement);
};
