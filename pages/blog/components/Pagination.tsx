import React from 'react'

const Pagination = ({totalPosts, postsPerPage}) => {
    

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage) ; i++) {
        pages.push(i);
    }

  return (
    <div>
        <div className='text-center'>
        {
            pages.map((page, index) => {
            return <button className='p-2 px-4 mb-24 border hover:' key={index}>{page}</button>
            })  
        }
        </div>
    </div>
  )
}

export default Pagination
