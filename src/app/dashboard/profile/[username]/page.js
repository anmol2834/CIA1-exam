

import React from 'react'

function page({ params }) {
    const { username } = params; 
  return (
    <div className='page-container'>{username}</div>
  )
}

export default page