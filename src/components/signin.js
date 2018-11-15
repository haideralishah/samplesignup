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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password1: '',
            nameErr: '',
            emailErr: '',
            passErr: '',
            userName: '',
            step2: false,
            password1Err: '',
            step1: false,
            userNameErr: "",
            phoneNumber: ""
        }



    }

    signin = () => {
        // console.log("chal gaya")
        // if (this.state.firstName === '') {
        //     this.setState({ nameErr: 'Ah darn, something went wrong.' })
        // }
        // if (this.state.lastName === '') {
        //     this.setState({ lastName: 'Ah darn, something went wrong.' })
        // }
        // if (this.state.email === '') {
        //     this.setState({ emailErr: 'Oh no. I think you mis-typed your email address.' })
        // }
        // if (this.state.password === '') {
        //     this.setState({ passErr: 'Please enter a password that contains 10 characters with at least 1 capital letter.' })
        // }
        // if (this.state.password1 === '') {
        //     this.setState({ password1Err: 'Password required' })
        // }

        this.setState({ step1: true })
    }
    step1next = () => {
        if (this.state.userName !== '' || this.state.userName.length > 5) {
            this.setState({ step2: true })
        }
        else if (this.state.userName === '') {
            this.setState({ userNameErr: 'This field is required.' })
        }
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
                    <div style={{ width: '11%', height: '17px', backgroundColor: this.state.step1 ? '#DB82FF' : '#fff' }}>
                    </div>
                    <div style={{ width: '.40%' }}>
                    </div>
                    <div style={{ width: '11%', height: '17px', backgroundColor: '#fff', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>
                    </div>
                </div>

                <div className="d-flex justify-content-center">

                    {
                        this.state.step2 ?
                            <div style={{ width: '34%',  backgroundColor: '#fff', paddingBottom: '3%' }}>
                                <Form style={{ margin: '20px', marginTop : "10%"  , marginBottom : "10%"}} >
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} >phone number</Label>
                                        <Input type="text"
                                            style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ phoneNumber: e.target.value }) }} />

                                    </FormGroup>
                                </Form>
                                <div className="d-flex justify-content-center" style = {{marginBottom : "-83px" , position : "relative"}}>
                                    <Button color="success" size="lg" style={{
                                        width: '38%', borderRadius: '25px', marginBottom: "25px", height: '56px',
                                        backgroundColor: '#24D787', borderColor: '#24D787',
                                        color: '#fff', fontSize: '18px',marginRight : "5%" 
                                    }} onClick={() => this.setState({ step2: false })} >Previous</Button>
                                    <Button color="success" size="lg" style={{
                                        width: '38%', borderRadius: '25px', height: '56px',
                                        backgroundColor: '#24D787', borderColor: '#24D787',
                                        color: '#fff', fontSize: '18px', marginLeft : "5%"
                                    }} onClick={() => this.setState({ step2: true })} >Complete</Button>
                                </div>
                            </div> :
                            this.state.step1 ?
                                <div style={{ width: '34%', backgroundColor: '#fff', paddingBottom: '3%' }}>
                                    <Form style={{ margin: '20px', }} >
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="firstName">User Name</Label>
                                            <Input type="text" name="firstName" id="firstName"
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                                            {
                                                (this.state.userNameErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : this.state.userName.length <= 6 ?
                                                        <p style={{ color: 'red', fontSize: '14px' }}> Please enter at least 6 characters. </p>
                                                        :
                                                        null
                                            }
                                            <div className="d-flex justify-content-center">
                                                <Button color="success" size="lg" style={{
                                                    width: '45%', borderRadius: '25px', marginBottom: "25px",
                                                    backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                                }} onClick={() => this.setState({ step1: false })} >Previous</Button>
                                            </div>
                                            <div className="d-flex justify-content-center" style={{ marginBottom: "-83px" }}>
                                                <Button color="success" size="lg" style={{
                                                    width: '45%', borderRadius: '25px',
                                                    backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                                }} onClick={() => this.setState({ step2: true })} >Next</Button>

                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                                :
                                <div style={{ width: '34%', backgroundColor: '#fff', paddingBottom: '3%' }}>
                                    <Form style={{ margin: '20px', }} >
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="firstName">First Name</Label>
                                            <Input type="text" name="firstName" id="firstName"
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ firstName: e.target.value }) }} />
                                            {
                                                (this.state.nameErr !== '' || this.state.firstName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="lastName">Last Name</Label>
                                            <Input type="text" name="lastName" id="lastName"
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
                                            {
                                                (this.state.nameErr !== '' || this.state.lastName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail"
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                            {
                                                (this.state.emailErr !== '' || this.state.email === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.emailErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                            {
                                                (this.state.passErr !== '' || this.state.password) ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.passErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="retypePassword">Password</Label>
                                            <Input type="password" name="retypePassword"
                                                id="retypePassword" style={{ borderRadius: '25px' }}
                                                onChange={(e) => { this.setState({ password1: e.target.value }) }} />

                                            {
                                                this.state.password1Err === '' || this.state.password1 == '' ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.password1Err} </p>
                                                    :
                                                    this.state.password !== this.state.password1 ?
                                                        <p style={{ color: 'red', fontSize: '14px' }}> Your passwords don't match up. Try again. </p>
                                                        : null
                                            }
                                        </FormGroup>

                                    </Form>
                                    <div className="d-flex justify-content-center" style={{ position: 'relative', marginBottom: '-54px' }}>
                                        <Button color="success" size="lg" style={{
                                            width: '50%', borderRadius: '25px',
                                            backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                        }} onClick={() => this.signin()} >next</Button>
                                    </div>

                                </div>

                    }
                </div>
                <div className="d-flex justify-content-center"
                    style={{ margin: '25px', marginBottom: '3%', marginTop: "3%" }}>
                    <Link style={{ color: '#fff' }} to='/signup'>
                        Already have an account? Sign In
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

