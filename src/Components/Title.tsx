import './Title.css'


type MyTitle={
    title: string
}


function Title ({title}: MyTitle) {
    return(
        <h1 className="title">{title}</h1>
    )
    
}

export default Title;