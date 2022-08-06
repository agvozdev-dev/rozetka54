import React from 'react'
import Layout from "../components/shared/Layout";
import MainScreen from "../components/main-page/ServiceSlider";
import AboutUs from "../components/main-page/about-us/AboutUs";
import PartnerSlider from "../components/shared/PartnerSlider";
import Prices from "../components/main-page/Prices";
import Posts from "../components/main-page/Posts";
import Contacts from "../components/shared/Contacts";

const NotFound = () => (
  <Layout pageTitle="404 Страница не существует">
      <div className="not-found">
        <div className="not-found__code">
          404
        </div>
        <div className="not-found__description">
          Страница не существует
        </div>
      </div>
  </Layout>
)

export default NotFound
