import Header from 'components/Header'
import MainScreen from 'components/MainScreen'
import React from 'react'

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
)

export default Layout
