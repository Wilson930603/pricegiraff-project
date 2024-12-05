import React, { useLayoutEffect } from 'react'
import Stacked from 'layout/Stacked'

import LandingPageHero from 'sections/Hero/LandingPageHero'
import LandingPageFeatures from 'sections/LandingPageFeatures/LandingPageFeatures'
import LandingPageGraph from 'sections/LandingPageGraph/LandingPageGraph'
import LandingPageCTA from 'components/CTA/LandingPageCTA'
import LogoCloud from 'components/LogoCloud/LogoCloud'


const LandingPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Stacked>
                <LandingPageHero />
                <LogoCloud />
                <LandingPageFeatures />
                <LandingPageGraph />
                <LandingPageCTA />
            </Stacked>
        </>
    )

}

export default LandingPage