import React from "react";
import { useNavigate } from 'react-router-dom';
import Stepper from "../components/Stepper";
import TipOfTheDay from "../components/TipOfTheDay";


const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/add-new-opportunity');
      };
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-700">HiredHub</h1>
      </div>

      <TipOfTheDay />
      <br />
      <Stepper />
      <br />
      <button onClick={handleButtonClick} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Opportunity</button>
    </>
  );
};

export default MainPage;
