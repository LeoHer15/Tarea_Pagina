import React from 'react';

function Presentacion() {
    return (
        <section className="site-hero" 
        style={{backgroundImage:"url('../images/image_1.jpg')"}}
        id="section-home" 
        data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row intro-text align-items-center justify-content-center">
                    <div className="col-md-10 text-center pt-5">

                        <h1 className="site-heading site-animate">Hello, I'm <strong class="d-block">Ronal Hernández</strong></h1>
                        <strong className="d-block text-white text-uppercase letter-spacing">and this is My Rezume</strong>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;