import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const initialState = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone_no: "",
    position: ""
}

const EditConnect = () => {
    const [state, setState] = useState(initialState);

    const { fname, lname, username, email, phone_no, position} = state;
    
    const navigate = useNavigate();
    
    const {id} = useParams;
    useEffect(() => {
        axios.get('http://localhost:8081/team/' + id)
        .then((resp) => setState({...resp.data[0]}))
    }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            axios.put(`http://localhost:8081/editConnect/${id}`, {
                fname, lname, username, email, phone_no, position
            })
            .then(() => {
                setState({  fname:'', lname: '', username: '', email: '', phone_no: '', position: ''})
            })
            .catch((err)=> console.log(err));
            setTimeout(() => navigate('/connect'), 500);
       

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Update Team Member data</h2>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='First Name'
                    onChange={handleInputChange}      
                    name='fname'            
                     value={fname || ""} />
                 
                </div>

                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Last Name'
                    name='lname'
                    onChange={handleInputChange}                    
                    value={lname || ""}/>                 
                </div>

                <div>
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName' 
                    name='username'
                    onChange={handleInputChange} 
                    value={username || ""}/>
                </div>

                <div>
                    <label htmlFor="">Mobile No.</label>
                    <input type="number" placeholder='Mobile No.' 
                    onChange={handleInputChange} 
                    name='phone_no'
                    value={phone_no || ""}/>
                </div>

                <div>
                    <label htmlFor="">Email Id</label>
                    <input type="text" placeholder='Email Id' 
                    name='email'                   
                    onChange={handleInputChange}
                    value={email || ""}/>
                </div>

                <div>
                    <label htmlFor="">Position</label>
                    <input type="text" placeholder='Position'                    
                    onChange={handleInputChange} 
                    name='position'
                    value={position || ""} />
                </div>
                
               <button>Update</button>
            </form>
        </>
    )
}
export default EditConnect;
