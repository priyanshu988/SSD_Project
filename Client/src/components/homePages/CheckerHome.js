import React, { useState } from 'react'
import logout from './assets/logout';
import './CheckerHome.css';
import CodeEditor from '@uiw/react-textarea-code-editor';


const CheckerHome = () => {
    const [code, setCode] = useState();
    console.log(typeof code);

    return (
        <div className='body'>
            <div className="bg" />
            <div className="bg bg2" />
            <div className="bg bg3" />
            <h1 className='headingTitle'>CHECKER HOME PAGE</h1>
            <hr className='line-top' />
            <div className='userdetails'>
                <h4 className='username headingTitle'>Username</h4>
                <img className='logouticon' src={logout} alt='' />
            </div>
            <hr className='line-top2' />
            <CodeEditor
                value={code}
                language="c++"
                placeholder="Please enter C++ code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    minHeight: '500px',
                    borderRadius: "20px"

                }}
                
            />
            <select placeholder='Select' className='form-control'>
                <option>Select Rule</option>
            </select>
            <button className='btn-dark btn'>Check</button>
        </div>
    )
}

export default CheckerHome