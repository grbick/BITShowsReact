import React from 'react'
import './button.scss'

const Button = (props) => {
  return (
    <button onClick={props.buttonClick}>{props.buttonContent}</button>
  )
}

export default Button