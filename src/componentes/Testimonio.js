import React from 'react';
import Card3 from './Card3';

function Testimonio(){
    const datos = [
        {
            image : 'images/person_1.jpg',
            texto : '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
            nombre : '— Ethan McCown, CEO',
            institucion : 'XYZ Inc.'
        },
        {
            image : 'images/person_2.jpg',
            texto : '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
            nombre : '— Ethan McCown, CEO',
            institucion : 'XYZ Inc.'
        },
        {
            image : 'images/person_3.jpg',
            texto : '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
            nombre : '— Ethan McCown, CEO',
            institucion : 'XYZ Inc.'
        },
        {
            image : 'images/person_4.jpg',
            texto : '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
            nombre : '— Ethan McCown, CEO',
            institucion : 'XYZ Inc.'
        }
    ]
    return(
        <section className="site-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">
                {
                    datos.map((value)=>
                    {
                        return <Card3 
                        image = {value.image}
                        texto = {value.texto}
                        nombre = {value.nombre}
                        institucion = {value.institucion} />
                    })
                }
			</div>
		</div>
	</section>
    );
}

export default Testimonio;