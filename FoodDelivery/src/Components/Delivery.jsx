import React from 'react'
import Process1 from '../assets/Images/Process1.png'
import Process2 from '../assets/Images/Process2.png'
import Process3 from '../assets/Images/Process3.png'

const Delivery = () => {
  return (
    <div class="container px-4 py-5 delivery-process">
        <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">

      
      <div className=" col px-5 text-center">
        <div className="  mb-3">
          <img src={Process1}  className='w-50 h-50' alt="" />
        </div>
        <h2>Pick Your Veg.</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        
      </div>
      <div className=" col px-5 text-center">
        <div className=" mb-3">
          <img src={Process2} className='w-50 h-50' alt="" />
        </div>
        <h2>We Deliver the Bag</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        
      </div>
      <div className=" col px-5 text-center">
        <div className=" mb-3">
        <img src={Process3} className='w-50 h-50' alt="" />
        </div>
        <h2>Enjoy Your</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        
      </div>
    </div>
  </div>
  )
}

export default Delivery