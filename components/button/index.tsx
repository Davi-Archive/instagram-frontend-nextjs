import React from 'react'
import { ButtonType } from '../../types/ButtonTypes';

const Button = ({
    type='button',
    text,
    color='primary',
    isDisabled = false,
    onClick
}:ButtonType) => {
  return (
    <button
    type={type}
    className={`btn ${color}`}
    disabled={isDisabled}
    onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button;