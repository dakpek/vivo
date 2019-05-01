import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import './signup.css'
import * as firebase from 'firebase';
import SignUp1 from './signup1';
import SignUp2 from './signup2';
import SignUp3 from './signup3';
import SignUp4 from './signup4';




class SignUpBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            error: "",

            email: "",
            password: "",
            phoneNumber: "",
            uid: "",
            firstName: "",
            lastName: "",
            birthday: "",
            type: "",
            address: "",
            packageBy: ""
        }
        
    }


    // page forward & backward

    pageForward = () => {
        console.log(this.state.page)
        let newPage = this.state.page + 1;
        console.log(newPage)
        this.setState({page: newPage})
    }

    pageBackward = () => {
        let newPage = this.state.page - 1;
        this.setState({page: newPage})
    }

    //write data & create user
    writeData = (event) => {
        event.preventDefault()
        let data = Object.assign({}, this.state)
        let uid = this.state.uid
        delete data.password;
        delete data.uid;
        delete data.error;
        delete data.page;
        this.props.firebase.setUser(uid, data)
        .then(() => {
            this.pageForward()
        })
    }

    createUser = (event) => {
        event.preventDefault()
        let {email, password} = this.state
        this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
        .then((user) => {
            this.setState({uid: user.user.uid})
            console.log('user created')
            this.pageForward()
            console.log('page: ', this.state.page)
        })
        .catch((error) => {
            this.setState({error})
            console.error(error.code, error.message)
        })
    }

    // state & submit

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleType = (data) => {
        this.setState({
            type: data
        })
        console.log(this.state.type)
    }

    render() {
        let page = this.state.page

        if (page ===2) {
            return (
            <SignUp2 
                writeData={this.writeData} 
                handleChange={this.handleChange} 
                pageBackward={this.pageBackward}
            />)
        }
        if (page ===3) {
            return (
            <SignUp3
                writeData={this.writeData} 
                handleType={this.handleType} 
                pageBackward={this.pageBackward}
            />)
        }
        if (page ===4) {
            return (
            <SignUp4
                writeData={this.writeData} 
                handleChange={this.handleChange} 
                pageBackward={this.pageBackward}
                state={this.state}
                pageForward={this.pageForward}
            />)
        }

        return (
            <SignUp1 
                handleChange={this.handleChange} 
                createUser={this.createUser} 
                pageBackward={this.pageBackward}
            />
        )
    }
}



//firebase stuff

const SignUp = () => (
    <div>
        <SignUpPage />
    </div>
)

const SignUpPage = withFirebase(SignUpBase)
export default SignUp;