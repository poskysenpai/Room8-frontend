import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks({ title, links }){
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-tight">{title}</div>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-2">
            <Link to="#" className="text-gray-200 hover:text-white hover:cursor-pointer text-base font-medium font-['Inter'] leading-normal">{link.name}</Link>
            {link.new && (
              <div className="px-2 py-0.5 bg-gray-100 rounded-2xl flex items-center">
                <div className="text-center text-slate-700 text-xs font-medium font-['Inter'] leading-4">New</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks
