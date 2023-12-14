import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
    let { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    useEffect(() => {
        const Fetch = async () => {
            try {
                const res = await fetch(`http://localhost:9000/get/${id}`)
                const result = await res.json()
                setName(result.name)
                setName(result.email)
                setName(result.password)
                
            } catch (error) {
                console.log(error)
            }
        }
        Fetch()
    }, [])

    return (
        <>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='text' />

        </>
    )
}

export default EditUser