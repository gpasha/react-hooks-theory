import React from 'react'
import { useAlert } from '../Alert/AlertContext'

export default function Main() {
    const { showAlert } = useAlert()
    return (
        <div>
            <h1>Context example</h1>
            <button onClick={() => showAlert('This text from Main.js component')} className="btn btn-success">Show Alert</button>
        </div>
    )
}