import * as React from 'react'

import Stubble from './Stubble'
import StubbleDark from './StubbleDark'
import StubbleDarker from './StubbleDarker'
import Goatee from './Goatee'
import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'

export default class FacialHair extends React.Component {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={Blank}>
        <Stubble />
        <StubbleDark />
        <StubbleDarker />
        <Goatee />
        <Blank />
        <BeardMedium />
        <BeardLight />
        <BeardMajestic />
        <MoustacheFancy />
        <MoustacheMagnum />
      </Selector>
    )
  }
}
