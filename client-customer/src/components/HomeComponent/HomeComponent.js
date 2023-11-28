import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css';
import Carousel from './CarouselComponent'
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} class="col-md-3">

              <div class="card1 p-3">
              
              
                <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} className='img-fluid mb-3'  alt="" /></Link>
              
              <div class="product-details">
                <span class="font-weight-bold d-block">${item.price}</span>
                <span><b>{item.name}</b></span>
                
                <div class="star1">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>

                <div class="buttons d-flex flex-row">
                <div class="cart"><IoCart /></div><Link to={'/product/' + item._id}><button class="btn btn-success cart-button btn-block"><span class="dot"></span>View Details</button></Link>
                </div>

                <div class="kind">
                  <small>Genre: {item.category.name}</small>                                     
                </div>

              </div>                 
            </div>
          </div>
      );
    });
    
    const hotprods = this.state.hotprods && this.state.hotprods.length > 0 ? this.state.hotprods.map((item) => {
      return (
        <div key={item._id} class="col-md-3">

              <div class="card1 p-3">
              
              
                <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} className='img-fluid mb-3'  alt="" /></Link>
              
              <div class="product-details">
                <span class="font-weight-bold d-block">${item.price}</span>
                <span><b>{item.name}</b></span>
                
                <div class="star1">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>

                <div class="buttons d-flex flex-row">
                  <div class="cart"><IoCart /></div><Link to={'/product/' + item._id}><button class="btn btn-success cart-button btn-block"><span class="dot"></span>View Details</button></Link>
                </div>

                <div class="kind">
                  <small>Genre: {item.category.name}</small>                                     
                </div>

              </div>                 
            </div>
          </div>
      );
    }) : [];
    

    return (
      <div>
        <Carousel />
        {this.state.hotprods.length > 0 ?
          <div>
            <br></br>
            <h1 className="text-center mt-3"><b>HOT PRODUCTS</b></h1>
            <section className='container'>
              <div className='row py-5'>
              {hotprods}
              </div>
            </section>
          </div>
          
          : <div />}


        <div>
          <h1 className="text-center mt-3"><b>NEW PRODUCTS</b></h1>
            <section className='container'>
              <div className='row py-5'>
              {newprods}
              </div>
            </section>

        </div>





        
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;