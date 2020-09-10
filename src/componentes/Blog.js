import React from 'react';
import Card5 from './Card5';

function Blog(){
    const datos = [
        {
            imagen: 'images/post_1.jpg',
            titulo: 'Creative Product Designer From Facebook',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentario: '5 Comments'
        },
        {
            imagen: 'images/post_2.jpg',
            titulo: 'Creative Product Designer From Facebook',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentario: '5 Comments'
        },
        {
            imagen: 'images/post_3.jpg',
            titulo: 'Creative Product Designer From Facebook',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha: 'Aug 7, 2018',
            comentario: '5 Comments'
        }
    ]
    return(
        <section class="site-section" id="section-blog">
		<div class="container">
			<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>Blog on <strong>Medium</strong></h2>
					</div>
				</div>
			</div>

			<div class="row">
                {
					datos.map((value)=> {
						return <Card5
                        imagen = {value.imagen}
						titulo = {value.titulo} 
                        texto = {value.texto}
                        fecha = {value.fecha}
                        comentario = {value.comentario} />
					})
				}
			</div>
		</div>
	</section>
    );
}

export default Blog;