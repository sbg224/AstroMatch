import { useEffect, useState } from "react";
import Formulaire from "../Components/Formulaire";
import Title from "../Components/Title";

function Contact (){
    const [dataForms, setDataForms]= useState({fullmane:'', message:''})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDataForms({...dataForms, [name]: value});
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Vous est bien enregistré!!");
    console.log("Vos données:", dataForms);
    setDataForms({fullmane: '', message: ''})
    
}

    return(
        <div className="contact">
            <Title title = "On est là pour écouter tes confessions d’amour… ou tes bugs !"/>
            <Formulaire handleChange={handleChange} handleSubmit= {handleSubmit}/>
        </div>
    )
}


export default Contact;