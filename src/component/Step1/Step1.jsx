import React, { Component } from 'react';
import {Link,} from 'react-router-dom';
import './Step1.css';
import {connect} from 'react-redux';
import {updateStep1, updateListings} from '../../ducks/reducer'


class Step1 extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            address:'',
            city:'',
            state:'',
            zip:''
        }
        this.handleInputs = this.handleInputs.bind(this)
    }
    handleInputs(e){
        const{name,value} = e.target
        this.setState({
            [name]:value,
            [name]:value,
            [name]:value,
            [name]:value,
            [name]:value
        })
    }

    render() {
            const{name,address,city,state,zip} = this.state
        return (
            <div className="step1_div" >
                <div  >
                    <h6>Property Name</h6>
                    <input
                    name='name'
                    onChange={(e)=>this.handleInputs(e)}
                    type="text"/>
                    <h6>Address</h6>
                    <input
                    name='address'
                    id="address"
                    onChange={(e)=>this.handleInputs(e)}
                    type="text"/>
                  </div>
                    <div className='ctz_head' >
                        <h6>City</h6>
                        <h6>State</h6>
                        <h6>Zip</h6>
                    </div>

                    <div
                    className="city_state_zip" >
                        <input
                        id="city"
                        name='city'
                        onChange={(e)=>this.handleInputs(e)}
                        type="text"/>
                        <input
                        id='state'
                        name='state'
                        onChange={(e)=>this.handleInputs(e)}
                        type="text"/>
                        <input
                        id='zip'
                        name='zip'
                        onChange={(e)=>this.handleInputs(e)}
                        type="text"/>
                    </div>
            <div>
                   <Link to='/wizard/step2' >
                        <button
                        className="next_btn"
                        onClick={()=>this.props.updateStep1(name,address,city,state,zip)}
                        >NEXT STEP</button>
                   </Link>
               </div>



        </div>
        );
    }
}
function mapStateToProps(state){
    return{state}
}
export default connect(mapStateToProps,{updateStep1,updateListings})(Step1);