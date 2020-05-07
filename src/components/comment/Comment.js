import React, { useContext } from 'react'
import { CommentContext } from './CommentProvider'
import { UserContext } from '../user/UserProvider'
import './Comment.css'
export default (props) => {
    const {comments} = useContext(CommentContext)
    const {users} = useContext(UserContext)
    const userComments = comments.filter(com => com.apartmentId === props.apartmentCommentId)
    const userCommented = userComments.filter(u => u.userId !== users.id)
    console.log("C", userComments)
    
    return (
        <div>
            <>
                {
                    userComments.map(com => {
                        return <div className = "each_user_comment">{com.comment}</div>
                    })    
                     
                }
            </>
        </div>
    )
}
