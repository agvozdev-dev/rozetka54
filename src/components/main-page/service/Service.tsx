import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import React from 'react'
import './service.scss'
import Accordion from '../accordion/Accordion'

const Service = () => {
  return (
    <section className="service">
      <Title
        title="Услуги и цены"
        subtitle="Доверьтесь профессионалам"
        titleSearchWords={['Услуги']}
      />
      <Container extraClass="container--large">
        <div className="service__wrapper">
          <Container>
            <Accordion />
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default Service
