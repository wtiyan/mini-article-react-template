import React from 'react'
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const Blogs = () => {

    const blogs=[
        {
            "id":1,
            'title':'What is Lorem Ipsum?',
            'coverImg':'https://i0.wp.com/hirendave.tech/wp-content/uploads/2022/02/ViteLogo.png',
            'content':`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            'category' : ['category 1'],
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
    
        },
        {
            "id":2,
            'title':'Why do we use it?',
            'coverImg':'https://i0.wp.com/hirendave.tech/wp-content/uploads/2022/02/ViteLogo.png',
            'content':`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
            'category' : ['category 1', 'category 2'],
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
            'category' : ['category 2', 'category 3', 'category 4'],
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
    ]

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                {blogs.map((blogsmap)=>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <Link to={`/blog/${blogsmap.id}`}>
                            <img className='h-56 w-full object-cover' src={blogsmap.coverImg} />
                        </Link>
                        <div className='p-8'>
                        <Link to={`/blog/${blogsmap.id}`}>
                            <h3 className='font-bold text-2xl my-1'>{blogsmap.title}</h3>
                        </Link>
                        <div className='flex space-x-2 mt-2'>
                            {blogsmap.category.map((category, index) => (
                            <span
                                key={index}
                                className='px-2 py-1 text-sm font-medium bg-[#1A9FDA] text-gray-800 rounded'
                            >
                                {category}
                            </span>
                            ))}
                        </div>
                        <ReactMarkdown className='mt-2 text-gray-600 text-xl line-break'>{`${blogsmap.content.substring(0, 150)}...`}</ReactMarkdown>
                            <Link to={`/blog/${blogsmap.id}`} className='text-blue-500 font-medium'>
                                Read more
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Blogs