import React from 'react'
import { styleConstants } from '../../style-constants'
import { css, cx } from 'emotion'

export const TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email'
}

const inputStyle = css`
  box-shadow: ${styleConstants.boxShadows.input};
  border-radius: ${styleConstants.borderRadiuses.default};
  width: 100%;
  padding: 16px;
  margin: 0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`

const Input = ({ className, placeholder, type }) => {
  return (
    <input
      className={cx(inputStyle, className)}
      placeholder={placeholder}
      type={type}
    ></input>
  )
}

export default Input
