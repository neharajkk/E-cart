import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()

  const [total, setTotal]= useState(0)
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item.price).reduce((n1 , n2)=>n1+n2))
    }
    else{
      setTotal(0)
    }
    
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCheckout = ()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
    {cartArray?.length>0?<div className='container-fluid' style={{marginTop:'100px'}}>
      <h1 className='text-center text-danger'>CART</h1>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
      <div className='row mb-5'>
        <div className='col-md-8 px-5'>
          <table className='table table-bordered mt-5 shadow'>
            <thead>
              <tr>
                <th className='bg-secondary p-3'>#</th>
                <th className='bg-secondary p-3'>Title</th>
                <th className='bg-secondary p-3'>Image</th>
                <th className='bg-secondary p-3'>Price</th>
                <th className='bg-secondary p-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item , index)=>(<tr>
                <td>{index+1}</td>
                <td>{item?.title}</td>
                <td><img src={item?.image} alt="no image" width={'150px'} height={'150px'} /></td>
                <td>{item?.price}</td>
                <td className='text-center'><button onClick={()=>dispatch(removeFromCart(item?.id))}
                 className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>))}
            </tbody>

          </table>

        </div>
        <div className='col-md-4 px-4'>
          <div className='shadow rounded mt-5 p-4'>
              <h3>Cart Summary</h3>
              <h4>Total number of products :{cartArray?.length}</h4>
              <h4>Grand Total :{total}</h4>
              <button className='btn btn-success w-100 mt-3' onClick={handleCheckout}>CheckOut</button>
          </div>

        </div>

      </div>

    </div>
    <div className='col-md-1'></div>
    </div>
    </div>

    :

    <div style={{width:'100%', height:'80vh' }} className='d-flex justify-content-center align-items-center'>
      <img src="https://aleointernational.com/img/empty-cart-yellow.png" alt="no image" />
      
    </div>
}
    </>
  )
}

export default Cart