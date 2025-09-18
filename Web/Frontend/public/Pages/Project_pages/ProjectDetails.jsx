import React from "react";
import Navbar from "./Navbar";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ranchi Road Repair Project – Details
        </h1>

        {/* Objectives */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Objectives</h2>
          <p className="text-gray-700">
            The project aims to repair and modernize 25 km of damaged urban and
            rural roads across Ranchi, improving connectivity, ensuring road
            safety, and enhancing water drainage along major routes.
          </p>
        </div>

        {/* Departments Involved */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Departments Involved</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Public Works Department (PWD) – Road construction & maintenance</li>
            <li>Urban Development – City planning & approvals</li>
            <li>Water & Sanitation – Drainage and pipeline alignment</li>
            <li>Traffic Police – Diversion & safety during construction</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Timeline</h2>
          <p className="text-gray-700">
            <strong>Start Date:</strong> June 2025 <br />
            <strong>Expected Completion:</strong> March 2026
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <p className="text-gray-600 mt-2">45% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
