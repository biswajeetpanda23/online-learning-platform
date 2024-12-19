import { useParams } from 'react-router-dom';

// Define your courses data here or import it from another file
const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.', link: 'https://react.com' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.', link: 'https://javascript.com' },
  { id: 3, title: 'Tailwind CSS Mastery', description: 'Master Tailwind for stunning UI.', link: 'https://tailwindcss.com' },
  { id: 4, title: 'Python', description: 'Core and Advance.', link: 'https://python.org' },
  { id: 5, title: 'Java', description: 'Deep dive into Java.', link: 'https://java.com' },
  { id: 6, title: 'Django', description: 'Framework of python.', link: 'https://www.djangoproject.com/' },
  { id: 7, title: 'Data analysis', description: 'Numpy & Pandas', link: 'https://numpy.org' },
  { id: 8, title: 'PHP', description: 'Deep dive into Php.', link: 'https://www.php.net' },
  { id: 9, title: 'MySQL', description: 'explore the database', link: 'https://www.mysql.com' },
  { id: 10, title: 'MongoDB', description: 'Deep dive into mongoDB.', link: 'https://www.mongodb.com' },
];

function Enroll() {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Enroll in {course?.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{course?.description}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition">
        Confirm Enrollment
      </button>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">Want to know more about the course topic? Visit the official page:</p>
        <a 
          href={course?.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:text-blue-400"
        >
          Visit {course?.title} page
        </a>
      </div>
    </div>
  );
}

export default Enroll;
