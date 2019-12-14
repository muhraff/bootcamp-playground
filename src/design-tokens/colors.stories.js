import React from 'react'
import { storiesOf } from '@storybook/react'
import { css, cx } from 'emotion'
import { Colors } from './colors'

const colorBox = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid #ccc;
`

const getBlue = code => {
  return css`
    background-color: ${Colors.blue[code]};
  `
}

const green = css`
  background-color: ${Colors.green};
`
const white = css`
  background-color: ${Colors.white};
`
const black = css`
  background-color: ${Colors.black};
`

storiesOf('Design tokens', module).add('Colors', () => (
  <div>
    <h1>Colors</h1>
    <h2>Description</h2>
    <p>This is the story of.....</p>
    <div>
      <span className={cx(colorBox, getBlue(1))}></span>
      <span className={cx(colorBox, getBlue(2))}></span>
      <span className={cx(colorBox, getBlue(3))}></span>
      <span className={cx(colorBox, green)}></span>
      <span className={cx(colorBox, white)}></span>
      <span className={cx(colorBox, black)}></span>
    </div>
  </div>
))
