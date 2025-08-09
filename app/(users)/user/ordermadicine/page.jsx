import React from 'react'
import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'

       const pageData = [{ pageData:"Seif",
                           pageLink:"/user/relationship/seif"},
                           {pageData:"Wife" ,
                           pageLink: "/user/relationship/wife",},
                           {pageData:"Daughter",
                           pageLink: "/user/relationship/daughter",},
                           {pageData:"Son",
                           pageLink: "/user/relationship/son",},
                           {pageData:"Other",
                           pageLink: "/user/relationship/other",}];
              
       const HeadingText = {  HeadingText1:"Select Relationship Option:",};

       const bottomBtnRoot = {  Cancel:"/user/popup/cancelprocess",
                                Back:"/user/help",
                                Continue:"/user/currentbalance"};

function OrderMedicine() {
  return (
    <>  
        {/* Your inner content goes here */}
       <div className="    text-center" style={{   width:"100%"}}>
        {/* Title */}       
         <HeadingTextCom data={HeadingText}/>
        {/* Language Buttons */}
        <ButtonCom data={pageData}/>
        {/* Bottom Buttons */}
        <ButtomBtn data={bottomBtnRoot}/>
      </div>
    </>)}
export default OrderMedicine;