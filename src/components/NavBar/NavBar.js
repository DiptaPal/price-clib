import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: "Home", path: "/home"},
        {id: 2, name: "Products", path: "/products"},
        {id: 3, name: "Orders", path: "/orders"},
        {id: 4, name: "Contact", path: "/contact"},
        {id: 5, name: "About", path: "/about"},
    ]
    return (
        <div>
            <nav className='bg-blue-700 w-full text-white py-4'>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden cursor-pointer">
                        {
                            open ? <XMarkIcon /> : <Bars3Icon/>
                        }
                </div>
                <ul className={`bg-blue-700 md:flex w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-10' : 'top-[-120px]'}`}>
                    {
                        routes.map(route => <Link key={route.id} route = {route}></Link> )
                    }

                </ul>
            </nav>
        </div>
    );
};

export default NavBar;