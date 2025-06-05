"use client"

import { useState } from "react"
import React from "react"

function PersonalWelcome() {
    const [name, setName] = useState('Guest')
    const [value, storeValue] = useState('')

    //Store user input in text field
    const store = (event) => {
        storeValue(event.target.value)
    }

    //Update name in welcome message using stored input
    const updateName = () => {
        setName(value)
    }

    return (
        <div style={{textAlign: 'center'}}>
            <input type="text" value={value} placeholder="Please enter your name" onChange={store} style={{background: 'white', color: 'black', fontSize: '20px', padding: '5px', borderRadius: '12px'}}></input>
            <button onClick={updateName} style={{fontSize: '14px', padding: '9px'}}>Submit</button>
            <h1 style={{textAlign: 'center', fontSize: '40px', margin: ' 50px 17% 30px 17%'}}>Welcome, {name}! I'm Nour, and here is my submission for Advanced Front-End Programming's Assignment 1!</h1>
        </div>
    )
}

export default function Welcome() {
    return (
        <div>
            <PersonalWelcome></PersonalWelcome>
        </div>
    )
}