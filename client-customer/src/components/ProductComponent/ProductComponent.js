import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../../utils/withRouter';
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import './ProductComponent.css'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
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
    return (
      <div>
          <h1 className="text-center mt-3">LIST PRODUCTS</h1>
            <section className='container'>
              <div className='row py-5'>
              {prods}
              </div>
            </section>
      </div>
    );
  }
  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
        this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
        this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);