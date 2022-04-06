import React from 'react';
import './slider.css'

const Slider = () => {
    return (
        <div>
            <section className='flex w-[28%]  md:mt-40 mx-2 md:mx-20 mt-[150px]'>
            <img className='opsonal' src="https://www.themealdb.com/images/ingredients/Chicken.png" alt="" />
            <img className='opsonal' src="https://www.themealdb.com/images/ingredients/Salmon.png" alt="" />
            <img className='opsonal' src="https://www.themealdb.com/images/ingredients/Orange%20Zest.png" alt="" />
            </section>
            <h1 className='text-4xl text-center  mt-16'>Chose Your Food</h1>
        </div>
    );
};

export default Slider;