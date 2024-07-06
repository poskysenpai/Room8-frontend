import React from 'react'
import ProfileNav from '../components/ProfileNav'
import ApartmentForm from '../components/ApartmentForm'

const CreateListingPage = () => {
    return (
        <div className='min-h-screen'>
            <ProfileNav />
            <main className='mt-6'>
                <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
                    <div className="bg-white py-4 sm:py-6 lg:py-8">
                        <div className="max-w-4xl mx-auto">
                            <ApartmentForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreateListingPage