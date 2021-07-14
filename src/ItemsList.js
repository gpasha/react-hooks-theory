import React, { useState, useEffect } from 'react'

export default function({ listItemsFunc }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('useEffect')
        setItems(listItemsFunc())
    }, [listItemsFunc])

    return (
        <ul>
            { items.map((el, i) => <li key={i}>{el}</li>) }
        </ul>
    )
}