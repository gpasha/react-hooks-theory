import React from 'react'

export default function Main({ toggle }) {
    return (
        <div>
            <h1>Context example</h1>
            <button onClick={toggle} className="btn btn-success">Show Alert</button>
        </div>
    )
}