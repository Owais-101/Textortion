import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className='px-3 py-1.5 bg-lime font-body rounded-xl button-hover cursor-pointer text-muted'>{text}</button>
        </div>
    )
}

export default Button