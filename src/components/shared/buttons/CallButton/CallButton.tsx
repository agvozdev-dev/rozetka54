import React from 'react'
import './call-button.scss'
import {graphql, useStaticQuery} from "gatsby";
import classNames from "classnames";

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
