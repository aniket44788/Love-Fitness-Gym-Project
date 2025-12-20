import React, { useState } from 'react';
import { Dumbbell, Users, Trophy, Target, Clock, Star, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const GymHomePage = () => {

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      {/* Hero Section */}

      <section id="home" className="relative min-h-screen flex items-center pt-20"> {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')] bg-cover bg-center opacity-50"></div>
        </div> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> <div className="grid md:grid-cols-2 gap-12 items-center"> <div> <div className="inline-block bg-white border border-red-600 px-4 py-2 rounded-full mb-6"> <span className="text-red-500 text-sm font-semibold">🔥 LIMITED TIME OFFER</span> </div> <h1 className="text-white md:text-7xl font-bold leading-tight mb-6"> TRANSFORM <br /> YOUR <br /> <span className="text-red-600">BODY</span> </h1> <p className="text-white text-lg mb-8 max-w-xl"> Join the love <strong> fitness community </strong> and unlock your full potential. Expert trainers, state-of-the-art equipment, and personalized programs designed for results. </p> <div className="flex flex-col sm:flex-row gap-4"> <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center"> Start Free Trial <ChevronRight className="ml-2 w-5 h-5" /> </button></div> {/* Stats */} <div className="grid grid-cols-3 gap-8 mt-12"> <div> <h3 className="text-3xl font-bold text-red-600">500+</h3> <p className="text-gray-400 text-sm">Members</p> </div> <div> <h3 className="text-3xl font-bold text-red-600">50+</h3> <p className="text-gray-400 text-sm">Programs</p> </div> <div> <h3 className="text-3xl font-bold text-red-600">40+</h3> <p className="text-gray-400 text-sm">Machines</p>

        </div> </div> </div> </div> </div>
      </section>

      <div className="relative w-full flex justify-center py-10 bg-white-500">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Love <span className="text-red-600">Fitness Gym </span>
        </h2>
      </div>

      <section className="relative w-full flex justify-center py-6 lg:py-12 bg-white">
        {/* COLLAGE CONTAINER */}
        <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto">

          {/* Desktop/Tablet: Side-by-side layout | Mobile: Vertical stack */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[80vh] xl:h-[90vh]">

            {/* LEFT IMAGE – Full height on desktop, full width on mobile */}
            <div
              className="
          w-full lg:w-[40%] 
          h-[50vh] sm:h-[60vh] lg:h-full 
          rounded-3xl overflow-hidden 
          shadow-2xl
          bg-[url('/gym.jpeg')] 
          bg-cover bg-center bg-no-repeat
        "
            />

            {/* RIGHT COLUMN – Stacked on all screens, but side-by-side with left on lg+ */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-8">

              {/* TOP RIGHT IMAGE */}
              <div
                className="
            w-full h-[50vh] sm:h-[60vh] lg:h-1/2 
            rounded-3xl overflow-hidden 
            shadow-2xl
            bg-[url('/gym2.jpeg')] 
            bg-cover bg-center bg-no-repeat
          "
              />

              {/* BOTTOM RIGHT IMAGE */}
              <div
                className="
            w-full h-[50vh] sm:h-[60vh] lg:h-1/2 
            rounded-3xl overflow-hidden 
            shadow-2xl
            bg-[url('/gymcounter.jpeg')] 
            bg-cover bg-center bg-no-repeat
          "
              />
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Membership <span className="text-red-600">Plans</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible pricing for every fitness goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "1 Month",
                price: "999",
                features: ["Gym Access", "Locker Room", "Group Classes", "Mobile App"]
              },
              {
                name: "3 Months",
                price: "2500",
                features: ["Everything in 1 Month", "Personal Trainer (2x/month)", "Nutrition Plan", "Priority Booking"],
                popular: true
              },
              {
                name: "6 Months",
                price: "4500",
                features: ["Everything in 3 Months", "Unlimited PT Sessions", "Spa Access", "VIP Lounge"]
              },
              {
                name: "1 Year",
                price: "7000",
                features: ["Everything in 6 Months", "Meal Prep Service", "Exclusive Events", "Free Merch"]
              }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white border ${plan.popular ? 'border-red-400 scale-105' : 'border-gray-200'} p-8 rounded-2xl relative shadow-sm`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-600"> total</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="w-5 h-5 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-600">Love Fitness?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with premium facilities and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Trainers",
                desc: "Certified professionals dedicated to your success"
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Proven Results",
                desc: "Track record of transforming lives and bodies"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Personal Goals",
                desc: "Customized programs tailored to your objectives"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Access",
                desc: "Train on your schedule, any time day or night"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/50 backdrop-blur border border-gray-200 p-8 rounded-2xl hover:border-red-300 transition group">
                <div className="text-red-600 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Programs</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the perfect program for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                image: "💪",
                desc: "Build muscle and increase power with our comprehensive strength programs",
                duration: "12 Weeks"
              },
              {
                title: "Weight Loss",
                image: "🔥",
                desc: "Shed pounds and get lean with our proven fat-burning protocols",
                duration: "8 Weeks"
              },
              {
                title: "Athletic Performance",
                image: "⚡",
                desc: "Enhance speed, agility, and overall athletic capabilities",
                duration: "16 Weeks"
              }
            ].map((program, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden group hover:border-red-300 transition">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-6xl">
                  {program.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">{program.duration}</span>
                    <button className="text-black hover:text-red-600 transition flex items-center">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-red-600">Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real transformations from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", result: "Lost 30 lbs", rating: 5 },
              { name: "Mike Chen", result: "Gained 15 lbs muscle", rating: 5 },
              { name: "Emma Davis", result: "Ran first marathon", rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Love Fitness completely changed my life. The trainers are amazing and the
                  community is so supportive. Best decision I ever made!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-red-600 text-sm">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join Love Fitness today and get your first week FREE!
          </p>
          <button className="bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-full font-semibold text-lg transition">
            Claim Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-6 h-6 text-red-600" />
                <span className="text-xl font-bold">Love <span className="text-red-600">Fitness</span></span>
              </div>
              <p className="text-gray-600 text-sm">
                Transform your body, transform your life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-red-600">About Us</a></li>
                <li><a href="#" className="hover:text-red-600">Programs</a></li>
                <li><a href="#" className="hover:text-red-600">Schedule</a></li>
                <li><a href="#" className="hover:text-red-600">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-red-600">Contact</a></li>
                <li><a href="#" className="hover:text-red-600">FAQ</a></li>
                <li><a href="#" className="hover:text-red-600">Privacy</a></li>
                <li><a href="#" className="hover:text-red-600">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Love Fitenss Fitness</li>
                <li>Vijaynage , Indore </li>
                {/* <li>info@lovefitness.com</li> */}
                <li>92017 05771</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Love Fitness Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymHomePage;