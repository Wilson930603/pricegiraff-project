import React from 'react'

import images from 'assets/images'

const AboutUsHero = () => {
    return (
        <div className="bg-white">
            <div>
                <div className="relative">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:p-8">
                        <div className="mb-6">
                            <p class="text-primary font-semibold">About PriceGiraffe</p>
                        </div>
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src={images.AboutUsHero}
                                    alt="About us hero"
                                />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 h-96">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero