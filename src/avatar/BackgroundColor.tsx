import * as React from 'react'

import { Selector, BackgroundColorOption } from '../options'

export interface Props {
  maskID: string
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id="BGColor/👶🏽-02-Brown"
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform="translate(0.000000, 0.000000)" id="Color">
            <rect x="0" y="0" width="264" height="280" />
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

const Red = makeColor('Red', '#E35A5A')
const Orange = makeColor('Orange', '#FF974D')
const Yellow = makeColor('Yellow', '#FFCC65')
const Green = makeColor('Green', '#98FF65')
const Blue = makeColor('Blue', '#65C9FF')
const Purple = makeColor('Purple', '#E965FF')
const Cerulean = makeColor('Cerulean', '#6799CC')
const White = makeColor('White', '#E5E5E5')
const LightGray = makeColor('LightGray', '#999999')
const DarkGray = makeColor('DarkGray', '#585858')
const Black = makeColor('Black', '#262626')

export default class BackgroundColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={BackgroundColorOption} defaultOption={Blue}>
        <Red maskID={this.props.maskID} />
        <Orange maskID={this.props.maskID} />
        <Yellow maskID={this.props.maskID} />
        <Green maskID={this.props.maskID} />
        <Blue maskID={this.props.maskID} />
        <Purple maskID={this.props.maskID} />
        <Cerulean maskID={this.props.maskID} />
        <White maskID={this.props.maskID} />
        <LightGray maskID={this.props.maskID} />
        <DarkGray maskID={this.props.maskID} />
        <Black maskID={this.props.maskID} />
      </Selector>
    )
  }
}
