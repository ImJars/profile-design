import React from 'react'

function IconProfile({icon}) {
  return (
    <>
        <button className='flex justify-cente h-full items-center bg-tertiary py-4 px-4 rounded-full'>
            { icon }
        </button>
    </>
  )
}

export default IconProfile