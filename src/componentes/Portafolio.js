import React from 'react';
import Card from '../componentes/Card'

function Portafolio(){
	const datos = [
		{
			title:'Square Box Mockup',
			subtitle: 'MOCKUP',
			image: 'images/p1.jpg'
		},
		{
			title:'Product Box Package Mockup ',
			subtitle: 'MOCKUP',
			image: 'images/p2.jpg'
		},
		{
			title:'Creative Package Design',
			subtitle: 'PACKAGING',
			image: 'images/p3.jpg'
		},
		{
			title:'Packaging Brand',
			subtitle: 'PACKAGING',
			image: 'images/p4.jpg'
		},
		{
			title:'Isometric 3D Extrusion ',
			subtitle: 'TYPOGRAPHY',
			image: 'images/p5.jpg'
		},
		{
			title:'White Space Photography',
			subtitle: 'PHOTOGRAPHY',
			image: 'images/p6.jpg'
		}
	]
    return(
        <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
                    <div className="filters-content">
                <div className="row grid">
					{
						datos.map((value)=> {
							return <Card 
							title={value.title} 
							subtitle={value.subtitle} 
							image={value.image}/>
						})
					}
                </div>
            </div>
				</ul>
			</div>
		</div>
	</section>
    );
}
export default Portafolio; 