import React from 'react'
import '../../src/App.css'
import { Form, Button, Card, Alert,Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Navigation from './Navbar'

export default function Home() {
    return (
        <div className='container'>
            <div className='textcolumn'>
                <h2 className='heading'>Welcome to EduLearn!</h2>
                <p className='para'>
                Your one-stop shop for accessing premium courses, <br />
                video lectures and assignments from the best sources <br />
                on the internet. <br />
                Access study material for 100+ subjects. <br />
                Sign up now for free!
                </p>
            </div>
            <button className='btngetstarted'><a href='/about'>Get started</a></button>
        </div>
        
    )
}