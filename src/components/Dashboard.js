import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
    const { currentUser } = useAuth()
    return (
        <div>
            Dash Clash straight up {currentUser.email}
        </div>
    )
}