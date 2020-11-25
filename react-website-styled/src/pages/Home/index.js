import React from 'react'
import InfoSection from 'components/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './data'

const Home = () => (
  <>
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjThree} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjFour} />
  </>
)

export default Home
