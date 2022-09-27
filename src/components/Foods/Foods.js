import React, {useEffect, useState} from 'react';
import Food from '../Food/Food';
// import FoodInfo from '../FoodInfo/FoodInfo';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
        fetch(url)
            .then(response => response.json())
            .then(response => setFoods(response.meals))
            .catch(err => console.error(err));
    }, []);
    // console.log(foods);

    return (
        <div className='foods'>
            <div className='left-side'>
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                    ></Food>)
                }
            </div>
            <div className='right-side'>
                <h2>Selected Food</h2>


            </div>
        </div>
    );
};

export default Foods;