import React from 'react';
import { Link } from 'react-router';

const Button = ({ text, onClick, path }) => {
    return (
        <Link to={path}>
            <button
                onClick={onClick}
                className='px-3 py-1.5 bg-lime font-body rounded-xl button-hover cursor-pointer text-muted'>{text}
            </button>
        </Link>
    )
}

export default Button