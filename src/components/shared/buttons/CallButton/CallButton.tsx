import React from 'react'
import './call-button.scss'
import data from 'content/shared.yaml'

export default () => (
  <a className="call-btn" href={`tel:${data.phone}`}>
    Позвонить
  </a>
)
