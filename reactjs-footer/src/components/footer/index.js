import React from 'react'

import * as F from './styles'

const Footer = () => (
  <F.Container>
    <F.Wrapper>
      <F.Row>
        <F.Column>
          <F.Title>About Us</F.Title>
          <F.Link href="#">Story</F.Link>
          <F.Link href="#">Clients</F.Link>
          <F.Link href="#">Testimonials</F.Link>
        </F.Column>
        <F.Column>
          <F.Title>Services</F.Title>
          <F.Link href="#">Marketing</F.Link>
          <F.Link href="#">Consulting</F.Link>
          <F.Link href="#">Development</F.Link>
          <F.Link href="#">Design</F.Link>
        </F.Column>
        <F.Column>
          <F.Title>Contact Us</F.Title>
          <F.Link href="#">United States</F.Link>
          <F.Link href="#">United Kingdom</F.Link>
          <F.Link href="#">Australia</F.Link>
          <F.Link href="#">Support</F.Link>
        </F.Column>
        <F.Column>
          <F.Title>Social</F.Title>
          <F.Link href="#">
            <F.Icon className="fab fa-facebook-f" />
            Facebook
          </F.Link>
          <F.Link href="#">
            <F.Icon className="fab fa-instagram" />
            Instagram
          </F.Link>
          <F.Link href="#">
            <F.Icon className="fab fa-youtube" />
            Youtube
          </F.Link>
          <F.Link href="#">
            <F.Icon className="fab fa-twitter" />
            Twitter
          </F.Link>
        </F.Column>
      </F.Row>
    </F.Wrapper>
  </F.Container>
)

export default Footer
