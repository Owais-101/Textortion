import React from 'react'

const Button = ({ text }) => {
    return (
        <div>
            <button className='px-4 py-1.5 bg-lime font-body rounded-xl button-hover cursor-pointer text-muted'>{text}</button>
        </div>
    )
}

export default Button