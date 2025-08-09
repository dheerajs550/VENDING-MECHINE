
import React from 'react';
import ConfirmPopup from '@/components/popup/page';

const PopUp = async (props)=> {
  const popupIdData = await props.params.popupid;

  console.log(popupIdData === "cancelprocess");
  
   const HeadingText1={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
    const HeadingText2={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
 
    const HeadingText3={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
     const HeadingText4={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
  const HeadingText5={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
   const HeadingText6={
  HeadingText1:" Inventory Add Successfully !",
 } 
    const HeadingText7={
  HeadingText1:" Inventory Add Successfully !",
 } 
  const HeadingText8={
  HeadingText1:"Report Print Successful !",
 }
  const urlData1={
  no:"/admin/otp",
  yes:"/admin/",
  notxt:"NO",
  yestxt:"YES"
}
  const urlData2={
  no:"/admin/manageinventoey",
  yes:"/admin/",
  notxt:"NO",
  yestxt:"YES"
} 
  const urlData3={
  no:"/admin/report",
  yes:"/admin/",
  notxt:"NO",
  yestxt:"YES"
} 
  const urlData4={
  no:"/admin/addinventory",
  yes:"/admin/",
  notxt:"NO",
  yestxt:"YES"
} 
  const urlData5={
  no:"/admin/generatereport",
  yes:"/admin/",
  notxt:"NO",
  yestxt:"YES"
} 
 const urlData6={
  yes:"/admin/report",
  yestxt:"OK"
}
 const urlData7={
  yes:"/admin/manageinventoey",
  yestxt:"OK"
}
 const urlData8={
  yes:"/admin/report",
  yestxt:"OK"
}

  return (
    <>
  
    {popupIdData==="otpcancel"&&( <ConfirmPopup data={HeadingText1} urlData={urlData1}/>)}
    {popupIdData==="ownercancel"&&( <ConfirmPopup data={HeadingText2} urlData={urlData2}/>)}
    {popupIdData === "reportcancel" && ( <ConfirmPopup data={HeadingText3} urlData={urlData3}/>)}
    {popupIdData === "addinventory" && ( <ConfirmPopup data={HeadingText4} urlData={urlData4}/>)}
    {popupIdData === "generatereport" && ( <ConfirmPopup data={HeadingText5} urlData={urlData5}/>)}
    {popupIdData === "manageinventoey" && ( <ConfirmPopup data={HeadingText6} urlData={urlData6}/>)}
    {popupIdData === "addsuccessfull" && ( <ConfirmPopup data={HeadingText7} urlData={urlData7}/>)}
    {popupIdData === "printsuccesful" && ( <ConfirmPopup data={HeadingText8} urlData={urlData8}/>)}



    </>
  );
}
export default PopUp
;
