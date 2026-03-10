import React from 'react'

const categories = ["All", "Stagger", "Continuous", "Wavy", "Word", "Whole Text"]

const CategorySelect = ({ selected, onSelect }) => {
    return (
        <select
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
            className=' text-offwhite font-body w-full border border-muted py-2 px-4 pr-8 rounded-md outline-none focus:border-lime bg-transparent cursor-pointer'
        >
            {categories.map((cat) => (
                <option key={cat} value={cat} className='bg-background text-offwhite'>
                    {cat}
                </option>
            ))}
        </select>
    )
}

export default CategorySelect