"use client"

import  React from "react"
import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
import { IoIosCall } from "react-icons/io"
import { FaVideo, FaSmile, FaCamera, FaMicrophone, FaPaperPlane } from "react-icons/fa"
import { SlOptionsVertical } from "react-icons/sl"
import { GrAttachment } from "react-icons/gr"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const civicDepartments = [
  {
    id: 1,
    name: "Electricity Department",
    icon: "⚡",
    heads: [
      {
        id: 1,
        name: "Rajesh Kumar",
        position: "Chief Electrical Engineer",
        avatar: "/developer-working.png",
        status: "online",
        lastSeen: "Online",
        department: "Electricity",
      },
      {
        id: 2,
        name: "Priya Sharma",
        position: "Senior Electrical Officer",
        avatar: "/diverse-team-manager.png",
        status: "away",
        lastSeen: "15 min ago",
        department: "Electricity",
      },
      {
        id: 3,
        name: "Amit Patel",
        position: "Grid Maintenance Head",
        avatar: "/diverse-group.png",
        status: "online",
        lastSeen: "Online",
        department: "Electricity",
      },
      {
        id: 4,
        name: "Sunita Rao",
        position: "Power Distribution Manager",
        avatar: "/diverse-designers-brainstorming.png",
        status: "offline",
        lastSeen: "2 hours ago",
        department: "Electricity",
      },
    ],
  },
  {
    id: 2,
    name: "Waste Management Department",
    icon: "🗑️",
    heads: [
      {
        id: 5,
        name: "Vikram Singh",
        position: "Waste Management Director",
        avatar: "/diverse-professional-team.png",
        status: "online",
        lastSeen: "Online",
        department: "Waste Management",
      },
      {
        id: 6,
        name: "Meera Joshi",
        position: "Recycling Coordinator",
        avatar: "/electric-guitar-stage.png",
        status: "online",
        lastSeen: "Online",
        department: "Waste Management",
      },
      {
        id: 7,
        name: "Ravi Gupta",
        position: "Sanitation Supervisor",
        avatar: "/interconnected-tech.png",
        status: "away",
        lastSeen: "30 min ago",
        department: "Waste Management",
      },
      {
        id: 8,
        name: "Kavita Nair",
        position: "Waste Collection Head",
        avatar: "/diverse-city-transport.png",
        status: "offline",
        lastSeen: "1 hour ago",
        department: "Waste Management",
      },
    ],
  },
  {
    id: 3,
    name: "Water Supply Department",
    icon: "💧",
    heads: [
      {
        id: 9,
        name: "Suresh Reddy",
        position: "Water Supply Engineer",
        avatar: "/developer-working.png",
        status: "online",
        lastSeen: "Online",
        department: "Water Supply",
      },
      {
        id: 10,
        name: "Anjali Verma",
        position: "Quality Control Officer",
        avatar: "/diverse-team-manager.png",
        status: "online",
        lastSeen: "Online",
        department: "Water Supply",
      },
      {
        id: 11,
        name: "Manoj Tiwari",
        position: "Pipeline Maintenance Head",
        avatar: "/diverse-group.png",
        status: "away",
        lastSeen: "45 min ago",
        department: "Water Supply",
      },
      {
        id: 12,
        name: "Deepa Menon",
        position: "Water Treatment Manager",
        avatar: "/diverse-designers-brainstorming.png",
        status: "offline",
        lastSeen: "3 hours ago",
        department: "Water Supply",
      },
    ],
  },
  {
    id: 4,
    name: "Road & Transportation",
    icon: "🛣️",
    heads: [
      {
        id: 13,
        name: "Ashok Yadav",
        position: "Road Development Officer",
        avatar: "/diverse-professional-team.png",
        status: "online",
        lastSeen: "Online",
        department: "Road & Transportation",
      },
      {
        id: 14,
        name: "Pooja Agarwal",
        position: "Traffic Management Head",
        avatar: "/electric-guitar-stage.png",
        status: "away",
        lastSeen: "20 min ago",
        department: "Road & Transportation",
      },
      {
        id: 15,
        name: "Ramesh Chandra",
        position: "Public Transport Coordinator",
        avatar: "/interconnected-tech.png",
        status: "online",
        lastSeen: "Online",
        department: "Road & Transportation",
      },
      {
        id: 16,
        name: "Shalini Das",
        position: "Road Safety Inspector",
        avatar: "/diverse-city-transport.png",
        status: "offline",
        lastSeen: "4 hours ago",
        department: "Road & Transportation",
      },
    ],
  },
  {
    id: 5,
    name: "Public Health Department",
    icon: "🏥",
    heads: [
      {
        id: 17,
        name: "Dr. Arun Mishra",
        position: "Chief Medical Officer",
        avatar: "/developer-working.png",
        status: "online",
        lastSeen: "Online",
        department: "Public Health",
      },
      {
        id: 18,
        name: "Dr. Nisha Kapoor",
        position: "Public Health Inspector",
        avatar: "/diverse-team-manager.png",
        status: "online",
        lastSeen: "Online",
        department: "Public Health",
      },
      {
        id: 19,
        name: "Rohit Saxena",
        position: "Health Program Manager",
        avatar: "/diverse-group.png",
        status: "away",
        lastSeen: "1 hour ago",
        department: "Public Health",
      },
      {
        id: 20,
        name: "Geeta Bhatt",
        position: "Community Health Officer",
        avatar: "/diverse-designers-brainstorming.png",
        status: "offline",
        lastSeen: "2 hours ago",
        department: "Public Health",
      },
    ],
  },
  {
    id: 6,
    name: "Building & Planning",
    icon: "🏗️",
    heads: [
      {
        id: 21,
        name: "Kiran Jain",
        position: "City Planning Officer",
        avatar: "/diverse-professional-team.png",
        status: "online",
        lastSeen: "Online",
        department: "Building & Planning",
      },
      {
        id: 22,
        name: "Sachin Malhotra",
        position: "Building Inspector",
        avatar: "/electric-guitar-stage.png",
        status: "away",
        lastSeen: "25 min ago",
        department: "Building & Planning",
      },
      {
        id: 23,
        name: "Rekha Sinha",
        position: "Zoning Coordinator",
        avatar: "/interconnected-tech.png",
        status: "online",
        lastSeen: "Online",
        department: "Building & Planning",
      },
      {
        id: 24,
        name: "Naveen Kumar",
        position: "Construction Permit Head",
        avatar: "/diverse-city-transport.png",
        status: "offline",
        lastSeen: "5 hours ago",
        department: "Building & Planning",
      },
    ],
  },
]

const demoMessages = [
  {
    id: 1,
    text: "Good morning! I received your report about the power outage in Sector 15.",
    sender: "other",
    time: "9:15 AM",
    avatar: "/developer-working.png",
  },
  {
    id: 2,
    text: "Our team is already dispatched to investigate the issue. Can you provide more details about the affected area?",
    sender: "other",
    time: "9:16 AM",
    avatar: "/developer-working.png",
  },
  {
    id: 3,
    text: "Yes, the entire residential block from House No. 150 to 200 is without power since 8 AM.",
    sender: "me",
    time: "9:18 AM",
    avatar: "/abstract-geometric-shapes.png",
  },
  {
    id: 4,
    text: "Thank you for the details. We've identified a transformer fault. Repair work will begin shortly.",
    sender: "other",
    time: "9:19 AM",
    avatar: "/developer-working.png",
  },
  {
    id: 5,
    text: "Estimated restoration time is 2-3 hours. We'll keep you updated on the progress.",
    sender: "other",
    time: "9:20 AM",
    avatar: "/developer-working.png",
  },
  {
    id: 6,
    text: "Perfect! Thank you for the quick response. Please prioritize as there are elderly residents in the area.",
    sender: "me",
    time: "9:25 AM",
    avatar: "/abstract-geometric-shapes.png",
  },
]

const Discussion = () => {
  const [messages, setMessages] = useState(demoMessages)
  const [newMessage, setNewMessage] = useState("")
  const [activeChat, setActiveChat] = useState(civicDepartments[0].heads[0])
  const [searchQuery, setSearchQuery] = useState("")
 const [expandedDepartments, setExpandedDepartments] = useState([1, 2, 3, 4, 5, 6])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        avatar: "/abstract-geometric-shapes.png",
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

 const handleKeyPress = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault()
    handleSendMessage()
  }
}

  const filteredDepartments = civicDepartments
    .map((department) => ({
      ...department,
      heads: department.heads.filter(
        (head) =>
          head.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          head.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
          department.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter(
      (department) => department.heads.length > 0 || department.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )

 const toggleDepartment = (departmentId) => {
  setExpandedDepartments((prev) =>
    prev.includes(departmentId) ? prev.filter((id) => id !== departmentId) : [...prev, departmentId],
  )
}


  return (
    <div className="flex w-full max-w-7xl mx-auto border border-border bg-background h-screen">
      <div className="w-1/3 bg-card p-4 border-r border-border">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-foreground mb-2">Civic Issue Reporting</h1>
          <p className="text-sm text-muted-foreground">Admin Dashboard</p>
        </div>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search departments or officials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          {filteredDepartments.map((department) => (
            <div key={department.id} className="border border-border rounded-lg">
              <div
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-accent transition-colors"
                onClick={() => toggleDepartment(department.id)}
              >
                <span className="text-lg">{department.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{department.name}</h3>
                  <p className="text-xs text-muted-foreground">{department.heads.length} officials</p>
                </div>
                {expandedDepartments.includes(department.id) ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>

              {expandedDepartments.includes(department.id) && (
                <div className="border-t border-border bg-muted/20">
                  {department.heads.map((head) => (
                    <div
                      key={head.id}
                      onClick={() => setActiveChat(head)}
                      className={`flex items-center gap-3 p-3 cursor-pointer transition-colors border-l-2 ${
                        activeChat.id === head.id
                          ? "bg-primary/10 border-l-primary"
                          : "hover:bg-accent border-l-transparent"
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={head.avatar || "/placeholder.svg"} alt={head.name} />
                          <AvatarFallback>
                            {head.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                            head.status === "online"
                              ? "bg-green-500"
                              : head.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground truncate">{head.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{head.position}</p>
                        <p className="text-xs text-muted-foreground">{head.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-grow bg-card flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={activeChat.avatar || "/placeholder.svg"} alt={activeChat.name} />
                <AvatarFallback>
                  {activeChat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                  activeChat.status === "online"
                    ? "bg-green-500"
                    : activeChat.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                }`}
              />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{activeChat.name}</h2>
              <p className="text-sm text-muted-foreground">{activeChat.position}</p>
              <span className="text-xs text-muted-foreground">{activeChat.lastSeen}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
              <IoIosCall size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
              <FaVideo size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SlOptionsVertical size={18} />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-muted/20">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.sender === "me" ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={message.avatar || "/placeholder.svg"} alt="Avatar" />
                <AvatarFallback>{message.sender === "me" ? "You" : "K"}</AvatarFallback>
              </Avatar>
              <div className={`max-w-xs lg:max-w-md ${message.sender === "me" ? "text-right" : ""}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "me"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-card-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center gap-3 bg-background border border-border rounded-lg p-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <GrAttachment size={18} />
            </Button>
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <FaSmile size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <FaCamera size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <FaMicrophone size={18} />
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                <FaPaperPlane size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussion
