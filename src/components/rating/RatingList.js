import React, { useState, useContext } from "react"
import {RatingContext} from './RatingProvider'
import {Star} from './Rating'
import './Rating.css'

export const RatingList = ({apt}) =>{
    const {rating, addRating} = useContext(RatingContext)

    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];
    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const addRatingToApi = () => {
      if(userRating !== 0){
        const ratingObject = {
          "apartmentId":apt.id,
          "userId":userId,
          "rating":userRating+1
        }
        addRating(ratingObject)
      }
    }
    const loggedInUserId = parseInt(localStorage.getItem("reviewApartment_user"))
    const ratingExists = rating.find(r => r.apartmentId === apt.id && r.userId === loggedInUserId)||{}
    if(!("userId" in ratingExists)){
      return (
        <div className="starRating">
          <div class="flex-container" onClick = {addRatingToApi }>            
            {stars.map((star, i) => (
              <Star
                key={i}
                starId={i}
                rating={hoverRating || rating}
                onMouseEnter={() => setHoverRating(i)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={
                  () => 
                  setUserRating(i)              
                }
              />
            ))}
          </div>
        </div>
      );
    }else{
      return null
    }
  }
  