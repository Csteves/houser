import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import './Dashboard.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateListings} from '../../ducks/reducer'
class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            listings: []
        }
    }

    componentDidMount(){
        const {updateListings} = this.props;
        axios.get(`/api/listings`).then(res =>{
            console.log(res.data);
            updateListings(res.data);
        })
    }

    handleDelete(id){
        const {updateListings} = this.props;
        axios.delete(`/api/listings/?id=${id}`)
        .then(res => {
            console.log(res.data)
             updateListings(res.data);
        })
    }

    render() {
        console.log(this.props.state)
        return (
            <div className="dashboard_main">
            <div >
                <div className="header_container" >
                <h4 id="dash_head">Dashboard</h4>
                <Link to="/wizard/step1" >
                    <button id="dash_button">Add New Property</button>
                </Link>

                </div>
                <hr/>
                <div>
                    <h6 id="home_listing">Home Listings</h6>
                    <House
                    handleDelete={this.handleDelete}
                    listings={this.props.state.listings}
                    />
                </div>

            </div>

            </div>
        );
    }
}
function mapStateToProps(state){
    return {state}
}
export default connect(mapStateToProps,{updateListings})(Dashboard);