import React, { useContext } from 'react'
import { RatingContext } from './RatingProvider'

const UserRating = ({apt}) => {
    const {rating} = useContext(RatingContext)
    const aptRating = rating.filter(rate => rate.apartmentId === apt.id)||{}
    
    let intialRating = 5
    
    const calculateRating = () => {
            if(aptRating.rating < 3){
                intialRating -= 0.1
            }else if(aptRating.rating > 3){
                intialRating += 0.1
            }else if(aptRating.rating <= 5 ){
                if(intialRating < 5){
                    intialRating += 0.1
                }else {
                    intialRating = 5
                }
            }else{
                console.log("not working")
            }           
    }
    return (
        <div>
            <div>{calculateRating()}</div>
        </div>
    )
}

export default UserRating
