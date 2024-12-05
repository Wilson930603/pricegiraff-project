import React from 'react'



const features = [
    {
        name: 'Convenience', content: 'To help ecommerce buyers save time and money by providing instant, real-time information on the latest ecommerce prices in Singapore.', icon: (props) => (
            <svg viewBox="0 0 182 173" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M181.509 41.8867V172.49H0V113.924L45.2074 78.8675L93.5472 113.924L181.509 41.8867ZM104 126.679L94.1885 134.755L83.8867 127.283L45.5469 99.4716L16.4905 122V156H165.019V76.7546L104 126.679Z" fill="#00004D" />
                <path d="M93.8867 93.3962L45.3963 58.264L0 93.3962V72.566L45.0568 37.6226L93.2451 72.566L181.585 0.264038V21.5849L93.8867 93.3962Z" fill="#F55685" />
            </svg>

        )
    },
    {
        name: 'Transparency', content: 'To offer a greater level of price transparency to both ecommerce buyers and sellers through the most updated price information.', icon: (props) => (
            <svg viewBox="0 0 169 159" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.4528 0L168.906 44.8302L84.4528 89.6603L0 44.8302L84.4528 0ZM30.3395 44.8302L84.4528 73.5471L138.566 44.8302L84.4528 16.1133L30.3395 44.8302Z" fill="#F55685" />
                <path d="M84.4528 126.038L0 81.2075V65.0942L84.4528 109.924L168.906 65.0942V81.2075L84.4528 126.038Z" fill="#00004D" />
                <path d="M84.4528 158.49L0 113.66V97.547L84.4528 142.377L168.906 97.547V113.66L84.4528 158.49Z" fill="#00004D" />
            </svg>

        )
    },
    {
        name: 'Competitive Busines', content: 'To offer a competitive edge to ecommerce businesses by providing proprietary AI-driven ecommerce data analytics so as to keep one step ahead of the competition.', icon: (props) => (
            <svg viewBox="0 0 182 173" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M181.509 41.8867V172.49H0V113.924L45.2074 78.8675L93.5472 113.924L181.509 41.8867ZM104 126.679L94.1885 134.755L83.8867 127.283L45.5469 99.4716L16.4905 122V156H165.019V76.7546L104 126.679Z" fill="#00004D" />
                <path d="M93.8867 93.3962L45.3963 58.264L0 93.3962V72.566L45.0568 37.6226L93.2451 72.566L181.585 0.264038V21.5849L93.8867 93.3962Z" fill="#F55685" />
            </svg>

        )
    },

]

const AboutUsContent = () => {

    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="text-center text-gray-700">
                <div className="mt-4">
                    <h2 className="text-5xl font-semibold">Every Ecommerce platform with just ONE Search.</h2>
                </div>
                <div className="mt-8">
                    <p>
                        PriceGiraffe is the leading price comparison site in Singapore with more than 500 million product prices to compare from. Additionally,
                        we also offer pricing statistics and price alert features, so that users (both ecommerce
                        buyers and sellers) can make smarter and more informed buying or selling decisions.
                        Through our price alert feature, users can be automatically informed whenever their
                        favourite product has been given a significant discount from any seller on any major
                        platform in Singapore.
                    </p>
                    <p className="mt-8">
                        We currently offer price comparisons of products from 15 of the
                        largest ecommerce sites in Singapore including Shopee, Lazada, Qoo10, Amazon, Carousell,
                        Ebay, AliExpress, Harvey Norman, Best Denki, Courts and Gain City.
                    </p>
                </div>
            </div>
            <div className="text-center mt-12">
                <div>
                    <h1 className="font-semibold text-5xl text-primary">
                        Our Mission
                    </h1>
                    <p className="text-gray-700 mt-4">PriceGiraffe seeks to bring about the following benefits for ecommerce users</p>
                </div>
                <div className="mt-8 mb-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} >
                                <div className="flow-root bg-red-50 rounded-lg py-8 px-12 h-full">
                                    <div className="">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3">
                                                <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-primary tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-700">
                                            {feature.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent