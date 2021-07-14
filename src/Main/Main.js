import React from 'react'
import { useAlert } from '../Alert/AlertContext'

export default function Main() {
    const context = useAlert()
    return (
        <div>
            <h1>Context example</h1>
            <button onClick={context.toggle} className="btn btn-success">Show Alert</button>
        </div>
    )
}