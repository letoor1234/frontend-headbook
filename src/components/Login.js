import React, {Fragment, Component} from 'react'
import Alert from './Alert'
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
            redir: false,
            session: false,
            alert: '',
            alertStyle: {
                position: "absolute",
                top: "-100%",
                transition: "all 1s"
            }
        }
    }
    closeTerms=()=>{
        this.setState({
            alertStyle: {
                position: "absolute",
                top: "-100%",
                transition: "all 1s"
            }
        })
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
    inputChange=(e)=>{
        this.setState({
            session: !this.state.session
        })
        console.log(this.state.session)
    }
    login=(event)=>{
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
                pass: this.state.pass,
                session: this.state.session
            })
        }

        fetch(API, postData)
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            const confirm = json[0]
            if(confirm.login === 'true'){
                if (confirm.passMatch === 'true'){//review this lineee!!!
                    //redirect to user page and create session
                    this.setState({
                        redir: 'true'
                    })
                    console.log('conected')
                } else {
                    //display alert with "no user or not password matches"
                    this.setState({
                        alert: 'Your password is incorrect! Try again or click in "Forgo password?"',
                        alertStyle: {
                            position: "absolute",
                            top: "20%",
                            transition: "all 1s"
                        }
                    })
                    
                    console.log('not conected')
                }
            } else{
                this.setState({
                    alert: "This user isn't registered on database.",
                    alertStyle: {
                        position: "absolute",
                        top: "20%",
                        transition: "all 1s"
                    }
                })
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
        if(!this.state.redir){
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
                            <input id='stay-loged' className='form-check-input' type="checkbox" onChange={(e)=>this.inputChange(e)} />
                            <label className='form-check-label'htmlFor="stay-loged">Keep session started</label>
                            </div>
    
    
                            <input className='fw-bold form-control mb-2 btn btn-lg btn-success' type="submit" value='Login'/>
    
                            <Link className='text-center m-3 d-block' to='/forgot-password'>Forgot password?</Link>
                            <Link className='text-center m-3 d-block' to='/register'>Create account</Link>
                        </form>
                    </div>
                    <Alert 
                        title= 'Fail!'
                        content={this.state.alert}
                        style= {this.state.alertStyle}
                        func= {this.closeTerms}
                    />
                </Fragment>
            )
        } else{
            return(
                <Redirect to='/user'/>
            )
        }
        
    }
}