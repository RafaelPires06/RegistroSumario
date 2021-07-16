import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SumarioAddForm.css';


const api = axios.create({
    baseURL:`http://localhost:3001/`
})

class FormSumario extends React.Component{

    state={
        ano:"",
        guardando:false,
        aulaGuardado:false,
        sumarioGuardado:false,
        disciplinas:[],
        cursos:[],
        disciplina:"",
        docente:"",
        n_Aula:"",
        data:"",
        curso:"",
        tipoAula:"",
        hora:"",
        sumario:"",
        curso:"",
    }

    constructor(){
        super()
        api.get("disciplina/edicao").then(res=>{
            this.setState({ disciplinas: res.data })
        })
        api.get("curso").then(res=>{
            this.setState({ cursos: res.data })
        })
    }

    anoChangeHandler = (event) =>{
         this.setState({ ano:event.target.value })
     }
    disciplinaChangeHandler = (event) =>{
        this.setState({ disciplina:event.target.value })
    }
     
    docenteChangeHandler = (event) =>{
        this.setState({ docente:event.target.value })
     }
    n_AulaChangeHandler = (event) =>{
        this.setState({ n_Aula:event.target.value })
    }
     
    dataChangeHandler = (event) =>{
        this.setState({ data:event.target.value })
     }
    cursoChangeHandler = (event) =>{
        this.setState({ curso:event.target.value })
     }
    tipoAulaChangeHandler = (event) =>{
        this.setState({ tipoAula:event.target.value })
     }
    horaChangeHandler = (event) =>{
        this.setState({ hora:event.target.value })
     }
    sumarioChangeHandler = (event) =>{
        this.setState({ sumario:event.target.value })
     }
     
    submitHandler = (event) =>{
        event.preventDefault() // o submit não e enviado um pedido para nenhum servidor
        this.setState({ guardando:true })
        api.post("class/create", {
            numero: this.state.n_Aula,
            tipo:this.state.tipoAula,
            diaSemana:"",
            hora:this.state.hora,
            local: "",
            duracao:"",
            disciplina: this.state.disciplina,
        }).then(res=>{
            const classInfo = res.data
            if(classInfo){
                this.setState({aulaGuardado: true})
                api.post("sumario/create", {
                    presenca:0,
                    conteudo:this.state.sumario,
                    biblio:"",
                    idaula:classInfo[0].idaula,
                }).then(res => {
                    if(res.data){
                        this.setState({sumarioGuardado: true})
                    }
                })
            }
        })
        // console.log(input)
    }
    render(){
        return (
            <div>
                {!this.state.guardando && <form onSubmit={this.submitHandler}>
                <div className="new-sumario__controls">
                    <div className="new-sumario__control">
                        <label>Ano</label>
                        <input 
                            type="number" 
                            value={this.state.ano} 
                            placeholder="Ano"
                            onChange={this.anoChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Disciplina</label>
                        <select onChange={this.disciplinaChangeHandler}  className="large_select">
                        {this.state.disciplinas.map((disciplina, i)=>
                        (
                            <option value={disciplina.edicaoInfo[0].idEdicao} key={i}>
                                {disciplina.nome}
                            </option>
                        )
                        )}
                    </select>
                    </div>
                    <div className="new-sumario__control">
                        <label>Docente</label>
                        <input 
                            type="text"
                            value={this.state.docente} 
                            onChange={this.docenteChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Numero Aulas</label>
                        <input 
                            type="text"
                            value={this.state.n_Aula} 
                            onChange={this.n_AulaChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Data</label>
                        <input 
                            type="date" 
                            value={this.state.data} 
                            onChange={this.dataChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Curso</label>
                        <select onChange={this.cursoChangeHandler} className="large_select">
                        {this.state.cursos.map((curso, i)=>(
                            <option value={curso.id} key={i}>{curso.nome}</option>
                        )
                        )}
                    </select>
                    </div>
                    <div className="new-sumario__control">
                        <label>Tipo Aula</label>
                        <input 
                            type="text"
                            value={this.state.tipoAula} 
                            onChange={this.tipoAulaChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Hora</label>
                        <input 
                            type="time"
                            value={this.state.hora} 
                            onChange={this.horaChangeHandler}
                        />
                    </div>
                    <div className="new-sumario__control">
                        <label>Sumario</label>
                        <textarea 
                            className = "new-sumario_SUM" 
                            type="text"
                            value={this.state.sumario} 
                            onChange={this.sumarioChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-sumario__actions">
                    <button type="submit" onClick={this.submitHandler}>Guardar</button>
                </div>
            </form>}
            {this.state.aulaGuardado && this.state.sumarioGuardado && <div>
                    <p>Sumario guardado com sucesso</p>
                    <Link to={"/home/todos/"+this.props.id}><button>Voltar</button></Link>
                </div>}
            </div>
        )
    }
}

export default FormSumario