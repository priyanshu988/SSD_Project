import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/AddRuleLogin');
    }
    return (
        <div>
            <div className='codeHere'>
                {/* write your code here in this div */}




            </div>
            <button onClick={navigateToProfile}>Click Here</button>
        </div>
    )
}

export default Login