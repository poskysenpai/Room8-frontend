import React from 'react'
import FooterLinks from './FooterLinks';

function Footer() {
    const productLinks = [
      { name: 'Overview' },
      { name: 'Features' },
      { name: 'Solutions', new: true },
      { name: 'Tutorials' },
      { name: 'Pricing' },
      { name: 'Releases' },
    ];
  
    const companyLinks = [
      { name: 'About us' },
      { name: 'Careers' },
      { name: 'Press' },
      { name: 'News' },
      { name: 'Media kit' },
      { name: 'Contact' },
    ];
  
    const resourcesLinks = [
      { name: 'Blog' },
      { name: 'Newsletter' },
      { name: 'Events' },
      { name: 'Help centre' },
      { name: 'Tutorials' },
      { name: 'Support' },
    ];
  
    const socialLinks = [
      { name: 'Twitter' },
      { name: 'LinkedIn' },
      { name: 'Facebook' },
      { name: 'GitHub' },
      { name: 'AngelList' },
      { name: 'Dribbble' },
    ];
  
    const legalLinks = [
      { name: 'Terms' },
      { name: 'Privacy' },
      { name: 'Cookies' },
      { name: 'Licenses' },
      { name: 'Settings' },
      { name: 'Contact' },
    ];
    
    return (
      <div className="p-8 bg-[#7FDBCA]">
        <div className="flex flex-wrap md:flex-nowrap justify-start items-start gap-16 w-full">
          <div className="flex flex-col flex-grow justify-start items-start gap-8 basis-1/4">
            <div className="text-center text-white text-2xl font-bold font-['Oxygen']">Room8s</div>
            <div className="text-gray-200 text-base font-normal font-['Inter']">
              Design amazing digital experiences that create more happy in the world.
            </div>
          </div>
          <div className="flex flex-grow flex-wrap justify-start items-start gap-8 basis-3/4">
            <FooterLinks title="Product" links={productLinks} />
            <FooterLinks title="Company" links={companyLinks} />
            <FooterLinks title="Resources" links={resourcesLinks} />
            <FooterLinks title="Social" links={socialLinks} />
            <FooterLinks title="Legal" links={legalLinks} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;