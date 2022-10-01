import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../HomePage/HomePage.css'
import './CategoriesPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../load/Loader';

const CategoriesPage = () => {
  const { cate } = useParams();
  const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + cate;
  //! YANG HARUS ADA
  // 1. useState => menyimpan data api
  // 2. useEffect
  // 3. axios => untuk mengambil data apinya
  //cara
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data.meals))
      .catch((err) => console.log(err));
  }, [API]);

  const getIDMeal = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className="catePage">
        <h1>{cate}</h1>
        <div className="wrap_card">
          {data ? (
            data.map((item) => {
              return (
                <div onClick={() => getIDMeal(item.idMeal)} key={item.idMeal} className="card_menu_cate">
                  <img src={`${item.strMealThumb}`} alt="gambar categori" />
                  <div className="des_categori">
                    <h3>{item.strMeal}</h3>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
