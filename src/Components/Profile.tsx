import { useParams } from "react-router-dom";
import "./Profile.css";
import TabUsers from '../Tableaux/Avis.json'
import Online from "./Online";
import icone from'../assets/correct.png'

type MyUserType = {
    id: number;
    name: string;
    image: string;
    age: number;
    bio: string;
    planet: string;
    gender: string;
    interests: string[];
}

function Profile() {
    const Data: MyUserType[] = TabUsers;

    const { id } = useParams();
    if (!id) {
        return <div>Id manquant</div>;
    }
    const parseid = Number.parseInt(id, 10); 

    const user = Data.find(user => user.id === parseid);
    if (!user) {
        return <div>Utilisateur non trouvé</div>;
    }

    const handleLike = () => {
        alert(`Vous avez montré votre intérêt pour ${Data[parseid].name} !`);
    };

    const handleMessage = () => {

        alert(`Ouvrir une boîte de dialogue pour envoyer un message à ${Data[parseid].name}.`);
    };

    return (
        <div id="user-profile">
            <div className="profile-header">
                <img
                    src={Data[parseid].image}
                    alt={Data[parseid].name}
                    className="profile-image"
                />
                <div className="profile-info">
                    <h2 className="profile-name">
                        {Data[parseid].name}, {Data[parseid].age}, {Data[parseid].gender}
                        <Online imageSrc= {icone} name= "icone connexion" />
                    </h2>
                    <p className="profile-location">{Data[parseid].planet}</p>
                </div>
            </div>
            <div className="profile-bio">
                <p>{Data[parseid].bio}</p>
            </div>
            <div className="profile-interests">
                <h3>Centres d'intérêt :</h3>
                <ul>
                    {Data[parseid].interests.map((interest) => (
                        <li key={interest}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="profile-actions">
                <button type="button" className="like-button" onClick={handleLike}>
                    💖 Intéressé(e)
                </button>
                <button
                    type="button"
                    className="message-button"
                    onClick={handleMessage}
                >
                    📩 Envoyer un message
                </button>
            </div>
        </div>
    );
}

export default Profile;