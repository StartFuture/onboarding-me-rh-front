import React from 'react'
import { useNavigate } from 'react-router-dom';
import Success from '../../assets/img/Success.png'
import './Modal.css'

function Modal() {

    const navigate = useNavigate();

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='image'>
                    <img src={Success} alt="Success" />
                </div>
                <div className='body'>
                    <p>Funcionário cadastrado com sucesso</p>
                </div>
                <div className='footer'>
                    <button onClick={(e) => navigate("/")}>Continuar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal