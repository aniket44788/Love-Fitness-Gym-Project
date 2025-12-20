import React from 'react';
import { Clock, Flame, Heart } from 'lucide-react'; // Add this import!

function WorkoutPage() {
    return (
        <>
            {/* Weekly Workout Plan Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Your 6-Day <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Workout Split</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A proven Push-Pull-Legs routine designed for muscle growth, strength, and balanced recovery
                        </p>
                    </div>

                    {/* Grid: 1 column mobile, 2 medium, 3 large */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Monday - Push */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://thumbs.dreamstime.com/z/bearded-man-bodybuilder-doing-bench-press-exercise-gym-close-up-226186419.jpg"
                                    alt="Bench Press"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">MONDAY</p>
                                    <h3 className="text-3xl font-black">PUSH DAY</h3>
                                    <p className="text-sm mt-1">Chest • Shoulders • Triceps</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Bench Press</span><span className="text-gray-600">4 × 6-8</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Incline Dumbbell Press</span><span className="text-gray-600">3 × 8-10</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Overhead Press</span><span className="text-gray-600">4 × 6-8</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Lateral Raises</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Tricep Pushdowns</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Skull Crushers</span><span className="text-gray-600">3 × 10-12</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-600" />
                                        <span className="font-semibold">75-90 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">High Intensity</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tuesday - Pull */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/1096/7360/files/Deadlift_Conventional-_End_of_June_Export-111_1024x1024.jpg?v=1723511062"
                                    alt="Deadlift"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">TUESDAY</p>
                                    <h3 className="text-3xl font-black">PULL DAY</h3>
                                    <p className="text-sm mt-1">Back • Biceps • Rear Delts</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Deadlifts</span><span className="text-gray-600">4 × 5-6</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Pull-Ups / Lat Pulldown</span><span className="text-gray-600">4 × 8-10</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Barbell Rows</span><span className="text-gray-600">3 × 8-10</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Face Pulls</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Barbell Curls</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Hammer Curls</span><span className="text-gray-600">3 × 12-15</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-600" />
                                        <span className="font-semibold">80-90 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">High Intensity</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Wednesday - Legs */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://thumbs.dreamstime.com/b/athletic-man-performs-squats-barbell-gym-rear-view-muscular-man-performing-deep-squats-heavy-barbell-422802401.jpg"
                                    alt="Back Squat"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">WEDNESDAY</p>
                                    <h3 className="text-3xl font-black">LEG DAY</h3>
                                    <p className="text-sm mt-1">Quads • Hamstrings • Glutes • Calves</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Barbell Back Squat</span><span className="text-gray-600">4 × 6-8</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Romanian Deadlifts</span><span className="text-gray-600">3 × 8-10</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Leg Press</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Walking Lunges</span><span className="text-gray-600">3 × 12 each leg</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Leg Curls</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Calf Raises</span><span className="text-gray-600">4 × 15-20</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-600" />
                                        <span className="font-semibold">90-100 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">Maximum Effort</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thursday - Push (Volume) */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://superhumanfitness.com/wp-content/uploads/2020/09/Barbell-Overhead-Press.jpg"
                                    alt="Overhead Press"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">THURSDAY</p>
                                    <h3 className="text-3xl font-black">PUSH DAY</h3>
                                    <p className="text-sm mt-1">Volume Focus</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Overhead Press</span><span className="text-gray-600">4 × 6-8</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Dumbbell Bench Press</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Cable Flyes</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Front & Lateral Raises</span><span className="text-gray-600">3 × 12 each</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Close-Grip Bench</span><span className="text-gray-600">3 × 8-10</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Overhead Tricep Ext.</span><span className="text-gray-600">3 × 12-15</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-600" />
                                        <span className="font-semibold">75 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">Moderate-High</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Friday - Pull (Volume) */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://www.majorfitness.com/cdn/shop/articles/lat-pulldown-machine-back-workout_4000254b-51f3-4d4e-ae48-65e06df9f6f6.jpg?v=1724320126"
                                    alt="Lat Pulldown"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">FRIDAY</p>
                                    <h3 className="text-3xl font-black">PULL DAY</h3>
                                    <p className="text-sm mt-1">Volume Focus</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Weighted Pull-Ups</span><span className="text-gray-600">4 × 6-8</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">T-Bar / Dumbbell Rows</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Seated Cable Rows</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Rear Delt Flyes</span><span className="text-gray-600">3 × 15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Preacher Curls</span><span className="text-gray-600">3 × 10-12</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Concentration Curls</span><span className="text-gray-600">3 × 12 each</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-red-600" />
                                        <span className="font-semibold">75 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                        <span className="font-semibold">Moderate-High</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Saturday - Active Recovery */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5750d5129f72662d66448028/1579414638748-QARNYALIZPO8WRZEUE4O/Yoga%2BStretch.jpg"
                                    alt="Recovery & Mobility"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-semibold opacity-80">SATURDAY</p>
                                    <h3 className="text-3xl font-black">ACTIVE RECOVERY</h3>
                                    <p className="text-sm mt-1">Light Legs + Mobility</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex justify-between"><span className="font-semibold">Goblet Squats</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Hip Thrusts</span><span className="text-gray-600">3 × 12-15</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Bulgarian Split Squats</span><span className="text-gray-600">3 × 10 each</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Calf Raises</span><span className="text-gray-600">3 × 20</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Core Circuit</span><span className="text-gray-600">Planks, Leg Raises</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Stretching & Mobility</span><span className="text-gray-600">15-20 min</span></li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-green-600" />
                                        <span className="font-semibold">60 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-green-600" />
                                        <span className="font-semibold">Recovery Focus</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 italic">Sunday: Complete Rest or Light Walk/Yoga</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkoutPage;