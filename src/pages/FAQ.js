import React, {useLayoutEffect} from 'react'
import Stacked from 'layout/Stacked'


const faqs = [
    {
        question: "What is PriceGiraffe about?",
        answer:
            "PriceGiraffe is a price comparison website with more than 500 million product prices to compare from. Additionally, PriceGiraffe also offers pricing statistics and price alert features so that users - both ecommerce buyers and sellers - can make smarter and more informed buying and selling decisions. Through our price alerts, users can be automatically notified whenever their favourite products have been given a significant discount from any seller on any major platform in Singapore.",
    },
    {
        question: "Which ecommerce sites do you track prices from?",
        answer:
            "We currently offer price comparisons of products from 30 websites, including many of the biggest ecommerce platforms such as Shopee, Lazada, Qoo10, Amazon SG, Carousell, Ebay SG and even AliExpress.",
    },
    {
        question: "Will you be adding more ecommerce sites to your database?",
        answer:
            "Yes! We are constantly working to add many more ecommerce sites to our database so stay tuned.",
    },
    {
        question: "Are your products from Singapore sites only?",
        answer:
            "With the exception of AliExpress, all the products in our database are currently from Singapore sites. We are working on plans to expand PriceGiraffe regionally in the future.",
    },
    {
        question: "Is your price comparison service free?",
        answer:
            "Yes, our price comparison service is completely FREE! We have plans to roll out a paid subscription service offering advanced ecommerce analytics and other special features, and we are currently working to finalise the service so stay tuned.",
    },
    {
        question: "Why is there a need to sign up for a free account?",
        answer:
            "Price comparison on PriceGiraffe can be done without signing up for an account (i.e. as a guest), but in order to receive customised price alerts on your favourite products, you will need to sign up for a free account so that you can have the customised price alerts emailed to you.",
    },
    {
        question: "What is the maximum number of price alerts I can receive?",
        answer:
            "Users who sign up for a free account can choose to receive up to 20 price alerts of products of their choice.",
    },
    {
        question: "How does a price alert work?",
        answer:
            "We will track prices on a daily basis, and whenever we detect that there is a new lowest price of your chosen product (i.e. the price of the product from the cheapest seller has just gone even lower), we will send you an email to notify you about it.",
    },
    {
        question: "What if I want to have more than 20 price alerts?",
        answer:
            "We will be rolling out a paid subscription service soon, and one of the features of the paid account is the ability to have UNLIMITED price alerts, amongst many other amazing features.",
    },
    {
        question: "How often are your prices updated?",
        answer:
            "Our prices are updated on a daily basis.",
    },
    {
        question: "Why can’t I find a particular product on PriceGiraffe when it is listed on the other ecommerce sites like Lazada?",
        answer:
            "Due to practical reasons, we do not list every item found on the major ecommerce platforms as we are primarily focused on price comparison, and therefore we are focused mainly with the more established products which are likely to be listed in more than one or two platforms, so that meaningful price comparison can be made on our site.",
    },
    {
        question: "How do I contact you guys if I need assistance or want to give feedback?",
        answer:
            "Please kindly email us at hello@pricegiraffe.co.",
    },
]



const FAQ = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <Stacked>
          <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-4xl font-extrabold text-primary">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="mailto:hello@pricegiraffe.co" className="font-medium text-secondary hover:text-indigo-900">
                customer support
              </a>
              team.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
        </Stacked>

    )

}

export default FAQ