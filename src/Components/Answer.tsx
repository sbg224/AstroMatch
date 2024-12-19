import './Answer.css'

type MyAnswerType={
    dataForms:{
      fullname: string;
      message: string;
      email: string;
    }
    title2: string;
}


function Answer ({dataForms, title2}:MyAnswerType){
return(
    <div id="AnswerDatas">
        <h2>{title2}</h2>
        <p>Merci {dataForms.fullname} pour votre message ! Nous vous répondrons à {dataForms.email} dans les plus brefs délais.</p>

    </div>
)
}
export default Answer;