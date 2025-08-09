import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import Link from 'next/link'
import React from 'react'

function LanguagePage() {
         const pageData = [ {pageData:"English",
                             pageLink:"/user/english"},
                             {pageData:"Hindi" ,
                             pageLink: "/user/hindi",},
                             {pageData:"Marathi",
                             pageLink: "/user/marathi",}];

          const HeadingText = { HeadingText1:" Choose Language"};

          const bottomBtnRoot={Cancel:"/user/popup/cancelprocess",
                               Continue:"/user/help"};
  return (
       <>  
              {/* Your inner content goes here */}
              <div className="text-center" >
              {/* Title */}
              <HeadingTextCom data={HeadingText}/>
              <ButtonCom data={pageData}/>
              {/* Bottom Buttons */}
              <ButtomBtn data={bottomBtnRoot}/>
              </div>
       </>)}
export default LanguagePage;