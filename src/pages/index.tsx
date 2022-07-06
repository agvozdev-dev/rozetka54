import Layout from 'components/shared/Layout'
import MainScreen from 'components/main-page/ServiceSlider'
import React from 'react'
import AboutUs from 'components/main-page/about-us/AboutUs'
import PartnerSlider from 'components/shared/PartnerSlider'
import Prices from 'components/main-page/Prices'
import Posts from 'components/shared/Posts'
import Contacts from "components/shared/Contacts";

export default () => (
  <>
    <Layout pageTitle="Электромонтаж, видеонаблюдение, интернет">
      <MainScreen />
      <AboutUs />
      <PartnerSlider />
      <Prices />
      <Posts extraClass='posts__bg'/>
      <Contacts />
    </Layout>
  </>
)
