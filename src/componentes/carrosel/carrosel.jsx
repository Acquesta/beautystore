import '../carrosel/carrosel.css'

export default function Carrosel() {

    let imagem1 = 'https://plus.unsplash.com/premium_photo-1664451177155-8247ae799c8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    let imagem2 = 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    let imagem3 = 'https://images.unsplash.com/photo-1587754256282-a11d04e3472d?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <>
            <div className='content'>
                <div className="slides">
                    <input type="radio" name='slide' id='slide1' checked/>
                    <input type="radio" name='slide' id='slide2' />
                    <input type="radio" name='slide' id='slide3' />

                    <div className="slide s1">
                        <img src={imagem1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={imagem2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={imagem3} alt="" />
                    </div>
                </div>
                <div className="navigation">
                    <label className='bar' htmlFor="slide1"></label>
                    <label className='bar' htmlFor="slide2"></label>
                    <label className='bar' htmlFor="slide3"></label>
                </div>
            </div>
        </>
    )
}