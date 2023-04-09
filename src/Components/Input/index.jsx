import './Input.css'

const Input = ({label, type, placeholder, obrigatorio, valor, aoAlterado}) => {
    return(
        <div className='campo'>
        <label>{label}</label>
            <input 
                type={type} 
                value = {valor}
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input