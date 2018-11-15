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
            <div className="d-flex flex-column" id="grad1">
                <div className="d-flex justify-content-center" style={{ marginTop: '4%' }}>
                    <img src={require('./logo.png')} style={{ height: '10%', width: '18%' }} />
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: '3%', marginBottom: '1%' }}>
                    <div style={{ width: '11%', height: '17px', backgroundColor: '#DB82FF', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
                    </div>
                    <div style={{ width: '.40%' }}>
                    </div>
                    <div style={{ width: '11%', height: '17px', backgroundColor: '#fff' }}>
                    </div>
                    <div style={{ width: '.40%' }}>
                    </div>
                    <div style={{ width: '11%', height: '17px', backgroundColor: '#fff', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div style={{ width: '34%', backgroundColor: '#fff', paddingBottom: '3%' }}>
                        <div className="d-flex justify-content-center" >
                            <Button color="success" size="lg" style={{
                                width: '12%', borderRadius: '25px',
                                backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                            }} >next</Button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Home;

