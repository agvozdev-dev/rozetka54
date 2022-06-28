import React from 'react'
import './call-button.scss'
import {graphql, useStaticQuery} from "gatsby";

export default () => {
    const { phone } = useStaticQuery(query).contentJson.contacts

    return (
        <a className="call-btn" href={`tel:${phone}`}>
            Позвонить
        </a>
    )
}

export const query = graphql`
  {
    contentJson {
      contacts {
        phone
      }
    }
  }
`
