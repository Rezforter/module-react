import style from '../regAuthForm.module.css'

function RegForm() {
  return (
    <div className={style["dialog-form__container switch-reg-login dialog-form__reg"]}>

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
  )
}

export default RegForm