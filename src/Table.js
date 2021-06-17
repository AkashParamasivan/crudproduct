import React, { Component } from 'react'
import axios from 'axios';  
import { Link } from 'react-router-dom'; 

class Table extends Component {
    constructor(props) {
        super(props);
    }

    DeleteProduct= () =>{  
        axios.delete('https://localhost:44324/api/Products/DeleteProduct?id='+this.props.obj.pid)  
       .then(json => {  
      // if(json.data.Status==='Success'){  
       alert('Record deleted successfully!! Please Refresh the page');  
       //}  
       })  
       }  
    
    render() {
        return (
            <tr>  
            <td>  
              {this.props.obj.productName}  
            </td>  
            <td>  
              {this.props.obj.price}  
            </td>  
            <td>  
              {this.props.obj.quantity}  
            </td>  
            <td>  
              {this.props.obj.description}  
            </td>  
            <td>  
            {/* <Link to={"/Editproduct/"+this.props.obj.pid} className="btn btn-success">Edit</Link>   */}
            </td>  
            <td>  
              <button type="button" onClick={this.DeleteProduct} className="btn btn-danger">Delete</button>  
            </td>  
          </tr>  
        )
    }
}

export default Table
