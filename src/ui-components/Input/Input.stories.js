import React from 'react'
import Input, { TYPE } from './Input'
import { unit } from '../../style-constants'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { KIND } from '../Button/Button'

export default { title: 'Form Inputs', decorators: [withKnobs] }

export const emailInput = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <Input placeholder='Mobile number or email address' type={TYPE.EMAIL} />
  </div>
)

export const passwordInput = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <Input placeholder='Password' type={TYPE.PASSWORD} />
  </div>
)

export const loginInputs = () => (
  <div
    style={{
      display: 'flex',
      width: unit(13.5),
      padding: 0,
      flexDirection: 'column'
    }}
  >
    <Input placeholder='Mobile number or email address' type={TYPE.EMAIL} />
    <Input placeholder='Password' type={TYPE.PASSWORD} />
  </div>
)
