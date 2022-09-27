import React, {useState} from 'react';
import './Food.css';

const Food = (props) => {
    const {strMealThumb, strMeal, strCategory, strArea} = props.food;
    // console.log(props.food);
    const [carts, setCarts] = useState([]);



    return (
        <div className='food'>
            <img src={strMealThumb} alt="food_image" />
            <h3>{strMeal}</h3>
            <h5>
                Category: {strCategory} <br />
                Area: {strArea}
            </h5>
            <button onClick={() => props.cartController(strMeal)}>Select</button>
        </div>
    );
};

export default Food;