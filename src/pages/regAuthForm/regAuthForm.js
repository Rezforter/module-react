'use strict'

const minPassLength = 8;
const inputError = true;
const inputCorrect = false;
const usersDataKey = 'usersData';
let usersDataValue = [];
if(!JSON.parse(localStorage.getItem(usersDataKey))){
  localStorage.setItem(usersDataKey, JSON.stringify(usersDataValue));
} else {
  usersDataValue = JSON.parse(localStorage.getItem(usersDataKey));
}

console.log('работаю');

const regForm = document.querySelector('.dialog-form__reg');
const loginForm = document.querySelector('.dialog-form__login');

const dialogFormTitle = document.querySelector('.dialog-form__title');

// Константа на ссылку перехода между формами
const loginRegistrationLink = document.querySelectorAll('.dialog-form__login-registration-link');

// Константы у input с вводом текста
const loginEmail = document.querySelector('#login-email');
const loginPass = document.querySelector('#login-pass');
const regEmail = document.querySelector('#reg-email');
const regPass = document.querySelector('#reg-pass');

const chkbxMail = document.querySelector('#input-check-mail');

const btnReg = document.querySelector('.dialog-form__button_reg');
const btnLogin = document.querySelector('.dialog-form__button_login');

// Для перехода на окно авторизации
loginRegistrationLink[0].addEventListener('click', () => {
  regForm.classList.toggle("switch-reg-login");
  loginForm.classList.toggle("switch-reg-login");
  setTimeout(function() {
    regForm.classList.toggle("disable-block");
    loginForm.classList.toggle("disable-block");
  }, 250)
})


// Для перехода на окно регистрации
loginRegistrationLink[1].addEventListener('click', () => {
  regForm.classList.toggle("switch-reg-login");
  loginForm.classList.toggle("switch-reg-login");

  setTimeout(function() {
    regForm.classList.toggle("disable-block");
    loginForm.classList.toggle("disable-block");
  }, 250)
})

// Проверка на валидность Email
let loginData = '';
let passData = '';
let loginDataReg = '';
let passDataReg = '';

loginEmail.addEventListener('input', (e) => {
	loginData = e.target.value;
	/* console.log(loginData); */ // хочу в случае чего видеть, что я пишу, поэтому оставляю в проекте этот код
})

loginPass.addEventListener('input', (e) => {
	passData = e.target.value;

})

regEmail.addEventListener('input', (e) => {
  loginDataReg = e.target.value;
})
  
regPass.addEventListener('input', (e) => {
  e.preventDefault();
  passDataReg = e.target.value;
})

function checkInput (elem, state) {
  if (state) {
    elem.parentNode.classList.add('errorMsg');
    elem.parentNode.parentNode.lastElementChild.classList.add('enable-block');
    elem.parentNode.parentNode.firstElementChild.classList.add('errorMsg');
    elem.classList.add('invalid-data');
  }
  else {
    elem.parentNode.classList.remove('errorMsg');
    elem.parentNode.parentNode.lastElementChild.classList.remove('enable-block');
    elem.parentNode.parentNode.firstElementChild.classList.remove('errorMsg');
    elem.classList.remove('invalid-data');
  }
}

function errMsg (element, msg) {
  element.parentNode.parentNode.lastElementChild.textContent = msg;
}

let lengthStorage = localStorage.length;
btnReg.addEventListener('click', (e) => {
  let correctRegData = false;

  correctRegData = (validateEmail(loginDataReg)) & (passDataReg.length >= minPassLength) & (chkbxMail.checked);

  if(!loginDataReg) {
    checkInput(regEmail, inputError);
    errMsg(regEmail, 'Поле обязательно для заполнения');
  } else if (!validateEmail(loginDataReg) && loginDataReg) {
    checkInput(regEmail, inputError);
    errMsg(regEmail, 'Некорректный Email');
  } else {
    checkInput(regEmail, inputCorrect);
  }

  if (!passDataReg) {
    checkInput(regPass, inputError);
    errMsg(regPass, 'Поле обязательно для заполнения');
  }  
  else if(passDataReg.length < minPassLength && passDataReg) {
    checkInput(regPass, inputError);
    errMsg(regPass, `Пароль должен содержать как минимум ${minPassLength} символов`);
  } else {
    checkInput(regPass, inputCorrect);
  }

  if (!chkbxMail.checked) {
    chkbxMail.parentNode.parentNode.classList.add('errorMsg');
    chkbxMail.parentNode.classList.add('errorMsg'); 
    chkbxMail.classList.add('errorMsg');
    chkbxMail.parentNode.parentNode.lastElementChild.classList.add('enable-block');
  } else {
    chkbxMail.parentNode.parentNode.classList.remove('errorMsg');
    chkbxMail.parentNode.classList.remove('errorMsg'); 
    chkbxMail.classList.remove('errorMsg');
    chkbxMail.parentNode.parentNode.lastElementChild.classList.remove('enable-block');
  }

  if (correctRegData) {
    if (localStorage.getItem(usersDataKey)) {
      usersDataValue = JSON.parse(localStorage.getItem(usersDataKey));
    } else {
      localStorage.setItem(usersDataKey, JSON.stringify(usersDataValue));
    }
    if (usersDataValue.findIndex((item) => item.email === loginDataReg) == -1) {
      usersDataValue.push({email: loginDataReg, password: passDataReg});
      localStorage.setItem(usersDataKey, JSON.stringify(usersDataValue));
      console.log(`Пользователь с Email - "${loginDataReg}" успешно зарегестрирован`);
      dialogFormTitle.classList.add("good-ending");
      setTimeout(function() {
        dialogFormTitle.classList.remove("good-ending");
      }, 1000)
    } else {
      checkInput(regEmail, inputError);
      errMsg(regEmail, 'Такой Email уже существует');
    }
  }
})


btnLogin.addEventListener('click', (e) => {

  if (!loginData) {
    checkInput(loginEmail, inputError);
    loginEmail.parentNode.parentNode.lastElementChild.textContent = 'Поле обязательно для заполнения';
  } else if (!validateEmail(loginData) && loginData) {
    checkInput(loginEmail, inputError);
    loginEmail.parentNode.parentNode.lastElementChild.textContent = 'Некорректный Email';
  } else {
    checkInput(loginEmail, inputCorrect);
  }

  if (!passData) {
    checkInput(loginPass, inputError);
    loginPass.parentNode.parentNode.lastElementChild.textContent = 'Поле обязательно для заполнения';
  } else {
    checkInput(loginPass, inputCorrect);
  }

  if (validateEmail(loginData) && passData) {
    if (usersDataValue.findIndex((item) => item.email === loginData && item.password === passData) == -1) {
      checkInput(loginEmail, inputError);
      checkInput(loginPass, inputError);
      loginEmail.parentNode.parentNode.lastElementChild.textContent = '';
      loginPass.parentNode.parentNode.lastElementChild.textContent = 'Email или Пароль неверный';
      console.log('Логин или пароль указаны неверно');
    } else {
      sessionStorage.setItem(usersDataKey, JSON.stringify({email: loginData, password: passData}))
      window.location.href = 'page1.html';
    }
  }
})

function validateEmail(email) {    
  const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
  return re.test(String(email).toLowerCase());
}
