import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStep3,updateListings,cancel} from '../../ducks/reducer';
import Axios from 'axios';

class Step3 extends Component {
    constructor(){
        super();
        this.state = {
            toDashboard:false,
            mortgage:'',
            rent:'',
        }
        this.addNewListing = this.addNewListing.bind(this)
        this.handleInputs = this.handleInputs.bind(this);
    }

    addNewListing(){
        console.log(this.props.state);
        const {name,address,city,state,zip,image} = this.props.state;
        const {mortgage,rent} = this.state;
        Axios.post(`/api/listings`,{name:name,address:address, city:city, state:state,zip:zip,image:image,mortgage:mortgage,rent:rent})
        .then(res =>{
            console.log(res.data)
            this.props.cancel();
            this.props.updateListings(res.data);
            this.setState({toDashboard:true})
        })
    }
    handleInputs(e){
        const{name,value} = e.target;
        this.setState({[name]:value,[name]:value})
    }

    render() {
        const {mortgage,rent} = this.state
        console.log("step3 mortgage,rent", mortgage,rent)
        if(this.state.toDashboard === true){
            return <Redirect to="/" />
        }
        return (
            <div className="" >
                    <p>Recommended Rent:{"$"+(mortgage * 1.25).toFixed(2)}</p>
                    <div>
                        <h6>Monthly Mortgage Amount</h6>
                        <input
                        name="mortgage"
                        onChange={(e)=>this.handleInputs(e)}
                        type="text"/>
                    </div>
                    <div>
                        <h6>Desired Monthly Rent</h6>
                        <input
                        name="rent"
                        onChange={(e)=>this.handleInputs(e)}
                        type="text"/>
                    </div>

            <div>

                <Link to='/wizard/step2' >
                        <button
                        onClick={()=>this.props.updateStep3(mortgage,rent)}
                        >PREVIOUS STEP</button>
                   </Link>
                    <button
                    onClick={()=>this.addNewListing()}
                    >Complete</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{state}
}

export default connect(mapStateToProps,{updateStep3,updateListings,cancel})( Step3);