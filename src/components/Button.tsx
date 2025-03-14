'use client'
import React, { ReactNode } from 'react'

interface buttonProps {
    text: ReactNode,
    className: string,
    image?: string,
    textClass?: string,
    imageClass?: string
}
const Button:React.FC<buttonProps> = ({text, className, textClass, image, imageClass}) => {
  return (
    <button className={`space-x-2 ${className}`}>
        {image && <img src={image} alt="Button icon" className={`${imageClass}`} />}
        <p className={`flex items-center justify-center ${textClass}`}>{text}</p>
    </button>
  )
}

export default Button