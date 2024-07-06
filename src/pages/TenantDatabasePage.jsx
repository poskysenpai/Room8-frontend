import React from 'react'
import AdminNav from '../components/AdminNav';
import { fetchAllUsers } from '../services/user/UserService';
import { useState, useEffect } from 'react';

const TenantDatabasePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
 
    useEffect(() => {
      const fetchUsers = async () => {
        setLoading (true) 
          try {
            const response = await fetchAllUsers();
              setUsers(response.pageItems);
              setLoading(false);
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };

      fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) {return <div>Error: {error}</div>;}
    
  return (
    < div className='w-full m-0'>
    <AdminNav/>
    <div className='w-full px-10 py-10 flex flex-col flex-grow gap-5 overflow-auto'>
        <div className='font-semibold text-2xl font-outfit'>Tenants Database</div>
        <div className="overflow-x-auto ">
          <table className="divide-y divide-gray-200 w-full">
            <thead className="bg-white font-outfit">
              <tr>
                <th className="px-6 py-3 text-left text-lg font-medium  text-black tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">User Name</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Date Created</th>
                <th className="px-6 py-3 text-left text-lg font-medium text-black  tracking-wider">Apartment Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y font-inter divide-gray-200 w-full">
      
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">{user.apartmentName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    </div>
  )
}

export default TenantDatabasePage