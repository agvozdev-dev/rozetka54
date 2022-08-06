import Layout from 'components/shared/Layout'
import MainScreen from 'components/main-page/ServiceSlider'
import React from 'react'
import AboutUs from 'components/main-page/about-us/AboutUs'
import PartnerSlider from 'components/shared/PartnerSlider'
import Prices from 'components/main-page/Prices'
import Posts from 'components/main-page/Posts'
import Contacts from "components/shared/Contacts";

export default () => (
  <>
    <Layout pageTitle="Электромонтаж, видеонаблюдение, интернет">
      <h1 className="sr-only">Электромонтажные работы, видеонаблюдение, интернет в Новосибирске</h1>
      <MainScreen />
      <AboutUs />
      <PartnerSlider />
      <Prices />
      <Posts />
      <Contacts />
    </Layout>
  </>
)
