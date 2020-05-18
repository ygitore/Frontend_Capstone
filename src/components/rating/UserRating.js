import React, { useContext } from 'react'
import { RatingContext } from './RatingProvider'

const UserRating = ({apt}) => {
    const {rating} = useContext(RatingContext)

    const fiveStar = rating.filter(
        rate => {
            return rate.apartmentId === apt.id && rate.rating <= 5 && rate.rating >= 4
        })
    const belowThreeStar = rating.filter(
        rate => {
            return rate.apartmentId === apt.id && rate.rating <= 3
        })
        
    const calculateUserRating = () => {
        let total5Stars = fiveStar.length * 0.1
        let total3Stars = belowThreeStar.length * 0.1
        let calculatedRate = 5
        
        
        if(fiveStar.length < belowThreeStar.length){
            calculatedRate = 5-total3Stars
        }else if(fiveStar.length > belowThreeStar.length){
            calculatedRate = calculatedRate + total5Stars
            if(calculatedRate > 5){
                calculatedRate = 5
            }
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
