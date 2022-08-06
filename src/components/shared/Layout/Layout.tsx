import Header from 'components/shared/Header'
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Helmet} from "react-helmet";
import Footer from 'components/shared/Footer'

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          title
          keywords
          description
        }
      }
    }
  `)

  const title = `${pageTitle} | ${data.site.siteMetadata.title}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${data.site.siteMetadata.description}`} />
        <meta name="robots" content="all" />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
      </Helmet>
      <div className="wrapper">
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
