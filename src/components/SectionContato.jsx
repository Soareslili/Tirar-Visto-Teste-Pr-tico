import './sectionContato.css'

export default function SectionContato() {
    return (
        <section className="contato-section">
            <div className="contato-info">
                <h2 id='Contato'>Está com alguma dúvida?</h2>
                <p>Entre em contato através do nosso canal direto ao cliente através do botão abaixo</p>
                <button className="btn-contato">Central de Atendimento</button>
                
                    <div>
                        <span>Siga em nossa redes:</span>
                    </div>
                 <div className="contato-redes">
                    <button>Instagram</button>
                    <button>X</button>
                    <button>Facebook</button>
                    <button>Youtube</button>
                </div>
            </div>
          
            <div className="contato-news">
                <h3>Receba novidades <span style={{ fontSize: "1.2em" }}>&#8599;</span></h3>
                <hr />
                <div className="contato-links">
                    <div>
                        <strong>Empresa</strong>
                        <ul>
                            <li>Home</li>
                            <li>Quem somos</li>
                            <li>Serviços</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Novidades</strong>
                        <ul>
                            <li>Passaporte</li>
                            <li>Visto</li>
                            <li>Entrevista</li>
                            <li>Polícia Federal</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Suporte</strong>
                        <ul>
                            <li>FAQ</li>
                            <li>Contato</li>
                            <li>Dúvidas Frequentes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
       
    )
}