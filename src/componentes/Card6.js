import React from 'react';

function Card6(props){
    return(
        <form action="" className="site-form">
			<h3 className="mb-5">Get In Touch</h3>
			<div className="form-group">
			    <input type="text" className="form-control px-3 py-4" placeholder="Your Name"/>
			</div>
			<div className="form-group">
				<input type="email" className="form-control px-3 py-4" placeholder="Your Email"/>
			</div>
			<div className="form-group">
				<input type="email" className="form-control px-3 py-4" placeholder="Your Phone"/>
			</div>
			<div className="form-group mb-5">
				<textarea className="form-control px-3 py-4"cols="30" rows="10" placeholder="Write a Message"></textarea>
			</div>
			<div className="form-group">
				<input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message"/>
			</div>
		</form>
        
    );
}
export default Card6;