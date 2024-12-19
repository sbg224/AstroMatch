import { useState, useEffect } from "react";
import "./Meet.css";

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
        <h1>Bidule</h1>
        <p>
          Wafer tiramisu croissant ice cream shortbread jelly. Marshmallow
          jelly-o jujubes cookie sweet roll. Carrot cake caramels cake lemon
          drops marshmallow fruitcake. Gummi bears biscuit topping powder
          pudding. Gingerbread cheesecake soufflé dessert cotton candy halvah.
          Carrot cake gummi bears lemon drops wafer ice cream donut lemon drops
          pudding. Jelly beans wafer marzipan marzipan wafer sweet roll ice
          cream bear claw shortbread. Dragée jelly-o apple pie cheesecake
          marzipan jelly beans.
        </p>
      </div>
      <div className="meet">
        {personnages.map((personnage) => (
          <div key={personnage.name} className="personnages-card">
            <div className="personnage-image">
              <img src={personnage.imageUrl} alt={personnage.name} />
            </div>
            <div className="personnages-test">
              <p className="personnages-name">{personnage.name}</p>
              <p className="personnages-gender">{personnage.gender}</p>
              <p className="personnages-year">Age: {personnage.birth_year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Meet;
