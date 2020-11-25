import React from 'react'

import * as S from './styles'
import data from './data'
import * as G from 'global-styles'

const Footer = () => (
  <S.Container>
    <S.Wrapper>
      <S.Heading>
        Join our exclusive membership to receive the latest news and trends
      </S.Heading>
      <S.SubHeading>You can unsubscribe at any time.</S.SubHeading>
      <S.Form>
        <S.FormInput name="email" type="email" placeholder="your Email" />
        <G.Button fontBig>Subscribe</G.Button>
      </S.Form>
    </S.Wrapper>
    <S.Wrapper>
      <S.Row>
        {data.map(({ title, links }, index) => (
          <S.Column>
            <S.Title>{title}</S.Title>
            {links.map(({ title, url, className }) => (
              <S.Link href={url}>
                {className && <S.Icon className={className} />}
                {title}
              </S.Link>
            ))}
          </S.Column>
        ))}
      </S.Row>
    </S.Wrapper>
  </S.Container>
)

export default Footer
