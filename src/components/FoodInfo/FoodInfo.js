import './FoodInfo.css';

const FoodInfo = (props) => {
    return (
        <div className='food-info'>
            <li>{props.cart}</li>
        </div>
    );
};

export default FoodInfo;