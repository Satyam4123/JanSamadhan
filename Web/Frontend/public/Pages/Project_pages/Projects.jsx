import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Menu, X } from "lucide-react";
import bannerImage from "/Images/jharkhand_banner.png";

// ================= Sidebar =================
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white p-4 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        {/* Branding */}
        <div className="flex items-center space-x-2 mb-6">
          <img
            src="/Images/jharkhand_logo.png"
            alt="Jharkhand Logo"
            className="h-12 w-12 object-contain bg-white rounded-full p-1"
          />
          <h2 className="text-lg font-bold">Jharkhand State Portal</h2>
        </div>

        {/* Close button (mobile) */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="mt-4 space-y-2">
          <button
            onClick={() => handleNavigation("/Dashboard")}
            className="block py-2 px-4 rounded text-left w-full hover:bg-green-700 transition"
          >
            &lt; Go Back
          </button>
          {[
            { name: "My Profile", path: "/MyProfile" },
            { name: "Task Management", path: "/TaskManager" },
            { name: "Disaster Management", path: "/DisasterManagement" },
            { name: "Jharkhand Complaint Projects", path: "/projects" },
            { name: "Meeting Scheduling", path: "/Meeting" },
            { name: "Notifications", path: "/Notifications" },
            { name: "Seminar/Workshops", path: "/Seminar" },
            { name: "Discussions", path: "/Discussion" },
            { name: "GIS", path: "/GIS" },
            { name: "Geotagging", path: "/Geotagging" },
            { name: "Inventory", path: "/Inventory" },
            { name: "Templates", path: "/Templates" },
            { name: "Staff", path: "/Staff" },
            { name: "Complaints", path: "/Complaints" },
            { name: "Office Budget", path: "/OfficeBudget" },
          ].map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleNavigation(path)}
              className="block py-2 px-4 rounded text-left w-full hover:bg-green-700 transition"
            >
              {name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile header */}
      <div className="flex-1">
        <div className="md:hidden p-4 bg-green-900 text-white flex justify-between items-center">
          <h1 className="text-lg font-semibold">Jharkhand Portal</h1>
          <button onClick={toggleSidebar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </div>
  );
};

// ================= Complaint List =================
const ComplaintList = () => {
  const complaints = [
    {
      id: "C301",
      project: "Ranchi Road Repair",
      issue: "Work stalled due to rains",
      status: "In Progress",
      updated: "2025-09-14",
    },
    {
      id: "C302",
      project: "Dhanbad Water Supply",
      issue: "Pipeline leakage",
      status: "Resolved",
      updated: "2025-09-12",
    },
    {
      id: "C303",
      project: "Rural School Infra",
      issue: "Classrooms incomplete",
      status: "Pending",
      updated: "2025-09-10",
    },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-left border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Complaint ID</th>
            <th className="p-2">Project</th>
            <th className="p-2">Issue</th>
            <th className="p-2">Status</th>
            <th className="p-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{c.id}</td>
              <td className="p-2">{c.project}</td>
              <td className="p-2">{c.issue}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    c.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : c.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="p-2">{c.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ================= Project List =================
const ProjectList = () => {
  const navigate = useNavigate();

  const projects = [
    { id: "1", name: "Ranchi Road Repair Project", progress: 75 },
    { id: "2", name: "Dhanbad Drinking Water Improvement", progress: 50 },
    { id: "3", name: "Jharkhand Rural School Infrastructure", progress: 62 },
    { id: "4", name: "Jamshedpur Streetlight Maintenance", progress: 40 },
  ];

  const handleViewProject = () => {
    // ✅ Use the same navigation as reference code
    navigate("/Expense");
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {projects.map((p) => (
        <div
          key={p.id}
          onClick={handleViewProject}
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex justify-between mb-2">
            <span className="font-semibold">
              {p.id} - {p.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleViewProject();
              }}
              className="text-sm bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
            >
              View Project
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${p.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{p.progress}% Complete</span>
        </div>
      ))}
    </div>
  );
};


// ================= Main Projects Page =================
const Projects = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("complaints");

  const handleCreateProjectClick = () => {
    navigate("/CreateProjectForm");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <img
          src={bannerImage}
          alt="Jharkhand Banner"
          className="w-full max-h-64 object-contain mb-4 rounded-lg bg-white"
        />

        <div className="bg-white rounded-lg shadow p-6">
          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-4">
            <button
              onClick={() => setTab("complaints")}
              className={`pb-2 ${
                tab === "complaints"
                  ? "border-b-2 border-green-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Complaint Updates
            </button>
            <button
              onClick={() => setTab("projects")}
              className={`pb-2 ${
                tab === "projects"
                  ? "border-b-2 border-green-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Ongoing Projects
            </button>
          </div>

          {/* Tab content */}
          {tab === "complaints" ? (
            <ComplaintList />
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Ongoing Projects</h2>
                <button
                  className="px-3 py-1 bg-green-700 text-white rounded flex items-center hover:bg-green-800"
                  onClick={handleCreateProjectClick}
                >
                  Create Project
                </button>
              </div>
              <ProjectList />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
