import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStep2} from '../../ducks/reducer';
import './Step2.css'
class Step2 extends Component {
    constructor(){
        super()
        this.state = {
            image:''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        this.setState({image:e.target.value})
    }
    render() {
        return (
            <div className='step2_container'>
                <div className="step2_image_head" >
                    <h6>Image Url</h6>
                    <input
                    id="imageUrl"
                    onChange={(e)=>this.handleInput(e)}
                    type="text"/>
                </div>

                <div className='step2_btns_container' >
                   <Link to='/wizard/step1' >
                        <button
                        className='step2_btns'
                        onClick={()=>this.props.updateStep2(this.state.image)}
                        >PREVIOUS STEP</button>
                   </Link>
                   <Link to='/wizard/step3' >
                        <button
                        className="step2_btns"
                        onClick={()=>this.props.updateStep2(this.state.image)}
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
export default connect(mapStateToProps,{updateStep2})(Step2);