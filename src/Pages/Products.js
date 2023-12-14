import React, { useState } from 'react'
import { pro } from '../Data/ProductDb'
import { Link } from 'react-router-dom'
const Products = () => {
    const [data, setData] = useState(pro)
    function CategoryHandler(Category) {
     const Result = pro.filter((x)=>x.category==Category)
     setData(Result)
    }
    return (
        <>
            <div className='my-4'  style={{marginLeft:"300px",backgroundColor:'#48dbfb',height:'70px',padding:"10px",marginRight:'300px',borderRadius:'100px'  }}>
            <button style={{marginLeft:'70px'}} className='btn btn-success me-5 mt-2  '  onClick={() => CategoryHandler("women's clothing")} >Women</button>
            <button className='btn btn-dark me-5 mt-2 '  onClick={() => CategoryHandler("jewelery")} >Jewllery</button>
            <button className='btn btn-success me-5 mt-2'  onClick={() => CategoryHandler("men's clothing")} >Men</button>
            <button className='btn btn-dark me-5 mt-2'  onClick={() => CategoryHandler("electronics")} >Electronics</button>
            <button className='btn btn-success me-5 mt-2'  onClick={() => setData(pro)} >All</button>
            </div>

            <h2 className='text-danger text-center mt-5  '>List of Products</h2>
            <div className='container mt-3 '>

                <div className="row my-5">
                    {

                        data.map(x => {
                            return (
                                <div className=' my-3 col-lg-3 col-md-6 col-sm-12'>

                                    <div className="card" style={{ width: '16rem' }}>
                                        <img src={x.image} width={200} height={250} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{x.title.slice(0, 30)} </h5>
                                            <p className="card-text">{x.description.slice(0, 50)}.</p>
                                            <p className="card-text">${x.price}</p>
                                            <Link to={`/detail/${x.id}`} className="btn btn-outline-dark">Add to Cart</Link>
                                        </div>
                                    </div>

                                </div>
                            )
                        })


                    }


                </div>
            </div>

        </>
    )
}

export default Products
