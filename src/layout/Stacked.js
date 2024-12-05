import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import Notification from 'components/Notification/Notification'

const Stacked = (props) => {
    return (
        <>
        <Navbar /> 
            <Notification/>
            {props.children}
        <Footer/>
        </>

    )
}

export default Stacked