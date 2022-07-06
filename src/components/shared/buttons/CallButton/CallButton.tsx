import './call-button.scss'
import classNames from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import React from 'react'

type CallButtonProps = {
    extraClass?: string
}

const CallButton: React.FC<CallButtonProps> = ({extraClass}) => {
    const classes = classNames("call-btn", extraClass)
    const { phone } = useStaticQuery(query).contentJson.contacts

    return (
        <a className={classes} href={`tel:${phone}`}>
            Позвонить
        </a>
    )
}

export default CallButton

export const query = graphql`
  {
    contentJson {
      contacts {
        phone
      }
    }
  }
`
