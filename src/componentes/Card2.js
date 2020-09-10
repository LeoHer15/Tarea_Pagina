import React from 'react';

function Card2(props) {
    console.log(props.fecha)
    console.log(props.titulo)
    console.log(props.texto)
    console.log(props.escuela)
    return (
        <div className="resume-item mb-4">
            <span className="date"><span className="icon-calendar"></span> {props.fecha} </span>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
            <span className="school">{props.escuela}</span>
        </div>
    );
}

export default Card2;