import React from "react";
import { useNavigate } from 'react-router-dom';
import TipOfTheDay from "../components/TipOfTheDay";
import { OpportunityStatus} from "../model/Opportunity";
import Opportunity  from "../model/Opportunity";
import YourOpportunities from "../components/YourOpportunities";


const MainPage: React.FC = () => {
    const opportunity = new Opportunity('Opportunity 1', 'Company 1', OpportunityStatus.APPLIED);
    const opportunity2 = new Opportunity('Opportunity 2', 'Company 2', OpportunityStatus.INTERVIEW);
    const opportunity3 = new Opportunity('Opportunity 3', 'Company 3', OpportunityStatus.OFFER);
    const opportunities: Opportunity[] = [opportunity, opportunity2, opportunity3];
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
      <YourOpportunities opportunities={opportunities} />
      <br />
      <button onClick={handleButtonClick} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Opportunity</button>
    </>
  );
};

export default MainPage;
