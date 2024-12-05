import React, {useEffect} from 'react'

import { Switch, Route, useLocation} from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import AboutUs from 'pages/AboutUs'
import FAQ from 'pages/FAQ'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Terms from 'pages/Terms'
import NoPageFound from 'pages/NoPageFound'
import Search from 'pages/Search'
import Category from 'pages/Category'
import Product from 'pages/Product'
import Favorites from 'pages/Favorites'
import Alerts from 'pages/Alerts'
import Brands from 'pages/Brands'
import Brand from 'pages/Brand'
import Demo from 'pages/Demo'


const App = () => {
    const location = useLocation()

    useEffect(() => {
        console.log("location changed")
    }, [location])

    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={AboutUs} />
                <Route path="/faq" component={FAQ} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/terms" component={Terms} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/categories/:categoryId" component={Category} />
                <Route exact path="/products/:productId" component={Product} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/alerts" component={Alerts} />
                <Route exact path="/brands" component={Brands} />
                <Route exact path="/brands/:brandName" component={Brand} />
                {/* TODO: Remove Demo page */}
                <Route exact path="/demo" component={Demo} />
                <Route component={NoPageFound}/>
            </Switch>
        </>
    )
}

export default App
