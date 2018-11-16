import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase, { provider } from 'firebase'
import { Link } from 'react-router-dom';
import { signinAction } from '../store/action/action';
class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailErr: '',
        }
    }

    signin = () => {
        console.log("chal gaya")

    }

    render() {
        return (
            <div className="d-flex flex-column" id="grad1">
                <div className="d-flex justify-content-center" style={{ marginTop: '4%' }}>
                    <img src={require('./logoSignin.png')}
                        className='logoImage'
                    />
                </div>
                <div  className="d-flex justify-content-center" >
                <p style = {{color : '#fff' , fontSize : "24px"}}> Log In </p>
                    </div>
                <div className="d-flex justify-content-center" style={{ marginTop: '3%', marginBottom: '1.5%' }}>
                    <div className='progressBar'>
                    </div>
                    <div style={{ width: '.40%' }}>
                    </div>
                    <div className='progressBar1'>
                    </div>
                    <div style={{ width: '.40%' }}>
                    </div>
                    <div className='progressBar2'>
                    </div>
                </div>
                <div className="d-flex justify-content-center " >
                    <div className='formDiv'>
                        <Form style={{ margin: '20px', }} >


                            <FormGroup>
                                <Label style={{ color: '#8989A8' }} for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" value={this.state.email}
                                    style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                {
                                    (this.state.emailErr !== '' || this.state.email === '') ?
                                        <p style={{ color: 'red', fontSize: '14px' }}> {this.state.emailErr} </p>
                                        : null
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label style={{ color: '#8989A8' }} for="examplePassword">Password</Label>
                                <Input style={{ borderRadius: '25px' }}
                                    value={this.state.password} type='password'
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                {
                                    (this.state.passErr !== '' && this.state.password) ?
                                        <p style={{ color: 'red', fontSize: '14px' }}> {this.state.passErr} </p>
                                        :
                                        this.state.password === '' && this.state.password.replace(/[^A-Z]/g, "").length === 0 ?
                                            <p style={{ color: 'red', fontSize: '14px' }}>
                                                For Your Safety Please Enter a password with 1 capital letter </p>
                                            : null
                                }
                            </FormGroup>

                        </Form>
                        <div className="d-flex justify-content-center "
                        >
                            <Button color="success" size="lg" style={{
                                width: '50%', borderRadius: '25px',marginBottom : "1%",
                                backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                            }} onClick={() => this.signin()} >log in</Button>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center signinLink"  >
                    <Link style={{ color: '#fff' }} to='/'>
                        Create an account
                    </Link>
                </div>

            </div>

        )
    }
}

function mapStateToProp(state) {
    console.log(state.root.currentUser.name)
    return ({
        // userName: state.root.currentUser.name
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user) => {
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

