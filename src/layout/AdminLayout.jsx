import { icon } from '@fortawesome/fontawesome-svg-core';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AdminNav from '../components/AdminNav.jsx';

const AdminLayout = () => {
    const location = useLocation();
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOffset, setUnderlineOffset] = useState(0);

    const navRefs = {
        '/admin': useRef(null),
        '/admin/tenant-database': useRef(null),
        '/admin/user-analytics': useRef(null),
        '/admin/product-metrics': useRef(null),
        '/admin/support-tickets': useRef(null),
        '/admin/settings': useRef(null),
        '/logout': useRef(null),
    };

    useEffect(() => {
        const activeRef = navRefs[location.pathname];
        if (activeRef && activeRef.current) {
            const { offsetWidth, offsetLeft } = activeRef.current;
            setUnderlineWidth(offsetWidth);
            setUnderlineOffset(offsetLeft);
        }
    }, [location.pathname]);

    const navItems = [
      { name: 'Dashboard', path: '/admin', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_499_861)">
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#131A29" stroke="grey" fillOpacity='0.5' strokeWidth=""/>
      </g>
      <defs>
      <clipPath id="clip0_499_861">
      <rect width="24" height="24" fill="#0f0f0f"/>
      </clipPath>
      </defs>
      </svg>) },
      { name: 'Tenant Database', path: '/admin/tenant-database', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_499_864)">
      <path d="M13 2.05005V5.08005C16.39 5.57005 19 8.47005 19 12C19 12.9 18.82 13.75 18.52 14.54L21.12 16.07C21.68 14.83 22 13.45 22 12C22 6.82005 18.05 2.55005 13 2.05005ZM12 19C8.13 19 5 15.87 5 12C5 8.47005 7.61 5.57005 11 5.08005V2.05005C5.94 2.55005 2 6.81005 2 12C2 17.52 6.47 22 11.99 22C15.3 22 18.23 20.39 20.05 17.91L17.45 16.38C16.17 17.98 14.21 19 12 19Z" fill="#131A29" stroke="grey" strokeWidth="" fillOpacity="0.5"/>
      </g>
      <defs>
      <clipPath id="clip0_499_864">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>) },
      { name: 'User Analytics', path: '/admin/user-analytics', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#131A29" fillOpacity="0.5"/>
      <path d="M9 12H7V17H9V12Z" fill="#131A29" fillOpacity="0.5"/>
      <path d="M17 7H15V17H17V7Z" fill="#131A29" fillOpacity="0.5"/>
      <path d="M13 14H11V17H13V14Z" fill="#131A29" fillOpacity="0.5"/>
      <path d="M13 10H11V12H13V10Z" fill="#131A29" fillOpacity="0.5"/>
      </svg>) },
      { name: 'Product Metrics', path: '/admin/product-metrics', icon: (<svg id='Path_7587' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M9 14H9.01M6 14H6.01M13.1458 10.5H6.2C5.0799 10.5 4.51984 10.5 4.09202 10.718C3.71569 10.9097 3.40973 11.2157 3.21799 11.592C3 12.0198 3 12.5799 3 13.7V14.3C3 15.4201 3 15.9802 3.21799 16.408C3.40973 16.7843 3.71569 17.0903 4.09202 17.282C4.51984 17.5 5.0799 17.5 6.2 17.5H14.4364M5 17.4808V21M18 17.7439V21M16.5 3V5M21 5L20 6M12 5L13 6M21 13.5C21 15.9853 18.9853 18 16.5 18C14.0147 18 12 15.9853 12 13.5C12 11.0147 14.0147 9 16.5 9C18.9853 9 21 11.0147 21 13.5Z" stroke="#131A29" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>) },
      { name: 'Support Tickets', path: '/admin/support-tickets', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_499_873)">
      <path d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z" fill="black" fillOpacity="0.5"/>
      <path d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z" fill="#323232" fillOpacity="0.5"/> <path d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z" fill="#323232" fillOpacity="0.5"/>
<path d="M18 11.03C17.52 8.18 15.04 6 12.05 6C9.02 6 5.76 8.51 6.02 12.45C8.49 11.44 10.35 9.24 10.88 6.56C12.19 9.19 14.88 11 18 11.03Z" fill="#323232" fillOpacity="0.5"/>
</g>
<defs>
<clipPath id="clip0_499_873">
<rect width="24" height="24" fill="white"/>
</clipPath></defs>
</svg>) },
      { name: 'Settings', path: '/admin/settings', icon:(<svg id='Path_7587' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
      <path d="M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z" stroke="#131A29" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="#131A29" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>) },
      { name: 'Logout', path: '/logout', icon: (<svg id='Path_7587' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34314 20 3 18.6569 3 17V7C3 5.34315 4.34314 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#131A29" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>) },
      
    ];
  return (
    <>
    <div className='flex'>
        <div className='w-[15%] min-w-max pl-5 pr-5 pt-5 h-screen'>
          <div className="text-[#7FDBCA] text-2xl pb-10 font-Oxygen font-bold leading-7">Room8s</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path} 
              to={item.path}
              className={({ isActive }) =>
                `text-opacity-50 py-2 font-['Outfit'] text-sm font-semibold flex items-start content-center flex-col ${
                  isActive ? 'text-[#7FDBCA] font-bold' : 'text-[#000000]'
                } hover:text-[#7FDBCA]`
              }
              ref={navRefs[item.path]}
            >
              <div className="flex gap-0.5 items-center">
                  {item.icon}
                <div>{item.name}</div>
              </div>
          
            </NavLink>
          ))}
        </div>
        <div className='w-[85%]'>
          <div className='flex min-h-screen bg-gray-50 '>  <Outlet  /> </div>
        </div>
    </div>
    </>
  )
}

export default AdminLayout