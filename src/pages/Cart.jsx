import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

function Cart() {
    const product = useSelector((state) => state.cart)
    return (
        <>
        <div className="container">

            <div className='row'>
                {product.map((e) => {
                    return <>

                        <div className="col-sm-3">
                            <div className="card1 mt-2" style={{ width: "11rem" }}>
                                <img src={e.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title.substring(0, 30)} <span className="text-muted">id:{e.id}</span> </h5>
                                    <p className="card-text">{e.description.substring(0, 100)}</p>
                                    <p>
                                        {Array.from({ length: Math.round(e.rating.rate) }, (_, i) => <span className="star text-warning">&#9733;</span>)}
                                        {
                                            e.rating.rate
                                        }
                                    </p>
                                    <p className='bg-secondary col-4 ps-1 rounded text-light'>Sold: {e.rating.count}</p>
                                    <p className='text-muted'>Price: <span className='text-success'>{e.price}</span></p>
                                    {/* <button class="btn btn-primary" onClick={() => { clickHandle(e) }} >Add to cart + </button> */}
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
                        
        </div>
        </>
    )
}

export default Cart