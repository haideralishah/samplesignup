import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase, { provider } from 'firebase'
import { Link } from 'react-router-dom';
import { signinAction } from '../store/action/action';
class SignUpUser extends Component {
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
        console.log("chal gaya")
        // if (this.state.firstName === '') {
        //     this.setState({ nameErr: 'Ah darn, something went wrong.' })
        // }
        // if (this.state.lastName === '') {
        //     this.setState({ nameErr: 'Ah darn, something went wrong.' })
        // }
        // if (this.state.email === '' || this.state.email.indexOf("@") === -1) {
        //     this.setState({ emailErr: 'Oh no. I think you mis-typed your email address.' })
        // }
        // if (this.state.password === '' || this.state.password.length > 10 || this.state.password.replace(/[^A-Z]/g, "").length === 0) {
        //     this.setState({ passErr: 'Please enter a password that contains 10 characters with at least 1 capital letter.' })
        // }
        // if (this.state.password1 === '') {
        //     this.setState({ password1Err: 'Password required' })
        // }
        // if (this.state.firstName !== '' && this.state.lastName !== ''
        //     && this.state.email !== '' && this.state.email.length > 3 && this.state.email.indexOf("@") !== -1 && this.state.password !== '' &&
        //     this.state.password === this.state.password1 && this.state.password.replace(/[^A-Z]/g, "").length !== 0) {
            this.setState({ step1: true, nameErr: "", emailErr: '', passErr: "", password1Err: "" })
        // }
    }
    step1next = () => {
        if (this.state.userName !== '' || this.state.userName.length >= 6) {
            this.setState({ step2: true })
        }
        else if (this.state.userName === '') {
            this.setState({ userNameErr: 'This field is required.' })
        }
    }
    step2complete() {
        if (this.state.phoneNumber === '') {
            this.setState({ phoneNumberErr: "Oh no! Please make sure you typed your phone number correctly" })
        }
        if (this.state.phoneNumber.length === 10 &&
            /^[a-zA-Z]+$/.test(this.state.phoneNumber) === false && this.state.phoneNumber[0] !== 0) {
            alert("Completed")
        }
    }

    render() {
        return (
            <div className="d-flex flex-column" id="grad1">
                <div className="d-flex justify-content-center" style={{ marginTop: '4%' }}>
                    <img src={require('./logo.png')}
                        className='logoImage'
                    />
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: '3%', marginBottom: '1%' }}>
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

                    {
                        this.state.step2 ?
                            <div className='formDiv' >
                                <Form style={{ margin: '20px', marginTop: "10%", marginBottom: "10%" }} >
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} >phone number</Label>
                                        <Input type="number" value={this.state.phoneNumber}
                                            style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ phoneNumber: e.target.value }) }} />
                                        {
                                            this.state.phoneNumber.length !== 10 || /^[a-zA-Z]+$/.test(this.state.phoneNumber) === true ||
                                                this.state.phoneNumber[0] === 0 ?
                                                <p style={{ color: 'red', fontSize: '14px' }}>
                                                    Please specify a valid phone number </p> :
                                                null
                                        }
                                    </FormGroup>
                                </Form>
                                <div className="d-flex justify-content-center" style={{ marginBottom: "-83px", position: "relative" }}>
                                    <Button color="success" size="lg" style={{
                                        width: '38%', borderRadius: '25px', marginBottom: "25px", height: '56px',
                                        backgroundColor: '#24D787', borderColor: '#24D787',
                                        color: '#fff', fontSize: '18px', marginRight: "5%"
                                    }} onClick={() => this.setState({ step2: false })} >Previous</Button>
                                    <Button color="success" size="lg" style={{
                                        width: '38%', borderRadius: '25px', height: '56px',
                                        backgroundColor: '#24D787', borderColor: '#24D787',
                                        color: '#fff', fontSize: '18px', marginLeft: "5%"
                                    }} onClick={() => this.step2complete()} >Complete</Button>
                                </div>
                            </div> :
                            this.state.step1 ?
                                <div className='formDiv'>
                                    <Form style={{ margin: '20px', }} >
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} >User Name</Label>
                                            <Input type="text" value={this.state.userName}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                                            {
                                                (this.state.userNameErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : this.state.userName !== '' && this.state.userName.length <= 6 ?
                                                        <p style={{ color: 'red', fontSize: '14px' }}> Please enter at least 6 characters. </p>
                                                        :
                                                        null
                                            }
                                            <div className="d-flex justify-content-center" style={{ marginTop: "5%" , marginBottom: "5%" }}>
                                                <Button color="success" size="lg" style={{
                                            width: '50%', borderRadius: '25px',
                                            backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                        }}
                                                    onClick={() => this.setState({ step1: false })} >Previous</Button>
                                            </div>
                                            <div className="d-flex justify-content-center step1next" >
                                                <Button color="success" size="lg" style={{
                                            width: '50%', borderRadius: '25px',
                                            backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                        }}
                                                    onClick={() => this.setState({ step2: true })} >Next</Button>

                                            </div>
                                        </FormGroup>
                                    </Form>
                                </div>
                                :
                                <div className='formDiv'>
                                    <Form style={{ margin: '20px', }} >
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="firstName">First Name</Label>
                                            <Input type="text" name="firstName" value={this.state.firstName}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ firstName: e.target.value }) }} />
                                            {
                                                (this.state.nameErr !== '' && this.state.firstName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    :
                                                    null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="lastName">Last Name</Label>
                                            <Input type="text" name="lastName" id="lastName" value={this.state.lastName}
                                                style={{ borderRadius: '25px' }}
                                                onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
                                            {
                                                (this.state.nameErr !== '' && this.state.lastName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
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
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="retypePassword">Password</Label>
                                            <Input type="password" name="retypePassword"
                                                id="retypePassword" style={{ borderRadius: '25px' }} value={this.state.password1}
                                                onChange={(e) => { this.setState({ password1: e.target.value }) }} />

                                            {
                                                this.state.password !== this.state.password1 ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> Your passwords don't match up. Try again. </p>
                                                    : null
                                            }
                                        </FormGroup>

                                    </Form>
                                    <div className="d-flex justify-content-center btnDiv"

                                    >
                                        <Button color="success" size="lg" style={{
                                            width: '50%', borderRadius: '25px',
                                            backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                        }} onClick={() => this.signin()} >next</Button>
                                    </div>

                                </div>

                    }
                </div>
                <div className="d-flex justify-content-center signinLink"  >
                    <Link style={{ color: '#fff' }} to='/signin'>
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

export default connect(mapStateToProp, mapDispatchToProp)(SignUpUser);

