import React from 'react';

function Card4(props){
    console.log(props.imagen)
    console.log(props.titulo)
    console.log(props.texto)
    console.log(props.leer)
    return(
        <div className="col-md-6 col-lg-4 text-center mb-5">
			<div className="site-service-item site-animate" data-animate-effect="fadeIn">
				<span className="icon">
					<span className= {props.imagen}></span>
				</span>
				<h3 className="mb-4">{props.titulo}</h3>
				<p>{props.texto}</p>
				<p><a href="#" className="site-link">{props.leer}<i className="icon-chevron-right"></i></a></p>
			</div>
		</div>

    );
}

export default Card4;