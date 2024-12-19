import { useState, useEffect } from "react";
import "./Meet.css"

function Meet (){
    const [personnages, setPersonnages]=useState([])

    useEffect(() => {
        fetch("https://starwarsapi.remote-8.wilders.dev/api/characters/original?take=10&skip=0")
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
        <div id="meet">
          {personnages.map((personnages) => (
            <div key={personnages.name} className="planete-card">
              <div className="test">
                <p className="planete-name">{personnages.name}</p>
                <p className="planete-name">{personnages.gender}</p>
                <p className="planete-name">{personnages.birth_year}</p>
                <img src={personnages.imageUrl} alt="" />
              </div>
            </div>
          ))}
          
          <h1>Titre H1</h1>
          <p>paragrphe eici</p>
          
          <section>
            <article>{personnages.name}</article>
            <article>article 2</article>
            <article>article 3</article>
          </section>
        </div>
      );
}
export default Meet;