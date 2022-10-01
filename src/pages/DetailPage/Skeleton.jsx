import './skeleton.css';
import React from 'react';

const Skeleton = () => {
  return (
    <div className="card_skeleton ">
      <div className="skeleton">
        <div className="image_skeleton  skel-animasi skel"></div>
      </div>
      <div className="dec_skeleton ">
        <div className="name_skeleton  skel-animasi skel"></div>
        <div className="category_skeleton  skel-animasi skel"></div>
        <div className="asal_skeleton  skel-animasi skel"></div>
        <div className="panduan_skeleton  skel-animasi skel"></div>
        <div className="skel skel-animasi skel-text first"></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text"></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text"></div>
        <div className="skel skel-animasi skel-text"></div>
        <div className="skel skel-animasi skel-text "></div>
        <div className="skel skel-animasi skel-text last"></div>
      </div>
    </div>
  );
};

export default Skeleton;
