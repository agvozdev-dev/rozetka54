import Header from 'components/Header'
import React, { ReactNode } from 'react'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout : React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
)

export default Layout
