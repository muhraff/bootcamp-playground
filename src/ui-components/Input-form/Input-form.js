import React from 'react'
import { styleConstants } from '../../style-constants'
import { css, cx } from 'emotion'

const inputStyle = css`
  box-shadow: ${styleConstants.boxShadows.input};
  border-radius: ${styleConstants.borderRadiuses.default};
  width: 100%;
  padding: 0;
  margin: 0;
`

export default function({ className, placeholder, type }) {
  return (
    <input
      className={cx(inputStyle, className)}
      placeholder={placeholder}
      type={type}
    ></input>
  )
}
