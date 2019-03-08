import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Field } from 'react-final-form';
import axios from 'axios';

class UpdateCreature extends Component{
    constructor(props) {
        super(props);
        this.state = {
            CreatureName: ''
        }
    };

    updateRequest = () => {
       console.log("START UPDATE");
       axios.put ('localhost:8080/SoloProject/api/creature/updateCreature' + this.state.CreatureName)
       .then(response => {
           console.log(response.data);
           console.log("Done");
          
       });
       document.getElementById('testid').innerHTML = '';
    };

    render(){
        return(
            <div>
                
              <input type="button" className="block" value="Update"  onClick={this.updateRequest}></input>

              <h5 id='testid'></h5>  
            </div>
        )
    }
}

export default UpdateCreature;