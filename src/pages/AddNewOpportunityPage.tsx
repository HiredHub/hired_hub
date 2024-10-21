import React from "react";
import { useNavigate } from 'react-router-dom';
import NewOpportunityForm from "../components/NewOpportunity";
const AddNewOpportunityPage:React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
      };

    return (
      <>
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-700">Add Opportunity</h1>
        </div>
        <NewOpportunityForm />
        <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleButtonClick}>Cancel</button>
        
    </>
      
    )
  }
  
  export default AddNewOpportunityPage