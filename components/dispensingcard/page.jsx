import Link from 'next/link'
import React from 'react'

function DispensIngcard({data}) {
    console.log(data[0])
  return (
    <>
      {data.map((label, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 max-w-xs mx-auto bg-white rounded-lg border border-teal-600 shadow-md p-4 text-sm font-sans text-gray-800">
  <h2 className="text-xl font-semibold text-center text-gray-800 border-b border-teal-600 pb-2 mb-3">Paracetamol</h2>

  <div className="space-y-1">
    <div className="flex justify-between">
      <span className="font-medium">Generic Name:</span>
      <span className="text-teal-700 font-semibold">{label.GenericName}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Brand Name:</span>
      <span className="text-teal-700 font-semibold">{label.BrandName}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Mfg By:</span>
      <span className="text-teal-700 font-semibold">{label.MfgBy}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Marketed By:</span>
      <span className="text-teal-700 font-semibold">{label.MarketedBy}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Day:</span>
      <span className="text-teal-700 font-semibold">{label.Day}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Date:</span>
      <span className="text-teal-700 font-semibold">{label.Date}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Time:</span>
      <span className="text-teal-700 font-semibold">{label.Time}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Total Inventory:</span>
      <span className="text-teal-700 font-semibold">{label.TotalInventory}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Total Capacity:</span>
      <span className="text-teal-700 font-semibold">{label.TotalCapacity}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Balance Refill:</span>
      <span className="text-red-600 font-semibold">{label.BalanceRefill}</span>
    </div>
  </div>
    <Link href={"/admin/addinventory"}>
  <button  className="mt-6 w-full bg-teal-700 text-white font-semibold py-2 rounded-md hover:bg-teal-800 transition">
    Add
  </button>
    </Link>
</div>
))}
    </>
  )
}

export default DispensIngcard