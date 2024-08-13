import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { width } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleCart = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeItem(item.id))
  }
  return (
    <>

    
    {wishlistArray?.length>0? <div className='container-fluid' style={{marginTop:'100px'}}>
      <h1 className='text-danger text-center mb-5'>WISHLIST</h1>
      <div className='row px-4 md-4'>
        {wishlistArray?.map((item)=>(<div className="col-md-3 px-4 my-4 d-flex justify-content-center">
          <Card style={{ width: '100%' }} className='shadow border-0'>
            <Card.Img variant="top" src={item?.image} style={{width:'100%', height:'200px'}} />
            <Card.Body>
              <Card.Title>Some quick example text to build on the card title and make up the
              bulk.</Card.Title>
              <Card.Text>
               
                <p className='fw-bolder'>Price :{item?.price}</p>
              </Card.Text>
              <div className='d-flex justify-content-between'>
              <Button variant="danger" onClick={()=>dispatch(removeItem(item?.id))}><FontAwesomeIcon icon={faTrash} /></Button>
              <Button variant="success" onClick={()=>handleCart(item)}><FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
            </Card.Body>
          </Card>
        </div>))}
        

      </div>

    </div>
    :

    <div style={{width:'100%', height:'80vh' }} className='d-flex justify-content-center align-items-center'>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no image" />
      
    </div>}

  </>
  )
}

export default Wishlist