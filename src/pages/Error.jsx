import React , {Component}from 'react'
import '../resources/styles.css'
import errorImage from './../resources/error.svg'

class Error extends Component {
   
    render() { 
        document.getElementById('title').innerText= "404 Page not found | CreateME";
        return (
            <React.Fragment>
                <div className='d-flex flex-column align-items-center'>
                    <div className='error-div'>
                        <img src = {errorImage} alt='Error graphic'/>
                    </div>
                    <a className='btn btn-outline-primary mb-4' href="/"> Go to Home</a>
            </div>
            </React.Fragment>
        )
    }
}
 
export default Error;