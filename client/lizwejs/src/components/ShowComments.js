import React, { useState } from 'react'
import { useEffect } from 'react'
import Comments from './Comments'

const ShowComments = (props) => {
    const [comments, setComments] = useState()
    const [showComments, setShowComments] = useState()
    useEffect(()=>{
      //  const fetchData = async(req, res)=>{
      //   const response = await fetch('http://localhost:3005/get-comments')
      //   setComments(response.json())
      //  }
      //  fetchData().catch(console.log('error'))
       fetch('http://localhost:3005/get-comments')
  .then((response) => response.json())
  .then((data) => {
    const comments = data.filter(elem => parseInt(elem.id)===parseInt(props.id)).map(comment => {
      console.log('comment id', comment.id)
        return (
          <div key={comment._id}>
            <div><span>{comment.user}</span><span>{comment.createdAt}</span></div>
            <div>{comment.body}</div>
            <hr/>
          </div>
          )
    })
    setComments(comments)
  }).catch(err => console.log(err));

    }, [])

    console.log('comments:', comments)
    console.log("id", props.id)
   
      // const renderComments = comments.map(comment => {
      //   return (
      //   <>
      //     <div><span>{comment.user}</span><span>{comment.createdAt}</span></div>
      //     <div>{comment.body}</div>
      //     <hr/>
      //   </>
      //   )
      // })
    
    
  return (
    <div>
      <h3>Responses</h3>
      <hr />
      {comments}
    </div>
  )
}

export default ShowComments