import React from 'react'
import {AlertContext} from '../App'

export default function Alert() {
    const alertValue = React.useContext(AlertContext)

    if (!alertValue) return null

    return (
        <div className="alert alert-danger">
            This is a important message
        </div>
    )
}