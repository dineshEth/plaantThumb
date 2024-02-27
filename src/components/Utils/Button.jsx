import React from 'react'

const Button = ({name, click, isAtcive, handleClick, style}) => {
  return (
    <button onClick={click && handleClick} className={` ${style ? style : ""} py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg 
    ${isAtcive ? 'bg-[#84CC16] text-[#151B0F] ' 
    : 'text-[#84CC16] bg-[#151B0F] border-[#84CC16] border-[1px]'} `} 
    >
        {name}
    </button>
  )
}

export default Button