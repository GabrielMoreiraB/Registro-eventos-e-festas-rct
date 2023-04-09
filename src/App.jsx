import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

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
  
  const { register, handleSubmit} = useForm({mode: "onBlur"});

  return (
    <div className="App">
      <div className={show.divForm}>
        <h1>Preencha o formulario abaixo</h1>
      </div>
      
    </div>
  )
}

export default App
