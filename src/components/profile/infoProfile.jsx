import React from 'react'

function InfoProfile({ number, text }) {
  return (
    <>
        <div className='text-center'>
            <h1>
                <span className="text-md font-semibold">{ number }</span>
            </h1>
            <h2>
                <span className="text-sm font-thin">{ text }</span>
            </h2>
        </div>
    </>
  )
}

export default InfoProfile