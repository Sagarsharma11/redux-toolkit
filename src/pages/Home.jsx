import React from 'react'
import Product from '../components/Product'
function Home() {
  return (
    <div className='container'>
        <div>
          <h1>
            Products List
          </h1> <br/>
          <Product/>
        </div>
    </div>
  )
}

export default Home