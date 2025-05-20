import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <Link to="/" className="block">
                        <img src="/src/assets/logo.png" alt="PMC Logo" className="h-12" />
                    </Link>
                    <p className="text-sm">Classic cuts with modern style</p>
                    <div className="flex space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <nav className="space-y-3">
                        <Link to="/" className="block hover:text-yellow-500 transition-colors">Home</Link>
                        <Link to="/about" className="block hover:text-yellow-500 transition-colors">About</Link>
                        <Link to="/services" className="block hover:text-yellow-500 transition-colors">Services</Link>
                        <Link to="/gallery" className="block hover:text-yellow-500 transition-colors">Gallery</Link>
                        <Link to="/contact" className="block hover:text-yellow-500 transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <MapPinIcon className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                            <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon className="h-6 w-6 text-yellow-500 mr-2" />
                            <a href="tel:+19408081569" className="hover:text-yellow-500 transition-colors">+19408081569</a>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="mb-4">Subscribe to our newsletter to receive updates and news.</p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                <p>© 2023 PMC Barbershop. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
                    <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;