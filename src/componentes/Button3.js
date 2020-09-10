import React, {useState} from 'react';

function Incrementar(){
    const [contador, setContador] = useState(0);

    return(
        <div>
            <h2>Contador</h2>
            <h4>{contador}</h4>
            <button onClick={() => setContador(contador+1)}>
                Click <h1>{contador}</h1>
            </button>
        </div>
    );
}

export default Incrementar;