import React from 'react'
interface Props {
    children: React.ReactNode
}
const ContentDetial = ({ children }: Props) => {
    return (
        <div className='text-gray-800 dark:text-white'>
            {children}
        </div>
    )
}

export default ContentDetial
