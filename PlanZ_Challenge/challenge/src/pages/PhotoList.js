import React, { useEffect, useState } from 'react';
import { Photos } from './Photos';

export const PhotoList = () => {
  const [photos, setPhotos] = useState([])

//Fetching Data From URL
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then(res => res.json())
      .then(data => {
        console.log(data)

        setPhotos(data);
      })
  }, [])


  return (
    //Mapping  Data and Sending Prop to Photo Component
    <div className="image-container">
      {
        photos.map(item => (
          <Photos url={item.url} price={"Price $" + 5.99} Favorite={item.isFavorite} id={item.id} key={Math.random()} />
        ))
      }
    </div>
  )
}