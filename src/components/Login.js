import React, {Fragment, Component} from 'react'
import {
    Link
} from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user: '',
            pass: ''
        }
    }
    userChange=(event)=>{
        const text = event.target.value;

        this.setState({
            user: text
        })
    }
    passChange=(event)=>{
        const text = event.target.value;

        this.setState({
            pass: text
        })
    }
    render(){
        return(
            <Fragment>
                <h2 className='mb-3 text-center fw-bold'>Login</h2>
                <div className='d-flex justify-content-center'>
                    <form className='' className='col-lg-3 col-md-6'>
                        <label className='fw-bold' htmlFor="user">User Name</label>
                        <input className='form-control mb-3'id='user'type="text" value={this.state.user} onChange={ (user)=>this.userChange(user) } />

                        <label className='fw-bold' htmlFor="password">Password</label>
                        <input className='form-control mb-3'id='pass'type="password" value={this.state.pass} onChange={ (pass)=>this.passChange(pass) } />

                        <div className='form-check form-switch my-3'>
                        <input id='stay-loged' className='form-check-input' type="checkbox"/>
                        <label className='form-check-label'htmlFor="stay-loged">Stay session open</label>
                        </div>


                        <input className='fw-bold form-control mb-2 btn btn-lg btn-success'type="submit" value='Login'/>

                        <Link className='text-center m-3 d-block' to='/forgot-password'>Forgot password?</Link>
                        <Link className='text-center m-3 d-block' to='/subscribe'>Create account</Link>
                    </form>
                </div>
            </Fragment>
        )
    }
}