import React, {  useEffect, useState } from 'react'
import './Navbar.css'
import { BiSearchAlt } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [categories, setCategpries] = useState()
  const [dataSearch, setDataSearch] = useState()
  const API_KATEGORI = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'


  useEffect(()=>{
    axios.get(API_KATEGORI)
    .then(res => setCategpries(res.data.meals))
    .catch(err => console.log(err))
  },[])

  const navigate = useNavigate()
  const searchBtn = (name) =>{
    if(name){
      navigate(`/search/${name}`)
    }
    setDataSearch('')
  }

  const cateBtn = (name) =>{
    
    if(name){
      navigate(`/categories/${name}`) 
    }

  }
  return (
    <div className='navbar'>
        <div className='navbar_title'>
            <h1>The Meals</h1>
        </div>
        <div className='navbar_list'>
            <ul className='navbar_list_item'>
              <Link className='link' to="/">
                <li  className="  ">HOME</li>
              </Link>
                <li  className="cate">
                <span>CATEGORIES<FiChevronDown className='drop_down'/></span>
                  <div className="menu_drop">
                    {
                      categories && categories.map((item,i)=>{
                        return <p onClick={()=> cateBtn(item.strCategory )} key={i}>{item.strCategory }</p>
                      })
                    }
                  </div>
                </li>
                <li className='li_car'>
                    <input onChange={(e)=> setDataSearch(e.target.value)} className={`cari`} value={dataSearch} type="text" placeholder='Cari meal' />
                    <button type="submit"><BiSearchAlt onClick={()=> searchBtn(dataSearch)} className='icon_seacrh'/></button>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar