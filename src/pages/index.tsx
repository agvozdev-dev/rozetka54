import Layout from 'components/shared/Layout'
import MainScreen from 'components/main-page/ServiceSlider'
import React from 'react'
import AboutUs from 'components/main-page/about-us/AboutUs'

export default () => (
  <>
    <Layout>
      <MainScreen />
      <AboutUs />
    </Layout>
  </>
)
