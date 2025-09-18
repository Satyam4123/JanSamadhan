

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Briefcase, CheckSquare, Users, Clock } from 'lucide-react';
import Navbar from './Navbar';

const ProjectUpdateForm = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('Last 30 days');

  // Updated summary stats for Ranchi Road Repair Project
  const summaryData = [
    { name: 'Phase', value: 1, total: 3, icon: Briefcase, color: '#10B981', change: 5 },
    { name: 'Tasks', value: 120, total: 200, icon: CheckSquare, color: '#EF4444', change: 12 },
    { name: 'Resources', value: 70, total: 100, icon: Users, color: '#3B82F6', change: -4 },
    { name: 'Time Spent', value: 90, total: 365, icon: Clock, color: '#F59E0B', change: -2 },
  ];

  // Updated departments/sections for Ranchi Road Repair
  const projectData = [
    { name: 'Road & Transport Dept.', status: 'On Track', progress: 65 },
    { name: 'Municipal Engineering', status: 'Completed', progress: 100 },
    { name: 'Public Safety & Utilities', status: 'Delayed', progress: 40 },
    { name: 'Budget & Procurement', status: 'At Risk', progress: 25 },
  ];

  // Updated milestones for Ranchi Road Repair
  const milestoneData = [
    { name: 'Survey & Planning', status: 'Completed', progress: 100 },
    { name: 'Material Procurement', status: 'On Track', progress: 70 },
    { name: 'Road Excavation', status: 'Delayed', progress: 45 },
    { name: 'Drainage Setup', status: 'At Risk', progress: 30 },
  ];

  const overallProgress = 55;
  const progressBreakdown = [
    { name: 'Completed', value: 60, color: '#10B981' },
    { name: 'In Progress', value: 30, color: '#3B82F6' },
    { name: 'Delayed', value: 10, color: '#F59E0B' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setIsUpdateModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full md:w-auto m-8 font-medium"
        >
          Update Info
        </button>
        {isUpdateModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Update Project Info – Ranchi Road Repair Project
      </h2>

      <form className="space-y-8">
        {/* Key stats */}
        <div className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phase</label>
            <div className="flex space-x-2">
              <input
                type="text"
                defaultValue="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                defaultValue="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Tasks</label>
            <div className="flex space-x-2">
              <input
                type="text"
                defaultValue="120"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                defaultValue="200"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Resources</label>
            <div className="flex space-x-2">
              <input
                type="text"
                defaultValue="85"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                defaultValue="100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Time Spent (months)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                defaultValue="10"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                defaultValue="18"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Road Construction', 'Public Works', 'Traffic Management', 'Budget Oversight'].map(
            (section, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{section}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <select
                      defaultValue={i === 0 ? "On Track" : i === 1 ? "Delayed" : "Completed"}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Completed">Completed</option>
                      <option value="On Track">On Track</option>
                      <option value="Delayed">Delayed</option>
                      <option value="At Risk">At Risk</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Progress (%)</label>
                    <input type="range" min="0" max="100" defaultValue={i === 0 ? 70 : 100} className="w-full" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Phases */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Survey & Planning', 'Design Phase', 'Road Work Execution', 'Environmental Clearance'].map(
            (section, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{section}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <select
                      defaultValue={i === 2 ? "On Track" : "Completed"}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Completed">Completed</option>
                      <option value="On Track">On Track</option>
                      <option value="Delayed">Delayed</option>
                      <option value="At Risk">At Risk</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Progress (%)</label>
                    <input type="range" min="0" max="100" defaultValue={i === 2 ? 60 : 100} className="w-full" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Completion stats */}
        <div className="grid grid-cols-3 gap-6">
          <input
            type="text"
            defaultValue="80 Completed"
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            defaultValue="30 In Progress"
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            defaultValue="10 Delayed"
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            onClick={() => setIsUpdateModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        {/* Header with time filter */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Ranchi Road Repair Project</h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-3 py-2"
          >
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Last 90 days</option>
          </select>
        </header>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {summaryData.map((item) => (
            <div key={item.name} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{item.name}</span>
                <item.icon className="text-gray-400" size={20} />
              </div>
              <div className="flex items-end">
                <span className="text-2xl font-bold">{item.value}</span>
                <span className="text-sm text-gray-500 ml-1">/ {item.total}</span>
              </div>
              <div className={`text-sm ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change > 0 ? '▲' : '▼'} {Math.abs(item.change)}% from last month
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary & Overall Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Department Progress</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-gray-500">
                    <th className="pb-2">Department</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project) => (
                    <tr key={project.name} className="border-t">
                      <td className="py-2">{project.name}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
            <div className="flex items-center justify-between">
              <div>
                {progressBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm">
                      {item.value}% {item.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">{overallProgress}%</div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>

              <PieChart width={180} height={180}>
                <Pie
                  data={progressBreakdown}
                  cx={80}
                  cy={80}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {progressBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Milestone Progress</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="pb-2">Milestone</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {milestoneData.map((milestone) => (
                  <tr key={milestone.name} className="border-t">
                    <td className="py-2">{milestone.name}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </td>
                    <td className="py-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};




const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'On Track': return 'bg-blue-100 text-blue-800';
    case 'Delayed': return 'bg-yellow-100 text-yellow-800';
    case 'At Risk': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default ProjectUpdateForm;
