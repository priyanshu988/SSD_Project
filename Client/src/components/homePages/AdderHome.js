import React, { useState } from 'react'
import logout from './assets/logout';
import './AdderHome.css'
import AdderPopup from './AdderPopup';

const BACKEND_URI = "http://localhost:3000/rule/";

const AdderHome = () => {
    const [addRule, setAddRule] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [fileContent, setFileContent] = useState();
    const [Name, setName] = useState("");


    let fileReader;

    const handleFileRead = (e) => {
        setFileContent(fileReader.result);
        console.log(fileContent)
        // … do something with the 'content' …
    };

    const handleFileChosen = (file) => {
        setSelectedFile(file);
        setIsFilePicked(true);
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };


    return (
        <div className='body'>
            <main>
                <div className="bg" />
                <div className="bg bg2" />
                <div className="bg bg3" />
                <h1 className='headingTitle'>ADDER HOME PAGE</h1>
                <hr className='line-top' />
                <div className='userdetails'>
                    <h4 className='username headingTitle'>Username</h4>
                    <img className='logouticon' src={logout} alt='' />
                </div>
                <hr className='line-top2' />
                <div>
                    <button className='btn butn' onClick={function (event) { setAddRule(true);setName(""); setFileContent(""); setIsFilePicked(false) }}>Add Rule</button>

                </div>
                <br />
                <div>
                    <table className="table table-light">
                        <thead className='table-dark'>
                            <tr>
                                <th itemScope='col'>S.No.</th>
                                <th itemScope='col'>Rules</th>
                            </tr>

                        </thead>

                        <tbody class="table-group-divider">
                            <tr>
                                <td className="">1.</td>
                                <td className="">if/else</td>
                            </tr>
                            <tr>
                                <td className="">1.</td>
                                <td className="">if/else</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
            <AdderPopup trigger={addRule} setTrigger={setAddRule}>
                <h3>Upload File</h3>
                <hr />
                <form className='formcode'>
                    <input className="email form-control form-control-lg" type="text" placeholder="Name of Rule" aria-label="Name_of_Rule" value={Name} onChange={(e) => setName(e.target.value)} />
                    <input className="password form-control form-control-lg" type="file" placeholder="Upload File" aria-label="File" onChange={e => handleFileChosen(e.target.files[0])} />
                </form>
                <br />
                <button className='btn butn' type='submit' onClick={async (e) => {
                    // send fetch (POST) request to server
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ Name: Name, Content: fileContent })
                    };

                    var res = await fetch(BACKEND_URI + "addrule", requestOptions);
                    alert((await res.json())["msg"]);
                    setName("");
                    setFileContent(""); 
                    setIsFilePicked(false);
                }}>Upload</button>
                {isFilePicked ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>{fileContent}</p>

                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
            </AdderPopup>
        </div>
    )
}

export default AdderHome