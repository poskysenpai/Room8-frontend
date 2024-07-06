import React from 'react';

import VisitingCustomers from '../components/VisitingCustomers';
import AverageUsageTime from '../components/AverageUsageTime';
import UserDemographicSex from '../components/UserDemographicSex';
import UserDemographicAge from '../components/UserDemographicAge';
import UserLocationHeatmap from '../components/UserLocationHeatmap';
import ProfileNav from '../components/ProfileNav';
import AdminNav from '../components/AdminNav';

const UserAnalytics = () => {
  return (
    <div className="flex w-full h-screen">
      
      <div className="flex-1 flex flex-col "> {/* Added ml-64 to account for the sidebar width */}
      <AdminNav/>
        <div className="p-6 bg-gray-100 flex-1 mt-12">
          <h2 className="text-2xl font-bold mb-6">User Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <VisitingCustomers />
            <AverageUsageTime />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UserDemographicSex />
            <UserDemographicAge />
          </div>
          <UserLocationHeatmap />
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
