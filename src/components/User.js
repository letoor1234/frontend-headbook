import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            userName: 'letoor1234',
            mail: 'user@mail.com',
            password: 'asfadsgsdgsdfghdfg',
        }
    }
    render(){
        return(
            <section className='d-flex justify-content-center'>
                <article className='col-sm-8 col-md-8 col-lg-6 card overflow-hidden'>
                    <h4 className='fw-bold text-center btn-light p-2'>User Name:</h4>
                    <h5 className='text-center mb-3'> {this.state.userName} </h5>

                    <h4 className='border-top fw-bold text-center btn-light p-2'>Email Adress:</h4>
                    <h5 className='mb-3 text-center'> {this.state.mail} </h5>

                    <h4 className='border-top fw-bold text-center btn-light p-2'>Password:</h4>
                    <p className='text-muted text-center'>This section is encrypted to guarantee your security.</p>
                    <h5 className='mb-3 text-center'> {this.state.password} </h5>
                </article>
            </section>
        )
    }

}