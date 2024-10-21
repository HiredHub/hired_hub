function Stepper() {
  return (
    <>
      <h6 className="text-sm font-medium text-gray-900 dark:text-white text-left">
        Java Developer - Google
      </h6>
      <ol className="flex items-center w-full">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"></span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
        </li>
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
        </li>
      </ol>
      <ol className="flex items-center w-full">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 ">
          <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 text-justify">
            Applied
          </h4>
        </li>
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 ">
          <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 text-justify">
            Interview
          </h4>
        </li>
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 ">
          <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 text-justify">
            Offer
          </h4>
        </li>
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 ">
          <h4 className="text-sm font-medium text-blue-600 dark:text-blue-500 text-justify">
            Hired
          </h4>
        </li>
      </ol>
    </>
  );
}

export default Stepper;
