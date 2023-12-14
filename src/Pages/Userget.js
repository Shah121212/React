import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Userget = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const Fetch = async () => {
            try {
                const response = await fetch('http://localhost:9000/UserGet')
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.log(error)
            }

        }
        Fetch()
    }, [])
    const  DeleteUser = async (x)=>{
        const response = await fetch(`http://localhost:9000/deleteUser/${x}`,{
            method:"DELETE"
        })
        const result = await response.json()
        console.log(result.Message)
    }
    const EditUser = (x)=>{
        alert(x)
    }
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                {
                    data.map(x=>{
                        return(
                            <>
                            
                            <tbody>
                        <tr>
                           

                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.password}</td>
                            <td><button onClick={()=>DeleteUser(x._id)}>Delete</button></td>
                            <td><Link to={`/edit/${x._id}`}>Edit</Link></td>
                        </tr>

                    </tbody>
                            
                            
                            
                            
                            
                            
                            
                            </>
                        )
                    })
                }

            </table>

        </>
    )
}

export default Userget
