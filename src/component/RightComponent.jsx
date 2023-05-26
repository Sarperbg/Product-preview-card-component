import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

const RightComponent = () => {
  return (
    <div className='w-2/5 bg-white2 rounded-e-xl'>

      <div className='flex flex-col ml-8 mt-8'>
        <span className='text-cream text-md tracking-[.3rem]'>PERFUME</span>
        <div className='text-3xl font-bold text-black mt-4 ml-1'>
          <p>Gabrielle <br />
            Essence Eau <br />
            De Parfum
          </p>
        </div>

      </div>

      <div className='text-cream text-md ml-8 mt-8 leading-7'>
        <span>A floral,solar nad voluptuous <br />
          interprepation composed by <br />
          Olivier Polge, Perfumer-Creator <br />
          for the House of CHANEL.
        </span>
      </div>

      <div className='flex flex-col ml-8 mt-4'>
        <div className='flex'>
          <span className='text-darkcyan text-4xl font-bold'>$149.99</span>
          <span className='text-[16px] line-through	mt-2 ml-4'>$169.99</span>
        </div>



      </div>
      <div className='flex w-4/5 h-14 ml-8 rounded-xl mt-6 bg-darkcyan text-white cursor-pointer'>
        <button className='ml-12'>
          <AiOutlineShoppingCart size={25}
          />
        </button>

        <span className='mt-4 ml-8'>
          Add to Cart
        </span>

      </div>


    </div>
  )
}

export default RightComponent