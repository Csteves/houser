import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import './Wizard.css';
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
import {connect} from 'react-redux';
import {cancel} from '../../ducks/reducer'



class Wizard extends Component {
    render() {

        return (
            <div className="main_div" >
                <div className="wiz_head" >
                    <h4> Add New Listing</h4>
                    <Link to='/'>
                        <button
                        className="cancel_button"
                        onClick={()=>this.props.cancel()}
                        >Cancel</button>
                    </Link>
                </div>
                <Switch>
                    <Route path="/wizard/step1" component={Step1} />
                    <Route path="/wizard/step2" component={Step2} />
                    <Route path="/wizard/step3" component={Step3} />
                </Switch>
            </div>
        );
    }
}


export default connect(null,{cancel})(Wizard);