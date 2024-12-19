

import './Formulaire.css'

function Formulaire (){
    return(
        <>
          <form className='form'>
            <div className='lableInput'>
              <label htmlFor="fullname">fullname:</label>
              <input type="text" name="fullname" placeholder="your Fullname"/>
            </div>
            <div className='lableInput'>
              <label  htmlFor="email">email:</label>
              <input  type="email" name="email" placeholder="your email"/>
            </div>
            <div className='divMessage'>
              <legend>On vous écoute...</legend>
              <textarea name="message" rows={4} cols={50} placeholder="Fais-moi vibrer avec ton message..."> </textarea>
            </div>
            <div>
              <button className='buttonContact' type="submit">Cupidon livre ça 🎯</button>
            </div>
          </form>
        </>
    )
}

export default Formulaire;