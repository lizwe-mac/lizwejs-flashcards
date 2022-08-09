import React, { useState } from 'react'
import { useEffect } from 'react'
import Comments from './Comments'

const ShowComments = () => {
    const [comments, setComments] = useState()
    useEffect(()=>{
       const fetchData = async()=>{
        const response = await fetch('http://localhost:3005/get-comments')
        setComments(response.json())
       }
       fetchData().catch(console.log('error'))
    }, [])

    console.log('comments:', comments)
    
  return (
    <div>ShowComments</div>
  )
}

export default ShowComments