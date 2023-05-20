import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddConnect = () => {
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        phone_no: '',
        position: '',
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addteam', values)
        .then(res => {
            console.log(res)
            navigate('/connect')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add Team Member</h2>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='First Name'
                    onChange={e => setValues({...values, fname: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Last Name'
                    onChange={e => setValues({...values, lname: e.target.value})} />                 
                </div>

                <div>
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName' 
                    onChange={e => setValues({...values, username: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Mobile No.</label>
                    <input type="number" placeholder='Mobile No.' 
                    onChange={e => setValues({...values, phone_no: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Email Id</label>
                    <input type="text" placeholder='Email Id'                    
                    onChange={e => setValues({...values, email : e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Position</label>
                    <input type="text" placeholder='Position'                    
                    onChange={e => setValues({...values, position: e.target.value})} />
                </div>
                
                <button>Submit</button>
            </form>
        </>
    )
}


export default AddConnect;