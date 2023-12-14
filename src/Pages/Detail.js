import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {pro} from '../Data/ProductDb'

const Detail = () => {
    const Navigate = useNavigate()
    const p = useParams()
    const FilteredData = pro.find((x) => x.id == p.id)
    const [qty, setqty] = useState(1)
    // const [discount, setDiscount] = useState(5)
    const Increment = () => {
        setqty(qty + 1)
    }
    const Decrement = () => {
        if (qty > 1)
            setqty(qty - 1)
    }
    const GobackToProducts = () => {
        Navigate('/products')
    }
    return (
        <>
            <h1 className='text-danger fw-bolder  text-center  display-6 '>Single Page product</h1>
            <div className='container'>
                <button onClick={GobackToProducts} style={{marginLeft:'300px'}} class="btn btn-outline-primary mt-1 ">Return to Products</button>
                <div className='row'>

                    <div className='col-lg-6'>
                        <img style={{ marginTop: '-20px' }} src={FilteredData.image} height={300} />

                    </div>

                    <div className='col-lg-6 mt-2  '>
                        <h1 className='  fs-3 text-info fw-bolder text-start  '>CATEGORY : {FilteredData.category}</h1>
                        <p className='text-start display-6    fst-italic'>{FilteredData.title}</p>
                        <p className=' text-start fs-6 '>{FilteredData.description}</p>
                        <p className=' text-start fs-5 '>RATING : {FilteredData.rating.rate} <span className='text-info fw-bolder  fs-1  '>  ${FilteredData.price}</span></p>
                        <hr />
                        Quantity
                        <button onClick={Increment} type="button" class="btn btn-outline-success mx-3 ">+</button>
                        {qty}
                        <button onClick={Decrement} type="button" class="btn btn-outline-danger mx-3">-</button>
                        <h3 className='text-start text-success fw-bolder display-6 mt-1 '>Total Bill : ${FilteredData.price * qty}</h3> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail
