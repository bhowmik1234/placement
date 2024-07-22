import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyApplications = () => {
  const { user, isAuthorized } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
    }
    const fetchApplications = async () => {
      try {
        const url = user && user.role === "Employer"
          ? `${import.meta.env.VITE_BACKEND_URL}/api/v1/application/employer/getall`
          : `${import.meta.env.VITE_BACKEND_URL}/api/v1/application/jobseeker/getall`;
        const { data } = await axios.get(url, { withCredentials: true });
        setApplications(data.applications);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchApplications();
    
  }, [user, isAuthorized]);

  

  const deleteApplication = async (id) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/application/delete/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setApplications((prev) => prev.filter((application) => application._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="my_applications bg-gray-100 py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-full md:max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 mt-24 text-gray-800">
          {user && user.role === "Student" ? "My Applications" : "Applications From Job Seekers"}
        </h1>
        {applications.length === 0 ? (
          <h4 className="text-gray-600 text-center mt-8">No Applications Found</h4>
        ) : (
          applications.map((element) =>
            user && user.role === "Student" ? (
              <JobSeekerCard
                key={element._id}
                element={element}
                deleteApplication={deleteApplication}
              />
            ) : (
              <EmployerCard
                key={element._id}
                element={element}
              />
            )
          )
        )}
      </div>
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication }) => {
  return (
    <div className="job_seeker_card bg-white border border-gray-200 rounded-lg shadow-md mb-6 overflow-hidden">
  <div className="p-6 flex w-full flex-col md:flex-row">
    <div className="w-full md:w-1/2 md:pr-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{element.name}</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <p className="text-gray-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            {element.email}
          </p>
        </div>
        <div>
          <p className="text-gray-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            {element.phone}
          </p>
        </div>
        <div>
          <p className="text-gray-600 flex items-start">
            <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>{element.address}</span>
          </p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 md:pl-4">
      <div className="bg-gray-100 p-4 rounded-lg h-full">
        <h3 className="font-semibold text-gray-800 mb-2">Cover Letter</h3>
        <p className="text-gray-600">{element.coverLetter}</p>
      </div>
    </div>
  </div>
  <div className="bg-gray-50 px-6 py-4">
    <button
      onClick={() => deleteApplication(element._id)}
      className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 flex items-center justify-center"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      Delete Application
    </button>
  </div>
</div>
  );
};

const EmployerCard = ({ element }) => {
  return (
    <div className="job_seeker_card bg-white border border-gray-200 rounded-lg shadow-md mb-6 overflow-hidden">
  <div className="p-6 w-full flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 md:pr-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{element.name}</h2>
      <div className="mb-6">
        <p className="text-gray-600 flex items-center mb-2">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span className="font-semibold mr-2">Email:</span> {element.email}
        </p>
        <p className="text-gray-600 flex items-center mb-2">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span className="font-semibold mr-2">Phone:</span> {element.phone}
        </p>
        <p className="text-gray-600 flex items-start">
          <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span><span className="font-semibold mr-2">Address:</span> {element.address}</span>
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0">
      <div className="bg-gray-100 w-full p-4 rounded-lg h-full">
        <h3 className="font-semibold text-gray-800 mb-2">Cover Letter</h3>
        <p className="text-gray-600">{element.coverLetter}</p>
      </div>
    </div>
  </div>
</div>
  );
};
