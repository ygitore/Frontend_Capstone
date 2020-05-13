import React, { useState, useContext } from "react"
import {RatingContext} from './RatingProvider'
import {Star} from './Rating'
import './Rating.css'

export const RatingList = ({apt}) =>{
    const {addRating} = useContext(RatingContext)

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];
    const userId = parseInt(localStorage.getItem("reviewApartment_user"))
    const addRatingToApi = () => {
      if(rating !== 0){
        const ratingObject = {
          "apartmentId":apt.id,
          "userId":userId,
          "rating":rating+1
        }
        addRating(ratingObject)
      }
    }
    
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
                setRating(i)              
              }
            />
          ))}
        </div>
      </div>
    );
  }
  