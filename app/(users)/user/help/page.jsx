import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import Link from 'next/link'
import React from 'react'

function Help() {
  const pageData = [{pageData:"Check Balance",
                    pageLink:"/user/checkbalance"},
                    {pageData:"Medicine Prescriptions",
                    pageLink: "/user/selectprescription"}];

  const HeadingText = { HeadingText1:"  Welecome Gourab,",
                        HeadingText2:"How Can We Help Today!"};

  const bottomBtnRoot = { Cancel:"/user/popup/cancelprocess",
                          Back:"/user/language",
                          Continue:"/user/ordermadicine"};

  return (
       <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
           {/* Your inner content goes here */}
           <div className="    text-center" style={{   width:"100%"}}>
           {/* Title */}
           <HeadingTextCom data={HeadingText}/>
           {/* Language Buttons */}
           <ButtonCom data={pageData}  />
           {/* Bottom-Right: Two Continue Buttons */}
           <ButtomBtn data={bottomBtnRoot}/>
           </div>
       </div>
  )
}
export default Help;