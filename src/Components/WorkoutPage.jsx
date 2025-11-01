import React, { useState } from 'react';
import { Dumbbell, Users, Trophy, Target, Flame, Zap, Clock, ChevronRight, Play, Apple, Egg, Carrot, Moon, BarChart3, Heart, TrendingUp, Utensils, Scale, Calendar, Activity } from 'lucide-react';

const WorkoutPage = () => {
    const [activeWorkout, setActiveWorkout] = useState('strength');
    const [activeDiet, setActiveDiet] = useState('bulking');

    // Group Activities Data
    const groupActivities = [
        {
            id: 1,
            name: 'Zumba',
            emoji: '💃',
            image: 'https://images.unsplash.com/photo-1540479859555-17afb91d7881?w=400&h=300&fit=crop',
            description: 'Dance your way to fitness with our high-energy Zumba classes. Burn calories, have fun, and meet new friends in this exciting workout.',
            duration: '45 mins',
            intensity: 'High',
            calories: '500-600',
            difficulty: 'Beginner Friendly',
            schedule: 'Mon, Wed, Fri - 6:00 PM',
            instructor: 'Sarah Johnson',
            color: 'from-pink-500 to-red-500'
        },
        {
            id: 2,
            name: 'Yoga',
            emoji: '🧘',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
            description: 'Find your balance and build strength with our yoga classes. Whether you are a beginner or experienced, our sessions are designed to enhance your flexibility and peace of mind.',
            duration: '60 mins',
            intensity: 'Medium',
            calories: '200-300',
            difficulty: 'All Levels',
            schedule: 'Tue, Thu, Sat - 7:00 AM',
            instructor: 'Priya Singh',
            color: 'from-blue-500 to-purple-500'
        },
        {
            id: 3,
            name: 'Powerslam',
            emoji: '💥',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
            description: 'Push your limits with our Powerslam class. A high-intensity training program designed to build muscle and increase endurance, perfect for those who love a challenge.',
            duration: '50 mins',
            intensity: 'Very High',
            calories: '600-700',
            difficulty: 'Intermediate',
            schedule: 'Mon, Wed, Fri - 7:00 PM',
            instructor: 'Mike Chang',
            color: 'from-red-500 to-orange-500'
        },
        {
            id: 4,
            name: 'Bollywood',
            emoji: '🎬',
            image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop',
            description: 'Move to the beats of Bollywood with our dynamic dance classes. This is a fun way to stay fit, learn new moves, and enjoy the vibrant culture of India.',
            duration: '50 mins',
            intensity: 'High',
            calories: '450-550',
            difficulty: 'Beginner Friendly',
            schedule: 'Tue, Thu, Sat - 6:30 PM',
            instructor: 'Ravi Patel',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            id: 5,
            name: 'HIIT Training',
            emoji: '⚡',
            image: 'https://images.unsplash.com/photo-1552258987-868a1e52eddf?w=400&h=300&fit=crop',
            description: 'High-Intensity Interval Training for maximum results in minimum time. Alternating intense bursts of exercise with recovery periods.',
            duration: '30 mins',
            intensity: 'Maximum',
            calories: '400-500',
            difficulty: 'Advanced',
            schedule: 'Mon, Wed, Fri - 5:30 PM',
            instructor: 'Alex Rodriguez',
            color: 'from-green-500 to-blue-500'
        },
        {
            id: 6,
            name: 'Pilates',
            emoji: '🤸',
            image: 'https://images.unsplash.com/photo-1518611505867-d2ea47cd6e9f?w=400&h=300&fit=crop',
            description: 'Build core strength and improve posture with Pilates. Controlled movements focused on building lean muscle and flexibility.',
            duration: '55 mins',
            intensity: 'Medium',
            calories: '250-350',
            difficulty: 'All Levels',
            schedule: 'Tue, Thu - 8:00 AM',
            instructor: 'Emma Williams',
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    // Workout Programs
    const workoutPrograms = {
        strength: [
            { day: 'Monday', focus: 'Chest & Triceps', exercises: ['Bench Press (4x5)', 'Incline Dumbbell Press (3x8)', 'Barbell Rows (4x5)', 'Dips (3x8)', 'Tricep Pushdowns (3x10)'], sets: 18, duration: '90 mins', rest: '60-90 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Tuesday', focus: 'Back & Biceps', exercises: ['Deadlifts (4x3)', 'Weighted Pull-ups (4x5)', 'Barbell Rows (3x8)', 'Barbell Curls (3x8)', 'Face Pulls (3x12)'], sets: 17, duration: '90 mins', rest: '60-90 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Wednesday', focus: 'Legs & Core', exercises: ['Squats (4x5)', 'Leg Press (3x8)', 'Leg Curls (3x10)', 'Calf Raises (3x15)', 'Ab Wheel Rollouts (3x10)'], sets: 16, duration: '100 mins', rest: '60-90 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Thursday', focus: 'Shoulders & Arms', exercises: ['Military Press (4x5)', 'Lateral Raises (3x10)', 'Barbell Curls (3x8)', 'Skull Crushers (3x8)', 'Machine Shoulder Press (3x10)'], sets: 16, duration: '85 mins', rest: '60-90 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Friday', focus: 'Full Body', exercises: ['Bench Press (3x5)', 'Barbell Rows (3x5)', 'Leg Press (3x8)', 'Lateral Raises (3x10)', 'Leg Curls (3x10)'], sets: 15, duration: '75 mins', rest: '45-60 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Saturday', focus: 'Accessory Work', exercises: ['Incline Bench (3x8)', 'Cable Flyes (3x12)', 'Dumbbell Rows (3x10)', 'Machine Leg Press (3x10)', 'Hanging Leg Raises (3x12)'], sets: 15, duration: '70 mins', rest: '45 secs', icon: <Activity className="w-5 h-5 text-red-600" /> },
            { day: 'Sunday', focus: 'Rest & Recovery', exercises: ['Light Stretching', 'Foam Rolling', 'Mobility Work', 'Active Recovery'], sets: 0, duration: '30 mins', rest: 'As needed', icon: <Heart className="w-5 h-5 text-green-600" /> }
        ],
        cardio: [
            { day: 'Monday', focus: 'HIIT Training', exercises: ['30 sec Sprint / 30 sec Walk (12 rounds)', 'Jump Squats (3x10)', 'Burpees (3x10)', 'Mountain Climbers (3x20)', 'Jump Rope (2x100)'], sets: 14, duration: '40 mins', rest: '30 secs', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Tuesday', focus: 'Steady State Cardio', exercises: ['Treadmill Running (20 mins)', 'Incline Walk (10 mins)', 'Elliptical (10 mins)', 'Bike (5 mins)'], sets: 4, duration: '45 mins', rest: 'None', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Wednesday', focus: 'Circuit Training', exercises: ['Jump Squats (20)', 'Push-ups (15)', 'Burpees (10)', 'Mountain Climbers (20)', 'Rest (30 secs)', '- Repeat 5 times'], sets: 5, duration: '35 mins', rest: '30 secs', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Thursday', focus: 'Boxing Cardio', exercises: ['Warm-up Shadowboxing (2 mins)', 'Heavy Bag Rounds (4 x 3 mins)', 'Speed Bag (2 x 2 mins)', 'Jump Rope (3 x 2 mins)', 'Cool-down (2 mins)'], sets: 12, duration: '30 mins', rest: '30 secs', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Friday', focus: 'CrossFit Style', exercises: ['KB Swings (20)', 'Box Jumps (15)', 'Rowing Machine (500m)', 'Push Jerks (10)', '- Repeat 5 rounds'], sets: 5, duration: '30 mins', rest: '45 secs', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Saturday', focus: 'Long Run', exercises: ['Warm-up Jog (5 mins)', 'Steady Run (30-45 mins)', 'Cool-down (5 mins)'], sets: 3, duration: '50 mins', rest: 'None', icon: <Zap className="w-5 h-5 text-blue-600" /> },
            { day: 'Sunday', focus: 'Active Recovery', exercises: ['Light Yoga (20 mins)', 'Stretching (15 mins)', 'Walking (20 mins)'], sets: 3, duration: '55 mins', rest: 'As needed', icon: <Heart className="w-5 h-5 text-green-600" /> }
        ],
        weight_loss: [
            { day: 'Monday', focus: 'Full Body HIIT', exercises: ['Jumping Jacks (30 secs)', 'Burpees (30 secs)', 'Push-ups (30 secs)', 'Squat Jumps (30 secs)', 'Rest (30 secs)', '- Repeat 6 times'], sets: 6, duration: '35 mins', rest: '30 secs', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Tuesday', focus: 'Cardio Endurance', exercises: ['Treadmill Intervals (20 mins)', 'Row Machine (15 mins)', 'Bike (10 mins)', 'Elliptical (5 mins)'], sets: 4, duration: '50 mins', rest: 'None', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Wednesday', focus: 'Strength Circuit', exercises: ['Goblet Squats (15)', 'Push-ups (15)', 'Dumbbell Rows (15)', 'KB Swings (15)', 'Lunge (15 each leg)', '- Repeat 4 times'], sets: 5, duration: '40 mins', rest: '30 secs', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Thursday', focus: 'HIIT Cycling', exercises: ['Bike Sprint (20 secs)', 'Bike Easy (40 secs)', 'Repeat 16 times', 'Cool-down (2 mins)'], sets: 16, duration: '25 mins', rest: '40 secs', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Friday', focus: 'Total Body Burn', exercises: ['Jump Rope (1 min)', 'Jump Squats (20)', 'Push-ups (15)', 'Mountain Climbers (20)', 'Burpees (10)', 'Repeat 5 times'], sets: 5, duration: '30 mins', rest: '45 secs', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Saturday', focus: 'Steady State Run', exercises: ['Warm-up Jog (3 mins)', 'Run at moderate pace (35 mins)', 'Cool-down (2 mins)'], sets: 3, duration: '40 mins', rest: 'None', icon: <Flame className="w-5 h-5 text-orange-600" /> },
            { day: 'Sunday', focus: 'Yoga & Stretching', exercises: ['Power Yoga (30 mins)', 'Stretching (15 mins)'], sets: 2, duration: '45 mins', rest: 'As needed', icon: <Heart className="w-5 h-5 text-green-600" /> }
        ]
    };

    // Diet Programs
    const dietPrograms = {
        bulking: [
            { meal: 'Breakfast', calories: '600-700', macros: 'Protein: 40g, Carbs: 80g, Fat: 25g', foods: ['Oatmeal with protein powder', 'Greek yogurt with berries', '4 egg omelet with veggies', 'Banana'], icon: <Utensils className="w-5 h-5 text-green-600" /> },
            { meal: 'Lunch', calories: '700-800', macros: 'Protein: 50g, Carbs: 100g, Fat: 20g', foods: ['Grilled chicken breast (200g)', 'Brown rice (1 cup)', 'Mixed greens salad', 'Avocado slice'], icon: <Utensils className="w-5 h-5 text-green-600" /> },
            { meal: 'Dinner', calories: '800-900', macros: 'Protein: 60g, Carbs: 90g, Fat: 30g', foods: ['Salmon fillet (250g)', 'Quinoa (1 cup)', 'Steamed broccoli', 'Sweet potato'], icon: <Utensils className="w-5 h-5 text-green-600" /> },
            { meal: 'Snacks', calories: '400-500', macros: 'Protein: 30g, Carbs: 50g, Fat: 15g', foods: ['Protein shake', 'Handful of almonds', 'Apple with peanut butter', 'Cottage cheese'], icon: <Utensils className="w-5 h-5 text-green-600" /> },
            { meal: 'Total Daily', calories: '2500-2900', macros: 'Protein: 180g, Carbs: 320g, Fat: 90g', foods: ['Calorie surplus for muscle gain'], icon: <TrendingUp className="w-5 h-5 text-green-600" /> }
        ],
        cutting: [
            { meal: 'Breakfast', calories: '400-500', macros: 'Protein: 35g, Carbs: 40g, Fat: 15g', foods: ['Egg whites (6)', 'Spinach omelet', 'Oatmeal (1/2 cup)', 'Black coffee'], icon: <Scale className="w-5 h-5 text-red-600" /> },
            { meal: 'Lunch', calories: '500-600', macros: 'Protein: 45g, Carbs: 50g, Fat: 15g', foods: ['Turkey breast (150g)', 'Quinoa (3/4 cup)', 'Large salad with light dressing', 'Cucumber'], icon: <Scale className="w-5 h-5 text-red-600" /> },
            { meal: 'Dinner', calories: '500-600', macros: 'Protein: 50g, Carbs: 40g, Fat: 20g', foods: ['Baked cod (200g)', 'Brown rice (1/2 cup)', 'Asparagus', 'Lemon water'], icon: <Scale className="w-5 h-5 text-red-600" /> },
            { meal: 'Snacks', calories: '200-300', macros: 'Protein: 25g, Carbs: 20g, Fat: 10g', foods: ['Whey protein shake', 'Celery with hummus', 'Green apple'], icon: <Scale className="w-5 h-5 text-red-600" /> },
            { meal: 'Total Daily', calories: '1600-2000', macros: 'Protein: 155g, Carbs: 150g, Fat: 60g', foods: ['Calorie deficit for fat loss'], icon: <TrendingUp className="w-5 h-5 text-red-600" /> }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
       
            {/* Group Activities Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Workouts  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Activities</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Join our exciting group classes and find your favorite way to stay fit
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {groupActivities.map((activity) => (
                            <div key={activity.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-red-300 transition duration-300 group">
                                {/* Activity Header Image */}
                                <div className={`h-48 bg-gradient-to-br ${activity.color} flex items-center justify-center text-7xl relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
                                    <span className="relative z-10 group-hover:scale-110 transition duration-300">{activity.emoji}</span>
                                </div>

                                {/* Activity Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.name}</h3>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-red-600" />
                                            <span className="text-sm text-gray-600 font-semibold">{activity.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Flame className="w-4 h-4 text-orange-500" />
                                            <span className="text-sm text-gray-600 font-semibold">{activity.calories}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Zap className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm text-gray-600 font-semibold">{activity.intensity}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Trophy className="w-4 h-4 text-purple-600" />
                                            <span className="text-sm text-gray-600 font-semibold">{activity.difficulty}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{activity.description}</p>

                                    {/* Details */}
                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Schedule
                                            </span>
                                            <span className="font-semibold text-gray-900">{activity.schedule}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                Instructor
                                            </span>
                                            <span className="font-semibold text-gray-900">{activity.instructor}</span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                                        <Activity className="w-4 h-4" />
                                        Join Now!
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workout Programs Section */}
            <section className="py-24 bg-gray-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Workout <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Programs</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose from scientifically-designed programs tailored to your goals
                        </p>
                    </div>

                    {/* Program Selection */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {[
                            { id: 'strength', name: 'Strength Training', icon: '💪' },
                            { id: 'cardio', name: 'Cardio & Endurance', icon: '🏃' },
                            { id: 'weight_loss', name: 'Weight Loss', icon: '🔥' }
                        ].map((program) => (
                            <button
                                key={program.id}
                                onClick={() => setActiveWorkout(program.id)}
                                className={`px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center gap-2 ${activeWorkout === program.id
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-red-300'
                                    }`}
                            >
                                <span>{program.icon}</span>
                                {program.name}
                            </button>
                        ))}
                    </div>

                    {/* Workout Schedule */}
                    <div className="grid gap-6">
                        {workoutPrograms[activeWorkout].map((workout, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-red-300 transition duration-300">
                                <div className="grid md:grid-cols-6 gap-4 items-start mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        {workout.icon}
                                        <p className="text-gray-600 text-sm font-semibold">Day</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{workout.day}</h3>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Focus Area</p>
                                        <p className="text-lg font-bold text-red-600">{workout.focus}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Duration</p>
                                        <p className="text-lg font-bold text-gray-900">{workout.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Total Sets</p>
                                        <p className="text-lg font-bold text-gray-900">{workout.sets}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Rest Time</p>
                                        <p className="text-lg font-bold text-gray-900">{workout.rest}</p>
                                    </div>
                                </div>

                                {/* Exercises List */}
                                <div>
                                    <p className="text-gray-600 text-sm font-semibold mb-3 flex items-center gap-2">
                                        <Target className="w-4 h-4" />
                                        Exercises
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {workout.exercises.map((exercise, i) => (
                                            <div key={i} className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                                                <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-semibold">{exercise}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diet Plans Section */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Diet <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Plans</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Personalized nutrition strategies to fuel your progress
                        </p>
                    </div>

                    {/* Diet Selection */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        {[
                            { id: 'bulking', name: 'Bulking', icon: '📈' },
                            { id: 'cutting', name: 'Cutting', icon: '📉' }
                        ].map((diet) => (
                            <button
                                key={diet.id}
                                onClick={() => setActiveDiet(diet.id)}
                                className={`px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center gap-2 ${activeDiet === diet.id
                                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-green-300'
                                    }`}
                            >
                                <span>{diet.icon}</span>
                                {diet.name}
                            </button>
                        ))}
                    </div>

                    {/* Diet Schedule */}
                    <div className="grid gap-6">
                        {dietPrograms[activeDiet].map((meal, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-green-300 transition duration-300">
                                <div className="grid md:grid-cols-4 gap-4 items-start mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        {meal.icon}
                                        <h3 className="text-xl font-bold text-gray-900">{meal.meal}</h3>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Calories</p>
                                        <p className="text-lg font-bold text-gray-900">{meal.calories}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Macros</p>
                                        <p className="text-sm text-gray-700">{meal.macros}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">Suggested Foods</p>
                                    </div>
                                </div>

                                {/* Foods List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {meal.foods.map((food, i) => (
                                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-lg">
                                            <Utensils className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-semibold">{food}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nutrition Tips Section */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-100 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-100 rounded-full blur-2xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">
                            Fuel Your <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Gains</span> Right
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Science-backed hacks to supercharge your workouts and sculpt your physique
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: Apple, title: 'Carb Cycling Mastery', desc: 'Alternate high-carb days on leg days for explosive energy, low-carb on rest days to torch fat—unlock peak performance without plateaus.' },
                            { icon: Dumbbell, title: 'Intra-Workout Fuel', desc: 'Sip on BCAAs or electrolytes mid-session to sustain reps and delay fatigue; turn grueling sets into unstoppable flows.' },
                            { icon: Egg, title: 'Anabolic Window Hacks', desc: 'Blend whey with berries post-pump for rapid repair—studies show it boosts muscle synthesis by 25% when timed under 45 mins.' },
                            { icon: Carrot, title: 'Nitric Oxide Boosters', desc: 'Load up on beets and spinach for vascularity and pumps; these nitrate-rich veggies enhance blood flow for heavier lifts.' },
                            { icon: Moon, title: 'Nighttime Recovery Eats', desc: 'Casein slow-digesting protein before bed preserves gains overnight—pair with cherries for natural melatonin to sleep like a beast.' },
                            { icon: BarChart3, title: 'Macro Flexing', desc: 'Ditch rigid diets: adjust fats up during bulks, proteins steady at 2g/kg. Use apps to pivot weekly based on mirror checks and scales.' }
                        ].map((tip, idx) => {
                            const Icon = tip.icon;
                            return (
                                <div key={idx} className="bg-white/80 border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:border-red-400 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <div className="flex items-start space-x-4 relative z-10">
                                        <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                                            <Icon className="w-8 h-8 text-red-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-red-500 via-red-600 to-red-700 relative overflow-hidden px-4">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                        Ready to Transform Your Fitness?
                    </h2>
                    <p className="text-xl mb-8 text-red-100 font-semibold">
                        Join thousands of members achieving their goals with Love Fitness
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-red-600 px-12 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                        <Trophy className="w-5 h-5" />
                        Get Your Personal Plan
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 text-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <Dumbbell className="w-6 h-6 text-red-600" />
                                <span className="text-xl font-bold">LOVE FITNESS</span>
                            </div>
                            <p className="text-gray-600 text-sm">Transform your body, transform your life.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />About</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />Classes</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />FAQ</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />Contact</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><ChevronRight className="w-4 h-4" />Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><Heart className="w-4 h-4" />Instagram</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><Heart className="w-4 h-4" />Facebook</a></li>
                                <li><a href="#" className="hover:text-red-600 transition flex items-center gap-2"><Heart className="w-4 h-4" />Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
                        <p>&copy; 2025 Love Fitness. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WorkoutPage;