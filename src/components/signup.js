import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import firebase, { provider } from 'firebase'
import { Link } from 'react-router-dom';
import { signinAction } from '../store/action/action';
class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameErr: '',
            lastNameErr: '',
            lastName: '',
            email: '',
            salonName: '',
            salonNameErr: '',
            salonAddress: '',
            password: '',
            password1: '',
            nameErr: '',
            emailErr: '',
            passErr: '',
            salonName: '',
            step2: false,
            password1Err: '',
            zipCode: "",
            state: "",
            stateErr: "",
            zipErr: '',
            step1: false,
            userName: "",
            userNameErr: "",
            addressErr: "",
            phoneNumber: "",
            city: ""
        }



    }

    signinFirstStep = () => {
        console.log("chal gaya")
        if (this.state.firstName === '') {
            this.setState({ firstNameErr: 'Please enter a valud US State.' })
        }
        if (this.state.lastName === '') {
            this.setState({ lastNameErr: 'Ah darn, something went wrong.' })
        }
        if (this.state.email === '') {
            this.setState({ emailErr: 'Oh no. I think you mis-typed your email address.' })
        }
        if (this.state.firstName !== '' && this.state.lastName !== ''
            && this.state.email !== '' && this.state.email.length >= 3) {
            this.setState({ step1: true, firstNameErr: "", lastNameErr: "", emailErr: '' })
        }
    }
    step1next = () => {
        if (this.state.salonName == '') {
            this.setState({ salonNameErr: "Oh no! Something went wrong." })
        }
        if (this.state.salonAddress === '' || this.state.city === '') {
            this.setState({ addressErr: 'Oh no! The address you entered is invalid' })
        }
        if (this.state.state === '') {
            this.setState({ stateErr: 'This field is required.' })
        }
        if (this.state.zipCode === '') {
            this.setState({ zipErr: 'Your zip code is incorrect' })
        }

        if (this.state.salonName !== '' && this.state.salonAddress !== '' && this.state.state !== '' && this.state.city !== '' &&
            this.state.zipCode !== '') {
            this.setState({ step2: true, salonNameErr: "", addressErr: "", stateErr: '', zipErr: "" })
        }

    }
    step2Complete = () => {
        console.log("chal gaya")
        if (this.state.userName === '') {
            this.setState({ userNameErr: 'This field is required.' })
        }
        if (this.state.password === '') {
            this.setState({ passErr: '  For Your Safety Please Enter a password with 1 capital letter' })
        }
        if (this.state.password === this.state.password1) {
            this.setState({ password1Err: 'Password does not match' })
        }
        if (this.state.userName !== '' && this.state.password !== ''
            && this.state.password === this.state.password1) {
            // this.setState({ step1: true, firstNameErr: "", lastNameErr: "", emailErr: '' })
            alert("Completed")
        }
    }


    render() {
        return (
            <div className="d-flex flex-column" id="grad1">
                <div className="d-flex justify-content-center" style={{ marginTop: '4%' }}>
                    <img src={require('./logo.png')} className='logoImage' />
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

                <div className="d-flex justify-content-center">

                    {
                        this.state.step2 ?
                            <div className='formDiv'>
                                <Form style={{ margin: '20px', marginTop: "10%", }} >
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} >create a user name</Label>
                                        <Input type="text" value={this.state.userName}
                                            style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                                        {
                                            (this.state.userNameErr !== '') ?
                                                <p style={{ color: 'red', fontSize: '14px' }}> {this.state.userNameErr} </p>
                                                : null
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword"
                                            style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                        {
                                            (this.state.passErr !== '') ?
                                                <p style={{ color: 'red', fontSize: '14px' }}> {this.state.passErr} </p>
                                                :
                                                this.state.password.replace(/[^A-Z]/g, "").length === 0 ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}>
                                                        For Your Safety Please Enter a password with 1 capital letter </p>
                                                    : null
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} for="retypePassword">Password</Label>
                                        <Input type="password" name="retypePassword"
                                            id="retypePassword" style={{ borderRadius: '25px' }}
                                            onChange={(e) => { this.setState({ password1: e.target.value }) }} />

                                        {
                                            this.state.password !== this.state.password1 ?
                                                <p style={{ color: 'red', fontSize: '14px' }}> Your passwords don't match up. Try again. </p>
                                                : null
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} >Web site (optional)</Label>
                                        <Input type="text"
                                            style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ website: e.target.value }) }} />

                                    </FormGroup>
                                    <FormGroup>
                                        <Label style={{ color: '#8989A8' }} >Instagram username(optional)</Label>
                                        <div className="d-flex justify-content-center" >
                                            <div style={{ width: "10%", backgroundColor: "#E9ECEF", border: "1px #CED4DA solid ", }}>
                                                <span style={{
                                                    textAlign: "center", color: "#495057", verticalAlign: "center",
                                                    paddingLeft: "12px", position: "relative"
                                                }}>@</span>
                                            </div>
                                            <div style={{ width: "90%" }}>
                                                <Input style={{ borderTopRightRadius: "21px", borderBottomRightRadius: "21px" }} />
                                            </div>
                                        </div>
                                    </FormGroup>
                                </Form>
                                    <div className="d-flex justify-content-center btnDivStep2">
                                        <Button color="success" size="lg" style={{
                                            width: '38%', borderRadius: '25px', marginBottom: "25px", height: '56px',
                                            backgroundColor: '#24D787', borderColor: '#24D787',
                                            color: '#fff', fontSize: '18px', marginRight: "5%"
                                        }} onClick={() => this.setState({ step2: false })} >Previous</Button>
                                        <Button color="success" size="lg" style={{
                                            width: '38%', borderRadius: '25px', height: '56px',
                                            backgroundColor: '#24D787', borderColor: '#24D787',
                                            color: '#fff', fontSize: '18px', marginLeft: "5%"
                                        }} onClick={() => this.step2Complete()} >Complete</Button>
                                    </div>
                            </div> :
                            this.state.step1 ?
                                <div className='formDiv'>
                                    <Form style={{ margin: '20px', marginBottom: "10%" }} >
                                        <FormGroup>
                                            <Label style={{ marginTop: "5px", color: '#8989A8' }}>Salon Name</Label>
                                            <Input type="text" value={this.state.salonName}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ salonName: e.target.value }) }} />
                                            {
                                                (this.state.salonNameErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.salonNameErr} </p>
                                                    : null
                                            }
                                            <Label style={{ marginTop: "5px", color: '#8989A8' }}>Salon Address</Label>
                                            <Input type="text" value={this.state.salonAddress}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ salonAddress: e.target.value }) }} />
                                            {
                                                (this.state.addressErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.addressErr} </p>
                                                    : null
                                            }
                                            <Label style={{ marginTop: "5px", color: '#8989A8' }}>City</Label>
                                            <Input type="text" value={this.state.city}
                                                style={{ borderRadius: '25px' }}
                                                onChange={(e) => { this.setState({ city: e.target.value }) }} />
                                            {
                                                (this.state.addressErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.addressErr} </p>
                                                    : null
                                            }
                                            <div className="d-flex justify-content-center" style={{ paddingBottom: "7%" }}>
                                                <div>
                                                    <Label style={{ marginTop: "2px", marginRight: "5%", color: '#8989A8' }}>State</Label>
                                                    <Input type="text" value={this.state.state}
                                                        style={{ borderRadius: '25px', marginRight: "5%", }}
                                                        onChange={(e) => { this.setState({ state: e.target.value }) }} />
                                                    {
                                                        (this.state.stateErr !== '') ?
                                                            <p style={{ color: 'red', fontSize: '14px' }}> {this.state.stateErr} </p>
                                                            : null
                                                    }
                                                </div>
                                                <div style={{ marginLeft: "5px" }}>
                                                    <Label style={{ marginTop: "2px", color: '#8989A8' }}>Zip Code</Label>
                                                    <Input type="text" value={this.state.zipCode}
                                                        style={{ borderRadius: '25px', }}
                                                        onChange={(e) => { this.setState({ zipCode: e.target.value }) }} />
                                                    {
                                                        (this.state.zipErr !== '') ?
                                                            <p style={{ color: 'red', fontSize: '14px' }}> {this.state.zipErr} </p>
                                                            : null
                                                    }
                                                </div>
                                            </div>

                                        </FormGroup>
                                        <div className="d-flex justify-content-center btnDivStep1" >
                                            <Button color="success" size="lg" style={{
                                                width: '38%', borderRadius: '25px', marginBottom: "25px", height: '56px',
                                                backgroundColor: '#24D787', borderColor: '#24D787',
                                                color: '#fff', fontSize: '18px', marginRight: "5%"
                                            }} onClick={() => this.setState({ step1: false })} >Previous</Button>
                                            <Button color="success" size="lg" style={{
                                                width: '38%', borderRadius: '25px', height: '56px',
                                                backgroundColor: '#24D787', borderColor: '#24D787',
                                                color: '#fff', fontSize: '18px', marginLeft: "5%"
                                            }} onClick={() => { this.step1next() }} >Next</Button>
                                        </div>
                                    </Form>
                                </div>
                                :
                                <div className='formDiv'>
                                    <Form style={{ margin: '20px', }} >
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="firstName">First Name</Label>
                                            <Input type="text" name="firstName" id="firstName" value={this.state.firstName}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ firstName: e.target.value }) }} />
                                            {
                                                (this.state.firstNameErr !== '' || this.state.firstName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="lastName">Last Name</Label>
                                            <Input type="text" name="lastName" id="lastName" value={this.state.lastName}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
                                            {
                                                (this.state.lastNameErr !== '' || this.state.lastName === '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.nameErr} </p>
                                                    : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ color: '#8989A8' }} for="exampleEmail">Email address</Label>
                                            <Input type="email" name="email" id="exampleEmail" value={this.state.email}
                                                style={{ borderRadius: '25px' }} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                            {
                                                (this.state.emailErr !== '') ?
                                                    <p style={{ color: 'red', fontSize: '14px' }}> {this.state.emailErr} </p>
                                                    :
                                                    this.state.email.length < 3 ?
                                                        <p style={{ color: 'red', fontSize: '14px' }}> Please enter at least 3 characters.</p>
                                                        :
                                                        null
                                            }
                                        </FormGroup>
                                    </Form>
                                    <div className="d-flex justify-content-center" style={{ position: 'relative', marginBottom: '-54px' }}>
                                        <Button color="success" size="lg" style={{
                                            width: '50%', borderRadius: '25px',
                                            backgroundColor: '#24D787', borderColor: '#24D787', color: '#fff', fontSize: '24x'
                                        }} onClick={() => this.signinFirstStep()} >next</Button>
                                    </div>

                                </div>

                    }
                </div>
                <div className="d-flex justify-content-center signinLink"
                >
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

export default connect(mapStateToProp, mapDispatchToProp)(Signup);

