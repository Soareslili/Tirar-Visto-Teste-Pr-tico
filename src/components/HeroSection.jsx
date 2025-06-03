import './heroSection.css'
import FamiliaViajando from '../assets/familia.png'
import Indonesia from '../assets/indonesia.png'
import Franca from '../assets/França.png'
import Grecia from '../assets/Grecia.png'
import India from '../assets/India.png'
import NovaYork from '../assets/Nova-York.png'
import AfricadoSul from '../assets/Africa-do-Sul.png'

export default function HeroSection() {
    return (
        <>
            <section className="hero-section">

                <div className="hero-row hero-row-top">
                    <div className="hero-col hero-col-left">
                        <button className="btn">Veja como funciona</button>
                        <h1 id='QuemSomos'>Sua tranquilidade<br />não tem preço!</h1>
                    </div>
                    <div className="hero-col hero-col-right">
                        <p className="hero-desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>

                <div className="hero-row hero-row-bottom">
                    <div className="hero-col hero-col-left">
                        <img src={FamiliaViajando} alt="Família no aeroporto" className="hero-img" />
                    </div>
                    <div className="hero-col hero-col-right hero-steps">
                        <div className="step">
                            <h2>Etapa Inicial</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="step">
                            <h2>Processo de Entrevista</h2>
                            <details>
                                <summary>Leia mais</summary>
                                <p>Detalhes sobre o processo de entrevista...</p>
                            </details>
                        </div>
                        <div className="step">
                            <h2>Entrega de Documentos</h2>
                            <details>
                                <summary>Leia mais</summary>
                                <p>Detalhes sobre a entrega de documentos...</p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <sectio className="destination">
                <div className='destination-top'>
                    <button className="btn-destination">Top Destinos</button>
                    <h1 className='text-destination'>Destinos mais procurados </h1>
                    <p>
                        Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?
                    </p>

                    <button className="btn-Find-out-more">Conheça Mais</button>
                </div>

                
                    <div className='img-destination'>
                        <img src={Indonesia} alt='País-Indonesia' />
                        <img src={Franca} alt='País-França' />
                        <img src={Grecia} alt='País-Grecia' />
                        <img src={NovaYork} alt='País-Nova-York' />
                        <img src={India} alt='País-India' />
                        <img src={AfricadoSul} alt='País-Africa-do-Sul' />
                    </div>
               
            </sectio>



        </>
    )


}