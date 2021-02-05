import React, { Component, Fragment } from 'react'
import {
    Link
} from 'react-router-dom'

import Alert from './Alert'

export default class NewAccount extends Component {
    constructor(props){
        super(props)
        this.state={
            user: '',
            mail: '',
            pass: '',
            cPass: '',
            alertStyle: {
                position: "absolute",
                top: "-100%",
                transition: "all 1s"
            }
        }
    }
    userChange=(event)=>{
        const text = event.target.value;

        this.setState({
            user: text
        })
    }
    mailChange=(event)=>{
        const text = event.target.value;

        this.setState({
            mail: text
        })
    }
    passChange=(event)=>{
        const text = event.target.value;

        this.setState({
            pass: text
        })
    }
    cPassChange=(event)=>{
        const text = event.target.value;

        this.setState({
            cPass: text
        })
    }
    showTerms=()=>{
        this.setState({
            alertStyle: {
                position: "absolute",
                top: "20%",
                transition: "all 1s"
            }
        })
        console.log(this.state.alertStyle)
    }
    closeTerms=()=>{
        this.setState({
            alertStyle: {
                position: "absolute",
                top: "-100%",
                transition: "all 1s"
            }
        })
        console.log(this.state.alertStyle)
    }
    render(){
        return(
            <Fragment>
                <h2 className='mb-3 text-center fw-bold'>Create account</h2>
                <div className='d-flex justify-content-center'>           
                    <form action="" className='col-lg-3 col-md-6'>
                        <label className='fw-bold' htmlFor="user">User name</label>
                        <input className='form-control mb-3' id='user'type="text" value={this.state.user} onChange={ (user)=>this.userChange(user) } />

                        <label className='fw-bold' htmlFor="mail">Eail address</label>
                        <input className='form-control mb-3'  id='mail'type="mail" value={this.state.mail} onChange={(mail)=>this.mailChange(mail)} />

                        <label className='fw-bold' htmlFor="pass">Password</label>
                        <input  className='form-control mb-3' id='pass'type="password" value={this.state.pass} onChange={ (pass)=>this.passChange(pass) } />

                        <label className='fw-bold' htmlFor="c-pass">Confirm password</label>
                        <input  className='form-control mb-3' id='c-pass'type="password" value={this.state.cPass} onChange={ (cPass)=>this.cPassChange(cPass) } />

                        <div className='form-check form-switch my-3'>
                            <input  className='form-check-input' id='accept-terms' type="checkbox"/>
                            <label  onClick={()=>this.showTerms()} id='sub-view-terms' className='form-check-label text-muted'>I accept the <u>terms and conditions</u> of this site</label>
                        </div>
                        
                        <input  className='fw-bold form-control btn btn-lg btn-success' type="submit" value='Subscribe'/>
                    </form>
                </div>

                <Alert 
                    title="Terms and conditions of use"
                    content="This is a site developed as a test. Every account will be deleted every saturday. We don't need your cookies, but we save your session when you login. When you logout, that session will destroyed."
                    style= {this.state.alertStyle}
                    func= {this.closeTerms}
                />
            </Fragment>
        )
    }
}