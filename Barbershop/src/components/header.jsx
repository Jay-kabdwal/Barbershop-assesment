import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <header className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <h1 className="text-4xl text-red-500 font-bold">PMC</h1>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
                    <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
                    <Link to="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link>
                    <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
                </nav>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="tel:+19408081569" className="flex items-center text-yellow-500 hover:text-yellow-400">
                        <PhoneIcon className="h-5 w-5 mr-2" />
                        +19408081569
                    </a>
                    <Link
                        to="/appointment"
                        className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                        Book an Appointment
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu (hidden by default) */}
            <div className="md:hidden">
                <nav className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="block px-3 py-2 hover:text-yellow-500 transition-colors">Home</Link>
                    <Link to="/about" className="block px-3 py-2 hover:text-yellow-500 transition-colors">About</Link>
                    <Link to="/services" className="block px-3 py-2 hover:text-yellow-500 transition-colors">Services</Link>
                    <Link to="/gallery" className="block px-3 py-2 hover:text-yellow-500 transition-colors">Gallery</Link>
                    <Link to="/contact" className="block px-3 py-2 hover:text-yellow-500 transition-colors">Contact</Link>
                    <a href="tel:+19408081569" className="block px-3 py-2 text-yellow-500 hover:text-yellow-400">
                        <PhoneIcon className="h-5 w-5 inline mr-2" />
                        +19408081569
                    </a>
                    <Link
                        to="/appointment"
                        className="block px-3 py-2 text-center bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                        Book an Appointment
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;