import Card from "../Card/Card";

export default function Conteudo(){

    return(
            <main>
                <h2>
                    Conteúdo aleatório
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit iure illum dolorum id fuga eum suscipit repellendus? Porro ab voluptatum totam sed, suscipit perspiciatis ea pariatur quos quisquam fuga.</p>

                <section>
                    <h2>Produtos</h2>
                    <Card nomeProduto="Produto 1" preco="R$ 100,00" img="https://via.placehold.co/100x100" descricao="Lorem ipsum dolor sit amet."/>
                    <Card nomeProduto="Produto 1" preco="R$ 100,00" img="https://via.placehold.co/100x100" descricao="Lorem ipsum dolor sit amet."/>
                    <Card nomeProduto="Produto 1" preco="R$ 100,00" img="https://via.placehold.co/100x100" descricao="Lorem ipsum dolor sit amet."/>
                </section>

            </main>
    );
}