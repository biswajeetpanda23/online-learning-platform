import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">
      <Link to="/" className="hover:text-gray-200 transition">SyntaxSchool</Link>
    </h1>
    <ul className="flex gap-6 text-lg">
      <li>
        <Link to="/" className="hover:text-gray-200 transition">Home</Link>
      </li>
      <li>
        <Link to="/courses" className="hover:text-gray-200 transition">Courses</Link>
      </li>
      <li>
        <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
      </li>
      <li>
        <Link to="/contactus" className="hover:text-gray-200 transition">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>


  );
}

export default Navbar;
