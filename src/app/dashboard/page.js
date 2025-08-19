
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='page-container'>
        dashboard 
        <br />
        <div className='btn-container'>
            <Link href="/dashboard/profile" className='buttons'><button className='buttons'>profile</button></Link>
            <Link href="/dashboard/settings" className='buttons'><button className='buttons'>settings</button></Link>
            <Link href="/dashboard/products" className='buttons'><button className='buttons'>products</button></Link>
        </div>
    </div>
  )
}

export default page