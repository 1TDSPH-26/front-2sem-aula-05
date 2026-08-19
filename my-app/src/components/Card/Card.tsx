
import "./Card.css"

type TipoProps = {
    nomeProduto: string;
    preco: string;
    img: string;
    descricao: string;
}


export default function Card({nomeProduto, preco, img, descricao}:TipoProps){
    return(
        <div className="card">
            <img src={img} alt={descricao} />
            <h2>Card</h2>
            <p>Nome Produto: {nomeProduto}</p>
            <p>Preço: {preco}</p>

        </div>

    );
}