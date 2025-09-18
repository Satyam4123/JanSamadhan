import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell } from 'lucide-react';
import Navbar from './Navbar';

// Monthly Income vs Expense for Ranchi Road Repair Project
const monthlyData = [
  { name: 'Jan', income: 12000, expense: 8000 },
  { name: 'Feb', income: 10000, expense: 7000 },
  { name: 'Mar', income: 9000, expense: 9500 },
  { name: 'Apr', income: 11000, expense: 8500 },
  { name: 'May', income: 9500, expense: 10000 },
  { name: 'Jun', income: 11500, expense: 9000 },
  { name: 'Jul', income: 14000, expense: 11000 },
  { name: 'Aug', income: 13000, expense: 12000 },
  { name: 'Sep', income: 12500, expense: 10000 },
  { name: 'Oct', income: 13500, expense: 11500 },
  { name: 'Nov', income: 14500, expense: 12000 },
  { name: 'Dec', income: 15000, expense: 13000 },
];

// Expense breakdown for road repair
const expenseData = [
  { name: 'Raw Materials (Cement, Asphalt)', value: 40 },
  { name: 'Labor & Workforce', value: 25 },
  { name: 'Machinery & Equipment', value: 15 },
  { name: 'Transportation', value: 10 },
  { name: 'Administrative Costs', value: 5 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <Bell size={20} />
    </div>
  </header>
);

const StatCard = ({ label, value, change, color }) => (
  <div className={`bg-${color}-100 p-4 rounded-lg`}>
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-semibold">₹{value}</p>
    <div className="flex items-center">
      <span className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
      </span>
      <ResponsiveContainer width="50%" height={20}>
        <LineChart data={monthlyData.slice(-5)}>
          <Line
            type="monotone"
            dataKey={label === "Total expense" ? "expense" : "income"}
            stroke={change > 0 ? "#10B981" : "#EF4444"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Expense = () => {
  return (
    <div className="flex flex-col bg-white h-screen">
      <Navbar></Navbar>

      <div className="flex flex-1">
        <div className="flex-1 h-full overflow-y-auto">
          <Header />
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Ranchi Road Repair Project</h2>
              <p className="text-sm text-gray-600">Tracking & analysing project expenditure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StatCard label="Total budget allocated" value="50,00,000" change={12.5} color="blue" />
              <StatCard label="Total expense" value="32,40,000" change={-8.3} color="red" />
              <StatCard label="Remaining funds" value="17,60,000" change={15.2} color="green" />
            </div>

            <div className="bg-white p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Monthly Analysis</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                    <span className="text-sm">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                    <span className="text-sm">Expense</span>
                  </div>
                  <select className="bg-gray-100 text-sm p-1 rounded">
                    <option>2023</option>
                    <option>2024</option>
                  </select>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#3B82F6" />
                  <Line type="monotone" dataKey="expense" stroke="#EF4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-lg mb-6 border border-black">
              <h3 className="text-lg font-semibold mb-4">Transaction history</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-600">
                    <th className="pb-2">Transaction</th>
                    <th className="pb-2">Category</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 font-bold">C</span>
                      </div>
                      Cement Purchase
                    </td>
                    <td>Raw Materials</td>
                    <td>₹1,20,000</td>
                    <td>12 Aug, 2024</td>
                    <td className="text-red-600">Debited</td>
                  </tr>
                  <tr>
                    <td className="py-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <span className="text-red-600 font-bold">L</span>
                      </div>
                      Labor Wages
                    </td>
                    <td>Workforce</td>
                    <td>₹80,000</td>
                    <td>18 Aug, 2024</td>
                    <td className="text-red-600">Debited</td>
                  </tr>
                  <tr>
                    <td className="py-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 font-bold">T</span>
                      </div>
                      Govt Grant
                    </td>
                    <td>Funding</td>
                    <td>₹2,00,000</td>
                    <td>20 Aug, 2024</td>
                    <td className="text-green-600">Credited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
        <div className="w-64 bg-white-100 h-64 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">My Department</h3>
            <button className="text-blue-500">+ Add Resources</button>
          </div>
          <div className="bg-black text-white p-4 rounded-lg mb-6 flex-1">
            <p className="text-sm mb-2">Roads & Transport</p>
            <p className="text-lg mb-2">Investment</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">₹4,23,007</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Saving plan</h3>
          <div className="space-y-4 mb-6 flex-1">
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="mr-2">🛣️</span>
                  <p>Road Resurfacing</p>
                </div>
                <button>•••</button>
              </div>
              <p className="text-sm text-gray-600 mb-1">Target: ₹20,00,000</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Saving: ₹9,00,000</p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="mr-2">🚧</span>
                  <p>Bridge Repair</p>
                </div>
                <button>•••</button>
              </div>
              <p className="text-sm text-gray-600 mb-1">Target: ₹15,00,000</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Saving: ₹9,50,000</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <h3 className="text-lg font-semibold my-4">Quick Audit</h3>
          <div className="flex space-x-2">
            {['D', 'O', 'N', 'E'].map((initial, index) => (
              <div key={index} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                {initial}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
