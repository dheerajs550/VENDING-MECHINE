import ButtomBtn from '@/components/bottombutton/page'
import React from 'react'

function CheckBalance() {
 
  const bottomBtnRoot={
Cancel:"/user/popup/cancelprocess",
Back:"/user/ordermadicine",
}
  return (
<>  
  {/* Your inner content goes here */}
      <div className="    text-center" style={{   width:"100%"}}>
        {/* Title */}

        {/* Language Buttons */}
      <div className="bg-[#ecf6f6] p-4 sm:p-6 md:p-8 rounded-lg max-w-md w-full mx-auto space-y-4">
  {/* Current Balance */}
  <div className="flex justify-between items-center">
    <h1 className="text-gray-900 text-lg sm:text-xl font-medium"> Your Acoount Balance Is:</h1>
    <h1 className="text-[#00796B] font-bold text-lg sm:text-xl">Rs. 15,000</h1>
  </div>

  {/* Billing Amount */}

</div>


        {/* Bottom Buttons */}
        <ButtomBtn data={bottomBtnRoot}/>
   

      </div>
    </>
  )
}

export default CheckBalance