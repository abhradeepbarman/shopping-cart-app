import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center w-screen h-[80vh] justify-center'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner
