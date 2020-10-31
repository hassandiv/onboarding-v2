import React, { useState, useContext, useEffect } from 'react'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory, Link } from 'react-router-dom'

const Survey = props => {

    const history = useHistory()
    const [selected, setSelected] = useState({})
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)
    const pageId = parseInt(props.pageId)
    const [page, setPage] = useState(pageId)
    const [results, setResults] = useState([])
    const [totalPages, setTotalPages] = useState(5)

    useEffect(() => {
        surveyApi()
        return () => {}
    }, [page])

    const surveyApi = async () => {
        const response = await fetch(`/api/surveyoptions?page=${page}`)
        const results = await response.json()
        setResults(results.result)
        setPage(page)
        setTotalPages(totalPages)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("You have submitted:", selected)
    }

    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    const getPageLink = ( pageNo ) => {
        return `/diet/${ pageNo }`
    }
    
    const isThereNextPage = page < totalPages

    return (
        <>
            <Nav />
                <form onSubmit={handleFormSubmit}>
                    <div className="radioGroup">
                        <ul>
                            {results.map(result => 
                                <li key={result._id}>
                                    {result.title}
                                    <input
                                        type="radio"
                                        id={result._id}
                                        value={result.value}
                                        name={result.name} 
                                        onChange={handleOnChange}
                                    />
                                    <label
                                        id={result._id}
                                        htmlFor={result._id}
                                    >
                                        <span>{result.label}</span>
                                    </label>
                                </li>
                            )}
                        </ul>
                        { isThereNextPage ?
                            <Link 
                                to={getPageLink(page + 1)}>
                                    <button
                                        className="btnComponent"
                                        type="submit"
                                        onClick={() => { 
                                            setCount(count + 1)
                                            setPercentage(percentage + 20)
                                            setPage(page + 1)   
                                        }}
                                >
                                        Next question
                                    </button>
                            </Link>
                            :
                            <button
                                className="btnComponent"
                                type="submit"
                                onClick={ () => { history.push("/diet/complete") }}>
                                Done
                            </button> 
                        } 
                    </div>
                </form>
        </>
    )
}
export default Survey