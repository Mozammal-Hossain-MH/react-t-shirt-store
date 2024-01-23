import React, { useEffect, useState } from 'react';
import HeaderSetup from '../HeaderSetup/HeaderSetup';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [routes, setRoutes] = useState([]);


    useEffect(() => {
        fetch('/header.json')
            .then(res => res.json())
            .then(data => setRoutes(data));
    }, [])

    

    return (
        <nav className='sticky top-0 z-50 h-20 flex justify-between items-center' style={{ background: '#1c2b35', boxShadow: '0 4px 10px rgba(110, 110, 110, 0.68)' }}>
            <h1 className='text-white text-2xl font-extrabold shadow-md ml-10 md:ml-28'>T-Shirt <span className='text-green-600'>Store</span></h1>

            <div>
                <div className='md:hidden mr-10' onClick={() => setOpen(!open)}>
                    <span>{
                        
                        open === true ?
                            (<XMarkIcon className="h-10 w-10 text-white " />)
                            : (<Bars3Icon className="h-10 w-10 text-white" />)
                    }
                    </span>
                </div>

                <div className={` md:flex md:mr-20 absolute md:static bg-red-400 md:bg-inherit duration-100 md:duration-0 w-full h-auto z-50 ${open ? 'top-20 right-0 ' : '-top-48 right-0'}`}>
                    {
                        routes.map(route => <HeaderSetup
                            key={route.id}
                            route={route}
                        ></HeaderSetup>)
                    }
                </div>

            </div>
        </nav>
    );
};

export default Header;