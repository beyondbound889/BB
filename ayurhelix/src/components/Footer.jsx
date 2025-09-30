import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#395c37] text-[#A3B18A]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-12 md:pt-8 space-y-8 md:space-y-0">
        <div className="container mx-auto px-6 text-center">
          <h3 className="mt-6 md:mt-0 text-2xl font-bold text-white font-['Source_Serif_4']">
            Beyond Bound<sup>®</sup>
          </h3>
          <p className="mt-2 text-sm border-b pb-1">Heal with Nature</p>
          <div className="pt-4 text-sm">
            <h1 className="text-xl text-[#c9d6b2]">Office Address: Vidya Vihar, Ghatkopar, Mumbai – 400077</h1>
            <h1 className="mt-1">Registered Address: Moh. Natha Singh, Maharana Pratap Colony,
Jaspur, Udham Singh Nagar, Uttarakhand – 244712</h1>
            <p>&copy; 2025 Ayurhelix Pvt. Ltd. All Rights Reserved</p>
            <p className="mt-4">&copy; CIN- U47721UT2025PTC019778</p>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 text-2xl">
            <Link to="https://www.facebook.com/share/174qrS4Mii/?mibextid=wwXIfr"><FaFacebookSquare /></Link>
          <Link to="https://www.instagram.com/beyondbound_/"><BsInstagram /></Link>
          <Link to="https://www.linkedin.com/company/beyond-bound/"><FaLinkedin /></Link>
        </div>
        </div>
        <div className="container flex flex-col items-center mb-20 text-left lg:w-1/3">
            <h2 className="text-xl text-white font-bold">Quick Links</h2>
            <ul className="text-center">
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/tos">Terms of Service</Link></li>
                <li><Link to="faqs">FAQs</Link></li>
            </ul>
        </div>
      </div>
      <h1 className="flex justify-end mr-5 -my-5 pb-5 hover:cursor-pointer hover:text-black"><a href="https://www.linkedin.com/in/ramanbansalsde/">Developed By Raman Bansal</a></h1>
    </footer>
  );
};

export default Footer;
