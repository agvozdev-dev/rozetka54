import Layout from 'components/shared/Layout'
import MainScreen from 'components/main-page/ServiceSlider'
import React from 'react'
import AboutUs from 'components/main-page/about-us/AboutUs'
import PartnerSlider from 'components/shared/PartnerSlider'
import Service from 'components/main-page/Service'
import Post from 'components/main-page/Post'
import Contact from 'components/main-page/Contact'

export default () => (
  <>
    <Layout pageTitle="Электромонтаж, видеонаблюдение, интернет">
      <MainScreen />
      <AboutUs />
      <PartnerSlider />
      <Service />
      <Post />
      <Contact />
    </Layout>
  </>
)
