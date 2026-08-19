import Card from "../Card/Card";

export default function () {
    return (
        <main>
            <h2>
                Conteúdo aleatório
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit iure illum dolorum id fuga eum suscipit repellendus? Porro ab voluptatum totam sed, suscipit perspiciatis ea pariatur quos quisquam fuga.</p>
            <section>
                <h2>Produtos</h2>
                <Card nomeProduto="Produto 1" preco="R$100" img="https://placehold.co/100x100" desc="Imagem 100x100" />
                <Card nomeProduto="Produto 2" preco="R$50" img="https://placehold.co/100x100" desc="Imagem 100x100" />
                <Card nomeProduto="Produto 3" preco="R$10" img="https://placehold.co/100x100" desc="Imagem 100x100" />
            </section>
        </main>
    );
}