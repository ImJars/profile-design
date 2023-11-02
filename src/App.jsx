import React from 'react'
import Header from './components/header/header'
import Profile from './components/profile/profile'
function App() {
  return (
    <>
      <section className='w-screen h-screen bg-primary mx-auto'>
        <Header />
        <Profile />
      </section>
    </>
  )
}

export default App
