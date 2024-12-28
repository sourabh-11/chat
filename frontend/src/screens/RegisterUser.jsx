// Importing necessary modules

import { Link } from 'react-router-dom';

const RegisterUser = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
             
            />
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
           have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
