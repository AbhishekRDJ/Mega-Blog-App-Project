import React from 'react'

function Container({ children }) {
    return (
        <div className='mx-auto py-2 w-350 max-w-screen max-h-fit'>{children}</div>
    )
}

export default Container