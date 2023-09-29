import React from 'react'
import { useNavigate } from 'react-router-dom'


//tableau de données qui génère des cartes pour chaque élément du tableau.
//Chaque carte contient une image et un titre
export const Card = ({ data, addToFavorites }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
              <div className="card" key={item.id} 
              onClick={()=>navigate(`/${item.id}`)}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>{item.name}</h3>
                  <button onClick={() => navigate(`/${item.id}`)}>Voir détails</button>
                <button onClick={() => addToFavorites(item)}>Ajouter aux favoris</button>
                </div>
              </div>
            )
          })
        ):""
      }

    </>
  )
}

