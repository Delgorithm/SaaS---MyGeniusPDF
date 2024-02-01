import React from 'react'
import PricingProps from '../Props/PricingProps'
import PricingFullData from '../Data/PricingData'

const firstSecondPrice = PricingFullData.slice(0,2);
const thirdPrice = PricingFullData.slice(2);

const Pricing = () => {
  return (
    <main className='flex flex-col items-center align-center'>
        <h2 id='prix' className='bg-gradient-to-b from-[#8B7EFF] to-[#9F54FF] text-transparent bg-clip-text text-4xl font-bold'>Pricing</h2>
        <section className='flex m-10 p-4 gap-10'>
          <div className='flex gap-10'>
            {firstSecondPrice.map((prices) => (
              <div className='w-80 bg-gradient-to-t from-[#eeeeef] to-[#ffffff] border-[0.5px] border-[#e5e2e9] rounded-3xl transition duration-200 hover:scale-105'>
                  <PricingProps
                    key={prices}
                    title={prices.title}
                    price={prices.price}
                    month={prices.month}
                    description={prices.description}
                    icon={prices.icon}
                    featureOne={prices.featureOne}
                    featureTwo={prices.featureTwo}
                    featureThree={prices.featureThree}
                    featureFour={prices.featureFour}
                    btnOffer={prices.btnOffer}
                  />
                </div>
            ))}
          </div>
          <div className=''>
            {thirdPrice.map((prices) => (
                <div className='w-80 bg-gradient-to-b from-[#0E063E] to-[#6125AE] text-[#ffffff] border-[0.5px] border-[#e5e2e9] rounded-3xl transition duration-200 hover:scale-105'>
                    <PricingProps
                      key={prices}
                      title={prices.title}
                      popularity={prices.popularity}
                      price={prices.price}
                      month={prices.month}
                      description={prices.description}
                      icon={prices.icon}
                      featureOne={prices.featureOne}
                      featureTwo={prices.featureTwo}
                      featureThree={prices.featureThree}
                      featureFour={prices.featureFour}
                      btnOffer={prices.btnOffer}
                    />
                  </div>
              ))}
          </div>
        </section>
    </main>
  )
}

export default Pricing