import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  


export class Productlist extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             business: []
        }
    }

    componentDidMount(){  
        debugger;  
        axios.get('https://localhost:44324/api/Products')  
          .then(response => {  
            this.setState({ business: response.data });  
            console.log(response)
            debugger;  
    
          })  
          .catch(function (error) {  
            console.log(error);  
          })  
      }  

      tabRow(){  
        return this.state.business.map(function(object, i){  
            return <Table obj={object} key={i} />;  
        });  
      } 
    
    render() {
        return (
            <div>  
          <h4 align="center">Product List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>ProductName</th>  
                <th>Price</th>  
                <th>Quantity</th>  
                <th>Description</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
        )
    }
}

export default Productlist
