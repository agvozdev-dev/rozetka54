import Header from 'components/shared/Header'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import Footer from 'components/shared/Footer'

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = `${pageTitle} | ${data.site.siteMetadata.title}`
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
