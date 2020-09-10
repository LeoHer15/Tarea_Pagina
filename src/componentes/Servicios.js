import React from 'react';
import Card4 from '../componentes/Card4'

function Servicios(){
    const datos = [
        {
            image:'icon-browser2',
            titulo:'Web Design',
            texto:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            leer:'Learn More '
        },
        {
            image:'icon-presentation',
            titulo:'Search Engine Optimization',
            texto:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
            leer:'Learn More '
        },
        {
            image:'icon-video2',
            titulo:'Video Editing',
            texto:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            leer:'Learn More '
        }
    ]
    return(
        <section className="site-section pb-0"  id="section-services">
		<div className="container">

			<div className="row mb-4">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>My <strong>Services</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">
                {
                    datos.map((value)=>{
                        return <Card4 
                        imagen = {value.image}
                        titulo = {value.titulo}
                        texto = {value.texto}
                        leer = {value.leer} />
                    })
                }
			</div>
		</div>
	</section>
    );
}

export default Servicios;