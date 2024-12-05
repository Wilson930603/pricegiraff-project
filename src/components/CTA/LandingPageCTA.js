import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import MailService from 'services/mail'
import { setNotificationMessage } from 'reducers/notificationReducer'

const LandingPageCTA = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  // const [submitted, setSubmitted] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    const response = await MailService.registerMailList({ email: email })
    if (response.status === 200) {
      dispatch(setNotificationMessage("Email successfully added to mail list"))
      setEmail("")
    } else {
      dispatch(setNotificationMessage("Please enter a valid email"))

    }
  }
  return (
    <div className="bg-gradient">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center text-center lg:text-left">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl text-gray-100 sm:text-4xl">The ultimate ecommerce <span className="inline-block"> analytics tool at your fingertips.</span></h2>
        </div>
        <div className="mt-8 lg:mt-0 sm:w-96 m-auto">
          <div className="text-center text-gray-100 mb-3">
            <p>Be the first to get early access!</p>
          </div>
          <div className="sm:block">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 rounded-md"
              placeholder="Enter your email to receive updates"
            />
            <div className="mt-3 rounded-md shadow  sm:flex-shrink-0">
              <button
                type="click"
                onClick={submitEmail}
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageCTA