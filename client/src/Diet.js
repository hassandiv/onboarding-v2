import React from 'react'
import Survey from './Survey'

const Diet = ({ match }) => {

    return (
        <>
             <Survey pageId={match.params.id}/>
        </>
    )
}
 
export default Diet