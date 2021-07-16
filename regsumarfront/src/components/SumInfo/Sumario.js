import React, { useState } from 'react';
import axios from 'axios'


import classes from './Sumario.module.css';
import './SumariosList';


const api = axios.create({
  baseURL:`http://localhost:3001/`
})

class Sumario extends React.Component {

  state={
    aula:"",
    deleted:false,
  }

  constructor(props) {
    super()
    api.get("class/"+props.aula).then(res=>{
      console.log(res.data)
      this.setState({ aula:res.data[0] })
    })
  }

  onDeleteHandler = () =>{
    api.delete("sumario/delete/"+this.props.id).then(res=>{
      if(res.data){
        this.setState({ deleted: true})
      }
    })
  }

  render(){
    return (
      <div>
          {!this.state.deleted && 
          <div className={classes.sumario}>
            <h2>Sumário Registrado</h2>
            <h2>Sumário Da Aula</h2>
            <p>{this.props.conteudo}</p>
            <h2>Hora</h2>
            <p>{this.state.aula.hora}</p>
            <h2>Tipo Aula</h2>
            <p>{this.state.aula.tipo}</p>
            <h2>Número de Aula</h2>
            <p>{this.state.aula.numero}</p>
            <div>
              <button className="buttonDel" onClick={this.onDeleteHandler}>Deletar</button>
            </div>
          </div>}
      </div>
    );
  }
};

export default Sumario;
