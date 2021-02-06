import React, {Fragment, Component} from 'react'
import {
    Redirect,
    Link
} from 'react-router-dom';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user: '',
            pass: '',
            resMsg: '',
            redir: 'false'
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

    login=(event)=>{
        console.log(this.state.pass)
        const API = 'http://localhost:4000/api/users/login'

        const postData = {
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
                'Origin': '*'//sigue fallando el puto cors
            },
            method: 'POST',
            body: JSON.stringify({
                user: this.state.user,
                mail: '',
                pass: this.state.pass
            })
        }

        fetch(API, postData)
        .then((res)=>{
            console.log('aca no es')
            console.log(res)
            return res.json()
        })
        .then((confirm)=>{
            if (confirm.login === 'true'){//review this lineee!!!
                //redirect to user page and create session
                this.setState({
                    redir: 'true'
                })
                console.log('conected')
            } else {
                //display alert with "no user or not password matches"
                console.log('not conected')
            }
        })
        .catch((err)=>{
            console.log('errorrrr: ', err)
            this.setState({
                resMsg: 'Connection failed: '+ err
            })
        })

        event.preventDefault()
    }
    render(){
        if(this.state.redir === 'false'){
            return(
                <Fragment>
                    <h2 className='mb-3 text-center fw-bold'>Login</h2>
                    <div className='d-flex justify-content-center'>
                        <form onSubmit={(e)=>this.login(e)} className='col-lg-3 col-md-6'>
                            <label className='fw-bold' htmlFor="user">User Name</label>
                            <input className='form-control mb-3'id='user'type="text" value={this.state.user} onChange={ (user)=>this.userChange(user) } />
    
                            <label className='fw-bold' htmlFor="password">Password</label>
                            <input className='form-control mb-3'id='pass'type="password" value={this.state.pass} onChange={ (pass)=>this.passChange(pass) } />
    
                            <div className='form-check form-switch my-3'>
                            <input id='stay-loged' className='form-check-input' type="checkbox"/>
                            <label className='form-check-label'htmlFor="stay-loged">Stay session open</label>
                            </div>
    
    
                            <input className='fw-bold form-control mb-2 btn btn-lg btn-success' type="submit" value='Login'/>
    
                            <Link className='text-center m-3 d-block' to='/forgot-password'>Forgot password?</Link>
                            <Link className='text-center m-3 d-block' to='/subscribe'>Create account</Link>
                        </form>
                    </div>
                </Fragment>
            )
        } else{
            return(
                <Redirect to='/user'/>
            )
        }
        
    }
}