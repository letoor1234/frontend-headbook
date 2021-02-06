import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            userName: '',
            mail: '',
            password: '',
        }
    }
    render(){
        return(
            <section className=''>
                <article className=''>
                    <h3 className=''>User Name:</h3>
                    <h4 className=''> {this.state.userName} </h4>

                    <h3 className=''>Email Adress:</h3>
                    <h4 className=''> {this.state.mail} </h4>

                    <h3 className=''>Password:</h3>
                    <p className=''>This section is encrypted to guarantee your security.</p>
                    <h4 className=''> {this.state.password} </h4>
                </article>
            </section>
        )
    }

}