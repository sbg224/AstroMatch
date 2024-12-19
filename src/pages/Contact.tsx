import { useEffect, useState } from "react";
import Formulaire from "../Components/Formulaire";
import Title from "../Components/Title";

function Contact (){
    const [dataForms, setDataForms] = useState({ fullname: '', message: '', email: '' });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDataForms({...dataForms, [name]: value});
    };

const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Vous est bien enregistré!!");
    console.log("Vos données:", dataForms);
    setDataForms({ fullname: '', message: '', email: '' });
    
}

    return(
        <div className="contact">
            <Title title = "On est là pour écouter tes confessions d’amour… ou tes bugs !"/>
            <Formulaire dataForms={dataForms} handleChange={handleChange} handleSubmit= {handleSubmit}/>
        </div>
    )
}


export default Contact;