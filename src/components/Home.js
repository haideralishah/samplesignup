import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase, { provider } from 'firebase'
import { Link } from 'react-router-dom';
import { signinAction } from '../store/action/action';
class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="d-flex flex-column" id="grad1" >
                <div className="d-flex justify-content-center" style={{ marginTop: '4%' }}>
                    <img src={require('./logo.png')} style={{ height: '10%', width: '18%' }} />
                </div>

                <div className="d-flex justify-content-center" style = {{padding : "20px"}}>
                    <div style={{ width: '34%',  padding :  '3%'  }}>
                        <Link to = '/signup-stylist' className="d-flex justify-content-center" style = {{marginBottom : "3%" , textDecoration : "none", }} >
                            <Button color="success" size="lg" style={{
                                width: '80%', borderRadius: '7px',
                                backgroundColor: '#6E14E8', borderColor: '#6E14E8', color: '#fff', fontSize: '24x'
                            }} >Register As Stylist</Button>

                        </Link>
                        <Link  to = '/signup' className="d-flex justify-content-center"  style = {{marginBottom : "3%" , textDecoration : "none", }}>
                            <Button color="success" size="lg" style={{
                                width: '80%', borderRadius: '7px',textDecoration : "none", 
                                backgroundColor: '#6E14E8', borderColor: '#6E14E8', color: '#fff', fontSize: '24x'
                            }} >Register As User</Button>
                            
                        </Link>
                    </div>
                </div>

            </div>

        )
    }
}

export default Home;

