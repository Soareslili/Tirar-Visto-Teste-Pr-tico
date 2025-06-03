import RodaGigante from '../assets/roda-gigante.png'
import './hero.css'

export default function Hero() {
    return (
        <>
            <section className="hero">

                <div className="hero-left">
                    <h2 id='Home' className="hero-title">
                        Tire seu Visto conosco e<br />
                        não tenha nenhuma<br />
                        surpresa negativa!
                    </h2>
                    <hr className="hero-divider" />
                    <p className="hero-desc">
                        Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
                    </p>
                    <button className="hero-btn">
                        Saiba mais <span style={{ marginLeft: 8 }}>&rarr;</span>
                    </button>

                    <div className="hero-card">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Bruna" className="hero-card-img" />
                        <div>
                            <div className="hero-card-title">Conheça a Bruna</div>
                            <div className="hero-card-sub">Ver vídeo</div>
                        </div>
                        <button className="hero-card-btn">&rarr;</button>
                    </div>

                    <div className="stats">
                        <div className="descript">
                            <p className="text-number">509</p>
                            <p>Vistos Tirados</p>
                        </div>
                        <div className="descript">
                            <p className="text-number">602</p>
                            <p>Passaportes Tirados</p>
                        </div>
                        <div className="descript">
                            <p className="text-number">634</p>
                            <p>Famílias Felizes</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={RodaGigante} alt="foto-roda-gigante" className="hero-image" />
                    <button className="hero-floating-btn">Tirar meu visto agora!</button>
                    <div className="hero-overlay">
                        <h3>Realize o seu sonho com a ajuda da Tirar Visto!</h3>
                        <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.</p>
                    </div>
                </div>
            </section>

            <section>
                     
                <div className="Frame">
                    <h1 className="text-Frame">CONSULTORIA COMPLETA PARA<br />TIRAR SEU VISTO</h1>
                    <h1 className="text-Frame-2">VOCÊ ESTÁ EM BOAS MÃOS!</h1>
                </div>
            </section>
        </>
    )
}