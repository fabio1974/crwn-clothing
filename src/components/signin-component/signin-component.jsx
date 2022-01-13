import React from 'react';
import './_signin-component.scss'
import FormInputComponent from "../form-input-component/form-input-component";
import CustomButtonComponent from "../custom-buttom-component/custom-button-component";
import {signInWithGoogle} from "../../firebase/firebase.util";

class SigninComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({email:"",password:""})
    }

    handleChange = event=>{
        const {value,name} = event.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className={'signin-component'}>
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent name={'email'}
                                        type={'email'}
                                        value={this.state.email}
                                        label={'Email'}
                                        handleChange={this.handleChange} required
                    />
                    <FormInputComponent name={'password'}
                                        type={'password'}
                                        value={this.state.password}
                                        label={'Password'}
                                        handleChange={this.handleChange} required
                    />

                    <div className="buttons">
                        <CustomButtonComponent type={'submit'}>Sign In</CustomButtonComponent>
                        <CustomButtonComponent isGoogleSignIn onClick={signInWithGoogle} type={'submit'}>Sign In With Google</CustomButtonComponent>
                    </div>

                </form>
            </div>
        );
    }
}

export default SigninComponent;
