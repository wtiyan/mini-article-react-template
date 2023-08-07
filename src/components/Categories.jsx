import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

  const blogs=[
    {
        "id":1,
        'title':'What is Lorem Ipsum?',
        'coverImg':'https://i0.wp.com/hirendave.tech/wp-content/uploads/2022/02/ViteLogo.png',
        'content':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        'category' : ['Category 1'],
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'

    },
    {
        "id":2,
        'title':'Why do we use it?',
        'coverImg':'https://i0.wp.com/hirendave.tech/wp-content/uploads/2022/02/ViteLogo.png',
        'content':`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        'category' : ['Category 1', 'Category 2'],
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    },
    {
        "id":3,
        'title':'Where does it come from?',
        'coverImg':'https://i0.wp.com/hirendave.tech/wp-content/uploads/2022/02/ViteLogo.png',
        'content':`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        'category' : ['Category 2', 'Category 3', 'Category 4'],
        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    },
]

const allCategories = [...new Set(blogs.flatMap(blog => blog.category))]; // Mengambil semua kategori unik dari blogs

const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
const filteredBlogs = blogs.filter(blog => blog.category.includes(selectedCategory));

return (
  <div className='w-full bg-gray-100 py-10'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold mb-8 text-center text-blue-cr'>
        Explore by Category
      </h1>
      <div className='mb-4'>
        <label htmlFor='categorySelect' className='mr-2 font-semibold'>
          Select a Category:
        </label>
        <select
          id='categorySelect'
          className='border rounded px-4 py-2 bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={selectedCategory}
          onChange={event => setSelectedCategory(event.target.value)}
        >
          {allCategories.map(category => (
            <option key={category} value={category}>
                {category}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredBlogs.map(blog => (
          <div key={blog.id} className='bg-white shadow rounded-lg p-4'>
            <h2 className='text-lg font-semibold'>{blog.title}</h2>
            <p className='text-sm text-gray-500'>{blog.category.join(', ')}</p>
            <Link to={`/blog/${blog.id}`} className='block mt-2 text-blue-600 hover:underline'>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Categories;