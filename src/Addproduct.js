import React, { Component } from 'react';
import axios from 'axios'; 
import './Product/Addproduct.css' 
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  


class Addproduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           // pid:0,
            productName: "",
            price: 0,
            quantity: 0,
            description: ""
        }
    }

    Addproduct=()=>{  
        axios.post('https://localhost:44324/api/Products/PostProduct/', {productName:this.state.productName,  
        price:this.state.price, quantity:this.state.quantity, description:this.state.description})  
      .then(json => {  
        this.props.history.push('/Productlist')  
      /*if(json.data.Status==='Success'){  
        console.log(json.data.Status);  
        alert("Data Save Successfully");  
      this.props.history.push('/Productlist')  
      }  
      else{  
      alert('Data not Saved');  
      debugger;  
      this.props.history.push('/Productlist')  
      } */ 
      })  
      } 


      handleChange= (e)=> {  
        this.setState({[e.target.name]:e.target.value});  
        } 
    
    render() {
        return (
            <div>
                <Container className="App">  
    <h4 className="PageHeading">Enter Product Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="address" sm={2}>ProductName</Label>  
          <Col sm={10}>  
            <Input type="text" name="productName" onChange={this.handleChange} value={this.state.productName} placeholder="Enter ProductName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Price</Label>  
          <Col sm={10}>  
            <Input type="text" name="price" onChange={this.handleChange} value={this.state.price} placeholder="Enter price" />  
          </Col>  
        </FormGroup>  
        
        <FormGroup row>  
          <Label for="Password" sm={2}>Quantity</Label>  
          <Col sm={10}>  
            <Input type="text" name="quantity" onChange={this.handleChange} value={this.state.quantity} placeholder="Enter Quantity" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Product Description</Label>  
          <Col sm={10}>  
            <Input type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Enter Description" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addproduct} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
                
            </div>
        )
    }
}

export default Addproduct;
