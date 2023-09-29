import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export const Marvel = () => {
  //utilisation du hook useParams pour extraire le paramètre id de l'URL. 
  //Cet id est l'identifiant du personnage Marvel dont les détails doivent être affichés.
  const {id}=useParams();
  const [item,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1695973239359&apikey=fdd5385bdeb978adcb82cf5e83339162&hash=475d9ebca7345c792b110e23afd70f53`)
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!item)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )
    }
    </>

  )
}
  

