import React, { useState } from 'react';

const LoginForm = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium">
              Email or Username
            </label>
            <input type="text" id="identifier" name="identifier" className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-400" required />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Login
        </button>
        </form>

      </div>
    </div>
  )
};

export default LoginForm;
