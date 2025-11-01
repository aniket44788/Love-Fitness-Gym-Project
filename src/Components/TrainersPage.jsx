import React, { useState } from 'react';
import { Menu, X, Dumbbell, Star, ChevronRight, MessageCircle, MapPin, Clock, Award, Target, Heart, Phone, Mail, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';


const TrainersPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    // Trainers Data with Real Profile Images
    const trainersData = [
        {
            id: 1,
            name: 'Mike Anderson',
            specialty: 'Strength Training & Muscle Building',
            profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            rating: 5,
            reviews: 128,
            experience: '10+ years',
            clients: 45,
            bio: 'Expert in powerlifting and muscle building. Mike has trained numerous competitive athletes and helped hundreds of clients achieve their strength goals. His personalized approach ensures every client reaches their maximum potential.',
            certifications: ['NASM-CPT', 'Specialization in Powerlifting', 'Nutrition Coaching'],
            languages: ['English', 'Spanish'],
            location: 'Mumbai, Andheri',
            phone: '+91 98765 43210',
            email: 'mike.anderson@lovefitness.com',
            availability: 'Mon-Sat, 6:00 AM - 9:00 PM',
            price: '₹1,500/session',
            specialties: ['Strength Training', 'Muscle Building', 'Powerlifting', 'Nutrition'],
            clients_transformed: 156,
            testimonials: [
                { name: 'Rahul S.', text: 'Mike completely transformed my physique in 6 months. Highly recommended!' },
                { name: 'Priya M.', text: 'Best trainer Ive worked with. Very professional and effective.' }
            ]
        },
        {
            id: 2,
            name: 'Sarah Chen',
            specialty: 'Weight Loss & HIIT Specialist',
            profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            rating: 4.9,
            reviews: 156,
            experience: '8+ years',
            clients: 52,
            bio: 'Specialized in cardio conditioning and fat loss. Sarah combines high-energy workouts with nutritional guidance to deliver rapid results. She is known for her motivating coaching style and ability to push clients through intense workouts.',
            certifications: ['NASM-CPT', 'Nutrition Specialist', 'HIIT Certification'],
            languages: ['English', 'Mandarin'],
            location: 'Mumbai, Bandra',
            phone: '+91 98765 43211',
            email: 'sarah.chen@lovefitness.com',
            availability: 'Tue-Sun, 5:30 AM - 8:30 PM',
            price: '₹1,200/session',
            specialties: ['Weight Loss', 'Cardio Training', 'HIIT', 'Body Composition'],
            clients_transformed: 203,
            testimonials: [
                { name: 'Amit K.', text: 'Lost 15kg in 3 months with Sarahs program. Amazing results!' },
                { name: 'Neha P.', text: 'Sarah makes workouts fun while delivering serious results.' }
            ]
        },
        {
            id: 3,
            name: 'Raj Patel',
            specialty: 'Yoga & Flexibility Coach',
            profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 89,
            experience: '12+ years',
            clients: 38,
            bio: 'Master of yoga and mobility training. Raj helps clients improve flexibility, reduce injuries, and enhance overall fitness performance. His holistic approach combines traditional yoga with modern mobility techniques.',
            certifications: ['RYT 500', 'Sports Medicine Cert', 'Mobility Specialist'],
            languages: ['English', 'Hindi', 'Gujarati'],
            location: 'Mumbai, Dadar',
            phone: '+91 98765 43212',
            email: 'raj.patel@lovefitness.com',
            availability: 'Mon-Fri, 6:00 AM - 7:00 PM, Sat 7:00 AM - 1:00 PM',
            price: '₹900/session',
            specialties: ['Yoga', 'Mobility Training', 'Flexibility', 'Injury Prevention'],
            clients_transformed: 134,
            testimonials: [
                { name: 'Vikram R.', text: 'My mobility improved significantly. Highly professional trainer.' },
                { name: 'Anjali S.', text: 'Best yoga trainer. Very knowledgeable and patient.' }
            ]
        }
    ];


    // Filter trainers based on search
    const filteredTrainers = trainersData.filter(trainer => {
        const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });


    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 text-gray-900">



            {/* Why Choose Section */}
            <section className="py-24 bg-white/50 backdrop-blur-sm px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Why Choose Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Trainers?</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Certified professionals dedicated to your transformation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Award, title: 'Certified Experts', desc: 'All trainers hold internationally recognized certifications' },
                            { icon: Users, title: 'Proven Results', desc: '400+ clients transformed with measurable results' },
                            { icon: Target, title: 'Personalized Plans', desc: 'Custom programs tailored to your specific goals' },
                            { icon: Heart, title: 'Holistic Approach', desc: 'Training, nutrition, and wellness guidance combined' },
                            { icon: Trophy, title: 'Experience', desc: '30+ combined years of professional experience' },
                            { icon: ChevronRight, title: 'Results Driven', desc: 'Focus on achieving your fitness objectives' }
                        ].map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={idx} className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-red-300 transition duration-300 group">
                                    <div className="text-red-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 bg-gradient-to-b from-white/50 to-slate-50 px-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search trainers by name or specialty..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border-2 border-slate-200 text-gray-900 px-6 py-4 rounded-xl focus:outline-none focus:border-red-500 transition placeholder-gray-500 text-lg"
                        />
                        <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* Trainers Grid Section */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white/50 px-4">
                <div className="max-w-7xl mx-auto">
                    {filteredTrainers.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-gray-600 text-xl">No trainers found. Try adjusting your search.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTrainers.map((trainer) => (
                                <div
                                    key={trainer.id}
                                    className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-red-300 transition duration-300 group cursor-pointer"
                                    onClick={() => setSelectedTrainer(trainer)}
                                >
                                    {/* Profile Image */}
                                    <div className="h-64 overflow-hidden bg-gray-200 relative">
                                        <img
                                            src={trainer.profileImage}
                                            alt={trainer.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-1 text-gray-900">{trainer.name}</h3>
                                        <p className="text-red-600 font-bold mb-4">{trainer.specialty}</p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">({trainer.reviews} reviews)</span>
                                        </div>

                                        {/* Quick Info */}
                                        <div className="space-y-2 mb-6 pb-6 border-b border-slate-200">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600 font-medium">Experience</span>
                                                <span className="font-bold text-gray-900">{trainer.experience}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600 font-medium">Clients</span>
                                                <span className="font-bold text-gray-900">{trainer.clients} Active</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600 font-medium">Rate</span>
                                                <span className="text-red-600 font-bold">{trainer.price}</span>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            onClick={() => setSelectedTrainer(trainer)}
                                            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Trainer Detail Modal */}
            {selectedTrainer && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white border-2 border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedTrainer(null)}
                            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 p-2 rounded-full text-white z-10 transition shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Header with Image */}
                        <div className="h-72 overflow-hidden bg-gray-200 relative">
                            <img
                                src={selectedTrainer.profileImage}
                                alt={selectedTrainer.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-4xl font-bold text-white mb-2">{selectedTrainer.name}</h2>
                                <p className="text-red-300 text-xl font-bold">{selectedTrainer.specialty}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-6 pb-6 border-b-2 border-slate-200">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedTrainer.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="text-gray-600 font-semibold">({selectedTrainer.reviews} reviews)</span>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                {/* Left Column - About */}
                                <div className="md:col-span-2">
                                    <h3 className="text-2xl font-bold text-red-600 mb-4">About</h3>
                                    <p className="text-gray-700 mb-8 leading-relaxed">{selectedTrainer.bio}</p>

                                    <h3 className="text-2xl font-bold text-red-600 mb-4">Certifications</h3>
                                    <ul className="space-y-2 mb-8">
                                        {selectedTrainer.certifications.map((cert, i) => (
                                            <li key={i} className="flex items-center text-gray-700 font-semibold">
                                                <Award className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                                                {cert}
                                            </li>
                                        ))}
                                    </ul>

                                    <h3 className="text-2xl font-bold text-red-600 mb-4">Specialties</h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedTrainer.specialties.map((spec, i) => (
                                            <span key={i} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold border border-red-200">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Testimonials */}
                                    <h3 className="text-2xl font-bold text-red-600 mb-4">Client Testimonials</h3>
                                    <div className="space-y-4">
                                        {selectedTrainer.testimonials.map((testimonial, i) => (
                                            <div key={i} className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl hover:border-red-300 transition">
                                                <div className="flex items-center gap-1 mb-3">
                                                    {[...Array(5)].map((_, j) => (
                                                        <Star key={j} className="w-4 h-4 text-yellow-500 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700 mb-2 italic font-medium">"{testimonial.text}"</p>
                                                <p className="text-gray-600 text-sm">— {testimonial.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column - Contact */}
                                <div>
                                    {/* Stats */}
                                    <div className="space-y-4 mb-8">
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6 rounded-xl">
                                            <p className="text-gray-700 text-sm font-bold mb-2">EXPERIENCE</p>
                                            <p className="text-3xl font-bold text-red-600">{selectedTrainer.experience}</p>
                                        </div>
                                        <div className="bg-slate-100 border-2 border-slate-200 p-6 rounded-xl">
                                            <p className="text-gray-700 text-sm font-bold mb-2">TRANSFORMED</p>
                                            <p className="text-3xl font-bold text-gray-900">{selectedTrainer.clients_transformed}+</p>
                                        </div>
                                        <div className="bg-slate-100 border-2 border-slate-200 p-6 rounded-xl">
                                            <p className="text-gray-700 text-sm font-bold mb-2">ACTIVE CLIENTS</p>
                                            <p className="text-3xl font-bold text-gray-900">{selectedTrainer.clients}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6 rounded-xl">
                                            <p className="text-gray-700 text-sm font-bold mb-2">SESSION RATE</p>
                                            <p className="text-3xl font-bold text-red-600">{selectedTrainer.price}</p>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <h3 className="text-xl font-bold text-red-600 mb-4">Contact</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-gray-700 text-sm font-bold">Location</p>
                                                <p className="text-gray-900 font-semibold">{selectedTrainer.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-gray-700 text-sm font-bold">Availability</p>
                                                <p className="text-gray-900 font-semibold">{selectedTrainer.availability}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-gray-700 text-sm font-bold">Phone</p>
                                                <p className="text-gray-900 font-semibold">{selectedTrainer.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-gray-700 text-sm font-bold">Email</p>
                                                <p className="text-gray-900 font-semibold break-all">{selectedTrainer.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    <h3 className="text-lg font-bold text-red-600 mb-3">Languages</h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedTrainer.languages.map((lang, i) => (
                                            <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold border border-red-300">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3">
                                        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-lg">
                                            <MessageCircle className="w-5 h-5" />
                                            Book Session
                                        </button>
                                        <button className="w-full bg-slate-200 hover:bg-slate-300 text-gray-900 font-bold py-3 rounded-lg transition border-2 border-slate-300">
                                            Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-red-500 via-red-600 to-red-700 relative overflow-hidden px-4">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                        Ready to Work With a Trainer?
                    </h2>
                    <p className="text-xl mb-8 text-red-100 font-semibold">
                        Book a session today and start your transformation journey
                    </p>
                    <button className="bg-white hover:bg-slate-100 text-red-600 px-12 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl">
                        🎯 Book Your First Session
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                    <Dumbbell className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-bold">LOVE FITNESS</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Transform your body, transform your life.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link to="/"><a className="hover:text-red-400 transition cursor-pointer">Home</a></Link></li>
                                <li><Link to="/workout"><a className="hover:text-red-400 transition cursor-pointer">Workouts</a></Link></li>
                                <li><Link to="/trainers"><a className="hover:text-red-400 transition cursor-pointer">Trainers</a></Link></li>
                                <li><a href="#" className="hover:text-red-400">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Support</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
                                <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
                                <li><a href="#" className="hover:text-red-400 transition">Privacy</a></li>
                                <li><a href="#" className="hover:text-red-400 transition">Terms</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-white">Contact</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>123 Fitness Street</li>
                                <li>Mumbai, India 400001</li>
                                <li>info@lovefitness.com</li>
                                <li>+91 (555) 123-4567</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2025 Love Fitness. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default TrainersPage;