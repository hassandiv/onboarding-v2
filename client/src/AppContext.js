import React, { useState, createContext, useEffect } from 'react'
export const AppContext = createContext()

export const AppProvider = props => {

    const initialCount = () => Number(localStorage.getItem('count')) || 0
    const initialPercentage = () => Number(localStorage.getItem('percentage')) || 0
    const [count, setCount] = useState(initialCount)
    const [percentage, setPercentage] = useState(initialPercentage)

    useEffect(()=> {
        localStorage.setItem('count', count)
        localStorage.setItem('percentage', percentage)
    }, [count, percentage])

    return (
        <>
            <AppContext.Provider value={{ count, setCount, percentage, setPercentage }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}