import React from 'react'

const RegisterNumber = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-top bg-no-repeat
     bg-[url('../../background_img.png')]">
         <div class="w-full max-w-lg p-10 rounded bg-white shadow-lg box-border">
    <h2 class="font-Oxygen mb-6 text-2xl leading-9 font-bold text-customTeal mb-4 text-center">Room8s</h2>
    <form>
    <label for="phone" class="font-nunito text-2xl block mb-4 text-lg font-bold text-center 
    text-gray-700">Can we get your number?</label>
      <div class="flex space-x-2">
        <div class="w-1/3">
          <label for="country" class="font-nunito font-semibold block mb-2 text-sm font-medium 
          text-gray-700">Country</label>
          <input id="country" type="text" value="NG +234" readonly class="w-full px-3 py-2 text-gray-700 
          bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 
          focus:border-transparent"/>
        </div>
        <div class="w-2/3">
          <label for="phone" class="font-nunito font-semibold block mb-2 text-sm font-medium 
          text-gray-700">Phone number</label>
          <input id="phone" type="text" placeholder="7098795958" class="w-full px-3 py-2 text-gray-700 
          border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 
          focus:border-transparent"/>
        </div>
      </div>
      <small class="font-nunito font-semibold mb-4 mt-4 text-sm text-gray-600 mt-0">We'll text you a code to verify you're really you.</small>
<div class="font-nunito font-semibold mb-4 mt-4 text-sm text-gray-600 mt-0">Message and data rates may apply.</div>
      <div class="flex justify-center">
        <button type="button" class="font-nunito bg-customTeal w-56 px-4 py-2 text-white rounded-3xl hover:bg-teal-600 
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Next</button>
      </div>
    </form>
  </div>
    </div>
  );
};

export default RegisterNumber