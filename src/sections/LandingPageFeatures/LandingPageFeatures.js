

const features = [
  {
    name: 'Discover new trends',
    description:
      'Get access to data across all marketplaces to make vital buying and selling decisions.',
  },
  {
    name: 'Set real time alerts',
    description:
      'Create smart alerts that tracks the changes in prices real time and updates you if the prices hit your target. ',
  },
  {
    name: 'Premium analytics',
    description:
      'Perform all your E-commerce product research on our platform using fresh data and analytic tools provided by us.',
  },
  {
    name: 'Export detailed reports',
    description: 'Receive detailed E-commerce analytic reports delivered directly to your inbox on a daily basis.',
  }
];

const LandingPageFeatures = () => {
  return (
    <div className="pt-28 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="lg:text-left max-w-lg">
          <p className="text-base text-primary font-semibold tracking-wide uppercase">
            Features
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Retrieve data analyics & discover trends
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
            Access our premium database of fresh data collected daily that will keep you up to date on the latest trends and changes
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-32  md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="text-xl leading-6 font-medium text-gray-900 mb-2">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2j text-gray-500 text-lg">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFeatures