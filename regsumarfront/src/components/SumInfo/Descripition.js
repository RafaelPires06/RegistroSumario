import React, {useState} from 'react';
import axios from 'axios'


import SumarioList from './SumariosList';

const api = axios.create({
  baseURL:`http://localhost:3001/`
})

class DescriptionSUM extends React.Component {

    state={
      sumarios:[],
      isLoading: false,
      error:null,
    }
        
    constructor(props){
      super()
      this.setState({ isLoading: false })
      api.get("sumario").then(res=>{
        if(res.data){
          this.setState({ sumarios: res.data })
        }
      })
    }

    render(){
      return (
        <React.Fragment>
          <section>
                {!this.state.isLoading && this.state.sumarios.length > 0 &&<SumarioList sumarios={this.state.sumarios} />}
                {!this.state.isLoading && this.state.sumarios.length === 0 && <p>Não Há Sumarios!</p>}
                {this.state.isLoading && <p>Loading...</p>}
                {!this.state.isLoading && this.state.error && <p>error</p>}
          </section>
        </React.Fragment>
      );
    }
}

export default DescriptionSUM;