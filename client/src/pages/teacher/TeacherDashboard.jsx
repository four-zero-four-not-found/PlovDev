import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import NavbarLogin from '../../components/layout/NavbarLogin';
import {
  Users,
  BookOpen,
  DollarSign,
  Star,
  MoreVertical,
  ChevronUp,
} from 'lucide-react';

const TeacherDashboard = () => {
  // Stat Cards Data
  const stats = [
    {
      label: 'Total Student',
      value: '1100',
      subtitle: '↑ 8 Students',
      icon: Users,
      color: 'text-blue-400',
    },
    {
      label: 'Total Courses',
      value: '8',
      subtitle: '2 Pending',
      subtitleColor: 'text-amber-500',
      icon: BookOpen,
      color: 'text-purple-400',
    },
    {
      label: 'Total Revenue',
      value: '$2,022.99',
      subtitle: '↑ 12% Last month',
      subtitleColor: 'text-green-500',
      icon: DollarSign,
      color: 'text-green-400',
    },
    {
      label: 'Rating',
      value: '4.5',
      subtitle: '↑ 0.1 Average Rating',
      icon: Star,
      color: 'text-yellow-400',
      hasRating: true,
    },
  ];

  // Course Table Data
  const courses = [
    {
      id: 1,
      title: 'Complete Python Bootcamp: Zero to Hero',
      lessons: 12,
      status: 'Published',
      students: 120,
      revenue: '$1200',
      rating: '4.8',
    },
    {
      id: 2,
      title: 'Complete Python Bootcamp: Zero to Hero',
      lessons: 12,
      status: 'Published',
      students: 120,
      revenue: '$1200',
      rating: '4.8',
    },
    {
      id: 3,
      title: 'Complete Python Bootcamp: Zero to Hero',
      lessons: 12,
      status: 'Pending Review',
      students: 120,
      revenue: '$1200',
      rating: '4.8',
    },
    {
      id: 4,
      title: 'Complete Python Bootcamp: Zero to Hero',
      lessons: 12,
      status: 'Pending Review',
      students: 120,
      revenue: '$1200',
      rating: '4.8',
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <NavbarLogin />
      </nav>

      {/* Main Container */}
      <div className="flex flex-1 mt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="ml-56 flex-1 overflow-auto bg-gray-50">
          <div className="p-8">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Teacher Dashboard
            </h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            stat.subtitleColor || 'text-gray-500'
                          }`}
                        >
                          {stat.subtitle}
                        </p>
                      </div>
                      <Icon
                        size={32}
                        className="text-gray-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    {stat.hasRating && (
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < 4 ? 'fill-yellow-400 text-yellow-400' : ''
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Financial Summary Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Lifetime Earnings
                  </p>
                  <p className="text-4xl font-bold text-gray-900">
                    $12,450.00
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Next Expected Payout
                  </p>
                  <p className="text-4xl font-bold text-gray-900">$450.00</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Processing on May 25th
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="#"
                      className="text-amber-500 hover:text-amber-600 text-sm font-medium"
                    >
                      View Payment History
                    </a>
                    <a
                      href="#"
                      className="text-amber-500 hover:text-amber-600 text-sm font-medium"
                    >
                      Edit Payment Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* My Courses Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">My Course</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Course
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Student
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Revenue
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Rating
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {courses.map((course) => (
                      <tr
                        key={course.id}
                        className="hover:bg-gray-50 transition"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {course.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {course.lessons} Lessons
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              course.status === 'Published'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {course.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">
                            {course.students}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-gray-900">
                            {course.revenue}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-900">
                              {course.rating}
                            </span>
                            <Star
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-gray-500 hover:text-gray-700">
                            <MoreVertical size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default TeacherDashboard;
