import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
    const wishlistArray = useSelector((state)=>state.wishlistReducer)
    const cartArray = useSelector((state)=>state.cartReducer)
    return (
        <>
            <Navbar expand="lg" className="bg-primary w-100" style={{position:'fixed',top:'0px',zIndex:'1'}}>
                <Container>
                    <Link to={'/'}><Navbar.Brand className='text-light'><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-cart</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to={'/Wishlist'}><button className='btn btn-outline-light'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger' />Wishlist <Badge bg="secondary" className='ms-2'>{wishlistArray?.length}</Badge></button></Link>
                            </Nav.Link>

                            <Nav.Link className='ms-md-3'>
                            <Link to={'/Cart'}><button className='btn btn-outline-light'><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className='me-2' />Cart <Badge bg="secondary" className='me-md-2'>{cartArray?.length}</Badge></button></Link>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header