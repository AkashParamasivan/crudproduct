import React, { Component } from 'react'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import './Product/Addproduct.css' 

 class Editproduct extends React.Component {
     constructor(props) {
         super(props)
            
    // this.onChangeName = this.onChangeName.bind(this);  
    // this.onChangePrice = this.onChangePrice.bind(this);  
    // this.onChangeQuantity = this.onChangeQuantity.bind(this);  
    // this.onChangeDescription = this.onChangeDescription.bind(this);  
    // this.onSubmit = this.onSubmit.bind(this);  

         this.state = {
             
            productName: "",
            price: 0,
            quantity: 0,
            description: ""
         }
     }

     componentDidMount() {  
        axios.get('https://localhost:44324/api/Products/pid='+this.props.match.params.pid)  
           .then(response => {  
              this.setState({  
                  productName: response.data.productName,
                  price: response.data.price,
                   quantity: response.data.quantity,
                  description:response.data.description, 
                  });  
    
           })  
             .catch(function (error) {  
                console.log(error);  
           })  
      }  
      
  
    onChangeProductName=(e)=> {  
        this.setState({  
            productName: e.target.value  
        });  
      }  
      onChangePrice=(e)=> {  
        this.setState({  
            price: e.target.value  
        });    
      }  
      onChangeQuantity=(e)=> {  
        this.setState({  
            quantity: e.target.value  
        });  
    }  
        onChangeDescription=(e)=>  {  
            this.setState({  
                description: e.target.value  
            });  
      }  

      onSubmit(e) {  
        debugger;  
        e.preventDefault();  
         const obj = {  
            pid:this.props.match.params.pid,  
            productName: this.state.productName,
            price: this.state.price,
            quantity: this.state.quantity,
            description:this.state.description, 
      
        };  
        axios.post('https://localhost:44324/api/Products/', obj)  
            .then(res => console.log(res.data));  
            debugger;  
            this.props.history.push('/Productlist')  
      }  
     
      
    //   onSubmit=(e)=> {   
    //     e.preventDefault();  
    //     console.log(this.state)
    //     axios.put('https://localhost:44324/api/Products/',this.state)  
    //     .then(response => {     
    //           console.log(response);  

    //     })  
    //     .catch( (error) =>{  
    //         console.log(error)
    //     })  
    //     }


  

    render()
     {
        const{productName, price, quantity, description}=this.state
        return (
            <Container className="App">  
  
            <h4 className="PageHeading">Update Product Informations</h4>  
               <Form className="form" onSubmit={this.onSubmit}>  
                   <Col>  
                       <FormGroup row>  
                           <Label for="name" sm={2}>ProductName</Label>  
                           <Col sm={10}>  
                               <Input type="text" name="productName" value={productName} onChange={this.onChangeProductName}  
                               placeholder="Enter ProductName" />  
                           </Col>  
                       </FormGroup>  
                       <FormGroup row>  
                           <Label for="Password" sm={2}>Price</Label>  
                           <Col sm={10}>  
                               <Input type="text" name="price" value={price} onChange={this.onChangePrice} placeholder="Enter Price" />  
                           </Col>  
                       </FormGroup>  
                        <FormGroup row>  
                           <Label for="Password" sm={2}>Quantity</Label>  
                           <Col sm={10}>  
                               <Input type="text" name="quantity" value={quantity} onChange={this.onChangeQuantity} placeholder="Enter Quantity" />  
                           </Col>  
                       </FormGroup>  
                        <FormGroup row>  
                           <Label for="Password" sm={2}>Description</Label>  
                           <Col sm={10}>  
                               <Input type="text" name="description"value={description} onChange={this.onChangeDescription} placeholder="Enter Description" />  
                           </Col>  
                       </FormGroup>   
                   </Col>  
                   <Col>  
                       <FormGroup row>  
                           <Col sm={5}>  
                           </Col>  
                           <Col sm={1}>  
                         <Button type="submit" color="success">Submit</Button>{' '}  
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
        )
        }
}



export default Editproduct;