import React from "react";

const Install = () => {
    return (
        <div>
            <h2>Comment l'installer ?</h2>
            <p>
                Pour installer React Router, il suffit de faire comme pour tous
                les autres packages, c'est-à-dire, en utilisant le terminal.
            </p>
            <img src={`${process.env.PUBLIC_URL}/img/npm.png`} alt="" />
        </div>
    );
};

export default Install;
