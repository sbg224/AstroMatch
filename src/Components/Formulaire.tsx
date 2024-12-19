

import './Formulaire.css'

type MyformType={
  dataForms:{
    fullname: string;
    message: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

function Formulaire ({dataForms, handleChange, handleSubmit}: MyformType){


    return(
        <>
          <form className='form'>
            <div className='lableInput'>
              <label htmlFor="fullname">fullname:</label>
              <input type="text" name="fullname" value ={dataForms.fullname} onChange={handleChange} placeholder="your Fullname"/>
            </div>
            <div className='lableInput'>
              <label  htmlFor="email">email:</label>
              <input  type="email" name="email" value ={dataForms.email} onChange={handleChange} placeholder="your email"/>
            </div>
            <div className='divMessage'>
              <legend>On vous écoute...</legend>
              <textarea name="message" rows={4} cols={50} value ={dataForms.message} onChange={handleChange} placeholder="Fais-moi vibrer avec ton message..."> </textarea>
            </div>
            <div>
              <button className='buttonContact' type="submit" onSubmit={handleSubmit}>Cupidon livre ça 🎯</button>
            </div>
          </form>
        </>
    )
}

export default Formulaire;