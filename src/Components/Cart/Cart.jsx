import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='mt-32'>
            <h1>Total Items: {cart.length}</h1>
            <div className='mt-5'>
                {
                    cart.map(tshirt => <p
                        className='mb-4' 
                        key={tshirt._id}
                        >{tshirt.name}   <button onClick={() => handleRemoveFromCart(tshirt._id)} className='bg-red-500 hover:bg-red-600 ml-3 px-3 rounded-sm text-white'>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Cart;