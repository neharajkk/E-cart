import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
      <div className='container-fluid bg-primary p-4 text-light'>
        <div className='row'>
          <div className="col-md-4 px-md-5">
            <div>
              <h3><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-CART</h3>
              <p className='mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum laudantium commodi voluptatum a minima laborum repellendus fuga sequi</p>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
            <div>
              <h3>Links</h3>
              <Link to={'/'} className='text-light'><p className='mt-4'>Home</p></Link>
              <Link to={'/Wishlist'} className='text-light'><p>Wishlist</p></Link>
              <Link to={'/Cart'} className='text-light'><p>Cart</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
            <div>
              <h3>Guides</h3>
              <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          
          <div className="col-md-4 px-md-5 mt-5 mt-md-0">
            <div>
            <h3>Contact Us</h3>
            <div className='d-flex mt-4'>
              <input type="text" placeholder='Email Id' className='form-control' />
              <button className='btn btn-warning'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer