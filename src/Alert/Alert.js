import React from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {
    const alertValue = useAlert()

    if (!alertValue) return null

    return (
        <div className="alert alert-danger">
            This is a important message
        </div>
    )
}