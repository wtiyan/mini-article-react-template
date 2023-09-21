import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const ArticleContent = () => {
  const {idFromURL}=useParams()

  const articles=[
    {
        "id":1,
        'title':'What is Lorem Ipsum?',
        'coverImg':'https://61230c9378329.z.cdn.cloudraya.com/img/ViteLogo.png',
        'content':`**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        'category' : ['category 1'],
        'authorName':'RAYA',
        'authorImg' :'https://61230c9378329.z.cdn.cloudraya.com/img/Raya_Logo_Support2_e6de7e1cfb.png',
        'authorDesc':'Cloud Hero'

    },
    {
        "id":2,
        'title':'Why do we use it?',
        'coverImg':'https://61230c9378329.z.cdn.cloudraya.com/img/ViteLogo.png',
        'content':`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        'category' : ['category 1', 'category 2'],
        'authorName':'RAYA',
        'authorImg' :'https://61230c9378329.z.cdn.cloudraya.com/img/Raya_Logo_Support2_e6de7e1cfb.png',
        'authorDesc':'Cloud Hero'
    },
    {
        "id":3,
        'title':'Where does it come from?',
        'coverImg':'https://61230c9378329.z.cdn.cloudraya.com/img/ViteLogo.png',
        'content':`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        'category' : ['category 2', 'category 3', 'category 4'],
        'authorName':'RAYA',
        'authorImg' :'https://61230c9378329.z.cdn.cloudraya.com/img/Raya_Logo_Support2_e6de7e1cfb.png',
        'authorDesc':'Cloud Hero'
    },
]

let article = articles.filter(article=> article.id== idFromURL)
article = article[0]
        
  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='col-span-2 bg-white shadow rounded-lg overflow-hidden'>
          <img className='h-[300px] w-full object-contain' src={article.coverImg} alt={article.title} />
            <div className='p-6'>
              <h1 className='text-3xl font-semibold'>{article.title}</h1>
              <div className='flex space-x-2 mt-2'>
                {article.category.map((category) => (
                  <span
                    key={category}
                    className='px-2 py-1 text-sm font-medium bg-gray-400 text-white rounded'
                  >
                    {category}
                  </span>
                ))}
              </div>
              <ReactMarkdown className='mt-2 text-gray-500 text-justify' >{article.content}</ReactMarkdown>
            </div>
          </div>
          <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                <div>
                    <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={article.authorImg} />
                    <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{article.authorName}</h1>
                    <p className='text-center text-gray-900 font-medium'>{article.authorDesc}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    
    

  )
}

export default ArticleContent
