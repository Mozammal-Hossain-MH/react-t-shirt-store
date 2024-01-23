import React from 'react';

const TShirt = ({tShirt, handleAddToCart}) => {

const {name, picture, price, gender} = tShirt;

    return (
        <div className='shadow-2xl rounded-md relative'>
            <img className=' h-52 m-auto mt-5 rounded' src={picture} />
            <p className='ml-4 font-bold my-4'>{name}</p>
            <p className='ml-4 font-medium'>Price: ${price}</p>
            <p className='ml-4 mb-20'>Gender: {gender}</p>
            <button onClick={() => handleAddToCart(tShirt)} className='text-center text-white w-full h-10 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 absolute bottom-0'>Buy Now</button>
        </div>
    );
};

export default TShirt;