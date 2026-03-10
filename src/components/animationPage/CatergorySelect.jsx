import { useAnimations } from '@/context/AnimationsContext'
import React from 'react'


const CategorySelect = () => {

    const { activeCategory, setActiveCategory, setSelect, categories } = useAnimations()

    return (
        <select
            value={activeCategory}
            onChange={(e) => setSelect(e.target.value)}
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