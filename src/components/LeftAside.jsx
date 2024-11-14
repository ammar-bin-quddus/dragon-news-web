import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('https://openapi.programming-hero.com/api/news/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch(error => console.log(error))
    }, [])
    // console.log(categories)
    
  return (
    <div className='w-full'>
        <p className='font-bold text-[#403F3F]'>All Categories({categories.length})</p>
        <div className='w-full mt-4 flex flex-col justify-start items-center gap-3'>
            {
                categories.map((category) => {
                   return <NavLink to={`category/${category.category_id}`} key={category.category_id} className='btn w-full'>{category.category_name}</NavLink>
                })
            }
        </div>
    </div>
  )
}

export default LeftAside