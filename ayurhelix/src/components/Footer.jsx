import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1E2F23] text-[#A3B18A]">
            <div className="container mx-auto px-6 py-12 text-center">
                <h3 className="text-2xl font-bold text-white font-['Source_Serif_4']">Ayurhelix Pvt. Ltd.</h3>
                <p className="mt-2 text-sm">Heal with Nature.</p>
                <div className="mt-8 pt-8 border-t border-gray-700 text-sm">
                    <p>&copy; 2025 Ayurhelix Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;