import {Component} from "react";



class ClassComponent extends Component{

    //crear un constructor y llamar al super, craer un state, que esta clase herede de component
    //todo esto se ahorra usando un funcional component como en el ejemplo, en fin aqui hay que hacer mucho mas para lo mismo
    // esta forma de hacerlo es una forma antigua, pero bueno esta es una forma de como se puede hacer 
    constructor(){

        super()
        this.state = {
            contador: 0,
        }
    }


    render(){
        return <div>Class Component

                <p>
                    <button onClick={() => this.setState({contador: this.state.contador -1})}>-</button>
                    {this.state.contador}
                    <button onClick={() => this.setState({contador: this.state.contador +1})}>+</button>
                </p>
        </div>
    }


}//class

export default ClassComponent