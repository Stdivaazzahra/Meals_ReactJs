import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import image from './../assets/homepage.jpg'
import { Link } from 'react-router-dom'
import Loader from '../load/Loader'

const HomePage = () => {
  const API = "https://www.themealdb.com/api/json/v1/1/categories.php"
  //! YANG HARUS ADA
  // 1. useState => menyimpan data api
  // 2. useEffect 
  // 3. axios => untuk mengambil data apinya

  //cara 
  const [data, setData] = useState()
  useEffect(()=>{
    axios.get(API)
    .then(res => setData(res.data.categories))
    .catch(err => console.log(err))
  },[])
  console.log(data);

  return (
    <>  
      <div className='homePage'>
        <div className='homepage_img'>
          <img src={image} alt="Header HomePage" />
        </div>
        <div className='homepage_text'>
          <p> Welcome Ho Ho </p>
        </div>
      </div>
      <div>
        <h2 className='judul'>Pilih Categories Makanan</h2>
      </div>
      <div className='wrap_card'>
        {
          data ? data.map(item=>{
            return (
              <Link key={item.idCategory} className="card_menu" to={`/categories/${item.strCategory}`}>
                <div>
                  <img src={`${item.strCategoryThumb}`} alt="gambar categori" />
                  <div className="des_categori">
                      <h3>{item.strCategory}</h3>
                  </div>
                </div>
              </Link>
            )
          })
          :
          <Loader/>
        }
      </div>
    </>
  )
}

export default HomePage