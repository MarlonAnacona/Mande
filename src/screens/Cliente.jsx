import React from "react";
import Acor from "../components/acordeon"; 


const Cliente = () => {
    return (

        <div className="App">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-tittle" >Bienvenido </h3>
                        <div className="text-center"> mande</div>
                        <Acor />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Cliente;