import React from 'react'

const Button = ({ text }) => {
    return (
        <div>
            <button className='px-6 py-1.5 bg-lime text-card font-body rounded-xl button-hover cursor-pointer  '>{text}</button>
        </div>
    )
}

export default Button