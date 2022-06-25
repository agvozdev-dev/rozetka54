import React from 'react'
import { useRef } from 'react'

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq

  const contentEl: any = useRef()

  return (
    <li
      className={`accordion__item ${active ? 'accordion__item--active' : ''}`}
    >
      <button className="accordion__item-btn" onClick={onToggle}>
        {question}
        <span className="control">{active ? '—' : '+'} </span>
      </button>
      <div
        ref={contentEl}
        className="accordion__item-content"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  )
}

export default AccordionItem
