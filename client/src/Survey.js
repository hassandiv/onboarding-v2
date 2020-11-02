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
    const [keys, setKeys] = useState([])

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
    // Browser History PUSH and POP state 
    useEffect(() => {
        return history.listen(location => {
          if (history.action === 'PUSH') { //if PUSH is true, redirecting will add a new entry onto the history stack
            setKeys([location.key]) //update our state with the current location>key and pathname
          }
          if (history.action === 'POP') { //if POP is true, redirect to the previous entry from the history stack
            if (keys[1] === location.key) { //if is true, our exisiting keys equal to/matches the current location>key
              setKeys(([ _, ...keys ]) => keys) //then going forward update our state and spread/add the matched key data to our state and don't replace/override the other keys on our state.
              setPage(page + 1) //and going forward setPage + 1
              setCount(count + 1) //and going foward setCount + 1
              setPercentage(percentage + 20) //and going foward setPercentage + 20
            } else { // else going backward 
              setKeys((keys) => [ location.key, ...keys ]) //arrow function update keys state matches with history/previous key add it to our keys state and don't override the existing keys
              setPage(page - 1) //going backward setPage - 1
              setCount(count - 1) //going backward setCount - 1
              setPercentage(percentage - 20) //going backward setPercentage - 20
            }
          }
        })
      }, [keys, page, count, percentage]) // each time page render, update our states based on the above conditions

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