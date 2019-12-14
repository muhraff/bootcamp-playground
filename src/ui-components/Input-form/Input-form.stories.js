import React from 'react'
import InputForm from './Input-form'
import { unit } from '../../style-constants'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default { title: 'Form Inputs', decorators: [withKnobs] }

export const emailInput = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <InputForm placeholder='Mobile number or email address' type='email' />
  </div>
)

export const passwordInput = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <InputForm placeholder='Password' type='password' />
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
    <InputForm placeholder='Mobile number or email address' type='email' />
    <InputForm placeholder='Password' type='password' />
  </div>
)
