import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Connect = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/team')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const loadData = async () => {
        const response = await axios.get('http://localhost:8081/team');
        setData(response.data);
    }
    const handleDelete = (id) => {
        if(window.confirm("Are you sure?")){
            axios.delete('http://localhost:8081/delete/' + id);
            setTimeout(() => loadData(), 500);
            
        }
    }
    return (
        <>
            <h2>List</h2>
            <Link to='/addConnect'>Add</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mob. No.</th>
                        <th>Email Id</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((team, index)=>{
                            return (
                                <tr key={index}>
                                <td>{team.fname}</td>
                                <td>{team.phone_no}</td>
                                <td>{team.email}</td>
                                <td>{team.position}</td>
                                <td>
                                    <Link to={`/editConnect/${team.id}`}>Edit</Link>
                                    <button onClick={ () => handleDelete(team.id)}>delete</button>
                                </td>
                            </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Connect;