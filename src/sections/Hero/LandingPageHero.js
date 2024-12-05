import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import images from 'assets/images';

import MailService from 'services/mail';
import { setNotificationMessage } from 'reducers/notificationReducer';

const LandingPageHero = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false)

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const submitEmail = async () => {
    console.log(email);

    const response = await MailService.registerMailList({ email: email });
    if (response.status === 200) {
      dispatch(setNotificationMessage('Email successfully added to mail list'));
      setEmail('');
    } else {
      dispatch(setNotificationMessage('Please enter a valid email'));
    }
  };

  return (
    <div className="bg-secondary pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:pb-36">
        <div className="text-center text-gray-100 lg:-mt-12">
          <h3 className="text-xl">Coming in December 2021</h3>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl text-gray-100  sm:text-5xl">
                  Every ecommerce platform with just{' '}
                  <span className="text-yellow-400">one</span> search.
                </h1>
                <p className="mt-6 text-lg text-gray-200">
                  PriceGiraffe provides buyers and sellers with valuable pricing
                  insights across every major marketplace in Singapore.
                </p>
              </div>
              <form className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    placeholder="Enter your email to receive updates"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="button"
                    onClick={submitEmail}
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-primary text-base font-medium text-white shadow hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            {/* <div className="hidden sm:block">
              <svg
                className="absolute top-20 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div> */}
            <div className="relative pl-4  md:-mt-8 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full mt-5">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={images.PriceGiraffeLaptop}
                alt="Price Giraffe Laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
