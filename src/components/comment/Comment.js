import React, { useContext } from 'react'
import { CommentContext } from './CommentProvider'
import { UserContext } from '../user/UserProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export default (props) => {
    const {comments} = useContext(CommentContext)
    const {users} = useContext(UserContext)
    const userComments = comments.filter(com => com.apartmentId === props.apartmentCommentId)||{}
    const userCommented = userComments.filter(u => u.userId === users.id)||{}

    return (
        <>
        <div className="user_Comments">
            <div className="user_Comment">
                {
                    userComments.map(u=> {
                        const usr = users.find(ur => ur.id === u.userId)
                    return <div className = "userId">{
                            <div className = "user_and_comments">
                                <FontAwesomeIcon icon = {faUser} className = "person-commented-image" />
                                <div className = "usr_com">
                                    <div className = "person-commented">
                                    {
                                        usr.userName.charAt(0).toUpperCase()+ 
                                        usr.userName.slice(1)
                                    } 
                                    </div>
                                    <div className = "users_comments">{u.comment}</div>
                                </div>                            
                            </div>
                        }</div>
                    })}
                </div>
            </div>            
        </>
    )
}
