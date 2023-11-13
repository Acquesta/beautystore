import '../produtos/produtos.css'

export default function Produtos(){
    return(
        <>
            <div className="Produtos">
                <h1>Nossos Produtos</h1>
                <ul className="lista__produtos">
                    <li className="produto">
                        <img src="https://oceane.vtexassets.com/arquivos/ids/197128-1600-1600?v=637672167236130000&width=1600&height=1600&aspect=true"/>
                        <h2>Esponja</h2>
                        <h3>R$23,00</h3>
                    </li>
                    <li className="produto">
                        <img src="https://oceane.vtexassets.com/arquivos/ids/201794-1600-1600?v=638126947034870000&width=1600&height=1600&aspect=true"/>
                        <h2>Baton</h2>
                        <h3>R$50,00</h3>
                    </li>
                    <li className="produto">
                        <img src="https://oceane.vtexassets.com/arquivos/ids/196252-1600-1600?v=638120614233670000&width=1600&height=1600&aspect=true"/>
                        <h2>Paleta</h2>
                        <h3>R$48,50</h3>
                    </li>
                    <li className="produto">
                        <img src="https://oceane.vtexassets.com/arquivos/ids/199530-1600-1600?v=638121498009830000&width=1600&height=1600&aspect=true"/>
                        <h2>Blush</h2>
                        <h3>R$39,49</h3>
                    </li>
                    <li className="produto">
                        <img src="https://oceane.vtexassets.com/arquivos/ids/198807-1600-1600?v=638119732013870000&width=1600&height=1600&aspect=true"/>
                        <h2>Caneta baton</h2>
                        <h3>R$29,90</h3>
                    </li>

                </ul>
            </div>
        </>
    )
}