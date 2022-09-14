import './simpscomponents.css'
export default Simpscomponents

function Simpscomponents(props) {
    let{Simpname, picture} = props;

    let cardsimp = 'card'

    return (
        <div className={cardsimp}>
            <h2>{Simpname}</h2>
            <img src={picture}/>

    </div>)
}
