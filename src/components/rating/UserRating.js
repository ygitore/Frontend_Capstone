import React, { useContext } from 'react'
import { RatingContext } from './RatingProvider'

const UserRating = ({apt}) => {
    const {rating} = useContext(RatingContext)
    const userRating = rating.filter(
        rate => {
            return rate.apartmentId === apt.id && 
            rate.rating >= 1 && rate.rating <= 5
        })||{}
    const numberOfRating = userRating.length
    console.log("num rat", numberOfRating+" "+apt.id)
    const calculateUserRating = () => {
        let calculatedRate = 5
        let total = 0
        for(let i of userRating) {
            total += i.rating
        }
        if(total/numberOfRating < numberOfRating*0.6){
            calculatedRate = calculatedRate - 0.1          
        }else if(calculatedRate >= 4.99){
            calculatedRate = 5
        }else{
            calculatedRate += 0.1
        }
        return calculatedRate
    }
    return (
        <div>
            <div>{calculateUserRating()}</div>
        </div>
    )
}

export default UserRating
