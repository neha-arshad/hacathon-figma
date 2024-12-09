// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className=" text-black px-10 lg:px-32 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Left Side - Logo, Paragraph, Social Links */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Comforty</h2>
//           <p className="mb-6">
//             Vivamus tristique odio sit amet velit semper, eu posuere turpis
//             interdum. Cras egestas purus
//           </p>
//           <div className="flex gap-4">
//             <span className="p-2 rounded-full bg-white text-[#272343] hover:bg-gray-200 cursor-pointer">
//               <FaFacebookF />
//             </span>
//             <span className="p-2 rounded-full bg-white text-[#272343] hover:bg-gray-200 cursor-pointer">
//               <FaTwitter />
//             </span>
//             <span className="p-2 rounded-full bg-white text-[#272343] hover:bg-gray-200 cursor-pointer">
//               <FaInstagram />
//             </span>
//             <span className="p-2 rounded-full bg-white text-[#272343] hover:bg-gray-200 cursor-pointer">
//               <FaLinkedinIn />
//             </span>
//           </div>
//         </div>

//         {/* Categories Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Categories</h3>
//           <ul className="space-y-2">
//             <li className="hover:underline cursor-pointer">Living Room</li>
//             <li className="hover:underline cursor-pointer">Bedroom</li>
//             <li className="hover:underline cursor-pointer">Office</li>
//             <li className="hover:underline cursor-pointer">Outdoor</li>
//           </ul>
//         </div>

//         {/* Support Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Support</h3>
//           <ul className="space-y-2">
//             <li className="hover:underline cursor-pointer">Contact Us</li>
//             <li className="hover:underline cursor-pointer">FAQs</li>
//             <li className="hover:underline cursor-pointer">Returns</li>
//             <li className="hover:underline cursor-pointer">Shipping Info</li>
//           </ul>
//         </div>

//         {/* New Settler Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">New Settler</h3>
//           <p className="mb-4">Stay updated with the latest deals and offers.</p>
//           <form className="flex flex-col gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="p-3 rounded-md text-black"
//             />
//             <button
//               type="submit"
//               className="bg-[#F5813F] text-white py-2 rounded-md hover:bg-orange-600"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 lg:mt-40 lg:ml-44 lg:mr-44 text-black px-10 lg:px-32 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Side - Logo, Paragraph, Social Links */}
        <div>
          <div className="flex items-center mb-6">
            {" "}
            {/* Adjusted margin */}
            <Image
              src="/Images/Logoicon.png"
              alt="Comforty Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <h2 className="text-2xl font-bold">Comforty</h2>
          </div>

          <p className="mb-6 text-xs">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>

          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaYoutube />, label: "YouTube" },
            ].map((social, index) => (
              <span
                key={index}
                className="p-3 rounded-full bg-white text-[#272343] hover:bg-[#029FAE] hover:text-white transition-all duration-300 cursor-pointer"
                aria-label={social.label}
              >
                {social.icon}
              </span>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="lg:ml-4">
          <h3 className="text-xl text-[#9A9CAA] font-semibold mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer ">Sofa</li>
            <li className="hover:underline cursor-pointer">Armchair</li>
            <li className="hover:underline cursor-pointer">Wing Chair</li>
            <li className="hover:underline cursor-pointer">Desk Chair</li>
            <li className="hover:underline cursor-pointer">Wooden Chair</li>
            <li className="hover:underline cursor-pointer">Park Bench</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl text-[#9A9CAA] font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer">Help & Support</li>
            <li className="hover:underline cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>

        {/* New Settler Section */}
        <div>
          <h3 className="text-xl text-[#9A9CAA] font-semibold mb-4">
            New Settler
          </h3>
          <p className="mb-4 text-xs">Stay updated with the latest deals and offers.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-[#029FAE] text-white py-2 rounded-md hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
