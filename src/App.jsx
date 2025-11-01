import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GymHomePage from './Components/GymHomePage';
import WorkoutPage from './Components/WorkOutpage';
import Navbar from './Components/Navbar';
import TrainersPage from './Components/TrainersPage';

function App() {
  return (
    <>
      {/* ✅ Navbar should be outside Routes so it appears on all pages */}
      <Navbar />

      <Routes>
        <Route path='/' element={<GymHomePage />} />
        <Route path='/workout' element={<WorkoutPage />} />
        <Route path='/trainer' element={<TrainersPage />} />
      </Routes>
    </>
  );
}

export default App;
