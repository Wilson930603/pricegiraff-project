import React from 'react'
import images from 'assets/images/'

const LandingPageGraph = () => {
  return (
    <div className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-7xl">

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 md:items-center">
            <div className="md:col-start-2">
              <h2 className="text-4xl mb-8">Rich data backlog</h2>
              <p className="text-xl leading-6 mb-8 font-medium text-gray-900">Historical Price data</p>
              <p className="mt-3 text-lg text-gray-500">
              View historical price data of any product over a period of up to 6 months.
              </p>
            </div>

            <div className="relative lg:mt-0 lg:col-start-1 mr-4">

              <img
                className="relative mx-auto rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                width={600}
                src={images.PriceGiraffeGraphImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageGraph