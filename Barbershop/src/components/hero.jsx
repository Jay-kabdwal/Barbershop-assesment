import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <div className="relative bg-black text-white">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <img
                    src="/src/assets/hero.png"
                    alt="Barbershop Team"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {/* Main Tagline */}
                        <div>
                            <h1 className="text-5xl font-bold mb-4">Classic Cuts, Modern Style</h1>
                            <p className="text-xl text-yellow-500 font-semibold">Premium Barber Shop</p>
                        </div>

                        {/* Business Status */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <ClockIcon className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-green-500 font-medium">Open</span>
                                <span className="mx-2">⋅</span>
                                <span>Closes 7 pm</span>
                            </div>
                        </div>

                        {/* Rating Section */}
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`h-5 w-5 ${i < 4 || i === 4 && i < 0.6 ? 'text-yellow-500' : 'text-gray-400'}`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 font-medium">4.6 stars (116+ reviews)</span>
                            </div>
                            <p className="text-gray-300 italic">"Costly compared to other barbershops with better haircuts."</p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <MapPinIcon className="h-5 w-5 text-yellow-500" />
                                <a
                                    href="https://maps.google.com/?q=123+Main+St,+Denton,+TX+76201"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition-colors"
                                >
                                    123 Main St, Denton, TX 76201
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PhoneIcon className="h-5 w-5 text-yellow-500" />
                                <a
                                    href="tel:+19406129127"
                                    className="hover:text-yellow-500 transition-colors"
                                >
                                    +1 940-612-9127
                                </a>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/appointment"
                            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-lg"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Right side space for image balance */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;