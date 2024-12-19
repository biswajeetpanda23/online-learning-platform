import { Link } from 'react-router-dom';

const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
    { id: 3, title: 'Tailwind CSS Mastery', description: 'Master Tailwind for stunning UI.' },
    { id: 4, title: 'Python', description: 'Core and Advance.' },
    { id: 5, title: 'Java', description: 'Deep dive into Java.' },
    { id: 6, title: 'Django', description: 'Framework of python.' },
    { id: 7, title: 'Data analysis', description: 'Numpy & Pandas'},
    { id: 8, title: 'PHP', description: 'Deep dive into Php.' },
    { id: 9, title: 'MySQL', description: 'explore the database' },
    { id: 10, title: 'MongoDB', description: 'Deep dive into mongoDB.' },
  ];
  
  function Courses() {
    return (
      <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link to={`/enroll/${course.id}`}>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition">
              Enroll Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    
    );
  }
  
  export default Courses;
  