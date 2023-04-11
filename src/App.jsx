import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'
import Form from './Components/Form';

function App() {
  const [show, setShow] = useState({
    divForm: "show",
    divThanks: "hide",
    showForm: true,
  });

  const handleShow = () => {
    if (show.showForm === true) {
      setShow({
        divForm: "hide",
        divThanks: "show",
        showForm: false,
      });
      console.log(show);
    } else {
      setShow({
        divForm: "show",
        divThanks: "hide",
        showForm: true,
      });
    }
  };
  
  const { register, unregister, handleSubmit, reset} = useForm();

  const [resp, setResp] = useState({
    nome:'',
  });
  const [term, setTerm] = useState({
    nome:'',
  });

  const handleInfo = (data) => {
    
    setResp(data)
    setTerm(Object.keys(data));
    reset(); 
    handleShow();
  }

  return (
    <div className="App">
      <div className={show.divForm}>
        <h1>Preencha o formulario abaixo</h1>
        <Form
        register={register}
        unregister={unregister}
        handleSubmit={handleSubmit}
        handleInfo={handleInfo}
        />
      </div>
      
      <div className={show.divThanks}>
        <h1>Obrigado!</h1>
        <h3>Recebemos sua solicitação e em breve entraremos em contato</h3>
        <div>
        {Object.keys(resp).map((key, index) => {
            return (
              <p key={index} className="texto">
                 {key} : {resp[key]}
              </p>
            );
          })}
        </div>
        <button onClick={handleShow}  className='btn'>Refazer a solicitação? </button>
      </div>
      <span>Produzido por <a href="https://github.com/GabrielMoreiraB">Gabriel Moreira</a></span>
    </div>
  )
}

export default App
