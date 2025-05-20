import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-yellow-500 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-black mb-4">Ready for a Fresh Cut?</h2>
                <p className="text-black text-xl mb-8 max-w-2xl mx-auto">
                    Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to
                    give you a clean, precise cut and a relaxing barbershop experience.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/appointment"
                        className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
                    >
                        Book an Appointment
                    </Link>
                    <Link
                        to="/services"
                        className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors text-lg"
                    >
                        View Our Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;