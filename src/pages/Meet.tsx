import { useState, useEffect } from "react";
import "./Meet.css";
import reviews from "../Tableaux/Avis.json";

function Meet() {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    fetch(
      "https://starwarsapi.remote-8.wilders.dev/api/characters/original?take=6&skip=0"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPersonnages(data);
        } else {
          console.error("Les données reçues ne sont pas un tableau :", data);
        }
      })
      .catch((err) =>
        console.error("Erreur lors de la récupération des données :", err)
      );
  }, []);

  return (
    <>
      <div className="jsp">
        <h1>Nos utilisateurs disent</h1>
        <p>
          Plongez au cœur de l’univers Star Wars et découvrez les récits
          captivants de nos utilisateurs ! Des rencontres improbables aux
          histoires d’amour galactiques, laissez-vous inspirer par les aventures
          interstellaires partagées ici. Rires, émotions et connexions au-delà
          des étoiles vous attendent. Qui sait, votre propre histoire pourrait
          bientôt illuminer cette galaxie ! 🌌
        </p>
      </div>
      <div className="meet">
        {personnages.map((personnage) => {
          const review = reviews.find((r) => r.name === personnage.name);
          return (
            <div key={personnage.name} className="personnages-card">
              <div className="personnage-image">
                <img src={personnage.imageUrl} alt={personnage.name} />
              </div>
              <div className="personnages-test">
                <p className="personnages-name">{personnage.name}</p>
                <p className="personnages-gender">{personnage.gender}</p>
                <p className="personnages-year">Age: {personnage.birth_year}</p>
                <p className="personnages-bio">
                  {review ? review.bio : "Aucun avis disponible."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Meet;
