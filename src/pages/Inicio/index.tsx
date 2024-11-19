import Button from "../../components/Button";
import "./index.css";

const Inicio = () => {
    return (
        <main>
            <section className="init">
                <div className="info-hub">
                    <h1>Bem-vindo ao Mundo Digital Acessivel</h1>
                    <p>
                        A acessibilidade digital é a chave para um mundo mais
                        inclusivo, onde todos podem navegar, aprender e se
                        conectar sem barreiras. Este site é dedicado a mostrar
                        como a tecnologia pode ser um aliado para garantir a
                        inclusão de todos, independentemente de suas habilidades
                        ou limitações.
                    </p>
                    <Button to="#comece-aqui"> Comece Aqui </Button>
                </div>
                <img src="./normal/home.svg" alt="" />
            </section>

            <section className="start-here container" id="comece-aqui">
                <div className="card">
                    <img src="" alt="" />
                    <div className="card-wrapper">
                        <h2>Benefícios</h2>
                        <p>
                            A acessibilidade digital beneficia a todos. Ela
                            torna sites e aplicativos mais fáceis de usar, não
                            apenas para pessoas com deficiência, mas também para
                            idosos, pessoas com dificuldades temporárias e até
                            mesmo para quem acessa a internet em situações
                            adversas, como em locais com pouca conectividade.
                        </p>
                        <Button to="/beneficios"> Saiba Mais </Button>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div className="card-wrapper">
                        <h2>Tecnologias</h2>
                        <p>
                            Conheça as ferramentas e inovações que ajudam a
                            criar um mundo digital acessível. Desde leitores de
                            tela até teclados adaptados, as tecnologias
                            assistivas são essenciais para garantir inclusão e
                            autonomia na navegação.
                        </p>
                        <Button to="/tecnologias"> Explore Tecnologias </Button>
                    </div>
                </div>
                <div className="card ">
                    <img src="" alt="" />
                    <div className="card-wrapper">
                        <h2>Desafios</h2>
                        <p>
                            Apesar dos avanços, ainda há muitos desafios para
                            tornar o ambiente digital acessível. Barreiras como
                            falta de conscientização, design inadequado e
                            tecnologias incompatíveis precisam ser superadas
                            para garantir uma web para todos.
                        </p>
                        <Button to="/desafios"> Descubra os Desafios </Button>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div className="card-wrapper">
                        <h2>Praticas</h2>
                        <p>
                            Aplicar boas práticas de acessibilidade é mais
                            simples do que parece. Pequenas mudanças, como usar
                            textos alternativos em imagens e garantir um bom
                            contraste de cores, podem fazer uma grande diferença
                            na inclusão digital.
                        </p>
                        <Button to="/praticas"> Aprenda Mais </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Inicio;
