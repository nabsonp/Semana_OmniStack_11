import React from 'react';
import './styles.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'


// Componente Header sendo exportado
// Recebe um só parâmetro props com todas as propriedades passadas
export default function Register(props) {
  return (
    <div className='register-container'>
        <div className='content'>
            <section>
                <img src={logoImg} alt='Be The Hero' />

                <h1>Cadastro</h1>
                <p>
                    Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                </p>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color="#e02041" />
                    Já tenho cadastro
                </Link>
            </section>
            <form>
                <input placeholder="Nome da ONG" />
                <input type="email" placeholder="E-mail" />
                <input placeholder="Whatsapp" />
                <div className="input-group">
                    <input placeholder="Cidade" />
                    <input placeholder="UF" style={{ width: 80 }} />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}