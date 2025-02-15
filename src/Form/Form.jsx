import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
        <Input id="email" label="Email" required/>
        <Input id="senha" label="Senha" type="password"/>
        <Button />
    </div>
  )
}

export default Form