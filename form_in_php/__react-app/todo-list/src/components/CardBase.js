

// function CardBase(props) {
function CardBase({titolo,testo}) {

    // const {titolo,testo} = props;
    return (
        <div>
            <h3>{titolo}</h3>
            <p>{testo}</p>
        </div>
    )
}


export default CardBase