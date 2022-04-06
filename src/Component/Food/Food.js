const Food = (props) => {
    const {cart} =props
    const {add}=props
    const {strCategoryThumb, idCategory,strCategory} =props.food
    return (
        <div className='simple h-full'>
            <p>hi</p>
            <div className='border-2 mt-5'>
                <p className='bg-[coral] rounded-lg ml-5 mt-5 pl-3 pr-3 w-20'>20% off </p>
            <img className='w-full flex justify-center' src={strCategoryThumb} alt="" />
            <p className='text-center text-xl'> <span className='mr-2 '>Strid:</span>{idCategory}$</p>
            <p>{strCategory}</p>
            <button onClick={()=>add(props.food)}  className='w-full p-2 bg-[coral] rounded-lg mt-5 transition-shadow'>Buy Now</button>
            </div>
            {
                cart.map(cart=>console.log(cart))
            }
        </div>
    );
};

export default Food;