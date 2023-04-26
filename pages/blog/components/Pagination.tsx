import React from 'react'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {
    

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage) ; i++) {
        pages.push(i);
    }
    
      const handleClick = (page) =>{
        setCurrentPage(page);
        window.scrollTo(0, 0);
      }
    

  return (
    <div>
        <div className='text-center'>
        {
            pages.map((page, index) => {
            return <button className='p-2 px-4 mb-24 border hover:bg-slate-600' key={index} onClick={() => handleClick(page)}>{page}</button>
            })  
        }
        </div>
    </div>
  )
}

export default Pagination
