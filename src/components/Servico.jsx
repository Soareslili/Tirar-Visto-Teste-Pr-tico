import './servico.css'
import PassaporteImg from '../assets/Passaporte.png'
import PassaporteVistoImg from '../assets/Visto.png'
import ConsultoriaImg from '../assets/Consultoria.png'

export default function ServicesSection() {
    return (
        <section className="services-section">
            <button className="btn-services">Pacotes</button>
            <div className="services-arrows">
                 <h1 id='Servico' className="services-title">Confira nossos pacotes</h1>
                <button className="arrow-btn">
                    <span>&larr;</span>
                </button>
                <button className="arrow-btn">
                    <span>&rarr;</span>
                </button>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <img src={PassaporteImg} alt="Passaporte" />
                    <div className="service-tags">
                        <span>Basic</span>
                        <span>Premium</span>
                    </div>
                    <h2>Passaporte</h2>
                    <div className="service-info">
                        <div>
                            <span>Atendimento</span>
                            <p>On-line</p>
                        </div>
                        <div>
                            <span>Tempo</span>
                            <p>45 dias</p>
                        </div>
                    </div>
                    <div className="service-footer">
                        <div>
                            <span>A partir de</span>
                            <p className="service-price">R$ 890,00</p>
                        </div>
                        <button className="btn-contratar">Contratar</button>
                    </div>
                </div>
                <div className="service-card">
                    <img src={PassaporteVistoImg} alt="Passaporte + Visto" />
                    <div className="service-tags">
                        <span>Basic</span>
                        <span>Premium</span>
                    </div>
                    <h2>Passaporte + Visto</h2>
                    <div className="service-info">
                        <div>
                            <span>Atendimento</span>
                            <p>On-line + Presencial</p>
                        </div>
                        <div>
                            <span>Tempo</span>
                            <p>25 dias</p>
                        </div>
                    </div>
                    <div className="service-footer">
                        <div>
                            <span>A partir de</span>
                            <p className="service-price">R$ 1.290,00</p>
                        </div>
                        <button className="btn-contratar">Contratar</button>
                    </div>
                </div>
                <div className="service-card">
                    <img src={ConsultoriaImg} alt="Consultoria Completa" />
                    <div className="service-tags">
                        <span>Basic</span>
                        <span>Premium</span>
                    </div>
                    <h2>Consultoria Completa</h2>
                    <div className="service-info">
                        <div>
                            <span>Atendimento</span>
                            <p>Presencial Completo</p>
                        </div>
                        <div>
                            <span>Duration</span>
                            <p>10 dias</p>
                        </div>
                    </div>
                    <div className="service-footer">
                        <div>
                            <span>A partir de</span>
                            <p className="service-price">R$ 1.890,00</p>
                        </div>
                        <button className="btn-contratar">Contratar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}