import './Form.css';
import Campo from "../Campo";
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react'

const Form = ({ register, unregister, handleSubmit, handleInfo})=> {
    const [whathType, setWhathType] = useState(false)
    const [find, setFind] = useState(false)
    const [bdayType, setBdayType] = useState(false)


    const eventType = ['Qual tipo do evento?', 'coffee and meet', 'aniversário', 'reunião de empresa/workshop', 'outro'];

    const whereFind = ['facebook', 'instagram', 'anúncio do google/youtube', 'outro'];

    const handleSelectType= (e)=>{
        if(e === 'outro'){
            setWhathType(true);
            register('OtherType')
        }else{
            setWhathType(false);
            unregister('OtherType')
        }

        if(e === 'aniversário'){
            setBdayType(true);
            register('bdayAge')
            register('bdayGender')
        }else{
            setBdayType(false);
            unregister('bdayAge')
            unregister('bdayGender')
        }
    }

    const handleWhereFind =(e) => {
        if(e === 'outro'){
            setFind(true)
            register('OtherFind')
        }else{
            setFind(false)
            unregister('OtherFind')
        }
    }


    return (
        <section className="form">
            <form 
            action="" 
            onSubmit={handleSubmit((data) => handleInfo(data))}
            >
                <Campo
                label='Nome/Razão Social'
                name='Name'
                type='text'
                register={register}
                obrigatorio={true}
                />

                <ListaSuspensa
                name='eventType'
                label='Tipo de Evento'
                option={eventType}
                register={register}
                obrigatorio={true}
                aoChange={handleSelectType}
                />

                {whathType && <Campo
                    label='Qual tipo?'
                    name='OtherType'
                    type='text'
                    register={register}
                    obrigatorio={true}
                />}

                <h2>Quantidade estimada de pessoas</h2>
                <div className="amount-people">
                <Campo
                label='Mínimo Pessoas'
                name='min-pessoas'
                type='number'
                register={register}
                obrigatorio={true}
                />
                <Campo
                label='Maximo Pessoas'
                name='max-pessoas'
                type='number'
                register={register}
                obrigatorio={true}
                />
                </div>

                <Campo
                label='Email'
                name='email'
                type='text'
                register={register}
                obrigatorio={true}
                />

                <Campo
                label='CPF/CNPJ'
                name='cpf'
                type='number'
                register={register}
                obrigatorio={true}
                />

                <Campo
                label='Tema da Festa'
                name='theme'
                type='text'
                register={register}
                obrigatorio={false}
                />

                {bdayType && 
                    <Campo
                    label='Idade do Aniversariante'
                    name='bdayAge'
                    type='number'
                    register={register}
                    obrigatorio={true}/>
                }
                {bdayType && <Campo
                    label='Gênero do Aniversariante'
                    name='bdayGender'
                    type='number'
                    register={register}
                    obrigatorio={true}/>
                }  

                <ListaSuspensa
                name='whereFind'
                label='Onde conheceu a nossa empresa?'
                option={whereFind}
                register={register}
                obrigatorio={true}
                aoChange={handleWhereFind}
                />

                {find && <Campo
                    label='Qual outro meio?'
                    name='OtherFind'
                    type='text'
                    register={register}
                    obrigatorio={true}/>}
                

                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default Form