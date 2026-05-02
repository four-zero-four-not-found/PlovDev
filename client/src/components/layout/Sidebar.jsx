import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Plus,
  MessageSquare,
  User,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navSections = [
    {
      title: 'OVERVIEW',
      items: [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { label: 'My Course', icon: BookOpen, path: '/my-courses' },
        { label: 'Student', icon: Users, path: '/student' },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        { label: '+ Create Course', icon: Plus, path: '/create-course' },
        { label: 'Q & A', icon: MessageSquare, path: '/qa' },
      ],
    },
    {
      title: 'ACCOUNT',
      items: [{ label: 'My Profile', icon: User, path: '/profile' }],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar Container */}
      <aside className="fixed left-0 top-0 h-screen w-56 bg-gray-100 flex flex-col">
        {/* Accent Strip */}
        <div className="absolute right-0 top-0 w-10 h-full bg-rose-200 opacity-60"></div>

        {/* Navigation Sections */}
        <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-8">
          {navSections.map((section, idx) => (
            <div key={idx}>
              {/* Section Title */}
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4 px-2">
                {section.title}
              </h3>

              {/* Navigation Items */}
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const active = isActive(item.path);
                  const Icon = item.icon;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 ${
                          active
                            ? 'bg-amber-300 text-gray-900 font-medium shadow-sm'
                            : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="border-t border-gray-300 p-4">
          <button
            className="w-full flex items-center justify-center gap-2 bg-orange-300 hover:bg-orange-400 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            onClick={() => {
              // Handle logout
              console.log('Logout clicked');
            }}
          >
            <LogOut size={20} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-56 flex-1 overflow-auto">
        {/* Page content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
