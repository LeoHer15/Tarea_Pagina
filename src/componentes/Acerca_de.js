import React from 'react';

function Acerca_de(){
    return(
        <section className="site-section" id="section-about">
		<div className="container">
			<div className="row mb-5 align-items-center">
				<div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src="images/image_1.jpg" alt="Image placeholder" className="img-fluid"/>
				</div>
				<div className="col-lg-5 pl-lg-5">
					<div className="section-heading">
						<h2>Acerca<strong> de mi...</strong></h2>
					</div>
					<p className="lead">Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.</p>
					<p className="mb-5  ">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

					<p>
						<a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
						<a href="#" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
					</p>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Acerca_de;