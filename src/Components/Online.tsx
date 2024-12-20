
type MyOnlineType={
  imageSrc:string;
  name:string;
}

function Online ({imageSrc, name}:MyOnlineType){
    return(
        <>
            <p> En ligne</p>
            <img src={imageSrc} alt={name} />
        </>
    )
}

export default Online;