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
    const calculateUserRating = () => {
        let calculatedRate = 5
        let total = 0
        for(let i of userRating) {
            total += i.rating
        }
        if(numberOfRating > 0){
            if(total/5 < numberOfRating*0.99){
                calculatedRate = calculatedRate - 1          
            }                       
            else{
                calculatedRate += 1
                if(calculatedRate >= 5){
                    calculatedRate = 5
                } 
            }
        }else{
            calculatedRate = 5
        }
        
        console.log("number of rating",numberOfRating,"calculated rate", calculatedRate, "apt", apt.id, "total", total)
        return calculatedRate
    }
    return (
        <div>
            <div>{calculateUserRating()}</div>
        </div>
    )
}

export default UserRating
