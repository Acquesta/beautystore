import HotBar from '../componentes/hotbar/hotbar'
import Carrosel from '../componentes/carrosel/carrosel'
import Footer from '../componentes/footer/footer'
import Produtos from '../componentes/produtos/produtos'

export default function Home() {
    return (
        <>
            <HotBar></HotBar>
            <Carrosel></Carrosel>
            <Produtos></Produtos>
            <Footer></Footer>
        </>
    )
}