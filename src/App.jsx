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
    console.log("foi");
    if (show.showForm === true) {
      setShow({
        divForm: "hide",
        divThanks: "show",
        showForm: false,
      });
      console.log(show);
    } else {
      console.log("foi pro else");
      setShow({
        divForm: "show",
        divThanks: "hide",
        showForm: true,
      });
    }
  };
  
  const { register, unregister, handleSubmit} = useForm({mode: "onBlur"});


  const handleInfo = (data) => {
    console.log(data);
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
      
    </div>
  )
}

export default App
