import React from 'react';
import './Food.css';

const Food = (props) => {
    const {strMealThumb, strMeal, strCategory, strArea} = props.food;

    return (
        <div className='food'>
            <img src={strMealThumb} alt="food_image" />
            <h3>{strMeal}</h3>
            <h5>
                Category: {strCategory} <br />
                Area: {strArea}
            </h5>
            <button onClick={() => props.selectEvent(strMeal)}>Select</button>
        </div>
    );
};

export default Food;