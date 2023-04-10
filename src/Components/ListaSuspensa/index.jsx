import './ListaSuspensa.css'

const ListaSuspensa = ({register, name, label, aoChange, obrigatorio, option }) => {

    return(
        <div className="Lista-suspensa">
            <label htmlFor={name}>{label}</label>
            <select 
            {...register(`${name}`)} 
            required={obrigatorio} 
            onClick={(event) => aoChange(event.target.value)}
            >
                {option.map(item => <option value={item} key = {item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa