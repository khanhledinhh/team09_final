import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';

class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
      <section style={{ backgroundColor: 'white' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/405986195_1550738342337634_18948048276690000_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ByHTpL8ir48AX_R-m0J&_nc_oc=AQnb-XX34ame0_PCZy3YDRh8Bmqbl5l_M8SAVwFQ_xn0AEZacyQbFwfSxC307qLkY4k&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBzYr7wPeXhV3mC0A8o8hmmK45BeaGX2s5Q2adbUmjW8Q&oe=65676A48"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '300px' }}
                  fluid />
                <hr></hr>
                <div className="d-flex justify-content-center mb-2">
                  
                  <MDBBtn outline className="ms-1" type='submit' value="UPDATE" onClick={(e) => this.btnUpdateClick(e)}>UPDATE</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>User Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              
            </MDBCard>
            <hr></hr>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.context.setCustomer(result);
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Myprofile;