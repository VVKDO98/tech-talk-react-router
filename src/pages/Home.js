import React from "react";

const Home = () => {
    return (
        <div>
            <h2>C'est quoi ?</h2>
            <p>
                React Router est une bibliothèque standard pour le routage dans
                React. Elle permet de naviguer entre les vues de divers
                composants dans une application React, de modifier l'URL du
                navigateur et de synchroniser l'interface utilisateur avec
                l'URL.
            </p>
            <img src={`${process.env.PUBLIC_URL}/img/code.png`} alt="" />
        </div>
    );
};

export default Home;
