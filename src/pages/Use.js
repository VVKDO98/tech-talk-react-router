import React from 'react';

const Use = () => {
    return (
        <div>
            <h2>Comment l'utiliser ?</h2>

            <h3>Etape 1 :</h3>
            <p>Configurer votre index.js.</p>
            <ul>
                <li>Importer BrowserRouter</li>
                <li>Entourer la balise App avec BrowserRouter</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/img/index.png`}  alt="" />

            <h3>Etape 2 :</h3>
            <p>Créer plusieurs pages et les routes dans App.js.</p>
            <p>Par exemple ce site contient 3 pages Home.js, Install.js et Use.js.</p>
            <ul>
                <li>Importer Routes et Route</li>
                <li>Créer des Route dans Routes en respectant path et element</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/img/app.png`}  alt="" />

            <h3>Etape 3 :</h3>
            <p>Créer votre Navbar.js (vous pouvez metter n'importe quel nom).</p>
            <ul>
                <li>Importer Link</li>
                <li>Créer une balise nav avec des Link en spécifiant le to=" "</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/img/navbar.png`}  alt="" />

            <h3>Etape 4 :</h3>
            <p>Ajouter la Navbar.js dans App.js.</p>
            <img src={`${process.env.PUBLIC_URL}/img/addnav.png`}  alt="" />
        </div>
    );
};

export default Use;