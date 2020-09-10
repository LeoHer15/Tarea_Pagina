import React from 'react';

class Button extends React.Component{
    state = { contador: 0}

    incrementar = () => (
        this.setState({ contador: this.state.contador + 1})
    );

    render(){
        const{ contador } = this.state;

        return(
            <div>
                <h2>Clases impartidas: { contador }</h2>
                <button onClick={this.incrementar}>
                    Nueva clase
                </button>
            </div>
        );
    }
}
export default Button;

/*const Button = props => {
    return(
        <div>
        <button>{props.saludo}</button>
        </div>
     );
};*/

