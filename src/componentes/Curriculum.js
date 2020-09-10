import React from 'react';
import Card2 from '../componentes/Card2'

function Curriculum() {
    const datos1 = [
        {
            fecha: 'March 2013 - Present',
            titulo: 'Masteral in Information Technology',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            escuela: 'New York University'
        },
        {
            fecha: 'March 2013 - Present Deacember.',
            titulo: 'Masteral in Information Technology',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            escuela: 'New York University'
        },
        {
            fecha: 'March 2013 - Present',
            titulo: 'Masteral in Information Technology',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            escuela: 'New York University'
        },
        {
            fecha: 'March 2013 - Present Deacember.',
            titulo: 'Masteral in Information Technology',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            escuela: 'New York University'
        },
    ]
    const datos2 = [
        {
            fecha: 'March 2013 - Present',
            titulo: 'Lead Product Designer',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            pagina: 'Github'
        },
        {
            fecha: 'March 2013 - Present Deacember.',
            titulo: 'Lead Product Designer',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            pagina: 'Facebook'
        },
        {
            fecha: 'March 2013 - Present',
            titulo: 'Lead Product Designer',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            pagina: 'Twitter'
        },
        {
            fecha: 'March 2013 - Present Deacember.',
            titulo: 'Lead Product Designer',
            texto: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            pagina: 'Shopify'
        },
    ]
    return (
        <section className="site-section " id="section-resume">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>Mi <strong>Currículum</strong></h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-5">Education</h2>
                            {
                                datos1.map((value)=>{
                                    return <Card2
                                        fecha = {value.fecha}
                                        titulo = {value.titulo}
                                        texto = {value.texto}
                                        escuela = {value.escuela}/>
                                })
                            }

                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-5">Experience</h2>
                            {
                                datos2.map((value)=>{
                                    return<Card2 
                                    fecha = {value.fecha}
                                    titulo = {value.titulo}
                                    texto = {value.texto}
                                    escuela = {value.pagina} />
                                })
                            }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Curriculum;