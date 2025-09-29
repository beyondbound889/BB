import React, {useEffect} from 'react'

const Blog = () => {
  useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
}, []);
  return (
    <div className='w-full h-screen'>
      <h1 className='relative text-3xl text-center top-1/2 font-bold'>Coming Soon...</h1>
    </div>
  )
}

export default Blog