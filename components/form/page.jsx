import React from 'react';

const MedicineForm = () => {
  return (
   <div className="max-w-md mx-auto p-6  rounded-lg ">
      <form className="space-y-4">

        {/* Batch No */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="batch">
            Batch No
          </label>
          <input
            type="text"
            id="batch"
            placeholder="Enter batch number"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Tablet Format */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="format">
            Tablet Format
          </label>
          <input
            type="text"
            id="format"
            placeholder="Enter format"
            className="w-full border border-teal-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Type of Medicine */}
        <div>
          <label className="block text-gray-800 font-medium mb-1" htmlFor="type">
            Type of Medicine
          </label>
          <select
            id="type"
            className="w-full border border-teal-500 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-teal-600"
            defaultValue=""
          >
            <option className='bg-teal-50 hover:bg-teal-100' value="" disabled>Select type</option>
            <option className='bg-teal-50 hover:bg-teal-100' value="Bottle">Bottle</option>
            <option className='bg-teal-50 hover:bg-teal-100' value="Box">Box</option>
            <option className='bg-teal-50 hover:bg-teal-100' value="Stripes">Stripes</option>
            <option className='bg-teal-50 hover:bg-teal-100' value="Pack">Pack</option>
            <option className='bg-teal-50 hover:bg-teal-100' value="Other">Other</option>
          </select>
        </div>

      </form>
    </div>
  );
};

export default MedicineForm;
