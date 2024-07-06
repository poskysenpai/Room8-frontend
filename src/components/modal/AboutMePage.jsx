import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendar, BiChevronDown } from 'react-icons/bi';

function AboutMePage() {
  const [formData, setFormData] = useState({
    occupation: '',
    ageRange: '',
    industry: '',
    birthday: null
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthday: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const dataToSubmit = {
      ...formData,
      birthday: formData.birthday ? formData.birthday.toISOString().split('T')[0] : null,
    };

    
    console.log(dataToSubmit);
    
  };

  return (
    <div className='flex mt-4'>
      <form className='w-full max-w-4xl' onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor='occupation' className='block font-outfit font-medium text-customgray900 text-base mb-2 leading-5'>What do you do?</label>
            <select
              name='occupation'
              id='occupation'
              value={formData.occupation}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value="">Select occupation</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Employed">Employed</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Retired">Retired</option>
            </select>
          </div>

          <div>
            <label htmlFor="industry" className="block font-outfit font-medium text-customgray900 text-base mb-2 leading-5">What Field/Industry?</label>
            <select
              name='industry'
              id='industry'
              value={formData.industry}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value="">Select industry</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Technology">Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Construction">Construction</option>
              <option value="Retail">Retail</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Transportation">Transportation</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Legal">Legal</option>
              <option value="Marketing">Marketing</option>
              <option value="Consulting">Consulting</option>
              <option value="Public Sector">Public Sector</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Energy">Energy</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Automotive">Automotive</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Insurance">Insurance</option>
              <option value="Media">Media</option>
              <option value="Aerospace">Aerospace</option>
            </select>
          </div>

          <div>
            <label htmlFor='ageRange' className='block font-outfit font-medium text-customgray900 text-base mb-2 leading-5'>How old are you?</label>
            <select
              name="ageRange"
              id="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select age range</option>
              <option value="18-25">18-25</option>
              <option value="26-33">26-33</option>
              <option value="34-41">34-41</option>
              <option value="42-49">42-49</option>
              <option value="50-59">50-59</option>
              <option value="60+">60+</option>
            </select>
          </div>

          <div className="relative mt-4 md:mt-0">
            <label htmlFor="birthday" className="block font-outfit font-medium text-customgray900 text-base mb-2 leading-5">
              When is your birthday?
            </label>
            <div className="w-full flex justify-between items-center border border-gray-300 bg-white rounded p-2 cursor-pointer">
              <div className='flex items-center'>
                <BiCalendar className="text-customgray900 mr-2" />
                <DatePicker
                  id="birthdayInput"
                  selected={formData.birthday}
                  onChange={handleDateChange}
                  className="w-full border-none outline-none"
                  placeholderText="MM/DD/YYYY"
                />
              </div>
              <button
                type="button"
                className="text-customgray900 text-xl focus:outline-none"
                onClick={() => document.getElementById('birthdayInput').focus()}
              >
                <BiChevronDown />
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-14 space-x-3">
          <button type="submit" className="bg-customTeal hover:bg-teal-500 text-white px-4 py-3 rounded-lg text-sm font-notosans gap-2 font-normal">Save Changes</button>
          <button type="button" className="border border-customTeal hover:border-teal-500 text-customTeal hover:text-teal-500 px-4 py-3 rounded-lg text-sm font-normal font-notosans gap-2">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AboutMePage;
