import React from 'react'
import './callback-button.scss'
import classNames from 'classnames'

type CallbackButtonProps = {
  href?: string
  extraClassName?: string
}

const CallbackButton: React.FC<CallbackButtonProps> = ({
  href,
  extraClassName,
}) => (
  <a className={classNames('callback-btn', extraClassName)} href={href ? href : '#contacts'}>
    Заказать звонок
  </a>
)

export default CallbackButton
