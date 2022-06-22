import React from 'react'
import './container.scss'

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => <div className="container">{children}</div>

export default Container