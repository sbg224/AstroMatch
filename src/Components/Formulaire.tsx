

import { Link } from 'react-router-dom';
import './Formulaire.css'

type MyformType={
  dataForms:{
    fullname: string;
    message: string;
    email: string;
  },

  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

function Formulaire ({dataForms, handleChange, handleSubmit}: MyformType){


    return(
        <>
          <form id='formContainer'>
            <div className='lableInput'>
              <label htmlFor="fullname">fullname:</label>
              <input type="text" id='fullname' name="fullname" value ={dataForms.fullname} onChange={handleChange} placeholder="your Fullname"/>
            </div>
            <div className='lableInput'>
              <label  htmlFor="email">email:</label>
              <input  type="email" id='email' name="email" value ={dataForms.email} onChange={handleChange} placeholder="your email"/>
            </div>
            <div className='divMessage'>
              <legend>On vous écoute...</legend>
              <textarea id='message' name="message" rows={4} cols={50} value ={dataForms.message} onChange={handleChange}  placeholder="Fais-moi vibrer avec ton message..."> </textarea>
            </div>
            <div>
            <button className='buttonContact' type="submit" onClick={handleSubmit}>
            <Link to={"/"}> </Link> Cupidon livre ça 🎯
            </button>
            </div>
          </form>
        </>
    )
}

export default Formulaire;