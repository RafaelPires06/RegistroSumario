import React from 'react'

import DescriptionSUM from '../SumInfo/Descripition'
import SumarioAdd from '../AddSumario/SumarioAdd'
import Nav from '../BarraNav/Nav'


const Home = (props) =>{

    return(
        <div>
            <Nav id={props.match.params.id}/>
            {props.match.params.pagina === "todos" && <DescriptionSUM/>}
            {props.match.params.pagina === "novo" && <SumarioAdd/>}
        </div>
    )
}

export default Home