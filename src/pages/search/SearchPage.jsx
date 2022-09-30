import React, { useEffect, useState } from 'react'
import './search.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loader from '../load/Loader'

const SearchPage = () => {
  const {name} = useParams()
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?s="+name
    //! YANG HARUS ADA
    // 1. useState => menyimpan data api
    // 2. useEffect 
    // 3. axios => untuk mengambil data apinya

    //cara 
    const [data, setData] = useState()
  
    useEffect(()=>{
      axios.get(API)
      .then(res => setData(res.data.meals))
      .catch(err => console.log(err))
  
    },[API])
    console.log(data)
    
  return (
    <div className='search'>
        <div className='search_card'>
        {
          data ? data.map(item=>{
            return (
              <Link key={item.idMeal} className="card_search_menu"  to={`/detail/${item.idMeal}`}>
                <div  >
                  <img src={`${item.strMealThumb}`} alt="gambar categori" />
                  <div className="des_search_categori">
                      <h3>{item.strMeal}</h3>
                  </div>
                </div>
              </Link>
            )
          })
          :
          <Loader/>
        }
      </div>
    </div>
  )
}

export default SearchPage