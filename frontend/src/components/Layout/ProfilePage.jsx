import React from 'react';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-8">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">Profile Page</h1>

                <div className="space-y-8">

                    {/* Personal Information */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>Father's Name:</strong> John Doe</div>
                            <div><strong>Mother's Name:</strong> Jane Doe</div>
                            <div><strong>Middle Name:</strong> Michael</div>
                            <div><strong>Last Name:</strong> Smith</div>
                            <div><strong>Full Name:</strong> John Michael Smith</div>
                            <div><strong>Date of Birth:</strong> 01/01/2000</div>
                            <div><strong>Gender:</strong> Male</div>
                            <div><strong>LGBTQ:</strong> No</div>
                            <div><strong>Physically Disabled:</strong> No</div>
                            <div><strong>Disability Details:</strong> None</div>
                            <div><strong>Nationality:</strong> Indian</div>
                            <div><strong>Foreign Language:</strong> English</div>
                            <div><strong>Foreign Language Proficiency:</strong> Fluent</div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>Student Mobile Number:</strong> +91 1234567890</div>
                            <div><strong>Parent Mobile Number:</strong> +91 0987654321</div>
                            <div><strong>Email:</strong> example@example.com</div>
                            <div><strong>Residential Address:</strong> 123 Main St, City</div>
                            <div><strong>Current Address:</strong> 456 Elm St, City</div>
                            <div><strong>Current Location:</strong> City, Country</div>
                            <div><strong>Permanent Residence City:</strong> City</div>
                            <div><strong>Permanent Residence State:</strong> State</div>
                        </div>
                    </div>

                    {/* Identification Details */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Identification Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>PAN Card Number:</strong> ABCDE1234F</div>
                            <div><strong>Aadhar Card Number:</strong> 1234 5678 9012</div>
                        </div>
                    </div>

                    {/* Educational Background */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Educational Background</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {/* 10th Grade */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">10th Grade</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div><strong>School Name:</strong> ABC High School</div>
                                    <div><strong>Board Name:</strong> State Board</div>
                                    <div><strong>Year of Passing:</strong> 2015</div>
                                    <div><strong>Percentage:</strong> 90%</div>
                                    <div><strong>Year Gap After 10th:</strong> 0</div>
                                </div>
                            </div>

                            {/* 12th Grade */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">12th Grade</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div><strong>School/College Name:</strong> XYZ College</div>
                                    <div><strong>Board Name:</strong> State Board</div>
                                    <div><strong>Year of Passing:</strong> 2017</div>
                                    <div><strong>Percentage:</strong> 85%</div>
                                    <div><strong>Year Gap After 12th:</strong> 0</div>
                                </div>
                            </div>

                            {/* Diploma */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">Diploma</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div><strong>School/College Name:</strong> DEF Institute</div>
                                    <div><strong>Board Name:</strong> Diploma Board</div>
                                    <div><strong>Year of Passing:</strong> 2020</div>
                                    <div><strong>Graduated State:</strong> State</div>
                                    <div><strong>Aggregate Percentage:</strong> 80%</div>
                                    {[1, 2, 3, 4, 5, 6].map(sem => (
                                        <div key={sem}><strong>Sem {sem} Percentage:</strong> 75%</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Current Pursuing Degree */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Current Pursuing Degree</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div><strong>Degree:</strong> B.Tech</div>
                            <div><strong>Year of Admission:</strong> 2020</div>
                            {[1, 2, 3, 4, 5].map(sem => (
                                <div key={sem} className="mt-2">
                                    <strong>Sem {sem} CGPA:</strong> 8.0
                                    <div><strong>Passing Date:</strong> MM/DD/YYYY</div>
                                </div>
                            ))}
                            <div><strong>Aggregate CGPA Till Sem 5:</strong> 8.5</div>
                            <div><strong>Aggregate Percentage Till Sem 5:</strong> 80%</div>
                            <div><strong>Year Drop in UG:</strong> 0</div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Additional Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>Technologies Known:</strong> JavaScript, React</div>
                            <div><strong>Work Experience (Months):</strong> 12</div>
                            <div><strong>Internship Company:</strong> Tech Corp</div>
                            <div><strong>Internship Role:</strong> Software Intern</div>
                            <div><strong>Post-Graduation CGPA:</strong> 8.0</div>
                            <div><strong>Work Experience (Years):</strong> 1</div>
                        </div>
                    </div>

                    {/* KT (Backlog) Details */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">KT (Backlog) Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>Dead KT:</strong> 0</div>
                            <div><strong>Total Dead KT:</strong> 0</div>
                            <div><strong>Live KT:</strong> 0</div>
                            <div><strong>Total Live KT:</strong> 0</div>
                            <div><strong>Total Internal KT:</strong> 0</div>
                            <div><strong>Total External KT:</strong> 0</div>
                            <div><strong>Year of Education Gap:</strong> 0</div>
                        </div>
                    </div>

                    {/* Additional Qualifications */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-300">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Additional Qualifications</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div><strong>Additional Qualification:</strong> None</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
