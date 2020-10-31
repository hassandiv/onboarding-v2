import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Nav = () => {

    const { count, percentage } = useContext(AppContext)

    return (
        <>
            <div className="proBar">
                <div className="fillBar" style={{ width: `${percentage}%` }} />
            </div>
            <small className="diet">Diet</small>
            <small className="home">Home</small>
            <small className="travel">Travel</small>
            <small className="other">Other</small>
            <div className="count">
                <small>Question {count} of 24</small>
            </div>
        </>
    )
}

export default Nav