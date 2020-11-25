import React from 'react'
import * as S from './styles'
import * as G from 'global-styles'
import { Link } from 'react-router-dom'

const InfoSection = ({
  bgColor = '#101522',
  imgStart = 'row',
  lightTopLine = '#a9b3c1',
  lightText = '#f7f8fa',
  start = 'flex-start',
  lightTextDesc = '#a9b3c1',
  primary = true,
  topLine,
  headline,
  description,
  btnText,
  img,
  alt
}) => {
  return (
    <>
      <S.InfoSec bgColor={bgColor}>
        <G.Container>
          <S.Row imgStart={imgStart}>
            <S.Collumn>
              <S.TextWrapper>
                <S.TopLine lightTopLine={lightTopLine}>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headline}</S.Heading>
                <S.Subtitle lightTextDesc={lightTextDesc}>
                  {description}
                </S.Subtitle>
                <Link to="/sign-up">
                  <G.Button wide fontBig primary={primary}>
                    {btnText}
                  </G.Button>
                </Link>
              </S.TextWrapper>
            </S.Collumn>
            <S.Collumn>
              <S.ImgWrapper start={start}>
                <S.Img
                  src={require(`images/${img}`).default}
                  alt={alt}
                  loading="lazy"
                />
              </S.ImgWrapper>
            </S.Collumn>
          </S.Row>
        </G.Container>
      </S.InfoSec>
    </>
  )
}

export default InfoSection
