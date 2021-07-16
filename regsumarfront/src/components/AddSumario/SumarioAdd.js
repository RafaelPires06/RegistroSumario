import React from 'react'
import './AddSumario.css'
import FormDespesa from "./SumarioAddForm"
import Card from '../UI/Card'


const SumarioAdd = (props) =>{

    const newSumarioAdd = (AddSumario) =>{
        const AddSum = {
            id: AddSumario.idaula,
            numero:AddSumario.numero,
            diaSemana:AddSumario.diaSemana, 
            hora:AddSumario.hora, 
            local:AddSumario.local, 
            duracao:AddSumario.duracao, 
            data:AddSumario.data, 
            disciplina:AddSumario.disciplina,
        }
        props.onChangeAdd(AddSum)
    }

    return (
        <Card style="card-1">
            <div className="new-sumario">
                <FormDespesa onChangeNew={newSumarioAdd}/>
            </div>
        </Card>
    )
}

export default SumarioAdd