import { ScissorsIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            name: 'Classic Haircut',
            description: 'Precision cut tailored to your style and face shape',
            price: '$30',
            icon: ScissorsIcon
        },
        {
            name: 'Beard Trim & Shape',
            description: 'Expert grooming and styling for your facial hair',
            price: '$25',
            icon: ScissorsIcon
        },
        {
            name: 'Hot Towel Shave',
            description: 'Traditional straight razor shave with hot towel treatment',
            price: '$35',
            icon: SparklesIcon
        },
        {
            name: 'Hair & Beard Combo',
            description: 'Complete grooming package for hair and facial hair',
            price: '$50',
            icon: SparklesIcon
        }
    ];

    return (
        <section id="services" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
                    <p className="text-gray-400 mb-12">Professional grooming services for the modern gentleman</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-black p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                            <service.icon className="h-8 w-8 text-yellow-500 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <p className="text-yellow-500 font-bold text-2xl">{service.price}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/appointment"
                        className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-lg"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;