import React, { useId } from 'react'

function Select({
    label,
    options = [],
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full select-container'>
            {label && <label htmlFor={id} className='font-medium text-gray-700 text-sm'>{label}</label>}
            <select
                {...props}
                ref={ref}
                id={id}
                className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`
                }
            >

                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                )
                )}
            </select>

        </div>
    )
}

export default React.forwardRef(Select)