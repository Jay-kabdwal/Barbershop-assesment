import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-gray-400">Get in touch with us for appointments or inquiries</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <MapPinIcon className="h-6 w-6 text-yellow-500" />
                            <div>
                                <h3 className="text-white font-semibold">Location</h3>
                                <p className="text-gray-400">123 Main St, Denton, TX 76201</p>
                                <a
                                    href="https://maps.google.com/?q=123+Main+St,+Denton,+TX+76201"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <PhoneIcon className="h-6 w-6 text-yellow-500" />
                            <div>
                                <h3 className="text-white font-semibold">Phone</h3>
                                <a
                                    href="tel:+19406129127"
                                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                                >
                                    +1 940-612-9127
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <EnvelopeIcon className="h-6 w-6 text-yellow-500" />
                            <div>
                                <h3 className="text-white font-semibold">Email</h3>
                                <a
                                    href="mailto:info@pmcbarbershop.com"
                                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                                >
                                    info@pmcbarbershop.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-white mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;