import { ShieldCheckIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const About = () => {
    const values = [
        {
            icon: ShieldCheckIcon,
            title: 'Quality Service',
            description: 'We pride ourselves on delivering exceptional grooming services with attention to detail.'
        },
        {
            icon: UserGroupIcon,
            title: 'Expert Barbers',
            description: 'Our team of skilled professionals brings years of experience and continuous training.'
        },
        {
            icon: SparklesIcon,
            title: 'Modern Techniques',
            description: 'We combine traditional barbering with contemporary styles and techniques.'
        }
    ];

    return (
        <section id="about" className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        At PMC Barbershop, we're dedicated to providing premium grooming services that help you look and feel your best.
                        Our commitment to excellence and customer satisfaction has made us a trusted name in Denton.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                            <value.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-6">
                        Experience the difference at PMC Barbershop, where classic craftsmanship meets modern style.
                    </p>
                    <Link
                        to="/appointment"
                        className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-lg"
                    >
                        Book Your Visit
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;