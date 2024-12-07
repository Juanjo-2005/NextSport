// #cSpell:disable - Importación de los módulos
import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";


const Home: React.FC = () => {
    const showAlert = () => {
        Swal.fire({
            title: "Bienvenidos NextSport",
            text: "Hola, mucho gusto nosotros somos nextSport un lugar donde encontraras productos deportivos los cuales te iran encantar 😊",
            icon: "info",
            confirmButtonText: "Continuar"
        });
    };
    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/catalogo">Catálogo</Link>
                <Link href="/contact">Contáctanos</Link>
            </div>

            <img src="img/Name-Sin-Fondo.png" alt="Img-Name" className="NameConFondo"/>
            <p>Aquí podras ver y adquirir todos nuestros productos para alcanzar el éxito hacia tu meta 🏆</p>
            <button onClick={showAlert}>Haz Click Aquí!!</button>
        </div>
    );
};

export default Home