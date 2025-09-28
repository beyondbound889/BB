import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#395c37] text-[#A3B18A]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-12 py-8 md:py-8 space-y-8 md:space-y-0">
        <div className="container p-4 lg:w-1/3 flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold text-white mb-5">Office Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.3721503996965!2d72.89784772170745!3d19.074976758036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c75be7db7a55%3A0x3a0ce381ecb84033!2sBioriidl!5e0!3m2!1sen!2sin!4v1758607424361!5m2!1sen!2sin"
            width="90%"
            height="80%"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Office Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container mx-auto px-6 py-10 text-center">
          <h3 className="text-2xl font-bold text-white font-['Source_Serif_4']">
            Beyond Bound<sup>®</sup>
          </h3>
          <p className="mt-2 text-sm border-b pb-5">Heal with Nature</p>
          <div className="pt-8 text-sm">
            <h1>BioRiidl, Somaiya Vidya Vihar, Ghatkopar, Mumbai – 400077</h1>
            <p>&copy; 2025 Ayurhelix Pvt. Ltd. All Rights Reserved</p>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 text-2xl">
          <Link to="https://www.instagram.com/beyondbound_/"><BsInstagram /></Link>
          <Link to="/about"><FaSquareXTwitter /></Link>
          <Link to="https://www.linkedin.com/company/beyond-bound/"><FaLinkedin /></Link>
        </div>
        </div>
        <div className="container flex flex-col items-center mb-20 text-left lg:w-1/3">
            <h2 className="text-xl text-white font-bold">Useful Links</h2>
            <ul>
                <li>Privacy</li>
                <li>Terms of Service</li>
                <li>FAQs</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
