import './Campo.css'

const Campo = ({label, name, type, register, obrigatorio}) => {
    return(
        <div className='campo'>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                {...register(`${name}`)}
                required={obrigatorio} 
            />

        </div>
    )
}

export default Campo