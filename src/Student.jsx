import React from "react";

function Student({ picture, name, email }){
    return(
        <div class="card">
            <img src={picture} alt="profile" />
            <h2 id="name">{name}</h2>
            <p id="email">{email}</p>
        </div>
    );
}
export default Student