import React from 'react'
import MaskInput from 'react-maskinput/lib'
import './form.scss'

const Form = () => (
    <form className="form">
        <label className="form__label" htmlFor="form-phone">
            Ваш номер телефона
        </label>
        <MaskInput
            // @ts-ignore
            className="form__input form__phone"
            alwaysShowMask
            mask={'+7 (000) 000 00 00'}
            showMask
            maskChar="_"
        />
        <label className="form__label" htmlFor="form-message">
            Сообщение (необязательно)
        </label>
        <textarea
            className="form__input form__message"
            id="form-message"
        ></textarea>
        <button className="form__btn">Отправить</button>
    </form>
)
export default Form
