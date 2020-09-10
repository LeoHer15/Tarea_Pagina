import React from 'react';
import Card6 from './Card6';

function Contacto(){
    return(
        <section className="site-section" id="section-contact">
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>Get <strong>In Touch</strong></h2>
					</div>
				</div>
				<div className="col-md-7 mb-5 mb-md-0">
					<Card6></Card6>
				</div>
				<div className="col-md-5 pl-md-5">
					<h3 className="mb-5">My Contact Details</h3>
					<ul className="site-contact-details">
						<li>
							<span className="text-uppercase">Email</span>
							site@gmail.com
						</li>
						<li>
							<span className="text-uppercase">Phone</span>
							+30 976 1382 9921
						</li>
						<li>
							<span className="text-uppercase">Fax</span>
							+30 976 1382 9922
						</li>
						<li>
							<span className="text-uppercase">Address</span>
                            <div>San Francisco,</div>
                            <div>CA 4th Floor8 Lower</div>
                            <div>San Francisco street, M1 50F</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
    );
}
export default Contacto;