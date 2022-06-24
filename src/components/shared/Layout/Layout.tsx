import Header from 'components/shared/Header'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
