import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Image from './assets/img.svg'
import { AppContext } from './AppContext'

const Home = () => {
    
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)

    useEffect(() => {
        setCount(0)
        setPercentage(0)
    })

    return (
        <>
            <img className="Image" src={Image} alt="survey" />
            <h1>Calculate your personal Score</h1>
            <p>Next we have a short 2&ndash;3 minute survey covering Diet, Home, Travel, and Other that will let us calculate your personal carbon footprint.</p>

            <Link to="/diet/1">
                <button
                    className="btnComponent"
                    onClick={() => {
                    setCount(count + 1)
                    setPercentage(percentage + 20)
                    }}
                >
                    Take the survey
                </button>
            </Link>
        </>
    )
}

export default Home