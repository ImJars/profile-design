import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { VscVerifiedFilled } from 'react-icons/vsc'
import { CgMenuGridO } from 'react-icons/cg'

function Header() {
  return (
    <>
        <section
            className='w-full h-14 bg-secondary text-white rounded-b-md shadow-[inset_0rem_-0.8rem_0.4rem_0_rgb(0,0,0,0.1)]'
        >
            <div className='h-full flex justify-between items-center mx-2'>
                <button>
                    <IoMdNotifications className='text-2xl text-textPrimary'/>
                </button>
                <button className='flex items-center space-x-1'>
                    <h1 className='text-sm font-semibold'>
                        legacyier_official
                    </h1>
                    <VscVerifiedFilled className='text-verified text-xs'/>
                </button>
                <button className='bg-tertiary rounded-full p-1.5'>
                    <CgMenuGridO className='text-2xl'/>
                </button>
            </div>
        </section>
    </>
  )
}

export default Header