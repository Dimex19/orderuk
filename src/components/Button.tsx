'use client'
import React from 'react'

interface buttonProps {
    text: any,
    className: string,
    image?: string
}
const Button:React.FC<buttonProps> = ({text, className, image}) => {
  return (
    <button className={`space-x-2 ${className}`}>
        {image && <img src={image} alt="Button icon" className="" />}
        <p className='flex items-center justify-center'>{text}</p>
    </button>
  )
}

export default Button