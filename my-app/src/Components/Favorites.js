
import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Récupérez les favoris du localStorage lors du chargement du composant
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (character) => {
    // Récupérez les favoris actuels du localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Retirez le personnage des favoris
    const updatedFavorites = storedFavorites.filter((fav) => fav.id !== character.id);

    // Mettez à jour les favoris dans le localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Mettez à jour l'état local pour refléter les favoris mis à jour
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-container">
      <h2>Mes Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun personnage en favori pour le moment.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((character) => (
            <li key={character.id} className="favorite-item">
              <div className="favorite-info">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="favorite-image"
                />
                <div className="favorite-details">
                  <span className="favorite-name">{character.name}</span>
                  <p className="favorite-description">{character.description}</p>
                </div>
              </div>
              <button
                className="remove-favorite-button"
                onClick={() => removeFromFavorites(character)}
              >
                Retirer des favoris
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
