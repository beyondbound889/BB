import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E2F23] text-[#A3B18A]">
      <div className="flex">
        <div className="p-4" style={{ width: "50%", height: "200px" }}>
          <h1 className="text-xl font-bold text-white">Office Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.3721503996965!2d72.89784772170745!3d19.074976758036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c75be7db7a55%3A0x3a0ce381ecb84033!2sBioriidl!5e0!3m2!1sen!2sin!4v1758607424361!5m2!1sen!2sin"
            width="400"
            height="190"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white font-['Source_Serif_4']">
            Beyond Bound<sup>®</sup>
          </h3>
          <p className="mt-2 text-sm">Heal with Nature.</p>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm">
            <p>&copy; 2025 Ayurhelix Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
        <div className="w-1/3 my-20">
            <h2 className="text-xl text-white font-bold opacity-50">Useful Links</h2>
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
