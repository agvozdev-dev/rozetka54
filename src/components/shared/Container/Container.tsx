import React from 'react'
import './container.scss'
import classNames from 'classnames'

type ContainerProps = {
  extraClass?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ extraClass, children }) => {
  const className = classNames('container', extraClass)

  return <div className={className}>{children}</div>
}

export default Container
