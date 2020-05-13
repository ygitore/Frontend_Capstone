import React, { useContext } from 'react'
import { CommentContext } from './CommentProvider'
import { UserContext } from '../user/UserProvider'
import './Comment.css'
export default (props) => {
    const {comments} = useContext(CommentContext)
    const {users} = useContext(UserContext)
    const userComments = comments.filter(com => com.apartmentId === props.apartmentCommentId)||{}
    const userCommented = userComments.filter(u => u.userId === users.id)||{}
    const uu = users.filter(u => u.id === userCommented.userId)

    return (
        <>
        <div className="user_Comments">
            <div className="user_Comment">
                {
                    userComments.map(u=> {
                        const usr = users.find(ur => ur.id === u.userId)
                    return <div className = "userId">{
                        <div>
                            <strong>
                            {
                                usr.userName.charAt(0).toUpperCase()+ 
                                usr.userName.slice(1)} 
                            </strong>&nbsp;&nbsp;
                        {u.comment}</div>
                    }</div>
                })
                }
            </div>
            </div>            
        </>
    )
}
