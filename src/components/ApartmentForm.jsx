import React, { useState } from 'react';
import { FaCamera } from "react-icons/fa";
import { createApartmentListing } from '../services/apartment/ApartmentService';

const ApartmentForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState(0);
    const [typeOfUnit, setTypeOfUnit] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState(0);
    const [files, setFiles] = useState([]);

    const [imageUploaded, setImageUploaded] = useState(false);

    const unitCategoryMapping = {
        "Duplex": 1,
    };

    const [error, setError] = useState(null);

    const handleImageUpload = (e) => {
        const newfiles = e.target.files;

        console.log(files);
        setFiles([...files, ...newfiles]);

        setImageUploaded(true);
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            const categoryId = unitCategoryMapping[typeOfUnit];
            formData.append('name', name);
            formData.append('description', description);
            formData.append('features', features);
            formData.append('address', address);
            formData.append('location', location);
            formData.append('categoryId', categoryId);
            formData.append('price', price);
            formData.append('typeOfUnit', typeOfUnit);
            formData.append('numberOfRooms', numberOfRooms);

            for (let i = 0; i < files.length; i++) {
                formData.append('imageUrls', files[i]);
            }

            await createApartmentListing(formData);

            setName('');
            setAddress('');
            setDescription('');
            setFeatures('');
            setLocation('');
            setPrice(0);
            setTypeOfUnit('');
            setNumberOfRooms(0);
            setFiles([]);
        } catch (error) {
            setError(error.errorMessage);
            console.error('Error creating apartment:', error);
        }
    };

   
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4 font-Figtree leading-7">Creating a listing</h2>
            <p className="text-center font-inter leading-7 font-normal text-base mb-8 text-customGray">Add some photos and details about your Apartment. Fill out what you can for now—you’ll be able to edit this later.</p>

            <form onSubmit={handleSubmit}>
                <div className="px-16 py-9 border mb-8">
                    <h3 className="text-xl font-bold text-center mb-4">Listing details</h3>
                    <p className="text-center font-inter leading-7 font-normal text-base mb-8 text-customGray">Tell the world all about your Apartment and why they’ll love it</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="name">
                                Name of Apartment
                            </label>
                            <input
                                className="w-full p-2 border font-inter font-normal text-base leading-6 border-gray-300 rounded-md"
                                id="name"
                                type="text"
                                placeholder="Sunny side Shortlet"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="name">
                                Description of Apartment
                            </label>
                            <input
                                className="w-full p-2 border font-inter font-normal text-base leading-6 border-gray-300 rounded-md"
                                id="name"
                                type="text"
                                placeholder="Nice Shortlet in Ikeja area"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="name">
                                Features
                            </label>
                            <input
                                className="w-full p-2 border font-inter font-normal text-base leading-6 border-gray-300 rounded-md"
                                id="name"
                                type="text"
                                placeholder="1 Toilet, 1 Bathroom, 1 Bedroom"
                                value={features}
                                onChange={e => setFeatures(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-base leading-6"
                                id="location"
                                type="text"
                                placeholder="17A"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="address">
                                Apartment address
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-base leading-6"
                                id="address"
                                type="text"
                                placeholder="Duplex"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="price">
                                Total Price of listings
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-base leading-6"
                                id="price"
                                type="number"
                                placeholder="450000"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="typeOfUnit">
                                Type of Units
                            </label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-base leading-6"
                                id="typeOfUnit"
                                value={typeOfUnit}
                                onChange={e => setTypeOfUnit(e.target.value)}
                            >
                                <option value="">Select unit type</option>
                                <option value="Duplex">Duplex</option>
                            </select>
                        </div>
                        <div>
                            <label className="block leading-5 text-base font-outfit font-medium mb-2" htmlFor="numberOfRooms">
                                Number of rooms
                            </label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-base leading-6"
                                id="numberOfRooms"
                                value={numberOfRooms}
                                onChange={e => setNumberOfRooms(e.target.value)}
                            >
                                <option value="">Select number of rooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="px-16 py-9 border mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex flex-col justify-center items-start">
                            <div>
                                <h3 className="leading-7 font-outfit font-medium text-2xl mb-3">Photos</h3>
                                <span className="font-normal text-base leading-7 font-inter block mb-2 text-customGray">Add some aesthetic photos for your shop</span>
                            </div>
                        </div>
                        <div className="flex justify-start items-start">
                            <div className="border border-gray-300 rounded px-14 py-4">
                                <div className="flex justify-center">
                                    <label htmlFor="imageUpload" className="cursor-pointer">
                                        {imageUploaded ? (
                                            <img src={'https://th.bing.com/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'} alt="Uploaded" className="w-16 h-16 mb-2" />
                                        ) : (
                                            <FaCamera className="w-16 h-16 mb-2" />
                                        )}
                                        <input 
                                            type="file" 
                                            id="imageUpload" 
                                            onChange={handleImageUpload} 
                                            className="hidden" 
                                            accept="image/*" 
                                            multiple
                                        />
                                    </label>
                                </div>
                                <span className="text-center font-normal text-xs leading-5 font-inter">Add a Photo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="px-32 py-4 bg-customTeal hover:bg-teal-500 text-white rounded-3xl font-inter font-medium text-base leading-6"
                    >
                        Add Apartment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApartmentForm;
