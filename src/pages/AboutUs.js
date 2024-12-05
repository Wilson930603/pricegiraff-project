import React, { useLayoutEffect } from 'react'
import Stacked from 'layout/Stacked'

import AboutUsHero from 'sections/Hero/AboutUsHero'
import AboutUsContent from 'sections/AboutUsContent/AboutUsContent'

const AboutUs = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Stacked>
                <AboutUsHero />
                <AboutUsContent />
            </Stacked>
        </>
    )
}

export default AboutUs
