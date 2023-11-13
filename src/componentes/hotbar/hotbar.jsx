import '../hotbar/hotbar.css'

export default function HotBar() {
    return (
        <>
            <div className="hotbar">
                <div className="logo__img">
                    <img className='lista__img' src='https://th.bing.com/th/id/OIG.1OPNYFv0.VYVDCL9FBFd?pid=ImgGn' alt="" />
                </div>
                <ul className="hotbar__lista">
                    <li className="lista__item nomeLoja"><a href="/">Beauty Store</a></li>
                    <div className='lista__itens-separados'>
                        <li className="lista__item entrar"><a href="/entrar">Entrar</a></li>
                        <li className="lista__item entrar"><a href="/cadastro">Cadastrar Produtos</a></li>
                    </div>
                </ul>
            </div>
        </>
    )
}