import { useEffect, useState } from "react";
import "./Home.css";
import pngegg from "../assets/pngegg.png";
import William from "../assets/William.png";
import Lucie from "../assets/Lucie.png";
import Kashyyyk_Planet_Preview from "../assets/Kashyyyk_Planet_Preview.png";
import AvisUsers from "../Components/AvisUsers";

function Home() {
  const [planetes, setPlanetes] = useState([]);

  useEffect(() => {
    fetch("https://starwarsapi.remote-8.wilders.dev/api/homeworld?take=4")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlanetes(data);
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
      <main>
        <h1>Planètes</h1>
        <div className="planete-container">
          {planetes.map((planete, index) => (
            <div key={planete.name} className="planete-card">
              <div className="test">
                <p className="planete-name">{planete.name}</p>
              </div>
              {/* Alternance des images en fonction de l'index */}
              <img
                className="planete-image"
                src={
                  index % 4 === 0
                    ? pngegg
                    : index % 4 === 1
                    ? William
                    : index % 4 === 2
                    ? Lucie
                    : Kashyyyk_Planet_Preview
                }
                alt={`Planète ${planete.name}`}
              />
            </div>
          ))}
        </div>
      </main>
      <AvisUsers />
    </>
  );
}

export default Home;
