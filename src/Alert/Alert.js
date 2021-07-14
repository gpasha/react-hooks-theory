import React from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {
    const { show, text, hideAlert } = useAlert()

    if (!show) return null

    return (
        <div className="alert alert-danger" onClick={hideAlert} >
            {text}
        </div>
    )
}