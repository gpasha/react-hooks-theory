import React from 'react'
import { useAlertFunc } from '../Alert/AlertContext'

export default function Main() {
    const toggle = useAlertFunc()
    return (
        <div>
            <h1>Context example</h1>
            <button onClick={toggle} className="btn btn-success">Show Alert</button>
        </div>
    )
}