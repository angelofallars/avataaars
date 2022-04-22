import * as React from 'react'

import { FacialHairColor, Selector } from '../../../options'

export interface Props {
  maskID: string
}

function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
        <g
          id='Color/Hair/Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(-32.000000, 0.000000)' id='Color'>
            <rect x='0' y='0' width='264' height='244' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Black = makeColor('Black', '#1B1A19')
const BlackLight = makeColor('BlackLight', '#1F1D1D')
const BlackLighter = makeColor('BlackLighter', '#252322')
const Auburn = makeColor('Auburn', '#A55728')
const Blonde = makeColor('Blonde', '#B58143')
const BlondeGolden = makeColor('BlondeGolden', '#D6B370')
const Brown = makeColor('Brown', '#724133')
const BrownDark = makeColor('BrownDark', '#4A312C')
const BrownDarker = makeColor('BrownDarker', '#2C1B18')
const Platinum = makeColor('Platinum', '#ECDCBF')
const Red = makeColor('Red', '#C93305')
const SilverGray = makeColor('SilverGray', '#E8E1E1')

export default class Colors extends React.Component<Props> {
  render () {
    return (
      <Selector option={FacialHairColor} defaultOption={BrownDark}>
        <Black maskID={this.props.maskID} />
        <BlackLight maskID={this.props.maskID} />
        <BlackLighter maskID={this.props.maskID} />
        <Auburn maskID={this.props.maskID} />
        <Blonde maskID={this.props.maskID} />
        <BlondeGolden maskID={this.props.maskID} />
        <Brown maskID={this.props.maskID} />
        <BrownDark maskID={this.props.maskID} />
        <BrownDarker maskID={this.props.maskID} />
        <Platinum maskID={this.props.maskID} />
        <Red maskID={this.props.maskID} />
        <SilverGray maskID={this.props.maskID} />
      </Selector>
    )
  }
}
