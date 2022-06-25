import React from 'react'
import { useState } from 'react'
import AccordionItem from '../AccordionItem'
import './accordion.scss'

const Accordion = () => {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.',
    },
    {
      question: 'Dignissimos sequi architecto?',
      answer:
        'Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.',
    },
    {
      question: 'Voluptas praesentium facere?',
      answer:
        'Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.',
    },
  ]

  const [clicked, setClicked] = useState('0')

  const handleToggle = index => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  return (
    <ul className="accordion service__accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  )
}

export default Accordion
