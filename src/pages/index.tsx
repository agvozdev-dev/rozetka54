import Layout from 'components/shared/Layout'
import MainScreen from 'components/main-page/ServiceSlider'
import React from 'react'
import AboutUs from 'components/main-page/about-us/AboutUs'
import PartnerSlider from 'components/shared/PartnerSlider'

export default () => (
  <>
    <Layout>
      <MainScreen />
      <AboutUs />
      <PartnerSlider />
    </Layout>
  </>
)
