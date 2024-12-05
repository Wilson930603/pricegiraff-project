import React from 'react'
import images from 'assets/images'

const LogoCloud = () => {
  return (
<div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl">Analyze prices from all major marketplaces in Singapore</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-7 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.AmazonLogo}
              alt="Amazon"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.ShopeeLogo}
              alt="Shopee"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.LazadaLogo}
              alt="Lazada"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.Qoo10Logo}
              alt="Qoo10"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.EbayLogo}
              alt="Ebay"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.CarousellLogo}
              alt="Carousell"
            />
          </div>
        
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src={images.AliExpressLogo}
              alt="Aliexpress"
            />
          </div>
  
        </div>
      </div>
    </div>
  );
};
export default LogoCloud;
