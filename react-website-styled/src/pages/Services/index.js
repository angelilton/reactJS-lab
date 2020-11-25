import React from 'react'
import InfoSection from 'components/InfoSection'
import { homeObjThree, homeObjTwo } from './data'

const Services = () => (
  <>
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
  </>
)

export default Services
