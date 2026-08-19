type TipoProps = {
    nomeProduto : string;
    preco : string;
    img : string;
    desc : string
}

export default function Card({nomeProduto, preco, img, desc}:TipoProps){
    return (
        <div>
            <h2>Card</h2>
            <p>Nome Produto: {nomeProduto}</p>
            <p>Preço: {preco}</p>
            <img src={img} alt={desc} />
        </div>
    );
}