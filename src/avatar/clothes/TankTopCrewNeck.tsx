import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'
import Graphics from './Graphics'

export default class TankTopCrewNeck extends React.Component {
  static optionValue = 'TankTopCrewNeck'
  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this
    return (
      <g
        id='Clothing/Tank-Top-Crew-Neck'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='m 99.045632,29.219406 c -10.185725,0.681251 -20.216434,3.573703 -29.195633,8.431524 0,24.116358 0,48.232716 0,72.34907 41.433301,0 82.866601,0 124.299901,0 0,-24.114976 0,-48.229955 0,-72.344934 -8.68358,-4.697251 -18.34909,-7.563451 -28.18949,-8.360214 0.59332,9.54048 -7.97626,16.380645 -16.08944,19.42317 -13.7973,5.083614 -30.43871,4.233736 -42.70185,-4.313306 -4.79874,-3.483001 -8.686789,-9.00375 -8.123488,-15.18531 z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id='Clothes'
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
        <g
          id='Shadowy'
          opacity='0.599999964'
          strokeWidth='1'
          fillRule='evenodd'
          mask={`url(#${mask1})`}
          fillOpacity='0.16'
          fill='#000000'>
          <g transform='translate(92.000000, 4.000000)' id='Hola-👋🏼'>
            <ellipse
              cx='40.5'
              cy='27.8476251'
              rx='39.6351047'
              ry='26.9138272'
            />
          </g>
        </g>
        <Graphics maskID={mask1} />
      </g>
    )
  }
}
