import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import React from 'react'

function OtpPage() {
     const HeadingText = { HeadingText1:" Verify OTP",
                           HeadingText3:" Please enter the OTP we just sent to ",
                           HeadingText4: "mobile no. ending with ",
                           HeadingText5: "XXXXXX3210",};

     const HeadingText2 = { HeadingText6: "Didn't receive the OTP?",
                            HeadingText7: "Resend",};

     const bottomBtnRoot = {  Cancel:"/user/popup",
                              Continue:"/admin/report"};

  return (
      <>  
             {/* Your inner content goes here */}
             <div className="text-center" >
             {/* Title */}
             <HeadingTextCom data={HeadingText}/>
             {/* <ButtonCom data={pageData}/> */}
             <div children='flex justify-space-between items-center gap-4 mb-10' className='flex justify-center items-center gap-4 mb-10'>
             <div className='bg-white h-15 w-15  pt-5'>9</div>
             <div className='bg-white h-15 w-15  pt-5'>9</div>
             <div className='bg-white h-15 w-15  pt-5'>9</div>
             <div className='bg-white h-15 w-15  pt-5'>9</div>
             </div>
             <HeadingTextCom data={HeadingText2}/>
              {/* Bottom Buttons */}
             <ButtomBtn data={bottomBtnRoot}/>
             </div>
      </>
  )
}
export default OtpPage