<<<<<<< HEAD
function Contact() {
	return <div></div>;
=======
import { useEffect, useState } from "react";
import Formulaire from "../Components/Formulaire";
import Title from "../Components/Title";
import Answer from "../Components/Answer";
import './Contact.css'

function Contact (){
    const [dataForms, setDataForms] = useState({ fullname: '', email: '', message:'' });

const handleChange = (e) =>{
    const {name, value} = e.target;
    setDataForms({...dataForms, [name ]: value});
    
};


const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Cupidon vous a entendu !!");
    console.log("Vos données:", dataForms);
    setDataForms({ fullname: '', message: '', email: '' }); 
}


    return(
        <div className="contact">
            <Title title = "On est là pour écouter tes confessions d’amour… ou tes bugs !"/>
            <Formulaire dataForms={dataForms} 
            handleChange={handleChange} handleSubmit= {handleSubmit}/>
            <Answer dataForms={dataForms} title2="Réponse Automatique" />

        </div>
    )
>>>>>>> dev
}

export default Contact;
