import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddNewOpportunityPage from "./pages/AddNewOpportunityPage";
import React from "react";
import AddNewInterviewPage from "./pages/AddNewInterviewPage";
import HiredPage from "./pages/HiredPage";
import OfferStagePage from "./pages/OfferStagePage";

const Main: React.FC = () => <MainPage />;
const AddNewOpportunity: React.FC = () => <AddNewOpportunityPage />;
const AddNewInterview: React.FC = () => <AddNewInterviewPage />;
const Hired: React.FC = () => <HiredPage />;
const OfferStage: React.FC = () => <OfferStagePage />;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-new-opportunity" element={<AddNewOpportunity />} />
        <Route path="/add-new-interview" element={<AddNewInterview />} />
        <Route path="/hired" element={<Hired />} />
        <Route path="/offer-stage" element={<OfferStage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
export default App;
