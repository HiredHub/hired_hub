function NewOpportunityForm() {
    return (
        <>
            <form id="add-application-form">
        <h2>Add New Application</h2>
        <label htmlFor="position" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Position:</label>
        <input type="text" id="position" name="position" required className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>
        
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Company:</label>
        <input type="text" id="company" name="company" required className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>
        
        <label htmlFor="company-url" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Company URL:</label>
        <input type="url" id="company-url" name="company-url" required className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>
        
        <label htmlFor="application-type" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Application Type:</label>

        <select id="application-type" name="application-type" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled selected>Select Application Type</option>
            <option value="email">Online</option>
            <option value="linkedin">LinkedIn</option>
            <option value="in-person">In-Person</option>
            <option value="other">Other</option>
        </select>

        <label htmlFor="application-date" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Application Date:</label>
        <input type="date" id="application-date" name="application-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        
        <label htmlFor="notes" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Notes:</label>
        <textarea id="notes" name="notes" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        
        <label htmlFor="contact-name" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Contact Name:</label>
        <input type="text" id="contact-name" name="contact-name" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>
        
        <label htmlFor="contact-email" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Contact Email:</label>
        <input type="email" id="contact-email" name="contact-email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <br />
        
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Application</button>
    </form>
        </>
    );
}

export default NewOpportunityForm