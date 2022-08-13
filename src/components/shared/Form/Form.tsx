import React, {useState} from 'react'
import MaskInput from 'react-maskinput/lib'
import './styles.scss'
import Modal from "../modal/Modal";
import {ModalBody, ModalFooter, ModalHeader} from "../modal/Modal/Modal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const addError = (input: any) => {
    input.classList.add("_error")
  }

  const removeError = (input: any) => {
    input.classList.remove("_error")
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    const phoneInput: any = document.getElementById("form-phone")
    removeError(phoneInput)

    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phoneInput.value)
    if(!phoneRegex) {
      addError(phoneInput)
      return
    }
    const form = e.target
    const formData = new FormData(form)

    form.classList.add("_sending")

    const response = await fetch('https://getform.io/f/3057f2d4-2362-4d34-9f5e-9e6624e5f3fe', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      form.reset()
      form.classList.remove("_sending")
      setModalContent({ header: 'Письмо отправлено', text: 'Мы свяжемся с вами в ближайшее время' })
    } else {
      alert("Произошла ошибка")
      form.classList.remove("_sending")
      setModalContent({ header: 'Письмо не отправлено', text: 'При отправке письма произошла ошибка. Попробуйте позже' })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label" htmlFor="form-phone">
        Ваш номер телефона* :
      </label>
      <MaskInput
        // @ts-ignore
        name={"form__phone"}
        id="form-phone"
        className="form__input form__phone _req"
        alwaysShowMask
        mask={'+7 (000) 000 00 00'}
        showMask
        maskChar="_"
      />
      <label className="form__label" htmlFor="form-message">
        Сообщение:
      </label>
      <textarea
        className="form__input form__message"
        id="form-message"
        name="form__message"
      ></textarea>
      <button className="form__btn" type="submit">Отправить</button>
      <Modal show={showModal} setShowModal={setShowModal}>
        <ModalHeader>
          <h2>{modalContent.header}</h2>
        </ModalHeader>
        <ModalBody>
          <p>
            {modalContent.text}
          </p>
        </ModalBody>
        <ModalFooter>
          <span className="modal-button" onClick={() => setShowModal(false)}>
           Закрыть
          </span>
        </ModalFooter>
      </Modal>
    </form>
  )
}

export default Form
