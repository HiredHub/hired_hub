import Stepper from "./Stepper";
import Opportunity from "../model/Opportunity";

interface Props {
        opportunities: Opportunity[]
}
function  YourOpportunities( { opportunities }: Props) {
    if (opportunities.length === 0) {
        return (
            <>
            <h2 className="text-md font-bold text-gray-700">Your Opportunities</h2>
            <p className="text-gray-500 text-sm">You have no opportunities.</p>
            </>
        )
    }
    return (
        <>
            <h2 className="text-sm font-bold text-gray-700">Your Opportunities</h2>
            <br />
            {opportunities.map(opportunity => <Stepper opportunity={opportunity} />)}
            <br />      
        </>
    );
}

export default YourOpportunities