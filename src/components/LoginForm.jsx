import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value=""
              onChange=""
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value=""
              onChange=""
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-[#202E60] rounded-md hover:bg-[#30448c] hover:text-white">
            Login
          </button>
        </form>
        <div className='py-5 border-t border-gray-300 mt-5'>
          <p class="text-sm text-center text-gray-400">Don't have an account yet? <Link to={`/registration`} class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</Link>.</p>
        </div>
      </div>
    </div>
  )
};

export default LoginForm;
