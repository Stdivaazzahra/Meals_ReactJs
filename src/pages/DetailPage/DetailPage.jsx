<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
import './DetailPage.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [data, setData] = useState()
    const {id} = useParams()
    const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id
    
    useEffect(()=>{
        axios.get(API)
        .then(res=> setData(res.data.meals[0]))
        .catch(err=> console.log(err))
    },[setData, API])
    console.log(data)
=======
import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Skeleton from './Skeleton';
const DetailPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data.meals[0]))
      .catch((err) => console.log(err));
  }, [setData, API]);
  console.log(data);

>>>>>>> 181b8c2256c3fc2471de0f128e4d25a4c9748e6e
  return (
    <section className="detail_page">
      <header className="header_detail">
        <h1>Detail Meal</h1>
      </header>
      <div className="wrapper_detail">
        {data ? (
          <div className="card_detail">
            <img className="image_thumnail" src={`${data.strMealThumb}`} alt="meal" />
            <div className="dec">
              <h3>{data.strMeal}</h3>
              <p className="category">
                <strong>category:</strong> {data.strCategory}
              </p>
              <p className="asal">
                <strong>asal:</strong> {data.strArea}
              </p>
              <strong className="panduan">Panduan Memasak:</strong>
              <p>{data.strInstructions}</p>
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </section>
  );
};

export default DetailPage;
