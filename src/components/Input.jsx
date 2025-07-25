/* eslint-disable no-unused-vars */
import React, { useId } from 'react'

const Input = React.forwardRef((
    {
        label,
        type = "text",
        className = "",
        ...props
    }, ref
) => {
    const id = useId();
    return (
        <div>
            {label && (
                <label htmlFor={id} className="block mb-1 font-medium text-gray-700 text-sm">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                ref={ref}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...props}
            />
        </div>
    )

})
export default Input