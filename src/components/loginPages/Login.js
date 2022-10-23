import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/AddRuleLogin');
    }
    return (
        <div className='body'>
            <div className='codeHere'>
                
                    <h1 className='h1class'>RULE EDITOR FRAMEWORK</h1>
                    <hr className='lineclass'/>
                    <div className='cardclass'>
                    <div className='card1'>
                        <div className="card-body">
                            <h3 className="card-title">RULE ADDER</h3>
                            <hr></hr>
                            <p className="card-text">Add rules here !</p>
                            <p className="card-text">Credentials required</p>
           
                            <hr></hr>
                            <button className="btn btn-outline-dark">Login</button>
                            <hr></hr>
                            <p>Forgot Password ?</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <div className="card-body">
                            <h3 className="card-title">RULE CHECKER</h3>
                            <hr></hr>
                            <p className="card-text">Check your code here !</p>
                            <p className="card-text">You need to login here before proceeding further</p>
                            <hr></hr>
                            
                            <button className="btn btn-outline-dark">Login</button>
                            <hr></hr>
                            <p>Forgot Password ?</p>
                        </div>
                    </div>
                    </div>
            </div>
            <button onClick={navigateToProfile}>Click Here</button>
        </div>
    )
}

export default Login