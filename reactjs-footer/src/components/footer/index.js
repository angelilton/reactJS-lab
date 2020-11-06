import React from 'react'

import * as F from './styles'
import data from './data'

const Footer = () => (
  <F.Container>
    <F.Wrapper>
      <F.Row>
        {data.map(({ title, links }, index) => (
          <F.Column>
            <F.Title>{title}</F.Title>
            {links.map(({ title, url, className }) => (
              <F.Link href={url}>
                {className && <F.Icon className={className} />}
                {title}
              </F.Link>
            ))}
          </F.Column>
        ))}
      </F.Row>
    </F.Wrapper>
  </F.Container>
)

export default Footer
