import { Link } from 'react-router-dom'
import AuthForm from './auth-form'
import RegForm from './reg-form'
import style from './regAuthForm.module.css'
import React, { useState } from "react";


function RegAuthForm() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={style["dialog-form"]}>
      <div className={style['dialog-form__page']}>
        <div className={style[`dialog-form__container dialog-form__login ${isActive ? "disable-block" : ""}`]}>

          <p className={style["dialog-form__login-registration-link"]}>
            <a onClick={handleToggle} href="javascript:void(0);">Регистрация</a>
          </p>
          <h1 className={style["dialog-form__title"]}>
            Авторизоваться
          </h1>

          <form action="javascript:void(0);" id="dialog-form-login">  
            <div className={style["dialog-form__input"]}>
              <p className={style["dialog-form__input-description"]}>
                Email
              </p>
              <div className={style["dialog-form__input-container"]}>
                <p className={style["dialog-form__input-required"]}>
                  *
                </p>
                <input type="text" className={style["dialog-form__input-field"]} id="login-email" placeholder="Введите email" />
              </div>
              <p className={style["error-msg-empty"]}>Поле обязательно для заполнения</p>
            </div>
            
            <div className={style["dialog-form__input"]}>
              <p className={style["dialog-form__input-description"]}>
                Пароль
              </p>
              <div className={style["dialog-form__input-container"]}>
                <p className={style["dialog-form__input-required"]}>
                  *
                </p>
                <input type="text" className={style["dialog-form__input-field"]} id="login-pass" placeholder="Введите пароль" />
              </div>
              <p className={style["error-msg-empty"]}>Поле обязательно для заполнения</p>
            </div>

            <div className={style["dialog-form__input-container"]}>
              <label for="input-check-policy" className={style["dialog-form__input-check-label"]}>
                <input type="checkbox" className={style["dialog-form__input-check"]} id="input-check-policy" />
                <span className={style["dialog-form__input-check-policy"]}>
                  Я согласен с
                  <a href="javascript:void(0);">Правилами пользования приложением</a>
                </span> 
              </label>
            </div>

            <button className={style['dialog-form__button', 'dialog-form__button_login']}>
              <Link to='/products'>Войти</Link>
            </button>
          </form>
        </div>

        <div className={style[`dialog-form__container switch-reg-login dialog-form__reg ${isActive ? "" : "disable-block"}`]}>

          <p className={style["dialog-form__login-registration-link"]}>
            <a href="javascript:void(0);">Войти</a>
          </p>
          <h1 className={style["dialog-form__title"]}>
            Регистрация
          </h1>
          
          <form action="javascript:void(0);" id="dialog-form-reg"> 
            <div className={style["dialog-form__input"]}>
              <p className={style["dialog-form__input-description"]}>
                Email
              </p>
              <div className={style["dialog-form__input-container"]}>
                <p className={style["dialog-form__input-required"]}>
                  *
                </p>
                <input type="text" className={style["dialog-form__input-field"]} id="reg-email" placeholder="Введите email" />
              </div>
              <p className={style["error-msg-empty"]}>Поле обязательно для заполнения</p>
            </div>
            
            <div className={style["dialog-form__input"]}>
              <p className={style["dialog-form__input-description"]}>
                Пароль
              </p>
              <div className={style["dialog-form__input-container"]}>
                <p className={style["dialog-form__input-required"]}>
                  *
                </p>
                <input type="text" className={style["dialog-form__input-field"]} id="reg-pass" placeholder="Введите пароль" />
              </div>
              <p className={style["error-msg-empty"]}>Поле обязательно для заполнения</p>
            </div>
            
            <div className={style["dialog-form__input-container"]}>
              <p className={style["dialog-form__input-required", "dialog-form__input-required_checkbox"]}>
                *
              </p>
              <label for="input-check-mail" className={style["dialog-form__input-check-label"]}>
                <input type="checkbox" className={style["dialog-form__input-check"]} id="input-check-mail" />
                <span className={style["dialog-form__input-check-policy"]}>
                  Я согласен получать обновления на почту
                </span> 
              </label>
              <p className={style["error-msg-empty"]}>Поле обязательно для заполнения</p>
            </div>
            
        
            <button className={style["dialog-form__button", "dialog-form__button_reg"]}>
              Зарегистрироваться
            </button>
          </form>
        </div>

          {/* <AuthForm />
          <RegForm /> */}
        {/* <script src="./regAuthForm.js"></script> */}
      </div>
    </div>
    )
}

export default RegAuthForm