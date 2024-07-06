import React from 'react'
import Searchbar from './Searchbar'

function Hero() {
  return (
    <div className='w-full m-auto my-10'>
      <div className='w-full flex justify-between'>
        <img className='hidden ml-10 lg:block h-56 w-56 object-cover rounded-[15.125rem]' src="https://s3-alpha-sig.figma.com/img/d09a/61d5/1d2e4f8605e23749ad6052060e5fd523?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CMQpOv7ycohrT2aKlgF4MdsXqrNDW8xJvVXZU4ixEzqHarT3unqYRYuuKqCTTb9ZKF-6VGMDFedwuF1htNR-r5ItdE6Q-4ptjjh2K-TAPVnhlDpG6DCMCZkv~XXXEJVlTstVuVOd1-NRefVIdRynnNqaDwDvUlTKk34o7sZDM9IsftCieCMyBtWlKk7HyUzPJ5-GND0majX2P5E82oRAbhvI04R-VWykYfGVLmxC08W~SYtYgKHCE1Wh8UGqwekgp~2OxlFQN9HVl28KM2Y3keQ8nAPo0aVRe6rdCdRn6uPN0aBM9OCCOHBT0sOYY-u-3X4KSZs24nDSNWR8o3G1~g__" alt=""/>
        <div className='flex flex-col w-[70%] lg:w-[55%] m-auto'>
          <div className="text-center text-5xl lg:text-[3.54619rem] mb-5 leading-[5rem]"><span className="text-black font-semibold font-['Figtree'] leading-7">Find Your Perfect Match, Find Your Perfect </span><span className="text-[#7FDBCA] text-normal font-semibold font-'Figtree' leading-7">Home</span></div>
            <div className="text-center">
                <div className="mb-5 text-center text-gray-500 text-base font-normal font-['Acumin Pro'] leading-7">Find Your Perfect Roommate Match - Convenient, Affordable Living Awaits Shared Living Made Simple - Connect with Potential Roommates Now</div>
                <Searchbar />
          </div>
        </div>
        <img className='hidden mr-10 lg:block h-56 w-56 object-cover rounded-[15.125rem]' src="https://s3-alpha-sig.figma.com/img/f3fd/2f1d/3765cd084f231989b505f7df22ee8fa6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYoi28uG32Cqy73sKxdQ7zj3vVK5KXlddBR0KJ8rcejT2BzKzAelqWxPBov~fQfrqfzlXTTDpOaOYo~fSZkQsI1DHMGvTx-VlOqp2aSpRBPR4N6JGmZIX3uggsM6nEl-tnONCL5x6bKLKUoloP5BAZ58hYxD2Q7V~t44waGFokz3E5Nb3Dm-mswlgxhhRpD6ZzKnErcb6XcHFNq--nlA6-~0Q8dqm2HXBpGC2mdv~fjicbH33U31esOCeSt5AHNQEhvCbDVirqsuvkSHOlsIEHtys7l6zi2B91-C4mW-0MhDQ3ugxUrlYFeLk0GRx4ffNzwwqxwrOwQFsXbkhgRW1g__" alt=""/>
      </div>
      <div className='flex justify-between items-start mx-40'>
        <img className='hidden lg:block h-56 w-56 object-cover rounded-[15.125rem]' src="https://s3-alpha-sig.figma.com/img/c2e1/c9a0/5971ab094b5a31ba40db27b6dcb3778b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vl4D3nwyuU3cUVr0BZa~pxrAYPT3MhFS5Yh~e6FF0NvwrebbZSnWWaZ1DmoD-PKiVMAX31NERGcqNcLWZK2a45qaH~7nCRD0gpdaur7NFEeKW7zIBYtx6H~6cvpsud30S65Ne3H5FbK~iQFYRiE-W3OKZP9BZlMP0JEnE4L2nPJfe-eU68k2lPoc3x5-0XjT3zkH4thFqBGtayLb63BnWZPMYJ~yV6Q8pg6aGfWTp9XCJC-RJfc8vzV7DbxXavRDDw-zs7N-GjgANxRTVTzmWj3UCj1He0rWlGTpjQ-XnRXoZZHXSAwGqTggaZJIo27vqzw~BIwpTlo0QcrjCGW9lQ__" alt=""/>
        <img className='hidden mt-20 lg:block h-56 w-56 object-cover rounded-[15.125rem]' src="https://s3-alpha-sig.figma.com/img/c824/0eef/302d6eb6c6102eecdc0ffd9344929974?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsPGl-Etsq3W1dgylXLzPiRvM8XJzdQZAFeU8Vc9Ui2L1PB0whIdsQKk-FpcDEIwFyG3k-eAzA52LR8l6sr-czSv4l01aa2l2dqPprOt30bvT~YaohQjBCAW-zsQwJkSjvQ5-3J3zVBIUgUGNq2Rw0x8V6VRnEk4FqQjxWvaL82RvGym5hvcJTneIBksFcey~2RDCYPea8r21sfGzgHZmQ0ff3TvSQK~M0toqNPYIMSGUfwR-z7w03tZyYu1hLJiVdp7Ci6IJ~6Sgd4N1Gt7q7mLhu1~FmgXpKI7NJTl3sbk5DPTMETTjSPa7768BgBgKv6eqfZlXLgeduOAWcHCLA__" alt=""/>
        <img className='hidden lg:block h-56 w-56 object-cover rounded-[15.125rem]' src="https://s3-alpha-sig.figma.com/img/767d/805e/d279494cd59ffa2b8c36eef39311de65?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drxGzdjcMlNIp-qgPYoJ6ckK-NTM2QPIcWPdwunNGgOAtZ4-GL43fN~vQxFaKpuewUtMdw2aKq4uVMi~6oc2dgPL3pKC-UD3BIH2ATcWPpxjVLxCyxhCk6~nDTJ-wbOkUCQVBOyrzRVt9mII8c768vCA5N9jeytXPUZvD5kFBIat8LqcfRIxu0v0YP4RLcM77aYw2MWkZR2CrT5cw-0-tyQl-uvkMRTTzb5-UWPq1ykay9TwiWLdSZwmbp~1VOGzrksltHUP7J8UOhx5svpGddw7u7jNbwcYhiC70Jv8U-bMYU1GRZCpmnRkT0QjTPMdYHF1VdyqatB-wh933OiTjg__" alt=""/>
      </div>        
   </div>
  )
}

export default Hero