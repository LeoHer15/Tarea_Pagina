import React from 'react';

function Card3(props){
    console.log(props.image)
    console.log(props.texto)
    console.log(props.nombre)
    console.log(props.institucion)
    return(
        <div className="col-md-6">
			<div className="block-47 d-flex mb-5">
				<div className="block-47-image">
					<img src={props.image} alt="Image placeholder" className="img-fluid"/>
				</div>
				<blockquote className="block-47-quote">
					<p>&ldquo; {props.texto} .&rdquo;</p>
					<cite className="block-47-quote-author">&mdash; {props.nombre} <a href="#"> {props.institucion} </a></cite>
				</blockquote>
			</div>
		</div>
    );
}
export default Card3;