// #cSpell:disable - Importación de los módulos
import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";


const contact: React.FC = () => {
    // Codigo del profe
    const handleContact = () => {
        Swal.fire({
            title: "Tu mensaje ha sido enviado exitosamente",
            text: "Gracias por contactarnos, nos comunicaremos pronto contigo",
            icon: "info",
            confirmButtonText: "Claro",
        });
    };
    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/catalogo">Catálogo</Link>
                <Link href="/contact">Contáctanos</Link>
            </div>

            <div className="form-contact">
                <form action="">
                    <h2 className="write">Escribenos</h2>
                    <div className="input-group">

                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Nombre" />

                        <label htmlFor="phone">Telefono</label>
                        <input type="text" id="phone" name="phone" placeholder="Telefono" />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" />

                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" placeholder="Escribe tu mensaje" />

                        <div className="form-txt">
                            <a href="#">Política de privacidad </a>
                            <a href="#">Terminos y condiciones</a>
                        </div>

                        <input onClick={handleContact} className="btn" type="submit" value="Enviar" />

                    </div>
                </form>
                
            </div>

            <img src="img/NextJunior.png" alt="Next-Jr" className="junior"/>

        </div>
    );
};

export default contact;