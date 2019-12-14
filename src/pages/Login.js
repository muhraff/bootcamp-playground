import React from 'react'
import Layout from '../Layout'
import Button, { KIND } from '../ui-components/Button/Button'
import Input, { TYPE } from '../ui-components/Input'

const Login = () => {
  return (
    <Layout>
      <Input placeholder='Mobile number or email address' type={TYPE.EMAIL} />
      <Input placeholder='Ender your password' type={TYPE.PASSWORD} />

      <Button kind={KIND.PRIMARY}>Login</Button>
      <Button kind={KIND.GREEN}>Create New Account </Button>
    </Layout>
  )
}

export default Login
