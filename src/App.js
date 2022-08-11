import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Cart from './Cart'
import { useState } from 'react';
import React from 'react';
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar';
import Header from './Header';

function App() {
  const data = [
    {
      id : 1,
      title: "i Phone 13 mini",
      price: 70000,
      Ratings: <div>
          <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon className='text-warning'icon={faStarHalfAlt}></FontAwesomeIcon>
      </div>,
      img: "https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg"
    },
    {
      id : 2,
      title: "i Phone 13 ",
      price: 98000,
      Ratings: <div>
      <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStarHalfAlt}></FontAwesomeIcon>
  </div>,
      img: "https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg"
    },
    {
      id : 3,
      title: "i Phone 13 Pro",
      price: 120000,
      Ratings: <div>
      <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStarHalfAlt}></FontAwesomeIcon>
  </div>,
      img: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg"
    },
    {
      id : 4,
      title: "i Phone 13 Pro Max",
      price: 140000,
      Ratings: <div>
      <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStarHalfAlt}></FontAwesomeIcon>
  </div>,
      img: "https://www.futureworldindia.in/image/cache/catalog/194253124351/611ovP2GkrL._SL1500_-1500x1500.jpg"
    },
    {
      id : 5,
      title: "i Mac",
      price: 180000,
      Ratings: <div>
      <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStarHalfAlt}></FontAwesomeIcon>
  </div>,
      img: "https://m.media-amazon.com/images/I/810RI8O1jJL._SL1500_.jpg"
    },
    {
      id : 6,
      title: "i Mac pro",
      price: 320000,
      Ratings: <div>
      <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-warning'icon={faStar}></FontAwesomeIcon>
      
  </div>,
      img: "https://m.media-amazon.com/images/I/810RI8O1jJL._SL1500_.jpg"
    }
  ];
  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)
  let addToCart = (item) => {
    setCart([...cart,item]);
    setTotal(+total + (item.price));
  }

  let removeCart = (item) => {
   let index = cart.findIndex((Obj) => Obj.id === item.id);
   cart.splice(index,1)
   setCart([...cart])
   setTotal(total - item.price)

  }
  

  return (
    
    <div className="container text-center">
      <Navbar></Navbar>
      <Header></Header>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {
              data.map((items) => {
                return <Card products={cart} items={items} handleAddToCart={addToCart}></Card>
              })
            }
          </div>
        </div>
        <div className="card m-2" style={{ width: "26rem" }}>
          <div className="card-body">
            <button className="btn btn-primary px-5 my-5"> Cart</button>
            {
              cart.length === 0 ? (
                <div>No Items In Cart</div>
              ) :(
                cart.map((cartitem)=>{
                  return <Cart cartitem = {cartitem} removeCart = {removeCart}></Cart>
                })
              )
            }
            <ul class="list-group">
              
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <b>Total</b>
                <span className='mx-5'><b>₹{total}</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </div>
  );
}



export default App;
