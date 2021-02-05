import React, {Component} from 'react'
import { 
    Link
} from 'react-router-dom'

export default class Header extends Component{
    render(){
        if(this.props.enableButton === 'true'){
            return(
                <header className='bg-primary d-flex justify-content-between mb-4'>
                    <h1 className='text-light fw-bold p-3 d-flex'><div className='text-light'>head</div><div className='text-dark'>Book</div> </h1>
                    <Link to='/' className={'btn '+this.props.classButton + ' fw-bold my-auto mx-3'}>{this.props.contentButton} </Link>
                </header>
            )
        }else {
            return(
                <header className='bg-primary mb-4'>
                    <h1 className='text-light fw-bold p-3 d-flex'><div className='text-light'>head</div><div className='text-dark'>Book</div> </h1>
                </header>
            )
        }
        
    }
}
