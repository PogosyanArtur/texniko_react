import { css } from 'styled-components'
import device from './device'

export default {
  up: Object.keys( device ).reduce( ( acc, label ) => {
    acc[ label ] = ( ...args ) => css`
       @media (min-width: ${device[ label ]['breakpoint'] }px) {
          ${css( ...args ) };
       }
    `
    return acc
  }, {} ),
  
  down: Object.keys( device ).reduce( ( acc, label ) => {
    acc[ label ] = ( ...args ) => css`
       @media (max-width: ${device[ label ]['breakpoint'] }px) {
          ${css( ...args ) };
       }
    `
    return acc
  }, {} )
}



