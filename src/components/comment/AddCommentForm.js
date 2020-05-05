import React, { useContext, useRef } from "react"
import { UserContext } from "../user/UserProvider"
import { CommentContext } from "./CommentProvider"

export default props => {
    const { addComment } = useContext(CommentContext)    
    const { users } = useContext(UserContext)    
    const comment = useRef()
    const userId = localStorage.getItem('reviewApartment_user')
    const user = users.find(u => u.id === parseInt(userId))
    const addNewComment = () => {
        if (userId) {
            addComment({
                userId:parseInt(user.id),
                apartmentId: parseInt(props.apartmentCommentId),
                comment: comment.current.value
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="CommentForm">
            <fieldset>
                <div className="form-group">
                    <input
                        type="text"
                        id="description"
                        ref={comment}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="comment"
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        addNewComment()
                    }
                }
                className="btn btn-primary">
                send 
            </button>
        </form>
    )
}