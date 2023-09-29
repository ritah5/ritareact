import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';


export const Main = () => {
  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  //stocker les données récupérées depuis l'API Marvel.
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.results);
    }
    fetch();
  },[url])
  
  //Cette fonction est appelée lorsque l'utilisateur effectue une recherche, et appuie sur entrée
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=6c1b4abd461cb969b2a877dd4ee97135784f9aa0&hash=070a5c0489c52ae7ac6d897ab106d75a`)
  }
  // Fonction pour ajouter un personnage aux favoris
  const addToFavorites = (character) => {
    // Vérifiez si le personnage est déjà en favori
    if (!favorites.some((fav) => fav.id === character.id)) {
      // Créez une copie des favoris actuels et ajoutez le personnage
      const updatedFavorites = [...favorites, character];
      setFavorites(updatedFavorites);

      // Stockez les favoris dans le localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

  };


  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.jpg" alt=""  width={50}/>
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                />
            </div>
        </div>
       <div className="content">

        
        <Card data={item} addToFavorites={addToFavorites} />
       </div>
    </>
  )
}
