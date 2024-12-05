import React from 'react'
import images from 'assets/images'
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10">
            <Disclosure as="nav" className="bg-secondary shadow">
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/">
                                        <img className="block h-12 w-auto"
                                            src={images.PriceGiraffeLogoText}
                                            alt="Price Giraffe Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Disclosure>
        </header>
    );
};
export default Navbar;
