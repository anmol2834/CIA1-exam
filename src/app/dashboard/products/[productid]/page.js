
import Link from 'next/link';
import React from 'react'

function page({ params }) {
    const { productid } = params;
  return (
    <div className='page-container'>
        product id : {productid}
    <Link href="/dashboard/products" className='buttons'>
      <button className='buttons'>Back to Products</button>
    </Link>
    </div>
  )
}

export default page