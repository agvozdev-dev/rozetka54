import Header from 'components/shared/Header'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
      <title>{title}</title>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
