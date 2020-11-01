import React, { useState, useContext, useEffect } from 'react'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory } from 'react-router-dom'

const Survey = props => {

    const history = useHistory()
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)
    const [selected, setSelected] = useState(null)
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

    const isThereNextPage = page < totalPages

    const getPageLink = ( pageNo ) => {
        return `/diet/${ pageNo }`
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("submitted",selected)
        setPage(page + 1)
        setCount(count + 1)
        setPercentage(percentage + 20)
        { isThereNextPage ? 
            history.push(getPageLink(page + 1))
        :
            history.push("./complete")
        }
    }

    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    return (
        <>
            <Nav />
                <form onSubmit={handleFormSubmit}>
                    <div className="radioGroup">
                        <ul>
                            { results.map(result => 
                                <li key={result._id}>
                                    {result.title}
                                    <input
                                    type="radio"
                                    id={result._id}
                                    value={result.value}
                                    name={result.name} 
                                    onChange={handleOnChange}
                                    required
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
                                <button 
                                className="btnComponent" 
                                type="submit">
                                Next question
                                </button>
                            :
                                <button 
                                className="btnComponent" 
                                type="submit">
                                Done
                                </button>
                            }
                    </div>
                </form>
        </>
    )
}
export default Survey