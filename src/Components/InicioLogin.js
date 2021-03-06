import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {Router} from '@reach/router';
import { Link} from '@reach/router';

const Logo = styled.div`
     display:flex;
     text-align:center;
     justify-content:space-around;
     margin-top: 2em;
     align-items:center;
`;
const Inputs = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-top: 8em;
    

    input{
        margin-bottom: 1em;
        padding: .7em .7em;
        width: 40%;
        border: 1px solid #8AC924;
        border-radius: 5px;
    }
    input:focus{
        border: 1px solid #8AC924;
    }
`;

const Boton = styled.button`
    display:flex;
    justify-content:center;
    margin: 0 auto;
    align-items:center;
    padding: .9em 1.1em;
    border: none;
    background-color: #237C2B;
    width: 190px;
    border-radius: 5px;
    

    a{
        color:#fff;
        text-align:center;
        text-decoration: none;
    }
`;
const Olvide = styled.div`
     display:flex;
     justify-content: flex-end;
     width: 70%;
     margin-bottom: 3em;
     a{
         text-decoration: none;
         color: gray;
         font-size: 14px;
         text-decoration: underline;
     }
`;
const Registrarme = styled.div`
     display:flex;
     text-align:center;
     justify-content:space-around;
     margin-top: 1em;

     a{
         text-decoration: none;
         font-size:16px;
         color: gray;
     }
     
`;

const InicionLogin = () => {
    return ( 
        <Fragment>

          
        <Logo>
             <div>
 
            <Link to="/">
                <img src="/images/espalda2.svg" />
            </Link>
            </div>
            <div>
            <Link to="/">
                <img src="/images/logo.svg" />
            </Link>
            </div>

        </Logo>
        <Inputs>
        <input 
            type="text"
            placeholder="usuario@gmail.com" />
        <input 
            type="text" 
            placeholder="*********" />
        </Inputs>
        <Olvide>
            <a href="#!">Olvide Mi contraseña</a>
        </Olvide>
        <Boton>
            <a href="#!">Iniciar Sesión</a>
           
        </Boton>

        <Registrarme>
            
            <Link to="/Registrarme">Registrarme ahora</Link>
        </Registrarme>
        </Fragment>


     );
}
 
export default InicionLogin;