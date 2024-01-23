import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);
    console.log(cart)

    const handleAddToCart = tShirt => {
        const exists = cart.find(ts => ts._id === tShirt._id)
        if(exists){
            toast('Duplicate not allowed.')
            return;
        }
        else{
          setCart([...cart, tShirt]);  
        }
        
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }



    return (
        <div className='home-container'>
            <div className='grid grid-cols-3 gap-10 mx-48 mt-32'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;