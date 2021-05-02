import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Dashboard</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                Welcome to EduLearn <strong>{currentUser.email}</strong> ! <br /> We are still building the dashboard, <br /> Please visit us later :)
                <Link to='/updateprofile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
        </>
    )
}