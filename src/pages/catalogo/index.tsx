// #cSpell:disable - Importación de los módulos
import React from "react";
import Link from "next/link";

const catalogo: React.FC = () => {
    return(
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/catalogo">Catálogo</Link>
                <Link href="/contact">Contáctanos</Link>
            </div>


                <h1 className="text">Catálogo de productos</h1>


                                    {/* ------ */}
                                    {/* Item 1 */}
                                    {/* ------ */}

            <div className="catalogo">

                

                    <div className="catalogo-items">
                        <img src="img/BallBasket.png" alt="BallBasket" />
                        <h2>Nombre del producto</h2>
                        <div className="precio">$20,000</div>
                        <button className="add">Lo Quiero</button>
                    </div>

                                    {/* ------ */}
                                    {/* Item 2 */}
                                    {/* ------ */}

                    <div className="catalogo-items">
                        <img src="img/patines.jpeg" alt="Patines" />
                        <h2>Nombre del producto</h2>
                        <div className="precio">$40,000</div>
                        <button className="add">Lo Quiero</button>
                    </div>

                                    {/* ------ */}
                                    {/* Item 3 */}
                                    {/* ------ */}

                    <div className="catalogo-items">
                        <img src="img/Pesas.png" alt="Pesas" />
                        <h2>Nombre del producto</h2>
                        <div className="precio">$80,000</div>
                        <button className="add">Lo Quiero</button>
                    </div>

                                    {/* ------ */}
                                    {/* Item 4 */}
                                    {/* ------ */}

                    <div className="catalogo-items">
                        <img src="img/SoccerBall.png" alt="SoccerBall" />
                        <h2>Balón de Fútbol</h2>
                        <div className="precio">$20,000</div>
                        <button className="add">Lo Quiero</button>
                    </div>

                    

            </div>

                    <div className="proximamente">
                        <h1>Próximamente podras encontrar más productos en NextSport</h1>
                    </div>
        </div>
    );
};

export default catalogo;