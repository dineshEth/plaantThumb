import React from 'react'

const FeedbackProvider = ({ name, imageUrl, feedbackText }) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between gap-x-6 px-4">
            <img src={imageUrl} className='w-[180px] h-[200px] object-cover background-center' />
            <div className='flex flex-col justify-start items-center'>
                <h1 className='font-IBM text-[24px]'>{name}</h1>
                <p className='font-IBM text-[14px] font-[100]'>{feedbackText}</p>
            </div>
        </div>
    )
}

export default FeedbackProvider