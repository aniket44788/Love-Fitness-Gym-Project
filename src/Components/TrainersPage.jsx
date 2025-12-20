import React, { useState } from 'react';
import { Menu, X, Dumbbell, Star, ChevronRight, MessageCircle, MapPin, Clock, Award, Target, Heart, Phone, Mail, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';


const TrainersPage = () => {


    return (
        <>

            <section className="py-24 bg-gradient-to-b from-slate-50 to-white px-4">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Personal <span className="text-red-600">Training Plans</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            One-on-one coaching designed to transform your body with expert guidance
                        </p>
                    </div>

                    {/* PLANS */}
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                        {/* 1 MONTH PLAN */}
                        <div className="bg-white border-2 border-slate-200 rounded-2xl p-10 
                      hover:shadow-2xl hover:border-red-300 transition">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                1 Month Personal Training
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Perfect to kick-start your fitness journey
                            </p>

                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-5xl font-black text-red-600">₹3,800</span>
                                <span className="text-gray-500 font-semibold">/ month</span>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                                <li>✔ Weight Loss Training</li>
                                <li>✔ Muscle Building Program</li>
                                <li>✔ Strength Training</li>
                                <li>✔ Personalized Workout Plan</li>
                                <li>✔ Diet & Nutrition Guidance</li>
                                <li>✔ Progress Tracking</li>
                            </ul>

                            <button className="w-full bg-red-600 hover:bg-red-700 text-white 
                           font-bold py-4 rounded-xl transition shadow-lg">
                                Get Started
                            </button>
                        </div>

                        {/* 2 MONTH PLAN – POPULAR */}
                        <div className="relative bg-gradient-to-br from-red-50 to-white 
                      border-2 border-red-500 rounded-2xl p-10 
                      shadow-2xl scale-105">

                            {/* BADGE */}
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 
                         bg-red-600 text-white px-6 py-1 
                         rounded-full text-sm font-bold shadow">
                                MOST POPULAR
                            </span>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                2 Months Personal Training
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Best value for visible & lasting results
                            </p>

                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-5xl font-black text-red-600">₹7,000</span>
                                <span className="text-gray-500 font-semibold">/ 2 months</span>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                                <li>✔ Guaranteed Weight Loss / Muscle Gain</li>
                                <li>✔ Advanced Strength Training</li>
                                <li>✔ Fully Customized Workout Plan</li>
                                <li>✔ Weekly Body Analysis</li>
                                <li>✔ Diet + Supplement Guidance</li>
                                <li>✔ Trainer Support & Motivation</li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 
                           hover:from-red-600 hover:to-red-700 
                           text-white font-bold py-4 rounded-xl 
                           transition shadow-xl">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* TRUST SECTION */}
                    <div className="mt-20 grid md:grid-cols-3 gap-6 text-center">
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Certified Trainers</h4>
                            <p className="text-gray-600 text-sm">
                                Internationally certified professionals
                            </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h4>
                            <p className="text-gray-600 text-sm">
                                400+ transformations completed
                            </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Personal Attention</h4>
                            <p className="text-gray-600 text-sm">
                                1-on-1 coaching & support
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};


export default TrainersPage;