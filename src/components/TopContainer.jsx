import { Link } from "react-router-dom";

function TopContainer() {
    return (
      <div className="flex items-center justify-between my-10 mx-5">
  
        {/* Home and Products Section */}
        <div className="hidden lg:flex items-center justify-center space-x-4 ">
          <Link to="/" className="text-[#a5a9a9] hover:text-gray-600 text-xl font-['Oxygen'] leading-7 cursor-pointer"> Home</Link>
          <div className="relative flex items-center">
            <svg className="w-4 h-4 text-[#a5a9a9] cursor-pointer transform rotate-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <Link className="text-pry-color hover:text-teal-500 text-xl font-['Oxygen'] cursor-pointer leading-7">Products</Link>
        </div>
  
        {/* Title Section */}
        <div className="w-full flex justify-center">
              <span className="text-5xl lg:text-[3rem] leading-[5rem] text-black font-semibold font-['Figtree']">APARTMENTS</span>
        </div>
  
        {/* Sort By Section */}
        <div className="hidden md:flex items-center justify-center space-x-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
            <path d="M12.0833 21.25H18.9167V17.8333H12.0833V21.25ZM0.125 0.75V4.16667H30.875V0.75H0.125ZM5.25 12.7083H25.75V9.29167H5.25V12.7083Z" fill="#323232"/>
          </svg>
         
          <div className="flex items-center justify-center rounded-md border border-pry-color hover:border-teal-500 h-12 w-24 text-pry-color hover:text-teal-500 text-0.5 font-['Oxygen']">
            SORT BY:
          </div>
        </div>
  
      </div>
    );
  }
  
  export default TopContainer;
  
  
  











// function TopContainer() {
//     return (
//       <div className="w-full m-auto my-10">

//     <div className="flex items-center justify-left ml-10">
//          <span className="text-[#a5a9a9] text-1.2xl font-'Oxygen' leading-7">Home</span>
//         <div className="relative">
//         <svg className="w-4 m-3 h-4 text-[#a5a9a9] cursor-pointer transform rotate-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
//          </svg>
//          </div>
//       <span className="text-[#7FDBCA] text-1.2xl font-'Oxygen' cursor-pointer leading-7">Products</span>
//     </div>
//         <div className="w-full flex justify-center">
//           <div className="flex flex-col w-[70%] lg:w-[55%] m-auto">
//             <div className="text-center text-5xl lg:text-[3rem] mb-5 leading-[5rem]"><span className="text-black font-semibold font-['Figtree'] leading-7"> APARTMENTS </span>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center cursor-pointer border space-x-4">
//          <svg className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12.0833 21.25H18.9167V17.8333H12.0833V21.25ZM0.125 0.75V4.16667H30.875V0.75H0.125ZM5.25 12.7083H25.75V9.29167H5.25V12.7083Z" fill="#323232"/>
//          </svg>
//          <span className="text-[#7FDBCA] text-1xl border border-pry-color font-oxygen">SORT BY:</span>
//     </div>

//       </div>
//     );
//   }
  
//   export default TopContainer;
  