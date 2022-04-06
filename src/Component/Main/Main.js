
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Main.css'
const Main = () => {
    const [food ,setFoods] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res => res.json())
        .then(data => setFoods(data.categories))
    },[])

    const [cart, setCart] = useState([])

    const handleAddToCart=(item)=>{
        setCart(item)
    }

    return (
        <div className='md:grid grid-cols-4 mt-5 gap-5'>
            {
               food.map(food=> <Food
                 food={food} 
                 key={food.idCategory}
                 add ={handleAddToCart}
                 cart={cart}
                 ></Food>)
            }
        </div>
    );
};

export default Main;