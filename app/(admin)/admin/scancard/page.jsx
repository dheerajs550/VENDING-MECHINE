import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ScanCard() {
  return (
     <>


 <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
    
      <Link href="/admin/otp" className="w-full max-w-md">
        <div className=" backdrop-blur-md rounded-xl  sm:p-10 w-full text-center transition hover:scale-105 hover:shadow-xl cursor-pointer">

          {/* Welcome Text */}
          

          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/image/rfid.png"
              alt="Scan RFID"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Instruction */}
          <p className="text-gray-800 text-base sm:text-lg">
            Please scan your RFID card
          </p>
        </div>
      </Link>
    </div>





    </>
  )
}

export default ScanCard