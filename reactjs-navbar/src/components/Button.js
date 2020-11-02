import React from 'react'

import './Button.css'

const STYLES = ['btn-primary', 'btn-outline']

const SIZES = ['btn-medium', 'btn-large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const isthereButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const isthereButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  return (
    <button
      className={`btn ${isthereButtonStyle} ${isthereButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
